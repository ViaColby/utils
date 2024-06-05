/**
 * Download file by url in browser
 *
 * @param {string} url The file url
 * @param {string} fileName The file name
 *
 */

const downloadByUrl = (url: string, fileName: string): void => {
    if (!url) {
        throw new Error('No download link detected!');
    }
    const aLink = document.createElement('a');
    aLink.target = '_blank';
    aLink.rel = 'noopener noreferrer';
    aLink.download = fileName;
    aLink.href = url;
    aLink.dispatchEvent(new MouseEvent('click', {}));
};

export default downloadByUrl;
