// src/index.js

const message = 'Hello Nodejs + vite';
console.log(message);

import path from 'node:path';

const somePath = path.join('some_folder', 'some_file.txt');
console.log(somePath);
// somePath буде 'some_folder/some_file.txt' на MacOs
// somePath буде 'some_folder\\some_file.txt' на Windows

import pathOne from 'node:path';

// приклад для побудови шляху із його частин
const pathToWorkDir = pathOne.join(process.cwd()); // отримуємо шлях до кореневої директорії викликом метода process.cwd()
const pathToFile = pathOne.join(pathToWorkDir, 'some_folder', 'some_file.txt'); // розширюємо шлях додатковими елементами
console.log(pathToFile);
// pathToFile на MacOs буде __шлях до папки, де запущений процес__/some_folder/some_file.txt'
// pathToFile на Windows буде __шлях до папки, де запущений процес__\\some_folder\\some_file.txt'

import pathTwo from 'node:path';

// на MacOs
pathTwo.parse('/home/user/dir/file.txt');
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }

// на Windows
pathTwo.parse('C:\\\\path\\\\dir\\\\file.txt');
// { root: 'C:\\\\',
//   dir: 'C:\\\\path\\\\dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }
console.log(pathTwo);
