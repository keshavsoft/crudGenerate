import fs from 'fs';

import { StartFunc as StartFuncReadFileFromModal } from './readFileFromModal.js';
import { StartFunc as StartFuncWriteFile } from './writeFile.js';
import { StartFunc as StartFuncwriteFileFromModal } from './writeFileFromModal.js';

let StartFunc = ({ inElement, inColumnsArray, inFrom, inTo }) => {
    let LocalElement = inElement;
    let LocalTypeName = "kLowDb";
    let LocalFrom = inFrom;
    let LocalTo = inTo;
    let LocalSampleString = "{{sample}}";
    let LocalColumnsArray = inColumnsArray;

    fs.mkdirSync(`${LocalTo}/${LocalTypeName}/${LocalElement}`);

    LocalFuncForreadFile({ inElement: LocalElement, inTo: LocalTo, inFrom: LocalFrom, inTypeName: LocalTypeName, inSampleString: LocalSampleString });
    // LocalFuncForWriteFile({
    //     inElement: LocalElement, inTo: LocalTo, inFrom: LocalFrom,
    //     inTypeName: LocalTypeName, inSampleString: LocalSampleString, inColumnsArray: LocalColumnsArray
    // });
    StartFuncReadFileFromModal({
        inElement: LocalElement, inFrom: LocalFrom, inTo: LocalTo,
        inTypeName: LocalTypeName, inSampleString: LocalSampleString, inColumnsArray: LocalColumnsArray
    });

    StartFuncWriteFile({
        inElement: LocalElement, inFrom: LocalFrom, inTo: LocalTo,
        inTypeName: LocalTypeName, inSampleString: LocalSampleString, inColumnsArray: LocalColumnsArray
    });

    StartFuncwriteFileFromModal({
        inElement: LocalElement, inFrom: LocalFrom, inTo: LocalTo,
        inTypeName: LocalTypeName, inSampleString: LocalSampleString, inColumnsArray: LocalColumnsArray
    });

    fs.copyFileSync(`${LocalFrom}/ToConfig.json`, `${LocalTo}/${LocalTypeName}/Config.json`);
};

let LocalFuncForreadFile = ({ inElement, inFrom, inTo, inTypeName, inSampleString }) => {
    let LocalFileName = "readFile.js";
    let LocalElement = inElement;
    let LocalTypeName = inTypeName;
    let LocalFrom = inFrom;
    let LocalTo = inTo;
    let LocalSampleString = inSampleString;

    let LocalFileData = fs.readFileSync(`${LocalFrom}/${LocalTypeName}/${LocalSampleString}${LocalFileName}`);
    let LocalToFileData = LocalFileData.toString().replaceAll(LocalSampleString, LocalElement);

    fs.writeFileSync(`${LocalTo}/${LocalTypeName}/${LocalElement}/${LocalFileName}`, LocalToFileData);
};

let LocalFuncForWriteFile = ({ inElement, inFrom, inTo, inTypeName, inSampleString, inColumnsArray }) => {
    let LocalFileName = "writeFile.js";
    let LocalElement = inElement;
    let LocalTypeName = inTypeName;
    let LocalFrom = inFrom;
    let LocalTo = inTo;
    let LocalSampleString = inSampleString;
    let LocalColumnsArray = inColumnsArray;

    let LocalFileData = fs.readFileSync(`${LocalFrom}/${LocalTypeName}/${LocalSampleString}${LocalFileName}`);
    let LocalToFileData = LocalFileData.toString().replaceAll(LocalSampleString, LocalElement);

    let LocalForVariables = "{{KSAssignKeys}}"
    let LocalForVariablesNew = LocalDeclareVariables({ inColumnsArray: LocalColumnsArray });
    let LocalNewData = LocalToFileData.replaceAll(LocalForVariables, LocalForVariablesNew);

    fs.writeFileSync(`${LocalTo}/${LocalTypeName}/${LocalElement}/${LocalFileName}`, LocalNewData);
};

let LocalDeclareVariables = ({ inColumnsArray }) => {
    let LocalColumnsArray = inColumnsArray;

    let LocalNewArray = LocalColumnsArray.map(element => {
        return `LocalDataToInsert['${element}'] = inDataToInsert['in${element}']`;

        // return `let LocalKey${element} = req.body['${element}'];`;
    });

    return LocalNewArray.join("\r\n\t");
};

export { StartFunc };