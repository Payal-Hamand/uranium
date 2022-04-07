
const fun = function (){
    console.log(module)
    console.log(' Using trim method  '.trim(),' trim method is use for cut the exatra space')
}
const fun1 = function (){
    console.log(module)
    console.log('Use for all letter in UpperCase : ','payal hamand'.toUpperCase())
}
const fun2 = function (){
    console.log(module)
    console.log('Use for all letter in LowerCase : ','payal hamand'.toLowerCase())
}
module.exports.tr=fun
module.exports.UC=fun1
module.exports.LW=fun2