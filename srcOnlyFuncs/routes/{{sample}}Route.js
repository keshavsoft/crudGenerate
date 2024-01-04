import express from 'express';

var router = express.Router();

import { GetFunc } from '../controllers/{{sample}}Controller.js';
import { GetFunc as GetFuncmiddleware } from '../middlewares/{{sample}}middleware.js';

router.get('/', GetFuncmiddleware, GetFunc);

export { router };