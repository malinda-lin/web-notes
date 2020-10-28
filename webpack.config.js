const path = require('path');

module.exports = {
  entry: {
    background: path.resolve(__dirname, "./src/background.js"),
    context: path.resolve(__dirname, "./src/context.js"),
    options: path.resolve(__dirname, "./src/options.js"),
    popup: path.resolve(__dirname, "./src/popup.js"),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
              ]
            }
          }
        ]
      },
    ]
  }
};