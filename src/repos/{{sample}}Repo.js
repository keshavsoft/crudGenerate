import { GetFunc as GetFuncDal } from '../dals/{{sample}}Dal.js';

let GetFunc = async () => {
    return await GetFuncDal();
};

export { GetFunc };