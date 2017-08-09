const MemoryFS = require("memory-fs");
const webpack = require("webpack");
const fs = new MemoryFS();

module.exports = function (entry, cb) {
    const compiler = webpack({
        entry,
        output: {
            path: '/apps'
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
        // Вывод ошибок/статистики
        err && console.error(err);
        console.info(stats);

        // Сохранение в персистентный стораж
        localStorage.fs = JSON.stringify(fs);
        cb(fs.data.apps);
    });
};
