const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app/main.ts',
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loaders: ['html-loader']
            },
            {
                test: /\.css$/i,
                loaders: ['to-string-loader','style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|otf)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            }
        ],
        exprContextCritical: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};