
// const mount=9;
// if(mount<10){
//     console.log('hola')
// }else{
//     console.log("hola parte 1")
// }

// console.log('mi primer script con node')

const {names}=require('./4_names')
const sayHi=require('./5_utils')
const data=require('./6_alternative-flavor')
require('./7_mind-granade')
console.log(data)
console.log(names)
console.log(sayHi)

sayHi('fran')
sayHi(names.fran)
sayHi(names.carlos)

