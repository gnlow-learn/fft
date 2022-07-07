export function prec(number: number, precision: number) {
    const factor = Math.pow(10, precision)
    const n = precision < 0 ? number : 0.01 / factor + number
    return Math.round(n * factor) / factor;
}