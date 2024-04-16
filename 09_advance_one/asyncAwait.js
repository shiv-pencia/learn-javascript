/* 
Async-Await
async function always return a promise
async function myunc() {....}


await pause the execution of its surrounding async function until the promise is settled
*/


 
async function hello() {
    console.log("hello");
}
hello()


function api() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("done see your data");
        resolve(200)
        },2000)
    })
}

async function getData() {
    await api();
    await api()
}
getData()


































