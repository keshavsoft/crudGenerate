import fs from 'fs';

let StartFunc = ({ inElement, inColumnsArray, inTo }) => {
    let LocalElement = inElement;
    let LocalTo = inTo;
    let LocalColumnsArray = inColumnsArray;
    let LocalObjectToInsert = LocalArrayToObject({ inColumnsArray: LocalColumnsArray });

    fs.writeFileSync(`${LocalTo}/${LocalElement}/${LocalElement}Data.json`, JSON.stringify(LocalObjectToInsert));
};

let LocalArrayToObject = ({ inColumnsArray }) => {
    const names = inColumnsArray;
    const obj = {};
    names.forEach((elem, i) => {
        obj[elem] = "";
    });

    return obj;
};

export { StartFunc };