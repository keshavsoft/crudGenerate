import fs from 'fs';

let StartFunc = ({ inElement, inFrom, inTo }) => {

    let LocalElement = inElement;
    let LocalTypeName = "Route";
    let LocalFrom = inFrom;
    let LocalTo = inTo;

    let LocalFromRoute = fs.readFileSync(`${LocalFrom}/${LocalTypeName.toLowerCase()}s/{{sample}}${LocalTypeName}.js`);

    fs.writeFileSync(`${LocalTo}/${LocalTypeName.toLowerCase()}s/${LocalElement}${LocalTypeName}.js`, LocalFromRoute.toString().replaceAll("{{sample}}", LocalElement));
};

export { StartFunc };