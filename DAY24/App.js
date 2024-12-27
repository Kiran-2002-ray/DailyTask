const express = require("express");
const app = express();

const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ];

app.use(express.json());

function getUser(userID) {
return new Promise((resolve, reject) => {
    const user = users.find(u => u.id === userID);
    if(user){
        resolve(user);
        console.log("user found")
    }
    else {
        reject('User not found');
    }
})
}

app.get('/user/:id', (req, res)=> {
    const userID = parseInt(req.params.id)

    getUser(userID)
    .then((user) =>{
        res.status(200).json(user);
    })
    .catch((error) => {
        res.status(404).json({error: error})
    })

})

app.get('/userposts', async(req, res) => {
    try{
        const respone = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await respone.json();
        res.status(200).json(data);

    }catch(error){
        res.status(500).json({error: 'Failed to fetch data'})
    }
    
})






app.listen(3000, () => {
    console.log('Server is running on port 3000');
})