import {
    GetFunc as GetFuncDal, GetFromModalUuidFunc as GetFromModalUuidFuncDal,
    GetFromModalUuidAndTSFunc as GetFromModalUuidAndTSFuncDal,
    PostFunc as PostFuncDal,
    PostFromModalFunc as PostFromModalFuncDal, GetFromModalFunc as GetFromModalFuncDal
} from '../dals/{{sample}}Dal.js';

let GetFunc = () => {
    return GetFuncDal();
};

let GetFromModalFunc = () => {
    return GetFromModalFuncDal();
};

let GetFromModalUuidFunc = () => {
    return GetFromModalUuidFuncDal();
};

let GetFromModalUuidAndTSFunc = () => {
    return GetFromModalUuidAndTSFuncDal();
};

let PostFunc = ({ LocalKey1: LocalKeys }) => {
    return PostFuncDal({ LocalKey1: LocalKeys });
};

let PostFromModalFunc = ({ LocalKey1: LocalKeys }) => {
    return PostFromModalFuncDal({ LocalKey1: LocalKeys });
};

export {
    GetFunc, PostFunc, PostFromModalFunc, GetFromModalFunc,
    GetFromModalUuidFunc, GetFromModalUuidAndTSFunc
};