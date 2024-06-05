import checkType from '@/checkType';
import isEmpty from '@/isEmpty';
import downloadByUrl from '@/downloadByUrl';
import downloadByFileStream from '@/downloadByFileStream';
import flatArrayToTree from '@/flatArrayToTree';

const utils = {
    checkType,
    downloadByUrl,
    downloadByFileStream,
    flatArrayToTree,
    isEmpty,
};

export default utils;

export { checkType, downloadByUrl, downloadByFileStream, flatArrayToTree, isEmpty };
