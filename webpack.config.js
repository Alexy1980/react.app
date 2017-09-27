// конфигурация webpack
require('webpack');
module.exports = {
    // точка входа
    entry: './src/index.js',
    // точка выхода
    output: {
        // глобальная переменная для node.js
        path: __dirname + '/public',
        filename: 'bundle.js'
    }
};
