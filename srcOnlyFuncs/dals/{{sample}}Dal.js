import { StartFunc as StartFuncreadFile } from '../kLowDb/{{sample}}readFile.js';

let GetFunc = () => {
    return StartFuncreadFile();
};

export { GetFunc };