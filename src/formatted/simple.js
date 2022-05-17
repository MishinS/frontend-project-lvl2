const simpleFormatted = (data) => {
  let str = '';
  str += '{\n';
  data.map((el) => {    
    if (el.status === 'removed') {
      str += `\t- ${el.key}: ${el.value}\n`      ;
      return str;
    }
    if (el.status === 'unchanged') {
      str += `\t  ${el.key}: ${el.value}\n`
      return str;
    }
    if (el.status === 'updated') {
      str += `\t- ${el.key}: ${el.value1}\n`
      str += `\t+ ${el.key}: ${el.value2}\n`        
      return str;
    }    
    if (el.status === 'added') {
      str += `\t+ ${el.key}: ${el.value}\n`
      return str;
    }    
  });
  str += '}\n';
  return str;
};

export default simpleFormatted;
