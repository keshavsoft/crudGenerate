import express from 'express';

var router = express.Router();

import {
    GetFunc, GetFromModalUuidFunc, GetFromModalUuidAndTSFunc,
    PostFunc, PostFromModalFunc, GetFromModalFunc
} from '../controllers/{{sample}}Controller.js';

import { GetFunc as GetFuncmiddleware } from '../middlewares/{{sample}}middleware.js';

router.get('/', GetFunc);
router.get('/FromModal', GetFromModalFunc);
router.get('/FromModalUuid', GetFromModalUuidFunc);
router.get('/FromModalUuidAndTS', GetFromModalUuidAndTSFunc);

router.post('/BodyCheck', GetFuncmiddleware, PostFunc);
router.post('/', PostFunc);
router.post('/FromModal', PostFromModalFunc);

export { router };