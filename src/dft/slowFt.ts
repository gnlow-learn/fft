import { Complex } from "../Complex.ts"
import { Vector } from "../Vector.ts"

const tau = 2 * Math.PI

const slowFtProto = (isInverse: boolean) => (p: Complex[]) => {
    const n = p.length
    if (n == 1) return p
    const w = new Complex(
        Math.cos(tau / n),
        Math.sin(tau / n) * (isInverse ? -1 : 1),
    )
    let y: Complex[] = []
    let wJ = new Complex(1)
    for (let j=0;j<n;j++) {
        y.push(
            p
            .map((x, i) => x.mul(wJ.pow(i)))
            .reduce((p, c) => p.add(c))
        )
        wJ = wJ.mul(w)
    }
    if (isInverse) return y.map(c => c.mul(new Complex(1 / n)))
    else return y
}

export const slowFt = Vector.lift(slowFtProto(false))
export const iSlowFt = Vector.lift(slowFtProto(true))