// src/index.js

const message = 'Hello Nodejs';
console.log(message);

// ===== МОДУЛЬ path ===== //

// --- Метод приймає аргументами рядки, які будуть перетворені у правильно форматований шлях:

import path from 'node:path';

// Приклад для побудови шляху з його частин
const somePath = path.join('some_folder', 'some_file.txt');
console.log(somePath);

// somePath буде 'some_folder/some_file.txt' на MacOs
// somePath буде 'some_folder\\some_file.txt' на Windows

// --- Використання результату виконання одного виклику цієї функції в іншому виклику:

import pathOne from 'node:path';

// Приклад для побудови шляху із його частин
const pathToWorkDir = pathOne.join(process.cwd());
// Отримуємо шлях до кореневої директорії викликом метода process.cwd()

const pathToFile = pathOne.join(pathToWorkDir, 'some_folder', 'some_file.txt');
console.log(pathToFile);

// Розширюємо шлях додатковими елементами
// pathToFile на MacOs буде __шлях до папки, де запущений процес__/some_folder/some_file.txt'
// pathToFile на Windows буде __шлях до папки, де запущений процес__\\some_folder\\some_file.txt'

// --- Отримання інформації по шляху, який був переданий аргументом:

// import path from 'node:path';

// на MacOs
// path.parse('/home/user/dir/file.txt');
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }

// на Windows
// path.parse('C:\\\\path\\\\dir\\\\file.txt');
// { root: 'C:\\\\',
//   dir: 'C:\\\\path\\\\dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }

// console.log(pathTwo);

// ===== МОДУЛЬ fs ===== //

// --- Синхронна функція:

// import fs from 'node:fs';
// const fileContent = fs.readFileSync('path_to_file');
// console.log(fileContent);

// --- Асинхронна з колбеком

// import fs from 'node:fs';

// fs.readFile('path_to_file', (err, fileContent) => {
//   /* ваш код */
// });

// import fs from 'node:fs';

// fs.readFile('path_to_file', (err, fileContent) => {
//     someOtherFunctionWithCallback(fileContent, (err, data) => {
//       anotherFunctionWithCallback(data, () => {....})
//     },
// });

// --- Асинхронна з промісами

// import fs from 'node:fs/promises';

// const fileContentOne = await fs.readFile('path_to_file');
// console.log(fileContentOne);

// ===== BUFFERS ===== //

import fs from 'node:fs/promises';

// Припустимо, що в файлі hello.txt був текст: Hello World!

const buffer = await fs.readFile('hello.txt');
console.log(buffer); //<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21>

import fsOne from 'node:fs/promises';

// Припустимо, що в файлі hello.txt був текст: Hello World!

const bufferOne = await fsOne.readFile('hello.txt');
console.log(bufferOne.toString('utf-8')); // Hello World!

// ===== ОСНОВНІ МЕТОДИ МОДУЛЯ fs ===== //

// --- Читання файлу

// [fs.readFile(path [, options])]('https://nodejs.org/api/fs.html#fspromisesreadfilepath-options')

import fsTwo from 'fs/promises';

(async () => {
  try {
    const data = await fsTwo.readFile('file.txt', 'utf8');
    console.log('Вміст файлу:', data);
  } catch (err) {
    console.error('Помилка читання файлу:', err);
  }
})();

// --- Запис файлу

// [fs.writeFile(file, data [, options])]('https://nodejs.org/api/fs.html#fspromiseswritefilefile-data-options')

import fsThree from 'fs/promises';

// Записуємо дані у файл 'output.txt'
(async () => {
  const data = 'Це дані, які ми записуємо у файл:)';
  try {
    await fsThree.writeFile('output.txt', data, 'utf8');
    console.log('Дані успішно записані у файл!');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
})();

// --- Додавання у файл

// [fs.appendFile(path, data [, options])]('https://nodejs.org/api/fs.html#fspromisesappendfilepath-data-options')

import fsFour from 'fs/promises';

// Додаємо дані до файлу 'output.txt'
(async () => {
  const data = 'Це дані, які ми додаємо до файлу.';
  try {
    await fsFour.appendFile('output.txt', data, 'utf8');
    console.log('Дані успішно додані до файлу!');
  } catch (err) {
    console.error('Помилка додавання даних до файлу:', err);
  }
})();

// --- Перейменування файлу

// [fs.rename(oldPath, newPath)]('https://nodejs.org/api/fs.html#fspromisesrenameoldpath-newpath')

import fsFive from 'fs/promises';

// Перейменовуємо або переміщуємо файл чи каталог зі шляху 'oldfile.txt' до 'newfile.txt'
(async () => {
  try {
    await fsFive.rename('output.txt', 'newfile.txt');
    console.log('Файл або каталог успішно перейменовано або переміщено!');
  } catch (err) {
    console.error('Помилка перейменування або переміщення:', err);
  }
})();

// --- Видалення файлу

// [fs.unlink(path)]('https://nodejs.org/api/fs.html#fspromisesunlinkpath')

import fsSix from 'fs/promises';

// Видаляємо файл за шляхом 'file.txt'
(async () => {
  try {
    await fsSix.unlink('file.txt');
    console.log('Файл успішно видалено!');
  } catch (err) {
    console.error('Помилка видалення файлу:', err);
  }
})();

// --- Виведення вмісту папки

// [fs.readdir(path)]('https://nodejs.org/api/fs.html#fspromisesreaddirpath-options')

import fsSeven from 'fs/promises';

// Отримуємо список файлів і каталогів у поточному каталозі
(async () => {
  try {
    const files = await fsSeven.readdir('.');
    console.log('Список файлів і каталогів:', files);
  } catch (err) {
    console.error('Помилка отримання списку файлів і каталогів:', err);
  }
})();

// --- Перевірка доступу до ресурсу

// [fs.access(path [, mode])]('https://nodejs.org/api/fs.html#fspromisesaccesspath-mode')

import fsEight from 'fs/promises';

// Перевіряємо доступність файлу або каталогу за вказаним шляхом
(async () => {
  const path = 'file.txt';
  try {
    await fsEight.access(path);
    console.log(`Файл або каталог '${path}' доступний!`);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(`Файл або каталог '${path}' не існує!`);
    } else {
      console.error(
        `Помилка перевірки доступності файлу або каталогу '${path}':`,
        err,
      );
    }
  }
})();
