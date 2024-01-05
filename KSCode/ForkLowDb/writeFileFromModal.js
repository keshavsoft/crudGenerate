import fs from 'fs';

let StartFunc = ({ inElement, inFrom, inTo }) => {
    let LocalElement = inElement;
    let LocalTypeName = "kLowDb";
    let LocalFrom = inFrom;
    let LocalTo = inTo;
    let LocalSampleString = "{{sample}}";
    let LocalFileName = "writeFileFromModal.js";

    let LocalFileData = fs.readFileSync(`${LocalFrom}/${LocalTypeName}/${LocalSampleString}${LocalFileName}`);
    let LocalToFileData = LocalFileData.toString().replaceAll(LocalSampleString, LocalElement);

    fs.writeFileSync(`${LocalTo}/${LocalTypeName}/${LocalElement}/${LocalFileName}`, LocalToFileData);
};

export { StartFunc };