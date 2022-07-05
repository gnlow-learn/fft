function prec(number: number, precision: number) {
    const factor = Math.pow(10, precision)
    const n = precision < 0 ? number : 0.01 / factor + number
    return Math.round(n * factor) / factor;
  }

class Complex {
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
    [Symbol.toPrimitive](hint: string) {
        if (hint == "string" || hint == "default") {
            return (prec(this.r, 3)?prec(this.r, 3)+"":"")
                +  (prec(this.r, 3)&&(prec(this.i, 3) > 0)?"+":"")
                +  (prec(this.i, 3)?`${
                    prec(this.i, 3)!=1?prec(this.i, 3):""
                }i`:"")
        }
    }
}

const tau = 2 * Math.PI

function fft(p: Complex[]): Complex[] {
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

console.log(fft([1,2,3,4].map(x => new Complex(x))).toString())

console.log()