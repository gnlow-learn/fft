export function prec(number: number, precision: number) {
    const factor = Math.pow(10, precision)
    const n = precision < 0 ? number : 0.01 / factor + number
    return Math.round(n * factor) / factor;
}

export function factorial(n: number) {
    return [1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600, 6227020800, 87178291200, 1307674368000, 20922789888000, 355687428096000][n]
}