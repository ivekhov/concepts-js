
import fs from 'fs';


// examples of callback functions
// #03
export default (filepath) => fs.readFile(
    filepath,
    'utf-8',
    (_error, data) => console.log(data),
);

// #04
const exampleAsynchFunction = (pathFile) => {
    const callbackFunction = (_error, data) => console.log(data);
    fs.readFile(pathFile, 'utf-8', callbackFunction);
};

// #05

// ToDo - добавить после fs.stat вызов коллбека с переданным аргуметом данных?


const compareFileSizes = (pathOne, pathTwo, cb) => {
    fs.stat(pathOne, (_error1, data1) => {
        fs.stat(pathTwo, (_error2, data2) => {
            Math.sign((data1.size - data2.size), (_error3, result) => {
                cb(null, result)}
            );
        });
    });
};

// testing - uncomment
// fs.readFile('./first', 'utf-8', (_error1, data1) => {
//     fs.readFile('./second', 'utf-8', (_error2, data2) => {
//         fs.writeFile('./new-file', `${data1}${data2}`, (_error3) => {
//             console.log('File has been written');
//         });
//     });
// });


// const getFileOwners = (dirpath, cb) => {
//     fs.readdir(dirpath, (_error1, filenames) => {
//         const readFileStat = (items, result = []) => {
//             if (items.length === 0) {
//                 // Обработку ошибок пока не рассматриваем
//                 cb(null, result);
//                 return;
//             }
//             const [first, ...rest] = items;
//             const filepath = path.join(dirpath, first);
//             fs.stat(filepath, (_error2, stat) => {
//                 readFileStat(rest, [...result, { filename: first, owner: stat.uid }]);
//             });
//         };
//         readFileStat(filenames);
//     });
// };


    // fs.readFile(filepath, 'utf-8', (_error, data) => {
    //     cb(null, data.trim());

    //     // При вызове колбек-функции передаем null первым параметром
    //     // Поскольку обработку ошибок мы пока не рассматриваем


    // const compareSize = (one, two) => {
    //     if (one > two) return 1;
    //     if (one < two) return -1;
    //     return  0;
    // };
    // compareSize(fs.stat(pathOne), fs.stat(pathTwo), cb);

    // compareSize(fs.stat(pathOne), fs.stat(pathTwo), (_err, result) => cb(result));


// fs.readFile('./first', 'utf-8', (_error1, data1) => {
//     fs.readFile('./second', 'utf-8', (_error2, data2) => {
//         fs.writeFile('./new-file', `${data1}${data2}`, (_error3) => {
//             console.log('File has been written');
//         });
//     });
// });

// # 06

const move = (pathOrigin, pathNew, cb) => {

    fs.readFile(pathOrigin, 'utf-8', (_error1, data) => {
        if (_error1) {
            // console.log(process.cwd());
            cb(_error1);
            return;
        }

        fs.writeFile(pathNew, `${data}`, (_error2) => {
            if (_error2) {
                cb(_error2);
                return;
            }
            fs.unlink(pathOrigin, (_error3) => {
                if (_error3) {
                    cb(_error3);
                    return;
                }
                cb(null); // last call !
            });

        });

    });
};

// console.log(
//     move('./temp/old/blank.txt', './temp/new/blank.txt', (error) => {
//         if (error) {
//             console.log('oops');
//             return;
//         }
//         console.log('yes!');
//     }),
// );

// BEGIN example
// export const move = (from, to, cb) => {
//     fs.readFile(from, 'utf-8', (error1, data) => {
//         if (error1) {
//             cb(error1);
//             return;
//         }
//         fs.writeFile(to, data, (error2) => {
//             if (error2) {
//                 cb(error2);
//                 return;
//             }
//             fs.unlink(from, cb);
//         });
//     });
// };
// END example

// fs.stat().size() ?

// # 07

import path from 'path';
import _ from 'lodash';
import async from 'async';
// import 'isFile' from 'fs:stat';

const getDirectorySizeWrong = (pathDir, cb) => {
    // const results = [];

    async.map(pathDir, fs.readdir, (_error1, results) => {
        // if (_error1) {
        //     return;
        // }

        fs.stat(results,  (_error2, size) => {
            if (_error2) {
                return;
            }
        })

        cb(_error2); // last call !

        console.log(results);
        // console.log('finished!');
    })

    // filter objects via condition
    // sum sizes
};
// export { getDirectorySize };

