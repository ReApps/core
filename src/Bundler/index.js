const MemoryFS = require("memory-fs");
const webpack = require("webpack");
const fs = new MemoryFS();

module.exports = function (entry, cb) {
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
        const {apps} = fs.data;
        Object
            .keys(apps)
            .forEach(appHash => {
                if (!appHash) return;

                apps[appHash] = apps[appHash].toString();
            });
        localStorage['apps'] = JSON.stringify(apps);

        cb(apps);
    });
};
