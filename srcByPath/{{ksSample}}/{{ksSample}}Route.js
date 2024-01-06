import express from 'express';

var router{{ksSample}} = express.Router();

import {
    GetFunc, GetFromModalUuidFunc, GetFromModalUuidAndTSFunc,
    PostFunc, PostFromModalFunc, GetFromModalFunc
} from './{{ksSample}}Controller.js';

import { GetFunc as GetFuncmiddleware } from './{{ksSample}}Middleware.js';

router{{ksSample}}.get('/', GetFunc);
router{{ksSample}}.get('/FromModal', GetFromModalFunc);
router{{ksSample}}.get('/FromModalUuid', GetFromModalUuidFunc);
router{{ksSample}}.get('/FromModalUuidAndTS', GetFromModalUuidAndTSFunc);

router{{ksSample}}.post('/BodyCheck', GetFuncmiddleware, PostFunc);
router{{ksSample}}.post('/', PostFunc);
router{{ksSample}}.post('/FromModal', PostFromModalFunc);

export { router{{ksSample}} };