// correct version
export const getDirectorySize = (dirpath, cb) => {

    fs.readdir(dirpath, (error1, filenames) => {
        if (error1) {
            cb(error1);
            return;
        }
        // ToDo - как настроить обход файлов асинхронно? в задании по асинхронному программированию  в уроке 7

        const filepaths = filenames.map((name) => path.join(dirpath, name));

        // filepaths - объект , созданный на предыдущем шаге
        // fs.stat - функция, которая отрабатывает по всем объектам в filepaths
        // (error2, stats) stats - массив объектов, полученных как результат работы fs.stat над объектами в filepaths

        async.map(filepaths, fs.stat, (error2, stats) => {
            if (error2) {
                cb(error2);
                return;
            }

            // проход по массиву stats и объектам Stats в нем, фильтр файлов по свойству, суммирование по полю
            const sum = _.sumBy(stats.filter((stat) => stat.isFile()), 'size')

            cb(null, sum);
        });

    });

};
// export { getDirectorySize };


// console.log(
//     getDirectorySize('./temp', (err, size) => {
//         console.log(size);
//     }),
// );

// # 08 https://ru.hexlet.io/courses/js-asynchronous-programming/lessons/timers/theory_unit

// Example: compare sizes of two files.  
const compareFileSizes = (pathOne, pathTwo, cb) => {

  stat(pathOne, (_err, dataOne) => {
    stat(pathTwo, (_err, dataTwo) => {
      let result = 0;
      if (dataOne.size > dataTwo.size) {
        result = 1;
      } else if (dataOne.size < dataTwo.size) {
        result = -1;
      };
      cb(null, result);
    });
  });
};



//----------
//
const compare = (path1, path2, callback) => {
// const diff = (path1, path2, callback) => {
  fs.readFile(path1, 'utf-8', (_err1, data1) => {
    if (_err1) {
      callback(_err1);
      return;
    }
    fs.readFile(path2, 'utf-8', (_err2, data2) => {
      if (_err2) {
        callback(_err2);
        return;
      }
      const cont1 = data1.trim().toString().split('\n');
      const cont2 = data2.trim().toString().split('\n');
      const result = [];
      const len1 = cont1.length;
      const len2 = cont2.length;
      let cnt;
      len1 >= len2 ? cnt = len1 : cnt = len2;
      for (let i = 0; i < cnt; i += 1) {
        if (cont1.at(i) !== cont2.at(i)) {
          if (cont1.at(i) === undefined || (cont1.at(i) === '' && len1 === 1)) {
            result.push([null, cont2.at(i)]);
          } else if (cont2.at(i) === undefined || (cont2.at(i) === '' && len2 === 1)) {
            result.push([cont1.at(i), null]);
          }
          else {
            result.push([cont1.at(i), cont2.at(i)]);
          }
        };
      }
      callback(null, result);
    });
  });
};

/*
   // BEGIN
  const biggestFile = lines1.length > lines2.length ? lines1 : lines2;

  return biggestFile.reduce((acc, line, index) => {
    if (lines1[index] === lines2[index]) {
      return acc;
    }

    return [...acc, [lines1[index], lines2[index]].map((x) => (x === undefined ? null : x))];
  }, []);
  // END

/ BEGIN
export default (path1, path2, callback) => {
  fs.readFile(path1, (err, data1) => {
    if (err) {
      callback(err);
      return;
    }

    fs.readFile(path2, (err2, data2) => {
      if (err2) {
        callback(err2);
        return;
      }

      callback(null, compare(data1.toString(), data2.toString()));
    });
  });
};
// END
 *
 *
 */

/*
// BEGIN
const getTypeName = (stat) => (stat.isDirectory() ? 'directory' : 'file');

export const getTypes = (filesPath) => {
  // функция получает путь и аккумулятор из reduce, выполняет попытку получить stat,
  // добавляет в аккумулятор строку или null и возвращает обновлённый аккумулятор
  const processPath = (filepath, result) => fsp.stat(filepath)
    .then((data) => [...result, getTypeName(data)])
    .catch(() => [...result, null]);

  const resultPromise = filesPath.reduce(
    // promise - это аккумулятор, обёрнутый в промис, поэтому на нём вызывается then
    // result - предыдущее значение аккумулятора
    (promise, filepath) => promise.then((result) => processPath(filepath, result)),
    Promise.resolve([]),
  );
  return resultPromise;
};
// END
//
// */
