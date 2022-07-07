import { Fn } from "../Fn.ts"
import { factorial } from "../util.ts"

export class Maclaurin {
    f
    private cache: number[] = []
    private nowF: Fn
    constructor (f: Fn) {
        this.nowF = this.f = f
    }
    take(n: number) {
        if (this.cache.length >= n) {
            return this.cache.slice(0, n)
        } else {
            for(let i=0;this.cache.length<n;i++) {
                this.cache.push(
                    this.nowF.f(0)
                    /
                    (i > 1 ? factorial(i-1) : 1)
                )
                this.nowF = this.nowF.diff()
            }
            return this.cache
        }
    }
}