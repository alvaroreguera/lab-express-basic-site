const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();


// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route
app.get('/', (req,res) => {
    console.log(req);
    //res.send('<h1>Welcome Ironhacker. :)</h1>');
    res.sendFile(__dirname + '/views/home-page.html');

});

app.get('/gallery', (req,res) => {
    console.log(req);
    //res.send('<h1>Gallery. :)</h1>');
    res.sendFile(__dirname + '/views/gallery.html');

});

app.get('/about', (req,res) => {
    console.log(req);
    //res.send('<h1>about. :)</h1>');
    res.sendFile(__dirname + '/views/about.html');

});



// Server Started
app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
});