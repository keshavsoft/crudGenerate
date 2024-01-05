import fs from 'fs';

let StartFunc = ({ inElement, inColumnsArray, inFrom, inTo }) => {
    let LocalElement = inElement;
    let LocalTypeName = "restClients";
    let LocalFrom = inFrom;
    let LocalTo = inTo;
    let LocalSampleString = "{{sample}}";
    let LocalColumnsArray = inColumnsArray;

    fs.mkdirSync(`${LocalTo}/${LocalTypeName}/${LocalElement}`);

    LocalFuncForGetHttp({
        inElement: LocalElement, inTo: LocalTo, inFrom: LocalFrom,
        inTypeName: LocalTypeName
    });
};

let LocalFuncForGetHttp = ({ inElement, inFrom, inTo, inTypeName }) => {
    let LocalFileName = "Get.http";
    let LocalElement = inElement;
    let LocalTypeName = inTypeName;
    let LocalFrom = inFrom;
    let LocalTo = inTo;

    let LocalFileData = fs.readFileSync(`${LocalFrom}/${LocalTypeName}/${LocalFileName}`);

    let LocalForVariables = "{{KSEndPoint}}"
    let LocalForVariablesNew = `${inElement}`;
    // {{KSAssignKeys}}
    let LocalNewData = LocalFileData.toString().replaceAll(LocalForVariables, LocalForVariablesNew);

    fs.writeFileSync(`${LocalTo}/${LocalTypeName}/${LocalElement}/${LocalFileName}`, LocalNewData);
};

export { StartFunc };