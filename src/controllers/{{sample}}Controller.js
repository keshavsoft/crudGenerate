import {
    GetFunc as GetFuncRepo, GetFromModalUuidFunc as GetFromModalUuidFuncRepo,
    GetFromModalUuidAndTSFunc as GetFromModalUuidAndTSFuncRepo,
    PostFunc as PostFuncRepo,
    PostFromModalFunc as PostFromModalFuncRepo, GetFromModalFunc as GetFromModalFuncRepo,
} from '../repos/{{sample}}Repo.js';

let GetFunc = (req, res) => {
    let LocalFromRepo = GetFuncRepo();
    res.json(LocalFromRepo);
};

let GetFromModalFunc = (req, res) => {
    let LocalFromRepo = GetFromModalFuncRepo();
    res.json(LocalFromRepo);
};

let GetFromModalUuidFunc = (req, res) => {
    let LocalFromRepo = GetFromModalUuidFuncRepo();
    res.json(LocalFromRepo);
};

let GetFromModalUuidAndTSFunc = (req, res) => {
    let LocalFromRepo = GetFromModalUuidAndTSFuncRepo();
    res.json(LocalFromRepo);
};

let PostFunc = (req, res) => {
    let LocalKeys = req.body['{{KSKeyName}}'];

    let LocalFromRepo = PostFuncRepo({ LocalKey1: LocalKeys });
    res.json(LocalFromRepo);
};

let PostFromModalFunc = (req, res) => {
    let LocalKeys = req.body['{{KSKeyName}}'];

    let LocalFromRepo = PostFromModalFuncRepo({ LocalKey1: LocalKeys });
    res.json(LocalFromRepo);
};

export {
    GetFunc, PostFunc, PostFromModalFunc, GetFromModalFunc,
    GetFromModalUuidFunc, GetFromModalUuidAndTSFunc
};