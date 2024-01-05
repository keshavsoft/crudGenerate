import fs from 'fs';
import path from 'path';

import { StartFunc as StartFuncBaseDirs } from './BaseDirs/EntryFile.js';

import { StartFunc as StartFuncForRoutesFile } from './ForRoutesFile/EntryFile.js';

import { StartFunc as StartFuncFordataModals } from './FordataModals.js';
import { StartFunc as StartFuncForRoutes } from './ForRoutes.js';
import { StartFunc as StartFuncForMiddlewares } from './ForMiddlewares.js';
import { StartFunc as StartFuncForControllers } from './ForControllers.js';
import { StartFunc as StartFuncForRepos } from './ForRepos.js';
import { StartFunc as StartFuncForDals } from './ForDals.js';
// import { StartFunc as StartFuncForkLowDb } from './ForkLowDb.js';
// import { StartFunc as StartFuncForRestClients } from './ForRestClients.js';

import { StartFunc as StartFuncForkLowDb } from './ForkLowDb/EntryFile.js';
import { StartFunc as StartFuncForRestClients } from './ForRestClients/EntryFile.js';
import { StartFunc as StartFuncCopyDatas } from './CopyDatas/EntryFile.js';

let CommonFromFolderName = "FromData";
let CommonRoutes = [];

let CommonFiles = fs.readdirSync(CommonFromFolderName);

CommonFiles.forEach(function (file, index) {
    let LoopInsideObject = {};
    LoopInsideObject.FileName = path.parse(file).name;
    let LoopInsideFileData = fs.readFileSync(`${CommonFromFolderName}/${file}`);
    let LoopInsideJsonData = JSON.parse(LoopInsideFileData);

    LoopInsideObject.Columns = Object.keys(LoopInsideJsonData[0]);
    CommonRoutes.push(LoopInsideObject);
});

// console.log("CommonRoutes : ", CommonRoutes);

let StartFunc = ({ inFilesArray }) => {
    let LocalFilesArray = inFilesArray;
    let CommonFrom = "src";
    let CommonTo = "bin";

    StartFuncBaseDirs({ inTo: CommonTo });

    StartFuncForRoutesFile({
        inEndPointsArray: LocalFilesArray.map(element => element.FileName),
        inFrom: CommonFrom, inTo: CommonTo
    });

    LocalFilesArray.forEach(element => {
        StartFuncFordataModals({
            inElement: element.FileName,
            inColumnsArray: element.Columns, inTo: CommonTo
        });

        StartFuncForRoutes({
            inElement: element.FileName,
            inFrom: CommonFrom, inTo: CommonTo
        });

        StartFuncForMiddlewares({
            inElement: element.FileName,
            inFrom: CommonFrom, inTo: CommonTo
        });

        StartFuncForControllers({
            inElement: element.FileName, inColumnsArray: element.Columns,
            inFrom: CommonFrom, inTo: CommonTo
        });

        StartFuncForRepos({
            inElement: element.FileName, inColumnsArray: element.Columns,
            inFrom: CommonFrom, inTo: CommonTo
        });

        StartFuncForDals({
            inElement: element.FileName, inColumnsArray: element.Columns,
            inFrom: CommonFrom, inTo: CommonTo
        });

        StartFuncForkLowDb({
            inElement: element.FileName, inColumnsArray: element.Columns,
            inFrom: CommonFrom, inTo: CommonTo
        });

        StartFuncForRestClients({
            inElement: element.FileName, inColumnsArray: element.Columns,
            inFrom: CommonFrom, inTo: CommonTo
        });

        StartFuncCopyDatas({
            inFromFolderName: CommonFromFolderName
        });
    });
};

StartFunc({ inFilesArray: CommonRoutes });