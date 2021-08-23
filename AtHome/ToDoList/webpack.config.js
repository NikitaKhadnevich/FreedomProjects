const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
   context: path.resolve(__dirname, 'src'),
   entry: {
      main: './TodoList.js', // Запись через main первым файлом обязательна
      HelloTodo: './HelloTodoList.js', // В энтри вы конфигурим входные .js
   },   
   output: {
      filename: '[name].bundle.js', // Эта запись служит для того, ятобы наши файлы .js собрались в НЕСКОЛЬКО бандов
      path: path.resolve(__dirname, 'dist'),
   },
   optimization: {
      splitChunks: {
         chunks: 'all' // Эта запись нацелена на маскировку и своеобразную кодировку записей.
      }
   },
   devServer: {
      port: 4200, // Тут устанавливаем сервак, на котором работает наша прилага. Запускается через npm run start
   },
   plugins: [ // Тут подключаем различные плагины, предварительно установив их из npm
      new HTMLWebpackPlugin({
         title: 'My suite', // К примеру этот задают тайтл ручками
         template: './index.html', // Этот спутывает html (если не ощибаюсь)
      }),
      new CleanWebpackPlugin(),
   ],
   resolve: {
      extensions: ['.js', '.css'], // Служит для сокраащения и красоты , можно записывать без расширений .css .js и  тд
      alias: {
         '@assets': path.resolve(__dirname, 'src/assets/'),
         '@fonts': path.resolve(__dirname, 'src/assets/Fonts'),
      }
   },
   module: {
      rules: [
         {
            test: /.css$/,
            use: ['style-loader', 'css-loader'], // Данное правило служит для подключения css к проекту
         },
         {
            test: /.(png|jpg|svg|gif)$/, // Данное правило - для подключения изображений( к примеру когда фон это картинка)
            use: ['file-loader'],
         },
         {
            test: /.(ttf|otf)$/, // А это для подключения шрифтов
            use: ['file-loader'],
         },
      ],
   },
};

