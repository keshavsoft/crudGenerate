import fs from 'fs';

let StartFunc = ({ inElement, inFrom, inTo }) => {
    let LocalElement = inElement;
    let LocalTypeName = "Middleware";
    let LocalFrom = inFrom;
    let LocalTo = inTo;
    let LocalKSSampleKey = "{{ksSample}}";

    let LocalFileData = fs.readFileSync(`${LocalFrom}/{{ksSample}}/{{ksSample}}${LocalTypeName}.js`);

    let LocalFileDataAfterReplace = LocalFileData.toString().replaceAll(LocalKSSampleKey, LocalElement);

    fs.writeFileSync(`${LocalTo}/${LocalElement}/${LocalElement}${LocalTypeName}.js`, LocalFileDataAfterReplace);
};

export { StartFunc };
