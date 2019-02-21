const fetch = require('node-fetch');


fetch('http://localhost:8080/authors',{
    method: 'POST',
    headers:{
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        author:{
            name: 'George R Martin',
            genre: 'Fantasy',
            books_attributes:[
                {
                    name: 'Dance of Fire and Ice'
                }
            ]
        }
    })
})
.then( response => console.log(response.status))