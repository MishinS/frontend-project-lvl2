import yaml from 'js-yaml';

/**
 * Get parsed json object.
 * @param data{string}
 * @param format{string}
 * @returns {JSON}
 */
const parse = (data, format) => {
  const parser = {
    json: JSON.parse,
    yml: yaml.load,
    yaml: yaml.load,
  };

  return parser[format](data);
};

export default parse;
