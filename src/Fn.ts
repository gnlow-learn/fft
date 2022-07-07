export class Fn {
    readonly f
    declare diff: () => Fn
    constructor(f: (x: number) => number, diff?: () => Fn) {
        this.f = f
        diff && (this.diff = diff)
    }
    mul(c: number): Fn {
        return new Fn(x => this.f(x) * c, () => this.diff().mul(c))
        
    }
    setDiff(diff: Fn) {
        this.diff = function() {return diff}
        return this
    }
}

const sin = new Fn(Math.sin)
const cos = new Fn(Math.cos)
sin.setDiff(cos)
cos.setDiff(sin.mul(-1))
export { sin, cos }