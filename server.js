// // -----------------------------------------------

// const express = require("express");
// const app = express()

// // Home route -> fb.com

// app.get('/', (req, res) => { // callback Function
//     // req and res -> object
//     // req object -> frontent sai data bhejte hai voh sab aata hai
//     // res object ke andar jo aap send krte ho uski poori information hoti hai
//     res.send('Welcome to G4')
// })

// app.get("/testseries", (req,res) => {
//     res.send("Test Series Started")
// })

// app.get("/testSeriesEnd", (req,res) => {
//     console.log("Test Series Ended ") // Agar response nahi diya toh cursor browser par ghumta hi rahega
//     res.send("Hello, Test Series Ended")
// })

// app.get("/users", (req, res) => {
//   res.send("All Users")
// })

// app.listen(3000, () => { // Mac main yeh port baar baar change krna pdhta hai... normal pc main zaroorat nahi hai
//     console.log("Server is running")
// })


// // Ctrl + c => Server Close
// // Start => node server.js
// // Everytime if we make any changes we need to restart the server
// // nodemon -> install krna padega agar server baar baar restart ni karna
// // npm i nodemon --> harr project ke liye install krna pdega alag sa, yha par dependencies main dikhega
// // npm i nodemon -g --> pure pc globally main install hojega... next time install krne ki zaroorat nahi padegi, yha par dependencies main nahi dikhega
// // sudo npm i nodemon -g --> For Mac

// // npx nodemon server.js

// // Rapid Tables Notepad


const express = require("express")
const app = express();
let port = 8063;

app.use(express.json())
app.use(express.urlencoded()) // x-www-form-urlencoded (select in body in postman) data ko handle karne ke liye... agar aap frontend se data bhejte ho toh yeh zaroori hai

// let users = [
//   // initially yeh empty hoga... jab frontend sa pass karenge uske baad information aaygi
//   // {
//   //   name: "gungun",
//   //   age: 19,
//   //   location: "rajpura city"
//   // },
//   // {
//   //   name: "rajan",
//   //   age: 20,
//   //   location: "jhansla city"
//   // },
//   // {
//   //   name: "gagan",
//   //   age: 19,
//   //   location: "rajpura city"
//   // }
// ]

// app.get("/user", (req,res) => {
//   res.send(users);
// })

// app.post("/user", (req, res) => {
//   // user add karenge

//   console.log(req.body);
//   // res.send("information received");

//   // res.json(req.body);

//   res.json({ // json format main information jaaaygi
//     status: "received",
//     info: req.body
//   })
//   {
//     "status": "received",
//     "info": {
//         "name": "radha",
//         "age": "20"
//     }
//   }
// })

// app.use(function(req,res,next) {
//   console.log("I am Middleware 1");
//   next(); // middleware ko aage badhane ka liye... "/" route tak pahunchane ka liye, agar aisa nahi karenge toh localhost par voh cursor ghumta rahega... aur yeh "I am Middleware 1" terminal par print ho jayega
// })

// We can make multiple middleware function

// app.use(function(req,res,next) {
//   console.log("Hello World I am Middleware function 2");
//   next();
// })

// app.get("/", (req, res) => {
//   res.send("Hello World");
// })

let users = [];

/* {
  username: value,
  password: value,
  security key:
}
*/

// get users
app.get("/user",(req,res) => {
  res.json({
    message: "List of all users in the database",
    users: users
  })
})

app.post("/user", (req,res) => {
  console.log(req.body);
  let userObj = {};
  userObj.username = req.body.username,
  userObj.password = req.body.password,
  userObj.securityKey = req.body.securityKey,

  users.push(userObj);
  
  res.json({
    message: "user added successfully",
    users
  })
})

app.delete("/user", (req,res) => {
  users = [];

  res.json({
    message: "All users deleted",
    users
  })
})

app.update("/user", (req,res) => {
  
})

// Template Literal - use of BackTicks
app.listen(port, () =>{
  console.log(`Listening at port ${port}`);
})