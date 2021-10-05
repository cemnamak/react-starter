const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: process.env.PORT || 8090,
  },
  mode:'development',
  module:{
    rules:[
      {
        test: /\.js$/,
        loader:'babel-loader',
        exclude:/node_modules/
      },
      {
        test: /\.scss$/,
        use:['style-loader','css-loader','sass-loader']
      }
  ]
  }
};
