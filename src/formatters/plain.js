const typeOfValue = (value) => {
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  if (value === null) {
    return null;
  }
  if (typeof value === 'object') {
    return '[complex value]';
  }
  return value;
};

const plain = (tree) => {
  const iter = (children, parent) => {
    const diffColl = children.flatMap((node) => {
      const newPath = parent ? `${parent}.${node.name}` : `${node.name}`;
      switch (node.type) {
        case 'nested':
          return iter(node.children, newPath);
        case 'unchanged':
          return [];
        case 'deleted':
          return `Property '${newPath}' was removed`;
        case 'added':
          return `Property '${newPath}' was added with value: ${typeOfValue(node.value)}`;
        case 'changed':
          return `Property '${newPath}' was updated. From ${typeOfValue(node.oldValue)} to ${typeOfValue(node.newValue)}`;
        default:
          return null;
      }
    });
    return diffColl.join('\n');
  };
  const result = iter(tree, '');
  return result;
};

export default plain;
