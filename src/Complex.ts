import { prec } from "./util.ts"

export class Complex {
    readonly r
    readonly i

    get view() {
        return (prec(this.r, 3)?prec(this.r, 3)+"":prec(this.i, 3)?"":"0")
            +  (prec(this.r, 3)&&(prec(this.i, 3) > 0)?"+":"")
            +  (prec(this.i, 3)?`${
                prec(this.i, 3)!=1?prec(this.i, 3):""
            }i`:"")
    }

    constructor(r: number, i?: number) {
        this.r = r
        this.i = i || 0
    }
    add(c: Complex) {
        return new Complex(
            this.r + c.r,
            this.i + c.i,
        )
    }
    sub(c: Complex) {
        return new Complex(
            this.r - c.r,
            this.i - c.i,
        )
    }
    mul(c: Complex) {
        return new Complex(
            this.r * c.r - this.i * c.i,
            this.r * c.i + this.i * c.r,
        )
    }
    pow(n: number) {
        let result = new Complex(1)
        for(let i=0;i<n;i++) {
            result = result.mul(this)
        }
        return result
    }
    [Symbol.toPrimitive](hint: string) {
        if (hint == "string" || hint == "default") {
            return this.view
        }
    }
    
    static from(r: number, i?: number) {
        return new Complex(r, i)
    }
}