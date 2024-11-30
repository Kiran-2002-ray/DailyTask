// const axios = require('axios');

// console.log("...............fetch api data using async await.....................")

// const FetchPostsData = async () => {
//     const data = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const post = await data.json();
//     console.log(post)

//     const PostId = post.map(post => post.id)
//     const PostTitle = post.map(post => post.title)
//     console.log(PostId, PostTitle);

// }
// FetchPostsData()



// const fetchApi = async() => {
//     const data = await fetch("https://jsonplaceholder.typicode.com/todos")
//     const response = await data.json();
//     console.log(response)
// } 
// fetchApi();



// console.log("...............fetch API data using promises.....................")

// const fetchData = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(response => {
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//         })
//         .catch(error => {
//             console.error(error);
//         })
// }
// fetchData();



// console.log("...............fetch data using callback.....................")

// function fetchWithCallback(callback){
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(function (response){
//         return response.json();
//     })
//     .then(function(data){
//         callback(null, data);
//     })
//     .catch(function(error){
//         callback(error, null)
//     })
// }
// const handleCall = (error, data) => {
//     if(error){
//         console.error(error)
//     }else{
//         console.log(data);
//     }
// }
// fetchWithCallback(handleCall)




// console.log("...............get data using axios with async await....................")
// const AxiosData = async () => {
//         try{
//             const data = await axios.get("https://cat-fact.herokuapp.com/facts")
//             console.log(data);            
//         }
//         catch(error){
//                 console.error("Error fetching data", error)
//             }
//         }
//         AxiosData();    

        
// console.log("...............get data using axios with promises....................")
// const AxiosData1 = () => {
//             axios.get("https://cat-fact.herokuapp.com/facts")
//             .then(data =>console.log(data))
//             .catch(error => console.error("Error fetching data", error))
//         }
//     AxiosData1(); 


    
//     console.log("...............get data using axios with callback function....................")

// const fetchDataWithCallback = (url, callback) => {
//     axios.get(url)
//     .then(response => {
//         callback(response.data, null)
//     })
//     .catch(error => {
//         callback(null, error)
//     });
// };
// const handleData  = (data, error) => {
//     if(error){
//         console.error(error);
//     }else{
//         console.log(data)
//     }
// }
// fetchDataWithCallback("https://jsonplaceholder.typicode.com/posts", handleData);

