import { Maclaurin, cos, sin } from "../mod.ts"

const sinPrec = new Maclaurin(sin)
console.log(sinPrec.take(8))