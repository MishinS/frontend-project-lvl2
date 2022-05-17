import _ from 'lodash';

const genDiff = (pathfile1, pathfile2) => {
  const checkDiff = (data1, data2, key) => {
    if (!_.has(data1, key)) return { key, status: 'added', value: data2[key] };
    if (!_.has(data2, key)) return { key, status: 'removed', value: data1[key] };
    if (_.isObject(data1[key]) && _.isObject(data2[key])) return { key, status: 'nested', descendants: genDiff(data1[key], data2[key]) };
    if (data1[key] === data2[key]) return { key, status: 'unchanged', value: data1[key] };
    return {
    key, status: 'updated', value1: data1[key], value2: data2[key],    
  };  
};

  const pathfile1Keys = Object.keys(pathfile1);
  const pathfile2Keys = Object.keys(pathfile2);
  const sotredAllKeys = _.sortBy(_.union(pathfile1Keys, pathfile2Keys));

  return sotredAllKeys.map((key) => checkDiff(pathfile1, pathfile2, key));
};

export default genDiff;