import fs from 'fs';

let CommonRoute = ["customers", "tickets"];
let CommonFrom = "src";
let CommonTo = "bin";

fs.mkdirSync(`${CommonTo}/routes`);
fs.mkdirSync(`${CommonTo}/middlewares`);
fs.mkdirSync(`${CommonTo}/controllers`);
fs.mkdirSync(`${CommonTo}/repos`);
fs.mkdirSync(`${CommonTo}/dals`);

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

let FuncForControllers = ({ inElement }) => {
    let LocalElement = inElement;
    let LocalTypeName = "Controller";
    let LocalFrom = CommonFrom;
    let LocalTo = CommonTo;

    let LocalFromRoute = fs.readFileSync(`${LocalFrom}/${LocalTypeName.toLowerCase()}s/{{sample}}${LocalTypeName}.js`);

    fs.writeFileSync(`${LocalTo}/${LocalTypeName.toLowerCase()}s/${LocalElement}${LocalTypeName}.js`, LocalFromRoute.toString().replaceAll("{{sample}}", LocalElement));
};

let FuncForRepos = ({ inElement }) => {
    let LocalElement = inElement;
    let LocalTypeName = "Repo";
    let LocalFrom = CommonFrom;
    let LocalTo = CommonTo;

    let LocalFromRoute = fs.readFileSync(`${LocalFrom}/${LocalTypeName.toLowerCase()}s/{{sample}}${LocalTypeName}.js`);

    fs.writeFileSync(`${LocalTo}/${LocalTypeName.toLowerCase()}s/${LocalElement}${LocalTypeName}.js`, LocalFromRoute.toString().replaceAll("{{sample}}", LocalElement));
};

let FuncForDals = ({ inElement }) => {
    let LocalElement = inElement;
    let LocalTypeName = "Dal";
    let LocalFrom = CommonFrom;
    let LocalTo = CommonTo;

    let LocalFromRoute = fs.readFileSync(`${LocalFrom}/${LocalTypeName.toLowerCase()}s/{{sample}}${LocalTypeName}.js`);

    fs.writeFileSync(`${LocalTo}/${LocalTypeName.toLowerCase()}s/${LocalElement}${LocalTypeName}.js`, LocalFromRoute.toString().replaceAll("{{sample}}", LocalElement));
};

CommonRoute.forEach(element => {
    FuncForRoutes({ inElement: element });
    FuncForMiddlewares({ inElement: element });
    FuncForControllers({ inElement: element });
    FuncForRepos({ inElement: element });
    FuncForDals({ inElement: element });
});
