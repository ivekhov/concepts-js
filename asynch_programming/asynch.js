
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

