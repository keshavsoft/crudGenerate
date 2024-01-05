import fs from 'fs';
import { StartFunc as StartFuncForAllMethods } from './ForAllMethods.js';

let StartFunc = ({ inElement, inColumnsArray, inFrom, inTo }) => {
    let LocalElement = inElement;
    let LocalTypeName = "restClients";
    let LocalTo = inTo;
    let LocalFrom = inFrom;
    let LocalFileName = "AllMethods.http";

    fs.mkdirSync(`${LocalTo}/${LocalTypeName}/${LocalElement}`);

    let LocalFileData = fs.readFileSync(`${LocalFrom}/${LocalTypeName}/${LocalFileName}`);

    let LocalFromAllMethods = StartFuncForAllMethods({ inElement, LocalElement, inFileData: LocalFileData.toString(), inColumnsArray: [] });

    fs.writeFileSync(`${LocalTo}/${LocalTypeName}/${LocalElement}/${LocalFileName}`, LocalFromAllMethods);
    // LocalFuncForGetHttp({
    //     inElement: LocalElement, inTo: LocalTo, inFrom: LocalFrom,
    //     inTypeName: LocalTypeName
    // });

    // LocalFuncForAllMethodsHttp({
    //     inElement: LocalElement, inTo: LocalTo, inFrom: LocalFrom,
    //     inTypeName: LocalTypeName
    // });
};

let LocalFuncForGetHttp = ({ inElement, inFrom, inTo, inTypeName }) => {
    let LocalFileName = "Get.http";
    let LocalElement = inElement;
    let LocalTypeName = inTypeName;
    let LocalFrom = inFrom;
    let LocalTo = inTo;

    let LocalFileData = fs.readFileSync(`${LocalFrom}/${LocalTypeName}/${LocalFileName}`);

    let LocalForVariables = "{{sample}}"
    let LocalForVariablesNew = `${inElement}`;
    // {{KSAssignKeys}}
    let LocalNewData = LocalFileData.toString().replaceAll(LocalForVariables, LocalForVariablesNew);

    fs.writeFileSync(`${LocalTo}/${LocalTypeName}/${LocalElement}/${LocalFileName}`, LocalNewData);
};

let LocalFuncForAllMethodsHttp = ({ inElement, inFrom, inTo, inTypeName }) => {
    let LocalFileName = "AllMethods.http";
    let LocalElement = inElement;
    let LocalTypeName = inTypeName;
    let LocalFrom = inFrom;
    let LocalTo = inTo;

    let LocalFileData = fs.readFileSync(`${LocalFrom}/${LocalTypeName}/${LocalFileName}`);

    let LocalForVariables = "{{sample}}"
    let LocalForVariablesNew = `${inElement}`;
    // {{KSAssignKeys}}
    let LocalNewData = LocalFileData.toString().replaceAll(LocalForVariables, LocalForVariablesNew);

    fs.writeFileSync(`${LocalTo}/${LocalTypeName}/${LocalElement}/${LocalFileName}`, LocalNewData);
};

export { StartFunc };