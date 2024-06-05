import checkType from '@/checkType';
import isEmpty from '@/isEmpty';

export interface UnknownObject {
    [key: string]: any;
}

const utils = {
    checkType,
    isEmpty,
};

export default utils;
