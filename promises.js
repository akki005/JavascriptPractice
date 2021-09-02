/**
 * A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.
 */

/**`
 * states : fulfilled,rejected,pending,settled
 */

// async function test() {
//     zzzz
// }

// async function run() {
//     try {
//         await test()
//     } catch (error) {
//         console.log(error)
//     }
// }

// run()



function wait(cb){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        },1000)
    })
}


wait().then(wait)



function promisify(fn) {
    return (args) => {
        return new Promise((resolve, reject) => {
            function cb(error, data) {
                if (error) {
                    reject(error)
                } else {
                    resolve(data)
                }
            }
            fn(args, cb)
        })
    }
}

function wait(cb){
    setTimeout(()=>{
        console.log("wait")
        cb()
    },1000)
}