import fs from 'fs';

let StartFunc = ({ inElement, inFrom, inTo }) => {
    let LocalElement = inElement;
    let LocalTypeName = "Middleware";
    let LocalFrom = inFrom;
    let LocalTo = inTo;

    let LocalFileData = fs.readFileSync(`${LocalFrom}/${LocalTypeName.toLowerCase()}s/{{sample}}${LocalTypeName}.js`);

    let LocalNewData = LocalFuncChangeFileData({ inElement: LocalElement, inFileData: LocalFileData.toString() });

    // fs.readFileSync(`${LocalFrom}/${LocalTypeName.toLowerCase()}s/{{sample}}${LocalTypeName}.js`);

    fs.writeFileSync(`${LocalTo}/${LocalTypeName.toLowerCase()}s/${LocalElement}${LocalTypeName}.js`, LocalNewData);
};

let LocalFuncChangeFileData = ({ inElement, inFileData }) => {
    let LocalFileData = inFileData;

    let LocalForVariables = "{{sample}}Data.json";
    let LocalForVariablesNew = `${inElement}.json`;

    let LocalNewData = LocalFileData.replaceAll(LocalForVariables, LocalForVariablesNew);

    return LocalNewData;
};

export { StartFunc };