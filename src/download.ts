/**
 * Download file by url in browser
 *
 * @param {string} url The file url
 * @param {string} fileName The file name
 *
 */

export const download = (url: string, fileName: string): void => {
    if (!url) {
        throw new Error('No download link detected!');
    }
    let aLink: HTMLAnchorElement | null;

    aLink = document.createElement('a');
    aLink.target = '_blank';
    aLink.rel = 'noopener noreferrer';
    aLink.download = fileName;
    aLink.href = url;
    aLink.dispatchEvent(new MouseEvent('click', {}));

    setTimeout(() => {
        aLink = null;
    }, 1000);
};

/**
 * Download file by file stream in browser
 *
 * @param {string} stream The file stream
 * @param {string} fileName The file name
 * @param {string} type The MIME type
 *
 */
export const downloadByFileStream = (stream: string, fileName: string, type: string = ''): void => {
    if (!stream) {
        throw new Error('No file stream detected!');
    }
    const blob = new Blob([stream], { type });
    const url = URL.createObjectURL(blob);
    download(url, fileName);

    setTimeout(() => {
        URL.revokeObjectURL(url);
    }, 1000);
};
