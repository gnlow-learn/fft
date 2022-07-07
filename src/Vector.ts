import { Complex } from "./Complex.ts"
import { flow } from "./deps.ts"

export class Vector {
    arr
    get view() {
        return this.arr.map(
            c => Number.isNaN(Number(c.view)) 
                ? c.view
                : Number(c.view)
        )
    }
    get length() {
        return Math.sqrt(
            this.arr
            .map(n => n.pow(2).r)
            .reduce((p, c) => p + c, 0)
        )
    }

    constructor(arr: Complex[] = []) {
        this.arr = [...arr]
    }

    mul(multiplier: number | Vector) {
        if (typeof multiplier == "number") {
            return new Vector(this.arr.map(
                n => n.mul(Complex.from(multiplier))
            ))
        } else {
            return new Vector(this.arr.map(
                (n, i) => n.mul(multiplier.arr[i])
            ))
        }
    }
    [Symbol.toPrimitive](hint: string) {
        if (hint == "string" || hint == "default") {
            return this.view.toString()
        } else if (hint == "number") {
            return this.length
        }
    }

    static from(arr: number[] | Complex[] | Vector) {
        if (!Array.isArray(arr)) {
            return arr
        } else if (typeof arr[0] == "number") {
            return new Vector((arr as number[]).map(Complex.from))
        } else {
            return new Vector(arr as Complex[])
        }
    }
    static lift(f: (a: Complex[]) => Complex[]) {
        return flow(
            Vector.from,
            (p: Vector) => p.arr,
            f,
            Vector.from,
        )
    }
}