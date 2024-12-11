const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/App.js', // Your entry file
  output: {
    path: path.resolve(__dirname, 'dist'), // Output folder
    filename: 'bundle.js', // Output filename
    publicPath: '/', // For React Router
  },
  resolve: {
    extensions: ['.js', '.jsx'], // File extensions for imports
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Process JS and JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpile ES6+ and JSX
        },
      },
      {
        test: /\.css$/, // Process CSS files
        use: ['style-loader', 'css-loader'], // Inject and bundle CSS
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Handle image assets
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'assets/images',
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Clean the output folder before each build
    new HtmlWebpackPlugin({
      template: './public/index.html', // Your HTML template
      filename: 'index.html',
    }),
  ],
  devServer: {
    historyApiFallback: true, // For React Router (SPA)
    static: {
      directory: path.join(__dirname, 'public'), // Serve static files
    },
    port: 3000, // Dev server port
  },
  mode: 'development', // Change to 'production' for production builds
};