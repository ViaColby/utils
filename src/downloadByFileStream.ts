import downloadByUrl from '@/downloadByUrl';

/**
 * Download file by file stream in browser
 *
 * @param {string} stream The file stream
 * @param {string} fileName The file name
 * @param {string} type The MIME type
 *
 */

const downloadByFileStream = (stream: string, fileName: string, type: string = ''): void => {
    if (!stream) {
        throw new Error('No file stream detected!');
    }
    const blob = new Blob([stream], { type });
    const url = URL.createObjectURL(blob);
    downloadByUrl(url, fileName);
};

export default downloadByFileStream;
