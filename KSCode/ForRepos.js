import fs from 'fs';

let StartFunc = ({ inElement, inColumnsArray, inFrom, inTo }) => {
    let LocalElement = inElement;
    let LocalTypeName = "Repo";
    let LocalFrom = inFrom;
    let LocalTo = inTo;

    let LocalFromRoute = fs.readFileSync(`${LocalFrom}/${LocalTypeName.toLowerCase()}s/{{sample}}${LocalTypeName}.js`);

    let LocalAfterSample = LocalFromRoute.toString().replaceAll("{{sample}}", LocalElement);

    let LocalForInuts = "LocalKey1: LocalKeys";
    let LocalForInputsNew = LocalFuncForInputs({ inColumnsArray });

    let LocalPostToFunc = LocalAfterSample.replaceAll(LocalForInuts, LocalForInputsNew);

    fs.writeFileSync(`${LocalTo}/${LocalTypeName.toLowerCase()}s/${LocalElement}${LocalTypeName}.js`, LocalPostToFunc);
};

let LocalFuncForInputs = ({ inColumnsArray }) => {
    let LocalNewArray = inColumnsArray.map(element => {
        return ` in${element}: LocalKey${element} `
    });

    return LocalNewArray.toString();
};

export { StartFunc };