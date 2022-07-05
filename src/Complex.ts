function prec(number: number, precision: number) {
    const factor = Math.pow(10, precision)
    const n = precision < 0 ? number : 0.01 / factor + number
    return Math.round(n * factor) / factor;
}

export class Complex {
    private r
    private i
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
            return (prec(this.r, 3)?prec(this.r, 3)+"":prec(this.i, 3)?"":"0")
                +  (prec(this.r, 3)&&(prec(this.i, 3) > 0)?"+":"")
                +  (prec(this.i, 3)?`${
                    prec(this.i, 3)!=1?prec(this.i, 3):""
                }i`:"")
        }
    }
}