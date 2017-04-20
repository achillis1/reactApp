const path = require('path');

module.exports = {
   entry: path.join(__dirname, "main.js"),

   output: {
      path: path.join(__dirname, "/"),
      filename: 'index.js',
   },

   devServer: {
      hot: true,
      inline: true,
      port: 8080
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

