const path = require('path');
module.exports = {
    // entry é o ponto de entrada da aplicação
    // entry: 'src/index.js' // No windows a '/' talvez não funcione então utilizamos o path
    entry: path.resolve(__dirname,'src','index.js'), // No windows a '/' talvez não funcione então utilizamos o path

    // output é onde será criado o código gerado pelo javascript
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    },
    module: {
        // regras para transpilação do código
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ]
            },
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                use: {
                    loader: 'file-loader',
                }
            }
        ]
    }
}