import fs from 'fs';

let StartFunc = ({ inElement, inColumnsArray, inFrom, inTo }) => {
    let LocalElement = inElement;
    let LocalTypeName = "Controller";
    let LocalFrom = inFrom;
    let LocalTo = inTo;
    let LocalSampleString = "{{sample}}";

    let LocalFromRoute = fs.readFileSync(`${LocalFrom}/${LocalTypeName.toLowerCase()}s/${LocalSampleString}${LocalTypeName}.js`);

    let LocalAfterSample = LocalFromRoute.toString().replaceAll(LocalSampleString, LocalElement);

    let LocalForVarialbles = "let LocalKeys = req.body['{{KSKeyName}}'];"
    let LocalForVarialblesNew = LocalDeclareVariables({ inColumnsArray });

    let LocalPost = LocalAfterSample.replaceAll(LocalForVarialbles, LocalForVarialblesNew);

    let LocalForInuts = "LocalKey1: LocalKeys";
    let LocalForInputsNew = LocalFuncForInputs({ inColumnsArray });

    let LocalPostToFunc = LocalPost.replaceAll(LocalForInuts, LocalForInputsNew);

    fs.writeFileSync(`${LocalTo}/${LocalTypeName.toLowerCase()}s/${LocalElement}${LocalTypeName}.js`, LocalPostToFunc);
};

let LocalDeclareVariables = ({ inColumnsArray }) => {
    let LocalNewArray = inColumnsArray.map(element => {
        return `let LocalKey${element} = req.body['${element}'];`;
    });

    return LocalNewArray.join("\r\n\t");
};

let LocalFuncForInputs = ({ inColumnsArray }) => {
    let LocalNewArray = inColumnsArray.map(element => {
        return ` in${element}: LocalKey${element} `
    });

    return LocalNewArray.toString();
};

export { StartFunc };