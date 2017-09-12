const MemoryFS = require("memory-fs");
const webpack = require("webpack");
const path = require('path');
const fs = new MemoryFS();

module.exports = function (packageJsonPath, cb) {
    // Читаем main
    const relativeMainPath = require(packageJsonPath).main || 'index.js';
    // Резолвим путь
    const entry = path.join(path.dirname(packageJsonPath), relativeMainPath);

    const compiler = webpack({
        entry,
        output: {
            path: '/apps',
            filename : "[chunkhash]"
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [require('babel-preset-react')]
                        }
                    }
                }
            ]
        },
    });

    compiler.outputFileSystem = fs;
    compiler.run((err, stats) => {
        if (err) return console.error(err);

        /** Сохраняем сорцы в стораж */
        const apps = Object
            .keys(fs.data.apps)
            .filter(Boolean);

        apps
            .forEach(appHash => {
                localStorage[`app${appHash}`] = fs.data.apps[appHash].toString();
            });

        cb(apps);
    });
};
