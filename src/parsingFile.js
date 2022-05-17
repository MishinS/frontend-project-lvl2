import _ from 'js-yaml';

const parsingFile = (file, fileExtension) => {
    if (fileExtension === 'yaml' || fileExtension === 'yml') {
        return _.load(file);
    }
    return JSON.parse(file);
};

export default parsingFile;
