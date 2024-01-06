import fs from 'fs';
import { StartFunc as StartFuncForImports } from './ForImports.js';
import { StartFunc as StartFuncForRouterUse } from './ForRouterUse.js';

let StartFunc = ({ inEndPointsArray, inFrom, inTo }) => {
    let LocalEndPointsArray = inEndPointsArray;

    let LocalFileName = "routes.js";
    let LocalFrom = inFrom;
    let LocalTo = inTo;

    let LocalFileData = fs.readFileSync(`${LocalFrom}/${LocalFileName}`);

    let LocalFromForImports = StartFuncForImports({ inEndPointsArray: LocalEndPointsArray, inFileData: LocalFileData.toString() });
    let LocalFromForRouterUse = StartFuncForRouterUse({ inEndPointsArray: LocalEndPointsArray, inFileData: LocalFromForImports });

    fs.writeFileSync(`${LocalTo}/${LocalFileName}`, LocalFromForRouterUse);
};

export { StartFunc };