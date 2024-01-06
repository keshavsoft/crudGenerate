import fs from 'fs';

let StartFunc = ({ inElement, inTo }) => {
    let LocalElement = inElement;
    let LocalTo = inTo;

    fs.mkdirSync(`${LocalTo}/${LocalElement}`);
};

export { StartFunc };