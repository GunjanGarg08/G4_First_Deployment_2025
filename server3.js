const express = require("express");
const app = express()

const port = 8080

app.listen(port, () => {
    console.log(`Server is listening at port number = ${port}`)
})

let users = [
    {
        id: 1,
        name: "namebtado1",
        age: 1080,
        moto: "cse"
    },
    {
        id: 2,
        name: "namebtado2",
        age: 2080,
        moto: "ece"
    },
    {
        id: 3,
        name: "namebtado3",
        age: 3080,
        moto: "it"
    },
    {
        id: 4,
        name: "nahibtaunga",
        age: 4080,
        moto: "civil"
    }
]

app.patch("/user", (req, res) => {
    // req.body se information aaygi
    // aur vha sa ek id aaygi aur name aayega... id voh jiska name haame update krna hai and anme hamara update name aayega

    users.forEach(user => {
        if(user.id == req.body.id) {
            user.name = req.body.name;
        }
    })

    // let toUpdateUser = users.filter(user => user.id == req.body.id);

    // toUpdateUser.name = req.body.name;

    res.json({
        message: "User updated with the information",
        users // means key and value dono users hai joh ek object hai
    })
})