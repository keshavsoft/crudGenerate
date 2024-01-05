import fs from 'fs';

let StartFunc = ({ inTo }) => {
    let LocalTo = inTo;

    fs.mkdirSync(`${LocalTo}/dataModals`);
    fs.mkdirSync(`${LocalTo}/routes`);
    fs.mkdirSync(`${LocalTo}/middlewares`);
    fs.mkdirSync(`${LocalTo}/controllers`);
    fs.mkdirSync(`${LocalTo}/repos`);
    fs.mkdirSync(`${LocalTo}/dals`);
    fs.mkdirSync(`${LocalTo}/kLowDb`);

    fs.mkdirSync(`${LocalTo}/restClients`);
};

export { StartFunc };