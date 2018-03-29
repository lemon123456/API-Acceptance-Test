import fs from 'fs';
import _ from 'lodash';
import path from 'path';

const fileLoader = (name) => {
  name = _.trim(name);
  const filePath = (name, ext = '') => path.resolve(`${__dirname}/json`, `${name}${ext}`);
  const suffix = _.find(['.js', '.json', ''], (ext) => fs.existsSync(filePath(name, ext)));
  if (_.isUndefined(suffix)) {
      throw new Error(`No such file: ${filePath(name)}`);
  }
  return require(filePath(name, suffix));
};

export default {
    load: (name)=> {
        return fileLoader(name);
    },
}