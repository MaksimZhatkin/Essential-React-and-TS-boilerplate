import { fileURLToPath } from 'url';
import path from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';

// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(__filename);

export default {
  // Configuration
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'public'),
    clean: true,
  },
  resolve: {
    extensions: ['.jsx', '.js', '.ts', '.tsx'],
  },

  // Modules
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  // Pugins
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],

  // Server
  devServer: {
    static: './public',
    port: 3000,
    hot: true,
  },
};
