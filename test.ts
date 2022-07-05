import { Complex, fft, ifft, slowFt, iSlowFt } from "./mod.ts"

const a = fft([1,2,3,4,5,6,7,8].map(x => new Complex(x)))
console.log(a.toString())
const x = slowFt([1,2,3,4,5,6,7,8].map(x => new Complex(x)))
console.log(x.toString())
const b = ifft(a)
console.log(b.toString())
const y = iSlowFt(a)
console.log(y.toString())