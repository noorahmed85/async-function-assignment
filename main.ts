// // Question # 1
// // Write a simple asynchronous TypeScript function fetchGreeting that returns a 
// // greeting message after a 2-second delay using setTimeou
async function fetchGreeting(){
    await  
    setTimeout(() => {
    console.log("greeting message is", "eid ul azha mubarak");
    }, 2000);

}
fetchGreeting()
// // answer is greeting is eid ul azha mubark ..
// //  Question # 2
// //  Write a function simulateTask that simulates a task by logging "Task started", 
// //  waits for 1 second, and then logs "Task completed". Use setTimeout for the delay
// function simulateTask () {
//     console.log(`Task Started`);
//     setTimeout(( ) => {
//     console.log(`Task Completed`);

//     }, 1000) // 1 seconds delay
// }
// simulateTask()
// Question # 3
// Write a function fetchData that returns a Promise which resolves with the string 
// "Data fetched successfully!" after a delay of 1 second.

// function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//     resolve("Data Fetch Succesfuly")
//         }, 1000);
//     })
// }
// fetchData().then((data) => {
//     console.log(data)
// });
// Question # 4
// Write a function fetchWithError that returns a Promise. It should randomly either 
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a 
// delay of 1 second. Handle the rejection using .catch
// let myCow: string = "white";
// function fetchWithError() {
//     return new Promise((reject, resolved) => {
//         setTimeout(() => {
//             if ("myCow is white") {
//         resolved("yes your cow is white")
//         } else {
//         reject("Data fetch failed!")
//         }
//     }, 1000)
//     })
// }
// fetchWithError().catch((myCow) =>{
//     console.log(myCow)
// })
// Question # 5
// Write a function executeSequentially that executes two functions fetchData and 
// processData sequentially using Promises, and logs the results in the order they are 
// called

// function fetchData() {
//     return new Promise((resolve) => {
//     const data = ("Successfully Data Fetched")
//     resolve(data)
// })
// }
// function processData(data: any) {
//     return new Promise((resolve) => {
//             const processedData = `${data} and processed`;
//             resolve(processedData);
//     });
// }

// function executeSequentially() {
//     fetchData()
//         .then((data) => {
//             console.log(data);
//             return processData(data);
//         })
//         .then((processedData) => {
//             console.log(processedData);
//         })
//         .catch((error) => {
//             console.error("An error occurred:", error);
//         });
// }

// executeSequentially();
