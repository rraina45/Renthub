const path = require('path');

module.exports = {
  entry: './src/App.js',  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',  // Output bundled file
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],  // Use the React and JS presets
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],  // For loading CSS files
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Resolve .jsx and .js extensions
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),  // Serve files from the 'dist' folder
    port: 3000,  // Port for dev server
  },
  mode: 'development',  // or 'production' for production build
};