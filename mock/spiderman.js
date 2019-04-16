const fs = require('fs');
const http = require('http');

fs.readFile('./indexmock.js', (err, data) => {
    if (err) throw err;
    let obj = JSON.parse(data.toString());
    
})