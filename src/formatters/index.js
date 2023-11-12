import stylish from './stylish.js';

const formatter = (tree, formatType) => {
  switch (formatType) {
    case 'stylish':
      return stylish(tree);
    case 'plain':
      return plain(tree);
    case 'json':
      return json(tree);
    default:
      return null;
  }
};
export default formatter;

