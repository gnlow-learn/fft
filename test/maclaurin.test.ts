import { Maclaurin, cos, sin } from "../mod.ts"

const cosPrec = new Maclaurin(cos)
console.log(cosPrec.take(5))