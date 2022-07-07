import { Complex } from "./Complex.ts"
import { flow } from "./deps.ts"

export class Fn {
    readonly f
    declare diff: () => Fn
    constructor(f: (x: Complex) => Complex, diff?: () => Fn) {
        this.f = f
        diff && (this.diff = diff)
    }
    mul(c: Complex): Fn {
        return new Fn(x => this.f(x).mul(c), () => this.diff().mul(c))
        
    }
    setDiff(diff: Fn) {
        this.diff = function() {return diff}
        return this
    }
}

const sin = new Fn(Complex.lift(Math.sin))
const cos = new Fn(Complex.lift(Math.cos))
sin.setDiff(cos)
cos.setDiff(sin.mul(new Complex(-1)))
export { sin, cos }