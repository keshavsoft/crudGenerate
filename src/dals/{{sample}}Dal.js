import { StartFunc as StartFuncreadFile } from '../kLowDb/{{sample}}readFile.js';
import { StartFunc as StartFuncwriteFile } from '../kLowDb/{{sample}}writeFile.js';

let GetFunc = () => {
    return StartFuncreadFile();
};

let PostFunc = ({ LocalKey1: LocalKeys }) => {
    return StartFuncwriteFile({ LocalKey1: LocalKeys });
};

export { GetFunc, PostFunc };