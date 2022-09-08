const express = require('express')
const path = require('path');

const app = express();
const port = 3000;
const publicPath = path.join(__dirname, '/public'); 

app.use(express.static(publicPath));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/home.html');
});

app.listen(process.env.PORT || port, () => {
  console.log(`Servidor corriendo en puerto ${port}`)
})