import {
    fft,
    ifft, 
    slowFt,
    iSlowFt
} from "../mod.ts"

Deno.bench("PolyMul: 4*4 - FFT", () => {
    ifft(
        fft([4,3,2,1,0,0,0,0])
        .mul(fft([2,-1,3,-5,0,0,0,0]))
    )+""
})
Deno.bench("PolyMul: 4*4 - SlowFT", () => {
    iSlowFt(
        slowFt([4,3,2,1,0,0,0,0])
        .mul(slowFt([2,-1,3,-5,0,0,0,0]))
    )+""
})
const [a, b] = Array(2).fill(undefined).map(() => Array(16).fill(undefined).map(() => Math.round(Math.random() * 20 - 10)))
Deno.bench("PolyMul: 16*16 random - FFT", () => {
    ifft(
        fft(a)
        .mul(fft(b))
    )+""
})
Deno.bench("PolyMul: 16*16 random - SlowFT", () => {
    iSlowFt(
        slowFt(a)
        .mul(slowFt(b))
    )+""
})