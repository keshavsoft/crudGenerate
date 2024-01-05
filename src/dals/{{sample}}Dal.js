import { StartFunc as StartFuncreadFile } from '../kLowDb/{{sample}}readFile.js';
import { StartFunc as StartFuncReadFileFromModal } from '../kLowDb/{{sample}}readFileFromModal.js';
import { StartFunc as StartFuncwriteFile } from '../kLowDb/{{sample}}writeFile.js';
import { StartFunc as StartFuncWriteFileFromModal } from '../kLowDb/{{sample}}writeFileFromModal.js';

let GetFunc = () => {
    return StartFuncreadFile();
};

let GetFromModalFunc = () => {
    return StartFuncReadFileFromModal();
};

let GetFromModalUuidFunc = () => {
    return StartFuncReadFileFromModal();
};

let GetFromModalUuidAndTSFunc = () => {
    return StartFuncReadFileFromModal();
};

let PostFunc = ({ LocalKey1: LocalKeys }) => {
    return StartFuncwriteFile({ LocalKey1: LocalKeys });
};

let PostFromModalFunc = ({ LocalKey1: LocalKeys }) => {
    return StartFuncWriteFileFromModal({ LocalKey1: LocalKeys });
};

export {
    GetFunc, PostFunc, PostFromModalFunc, GetFromModalFunc,
    GetFromModalUuidFunc, GetFromModalUuidAndTSFunc
};