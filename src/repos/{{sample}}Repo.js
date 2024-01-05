import { GetFunc as GetFuncDal, PostFunc as PostFuncDal } from '../dals/{{sample}}Dal.js';

let GetFunc = () => {
    return GetFuncDal();
};

let PostFunc = ({ LocalKey1: LocalKeys }) => {
    return PostFuncDal({ LocalKey1: LocalKeys });
};

export { GetFunc, PostFunc };