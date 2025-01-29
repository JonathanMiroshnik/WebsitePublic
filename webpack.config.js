const path = require('path');

module.exports = {
  entry: './server/server.ts', // Your TypeScript entry file
  output: {
    filename: 'bundle.js', // The output bundle
    path: path.resolve(__dirname, 'dist'), // Output directory
    publicPath: 'dist/', // Path for the browser to access assets
  },
  resolve: {
    extensions: ['.ts', '.js'], // Resolve .ts and .js files
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader', // Use ts-loader to compile TypeScript
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'production', // Set to "production" for optimized output
};
