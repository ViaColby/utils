/**
 * measure text length in html
 * @param text text in html
 * @param font CSS shorthand property string
 */

export const measureText = (text: string, font: string) => {
    let canvas: HTMLCanvasElement | null;
    let ctx: CanvasRenderingContext2D | null;

    canvas = document.createElement('canvas');
    ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    ctx.font = font;
    const metrics = ctx.measureText(text);

    canvas = null;
    ctx = null;
    return Math.ceil(metrics.width);
};
