import express from 'express';

var routerTickets = express.Router();

import {
    GetFunc, GetFromModalUuidFunc, GetFromModalUuidAndTSFunc,
    PostFunc, PostFromModalFunc, GetFromModalFunc
} from './TicketsController.js';

import { GetFunc as GetFuncmiddleware } from './TicketsMiddleware.js';

routerTickets.get('/', GetFunc);
routerTickets.get('/FromModal', GetFromModalFunc);
routerTickets.get('/FromModalUuid', GetFromModalUuidFunc);
routerTickets.get('/FromModalUuidAndTS', GetFromModalUuidAndTSFunc);

routerTickets.post('/BodyCheck', GetFuncmiddleware, PostFunc);
routerTickets.post('/', PostFunc);
routerTickets.post('/FromModal', PostFromModalFunc);

export { routerTickets };