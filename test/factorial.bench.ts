
const fac1 = (x: number, acc=1): number =>
    x <= 1 ? acc : fac1(x-1, x*acc)
Deno.bench("Fac 1", () => {
    fac1(100)
})
const fac2 = (x: number): number =>
    x <= 0 ? 1 : x * fac2(x-1)
Deno.bench("Fac 2", () => {
    fac2(100)
})
const fac3 = (x: number) => {
    let result = 1
    for (let i=1;i<x+1;i++) {
        result *= i
    }
    return result
}
Deno.bench("Fac 3", () => {
    fac3(100)
})

const fac1Bigint = (x: bigint, acc = 1n): bigint =>
    x <= 1n ? acc : fac1Bigint(x-1n, x*acc)
Deno.bench("Fac 1 Bigint", () => {
    fac1Bigint(5000n)
})
const fac2Bigint = (x: bigint, acc = 1n): bigint =>
    x <= 0n ? 1n : x * fac2Bigint(x-1n)
Deno.bench("Fac 2 Bigint", () => {
    fac2Bigint(5000n)
})
const fac3Bigint = (x: bigint) => {
    let result = 1n
    for (let i=1n;i<x+1n;i++) {
        result *= i
    }
    return result
}
Deno.bench("Fac 3 Bigint", () => {
    fac3Bigint(5000n)
})

export function Memoize(x: number) {
    const f: bigint[] = []
    function fac(n: number): bigint {
        return n <= 1
            ? 1n
            : f[n] > 0 
                ? f[n]
                : f[n] = fac(n-1)*BigInt(n)
    }
    return fac(x)
}
Deno.bench("Memoize Bigint", () => {
    Memoize(5000)
})