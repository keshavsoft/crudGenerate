import {
    GetFunc as GetFuncDal, PostFunc as PostFuncDal,
    PostFromModalFunc as PostFromModalFuncDal, GetFromModalFunc as GetFromModalFuncDal
} from '../dals/{{sample}}Dal.js';

let GetFunc = () => {
    return GetFuncDal();
};

let GetFromModalFunc = () => {
    return GetFromModalFuncDal();
};

let PostFunc = ({ LocalKey1: LocalKeys }) => {
    return PostFuncDal({ LocalKey1: LocalKeys });
};

let PostFromModalFunc = ({ LocalKey1: LocalKeys }) => {
    return PostFromModalFuncDal({ LocalKey1: LocalKeys });
};

export { GetFunc, PostFunc, PostFromModalFunc, GetFromModalFunc };