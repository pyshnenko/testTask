const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Или 'production' для продакшена
  entry: './src/index.tsx', // Точка входа в приложение
  output: {
    path: path.resolve(__dirname, 'dist'), // Папка для сборки
    filename: 'bundle.js', // Имя сгенерированного бандла
    clean: true, // Очищать папку dist перед каждой сборкой
  },
  devtool: 'source-map', // Для отладки
  devServer: {
    static: './dist', // Папка со статическими файлами (например, index.html)
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true, // ← Отключает типизацию для ускорения сборки
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Используем шаблон HTML
    }),
  ],
};