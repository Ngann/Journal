const path = require('path');

// all configuration are stored in module exports.
module.exports = {
  // entry: the JS file where webpack will enter the application
  entry: './src/main.js',
  output: {
    // output  where all code will go after it's processed. Webpack will concatenate our JS files and save them in a file called bundle.js
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
