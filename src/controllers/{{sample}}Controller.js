import { GetFunc as GetFuncRepo, PostFunc as PostFuncRepo } from '../repos/{{sample}}Repo.js';

let GetFunc = (req, res) => {
    let LocalFromRepo = GetFuncRepo();
    res.json(LocalFromRepo);
};

let PostFunc = async (req, res) => {
    let LocalKeys = req.body['{{KSKeyName}}'];

    let LocalFromRepo = await PostFuncRepo({ LocalKey1: LocalKeys });
    res.json(LocalFromRepo);
};

export { GetFunc, PostFunc };