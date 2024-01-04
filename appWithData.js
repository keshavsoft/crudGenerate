import fs from 'fs';
import path from 'path';

import ToConfigJson from './src/ToConfig.json' assert { type: 'json' };

let CommonFromFolderName = "FromData";
let CommonRoutes = [];

let CommonFiles = fs.readdirSync(CommonFromFolderName);

CommonFiles.forEach(function (file, index) {
    CommonRoutes.push(path.parse(file).name);
});

let StartFunc = ({ inFilesArray }) => {
    let LocalFilesArray = inFilesArray;
    let CommonFrom = "src";
    let CommonTo = "bin";

    fs.mkdirSync(`${CommonTo}/routes`);
    fs.mkdirSync(`${CommonTo}/middlewares`);
    fs.mkdirSync(`${CommonTo}/controllers`);

    // fs.mkdirSync("middlewares");
    // fs.mkdirSync("controllers");
    // fs.mkdirSync("repos");
    // fs.mkdirSync("dal");

    let FuncForRoutes = ({ inElement }) => {
        let LocalElement = inElement;
        let LocalTypeName = "Route";
        let LocalFrom = CommonFrom;
        let LocalTo = CommonTo;

        let LocalFromRoute = fs.readFileSync(`${LocalFrom}/${LocalTypeName.toLowerCase()}s/{{sample}}${LocalTypeName}.js`);

        fs.writeFileSync(`${LocalTo}/${LocalTypeName.toLowerCase()}s/${LocalElement}${LocalTypeName}.js`, LocalFromRoute.toString().replaceAll("{{sample}}", LocalElement));
    };

    let FuncForMiddlewares = ({ inElement }) => {
        let LocalElement = inElement;
        let LocalTypeName = "Middleware";
        let LocalFrom = CommonFrom;
        let LocalTo = CommonTo;

        let LocalFromRoute = fs.readFileSync(`${LocalFrom}/${LocalTypeName.toLowerCase()}s/{{sample}}${LocalTypeName}.js`);

        fs.writeFileSync(`${LocalTo}/${LocalTypeName.toLowerCase()}s/${LocalElement}${LocalTypeName}.js`, LocalFromRoute.toString().replaceAll("{{sample}}", LocalElement));
    };

    let FuncForControllers = ({ inElement, inColumnsArray }) => {
        let LocalElement = inElement;
        let LocalTypeName = "Controller";
        let LocalFrom = CommonFrom;
        let LocalTo = CommonTo;

        let LocalFromRoute = fs.readFileSync(`${LocalFrom}/${LocalTypeName.toLowerCase()}s/{{sample}}${LocalTypeName}.js`);

        let LocalForPost = "let LocalKeys = req.body['{{KSKeyName}}'];"
        
        let LocalPost = LocalFromRoute.toString().replaceAll(LocalForPost, `let LocalKey${inColumnsArray[0]} = req.body['${inColumnsArray[0]}'];`);

        let LocalForPostToFunc = "({ LocalKey1: LocalKeys })"

        let LocalPostToFunc = LocalPost.toString().replaceAll(LocalForPostToFunc, `({ in${inColumnsArray[0]}: LocalKey${inColumnsArray[0]} })`);

        fs.writeFileSync(`${LocalTo}/${LocalTypeName.toLowerCase()}s/${LocalElement}${LocalTypeName}.js`, LocalPostToFunc);
    };

    LocalFilesArray.forEach(element => {
        FuncForRoutes({ inElement: element });
        FuncForMiddlewares({ inElement: element });
        FuncForControllers({
            inElement: element, inColumnsArray: [
                "CustomerName"
            ]
        });
    });
};

StartFunc({ inFilesArray: CommonRoutes });

// fs.cpSync(`${CommonFromFolderName}`, ToConfigJson.JsonPath, { recursive: true });