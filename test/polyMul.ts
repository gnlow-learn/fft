import { assertEquals } from "https://deno.land/std/testing/asserts.ts"
import {
    Complex,
    Vector,
    fft,
    ifft, 
    slowFt,
    iSlowFt
} from "../mod.ts"



Deno.test("Polynomial Multiply", () => {
    assertEquals(
        fft([4,3,2,1].map(n => new Complex(n))).toString(),
        "10,2+2i,2,2-2i"
    )
    assertEquals(
        slowFt([4,3,2,1].map(n => new Complex(n))).toString(),
        "10,2+2i,2,2-2i"
    )

})

console.log(
    ifft(fft([4,3,2,1])
    .mul(fft([2,-1,3,-5])))
    +""
)