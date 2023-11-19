import yaml from 'js-yaml';

const parse = (data, format) => {
  const parser = {
    json: JSON.parse,
    yml: yaml.load,
    yaml: yaml.load,
  };

  return parser[format](data);
};

export default parse;
