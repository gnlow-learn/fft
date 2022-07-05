import { Complex, fft, ifft } from "./mod.ts"

const a = fft([1,2,7,8].map(x => new Complex(x)))
console.log(a.toString())
const b = ifft(a)
console.log(b.toString())