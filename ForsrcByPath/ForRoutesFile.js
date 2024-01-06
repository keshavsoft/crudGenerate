import fs from 'fs';

let StartFunc = ({ inEndPointsArray, inFrom, inTo }) => {
    let LocalEndPointsArray = inEndPointsArray;

    let LocalFileName = "routes.js";
    let LocalFrom = inFrom;
    let LocalTo = inTo;

    let LocalFromRoute = fs.readFileSync(`${LocalFrom}/${LocalFileName}`);

    let LocalToSearch = "router.use('/{{sample}}', routerStart);";

    // import { router as router{{sample}} } from './routes/{{sample}}Route.js';

    let FromLocalForEndPoints = LocalForEndPoints({ inEndPointsArray: LocalEndPointsArray, inToSearch: LocalToSearch });
    let LocalNewData = LocalFromRoute.toString().replaceAll(LocalToSearch, FromLocalForEndPoints);

    fs.writeFileSync(`${LocalTo}/${LocalFileName}`, LocalNewData);
};

let LocalForEndPoints = ({ inEndPointsArray, inToSearch }) => {
    let LocalEndPointsArray = inEndPointsArray;

    let LocalToSearch = inToSearch;

    let LocalNewArray = LocalEndPointsArray.map(element => {
        return LocalToSearch.replaceAll("{{sample}}", element);
    });

    return LocalNewArray.join("\r\n\t");
};

let LocalForImports = ({ inEndPointsArray, inToSearch }) => {
    let LocalEndPointsArray = inEndPointsArray;

    let LocalToSearch = inToSearch;

    let LocalNewArray = LocalEndPointsArray.map(element => {
        return LocalToSearch.replaceAll("{{sample}}", element);
    });

    return LocalNewArray.join("\r\n\t");
};

export { StartFunc };