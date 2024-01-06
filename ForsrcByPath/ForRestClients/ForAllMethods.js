let StartFunc = ({ inElement, inFileData, inColumnsArray }) => {
    let LocalFileData = inFileData;

    let LocalForVariables = "{{sample}}"
    let LocalForVariablesNew = `${inElement}`;

    let LocalNewData = LocalFileData.replaceAll(LocalForVariables, LocalForVariablesNew);

    return LocalNewData;
};

let LocalFuncForSample = ({ inElement, inFileData }) => {
    let LocalFileData = inFileData;

    let LocalForVariables = "{{sample}}"
    let LocalForVariablesNew = `${inElement}`;

    let LocalNewData = LocalFileData.toString().replaceAll(LocalForVariables, LocalForVariablesNew);

    return LocalNewData;
};

let LocalFuncForBody = ({ inElement, inFileData }) => {
    let LocalFileData = inFileData;

    let LocalForVariables = "{{body}}";
    let LocalForVariablesNew = `${inElement}`;

    let LocalNewData = LocalFileData.toString().replaceAll(LocalForVariables, LocalForVariablesNew);

    return LocalNewData;
};


export { StartFunc };