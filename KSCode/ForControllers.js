import fs from 'fs';

let StartFunc = ({ inElement, inColumnsArray, inFrom, inTo }) => {
    let LocalElement = inElement;
    let LocalTypeName = "Controller";
    let LocalFrom = inFrom;
    let LocalTo = inTo;

    let LocalFromRoute = fs.readFileSync(`${LocalFrom}/${LocalTypeName.toLowerCase()}s/{{sample}}${LocalTypeName}.js`);

    // let LocalPost = LocalDeclareVariables({ inColumnsArray, inFileAsString: LocalFromRoute });
    let LocalForVarialbles = "let LocalKeys = req.body['{{KSKeyName}}'];"
    let LocalForVarialblesNew = LocalDeclareVariables({ inColumnsArray });

    let LocalPost = LocalFromRoute.toString().replaceAll(LocalForVarialbles, LocalForVarialblesNew);

    let LocalForInuts = "LocalKey1: LocalKeys";
    let LocalForInputsNew = LocalFuncForInputs({ inColumnsArray });

    let LocalPostToFunc = LocalPost.replaceAll(LocalForInuts, LocalForInputsNew);

    fs.writeFileSync(`${LocalTo}/${LocalTypeName.toLowerCase()}s/${LocalElement}${LocalTypeName}.js`, LocalPostToFunc);
};

let StartFunc1 = ({ inElement, inColumnsArray, inFrom, inTo }) => {
    let LocalElement = inElement;
    let LocalTypeName = "Controller";
    let LocalFrom = inFrom;
    let LocalTo = inTo;

    let LocalFromRoute = fs.readFileSync(`${LocalFrom}/${LocalTypeName.toLowerCase()}s/{{sample}}${LocalTypeName}.js`);

    let LocalForPost = "let LocalKeys = req.body['{{KSKeyName}}'];"
    let LocalToChange = "";

    inColumnsArray.forEach(element => {
        LocalToChange += `let LocalKey${element} = req.body['${element}'];\r\n`
    });

    let LocalPost = LocalFromRoute.toString().replaceAll(LocalForPost, LocalToChange);

    let LocalForPostToFunc = "({ LocalKey1: LocalKeys })"

    let LocalPostToFunc = LocalPost.toString().replaceAll(LocalForPostToFunc, `({ in${inColumnsArray[0]}: LocalKey${inColumnsArray[0]} })`);

    fs.writeFileSync(`${LocalTo}/${LocalTypeName.toLowerCase()}s/${LocalElement}${LocalTypeName}.js`, LocalPostToFunc);
};

let LocalDeclareVariables1 = ({ inColumnsArray, inFileAsString }) => {
    let LocalForPost = "let LocalKeys = req.body['{{KSKeyName}}'];"
    let LocalToChange = "";

    inColumnsArray.forEach(element => {
        LocalToChange += `let LocalKey${element} = req.body['${element}'];\r\n`
    });

    return inFileAsString.toString().replaceAll(LocalForPost, LocalToChange);
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