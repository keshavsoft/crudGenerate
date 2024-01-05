import fs from 'fs';

let StartFunc = ({ inElement, inColumnsArray, inFrom, inTo }) => {
    let LocalElement = inElement;
    let LocalTypeName = "kLowDb";
    let LocalFrom = inFrom;
    let LocalTo = inTo;
    let LocalSampleString = "{{sample}}";

    fs.mkdirSync(`${LocalTo}/${LocalTypeName}/${LocalElement}`);

    // let LocalFromRoute = fs.readFileSync(`${LocalFrom}/${LocalTypeName}/${LocalSampleString}readFile.js`);

    // fs.writeFileSync(`${LocalTo}/${LocalTypeName}/${LocalElement}/readFile.js`, LocalFromRoute.toString().replaceAll(LocalSampleString, LocalElement));

    LocalFuncForreadFile({ inElement: LocalElement, inTo: LocalTo, inFrom: LocalFrom, inTypeName: LocalTypeName, inSampleString: LocalSampleString });
    LocalFuncForWriteFile({ inElement: LocalElement, inTo: LocalTo, inFrom: LocalFrom, inTypeName: LocalTypeName, inSampleString: LocalSampleString });

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

let LocalFuncForWriteFile = ({ inElement, inFrom, inTo, inTypeName, inSampleString }) => {
    let LocalFileName = "writeFile.js";
    let LocalElement = inElement;
    let LocalTypeName = inTypeName;
    let LocalFrom = inFrom;
    let LocalTo = inTo;
    let LocalSampleString = inSampleString;

    let LocalFileData = fs.readFileSync(`${LocalFrom}/${LocalTypeName}/${LocalSampleString}${LocalFileName}`);
    let LocalToFileData = LocalFileData.toString().replaceAll(LocalSampleString, LocalElement);

    fs.writeFileSync(`${LocalTo}/${LocalTypeName}/${LocalElement}/${LocalFileName}`, LocalToFileData);
};

let LocalFuncForInputs = ({ inColumnsArray }) => {
    let LocalNewArray = inColumnsArray.map(element => {
        return ` in${element}: LocalKey${element} `
    });

    return LocalNewArray.toString();
};

export { StartFunc };