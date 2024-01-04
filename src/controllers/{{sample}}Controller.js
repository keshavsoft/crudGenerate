import { GetFunc as GetFuncRepo } from '../repos/{{sample}}Repo.js';

let GetFunc = (req, res) => {
    let LocalFromRepo = GetFuncRepo();
    res.json(LocalFromRepo);
};

let PostFunc = async (req, res) => {
    let LocalKeys = req.body['{{KSKeyName}}'];

    let LocalFromRepo = await GetFuncRepo({ LocalKey1: LocalKeys });
    res.json(LocalFromRepo);
};

export { GetFunc, PostFunc };