import { GetFunc as GetFuncRepo } from '../repos/{{sample}}Repo.js';

let GetFunc = async (req, res) => {
    let LocalFromRepo = await GetFuncRepo();
    res.json(LocalFromRepo);
};

export { GetFunc };