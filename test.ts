import { Complex, fft } from "./mod.ts"

console.log(fft([1,2,3,4].map(x => new Complex(x))).toString())

console.log()