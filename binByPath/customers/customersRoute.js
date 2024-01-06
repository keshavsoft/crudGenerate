import express from 'express';

var routercustomers = express.Router();

import {
    GetFunc, GetFromModalUuidFunc, GetFromModalUuidAndTSFunc,
    PostFunc, PostFromModalFunc, GetFromModalFunc
} from './customersController.js';

import { GetFunc as GetFuncmiddleware } from './customersMiddleware.js';

routercustomers.get('/', GetFunc);
routercustomers.get('/FromModal', GetFromModalFunc);
routercustomers.get('/FromModalUuid', GetFromModalUuidFunc);
routercustomers.get('/FromModalUuidAndTS', GetFromModalUuidAndTSFunc);

routercustomers.post('/BodyCheck', GetFuncmiddleware, PostFunc);
routercustomers.post('/', PostFunc);
routercustomers.post('/FromModal', PostFromModalFunc);

export { routercustomers };