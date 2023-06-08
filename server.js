// npm i express
const express = require('express');
// path is a standard package
const path = require('path');

// express() is a global function
const app = express();
// localhost:3001
const PORT = 3001;

// app = express
// letting express know that the 'public' folder has static content
app.use(express.static('public'));
