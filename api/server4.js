const express = require('express');
const app = express();
const ejs = require('ejs'); // required for deployment
// const port = 8080; // not required to deploy for vercel

const path = require('path'); // required to set the views directory for ejs files

// const chalk = require('chalk'); // not supported in latest version
// import chalk from 'chalk'; // but, since we have used require in express so we cannot import the things with two different methods
const chalk = require('chalk'); // so, we will use the previous version of chalk to make able to use this module using require
// Otherwise, we need to change the syntax of require in express to import one...

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// chalk npm package can be used to style the console output with different colours
// npm i chalk

// app.set('view engine', 'ejs'); // setting the view engine to ejs, iski vajaha sa .ejs likhne li zaroorat nahi padegi
// above is valid when the server4.js is not in app folder instead is in main folder
app.set('views', path.join(__dirname, 'views')); // setting the views directory for ejs files

// app.listen(port, () => {
//   console.log(chalk.blue(`Server is running on http://localhost:${port}`));
// }); // not required to deploy for vercel

// app.get('/', (req, res) => {
//   res.send('<div> <h1> Welcome to the Express Server </h1> <ul> <li> Item 1 </li> <li> Item 2 </li> </ul> </div>'); // Very unprofessional method to use html like this
// });

// So, we will use EJS - Embedded JavaScript Templates

// app.get('/', (req,res) => {
//     // res.render("index.ejs")
//     res.render("index")
// })

app.get('/home/:name', (req,res) => {
    const name = req.params.name;
    res.render("index", { name: name })
}) // localhost:8080/home/yourname -> yourname ki jagaha joh bhi name likhoge voh show hoga

// CODEPEN

module.exports = app; // exporting the app to use it in other files, like in index.js, or for deployment at vercel