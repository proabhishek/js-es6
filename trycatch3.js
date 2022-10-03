
// try{
//     a
// }
// catch(x){
//     // console.log(err)
//     console.log(x.name)
//     console.log(x.message)
// }
// console.log("At end")



// try{
//     a
// }
// catch(err){
//     console.log("b")
// }
// finally{
//     console.log("c")
// }


try {
    let obj = {
        name: "Rahul",
        age: 23,
    }
    if(!obj.city){
         throw new Error("City is not defined")
    }
    
}
catch(err){
   console.log(err.message)
}




















