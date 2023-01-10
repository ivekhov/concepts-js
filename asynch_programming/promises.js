
// touch
const touch = (filepath) => fsp.access(filepath)
  // .catch(console.log)
  .catch(() => fsp.writeFile(filepath, ''));

// reverse
const reverse = (pathFile) => {
  return fsp.readFile(pathFile, 'utf-8')
    .then((content) => {
      const reversed = content.split('\n').reverse().join('\n');
    fsp.writeFile(pathFile, reversed);
    })
};

// promise chain
const checkContent = (item) => item.isDirectory() ? 'directory' : 'file';

const getTypes = (filespath) => {
  const initPromise = Promise.resolve([]);

  const promise = filespath.reduce((acc, path) => {
    const newAcc = acc
                    .then((
                        /*  передавать сюда contents - типа накопитель, но он непонятно как инициализируется и создается и с каким типом?
                        почему именно массив создается?  */
                        contents) => fsp.stat(path)
                            .then((item ) =>  contents.concat(checkContent(item)))
                            .catch((e) => contents.concat(null))
                    );

    return newAcc;
  }, initPromise);
  return promise;
};

/*
getTypes([
        './node_modules', './file1.txt', './package.json', './undef_file',
    ])
    .then(console.log); // // ['directory', 'file', null, 'file']
*/

// promise all
import path from 'path';
import _ from 'lodash';
import fsp from 'fs/promises';

export const getDirectorySize = (dirpath) => {
  const promise = fsp
    .readdir(dirpath)
    .then(
      (filenames) => {
        const filepaths = filenames.map((name) => path.join(dirpath, name));
        //fsp.stat(path.join(`${dirpath}`, `${filepath}`)).size
        const promises = filepaths.map((filePath) => fsp.stat(filePath));
        return Promise.all(promises);
      });
  return promise.then((stats) => _.sumBy(stats.filter((stat) => stat.isFile()), 'size'))
};


//


