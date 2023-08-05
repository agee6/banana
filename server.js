const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));

// Define other routes or APIs as needed
app.get('/', (req, res) => {
    res.sendFile(__dirname +  '/public/index.html');
});
app.get('/marriner', (req, res) => {
    res.sendFile(__dirname + '/public/marriner.html');
});

app.get('/banana', (req, res) => {
    res.sendFile(__dirname + '/public/banana.html');
});
app.get('/orange', (req, res) => {
    res.sendFile(__dirname + '/public/orange.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

