import { Complex } from "./Complex.ts"

const tau = 2 * Math.PI

export function fft(p: Complex[]): Complex[] {
    const n = p.length
    if (n == 1) return p
    const w = new Complex(
        Math.cos(tau / n),
        Math.sin(tau / n),
    )
    console.log(`${w}`)
    const [pEven, pOdd] = [
        p.filter((_, i) => i % 2 == 0),
        p.filter((_, i) => i % 2 == 1),
    ]
    const [yEven, yOdd] = [fft(pEven), fft(pOdd)]
    const y: Complex[] = Array(n).fill(undefined).fill(new Complex(0))
    let wJ = new Complex(1, 0)
    for (let j=0;j<n/2;j++) {
        console.log(yEven+"", yOdd+"", j+"")
        y[j] = yEven[j].add(wJ.mul(yOdd[j]))
        y[j + n/2] = yEven[j].sub(wJ.mul(yOdd[j]))
        wJ = wJ.mul(w)
    }
    return y
}