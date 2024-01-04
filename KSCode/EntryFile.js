import fs from 'fs';
import path from 'path';

import { StartFunc as StartFuncForControllers } from './ForControllers.js';

let CommonFromFolderName = "FromData";
let CommonRoutes = [];

let CommonFiles = fs.readdirSync(CommonFromFolderName);

CommonFiles.forEach(function (file, index) {
    // CommonRoutes.push(path.parse(file).name);
    let LoopInsideObject = {};
    LoopInsideObject.FileName = path.parse(file).name;
    let LoopInsideFileData = fs.readFileSync(`${CommonFromFolderName}/${file}`);
    let LoopInsideJsonData = JSON.parse(LoopInsideFileData);

    LoopInsideObject.Columns = Object.keys(LoopInsideJsonData[0]);
    CommonRoutes.push(LoopInsideObject);
});

console.log("CommonRoutes : ", CommonRoutes);

let StartFunc = ({ inFilesArray }) => {
    let LocalFilesArray = inFilesArray;
    let CommonFrom = "src";
    let CommonTo = "bin";

    fs.mkdirSync(`${CommonTo}/controllers`);

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
        StartFuncForControllers({
            inElement: element.FileName, inColumnsArray: element.Columns,
            inFrom: CommonFrom, inTo: CommonTo
        });
    });
};

StartFunc({ inFilesArray: CommonRoutes });