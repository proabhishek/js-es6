

let promise1 = new Promise((resolve,reject)=>{
    
    // setTimeout(()=>resolve("Work completed"), 2000)
    setTimeout(()=>reject(new Error("User profile doesnot exists")), 2000)
})

promise1.then(
    (message)=>console.log(message)
)
promise1.catch(()=> console.log("Error"))

promise1.then(f1,f2)

promises.finally(f1){

}
promise1.then(f1){

}
promise1.catch(f1){

}






// // let promise2 = new Promise((resolve,reject)=>{
    
// //     setTimeout(()=>reject(new Error("User profile doesnot exists")), 2000)
// // })


// // resolve() => success
// // reject() => failure


// // state, result

// // state:  "pending"
// // result: undefined

// // success => resolve()
// // state: "fulfilled"
// // result: "Work completed"

// // failure => reject()
// // state: "rejected"
// // result: Error("User profile doesnot exists")


// calll stack, event loop
// console.log("A")
// setTimeout(()=>console.log("B"), 0)
// console.log("C")