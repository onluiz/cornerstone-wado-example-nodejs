const express = require('express');
const app = express();
app.use('/', express.static(__dirname + '/public'));
app.listen(3000, function() { 
    console.log('listening port 3000')
    console.log('http://localhost:3000/cornerstoneWADOImageLoader/examples/dicomfile/')
});