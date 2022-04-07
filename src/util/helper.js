

const printDate = function(){
    console.log(module)
    let currentDate = new Date()
    console.log("Current Date is :"+currentDate.getDate())
    
}
const printMonth= function(){
    console.log(module)
    let currentDate = new Date()
    console.log("Current Date is :"+currentDate.getMonth())
    
}
const getBatchInfo = function(){
    console.log(module)
    console.log( 'uranium, W2D14, the topic for today is Nodejs module system')
    
}
module.exports.printD = printDate
module.exports.printM = printMonth
module.exports.Info = getBatchInfo