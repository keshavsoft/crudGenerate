import fs from 'fs';

let StartFunc = ({ inElement, inFrom, inTo, inTypeName, inSampleString, inColumnsArray }) => {
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
    });

    return LocalNewArray.join("\r\n\t");
};
export { StartFunc };