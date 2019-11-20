const express = require('express'); 
const app = express(); 
const path = require('path'); 
const port = process.env.PORT || 4000; 

const indexRoute = require('./src/routes/index'); 

app.use('/', indexRoute);
app.use(express.static(path.join(__dirname, 'public')));



app.get('/submit', (req, res) => {
    console.log(res); 
})

app.use('/form', (req, res) => {
    res.sendFile(path.resolve("/public/html/submit.html"), {root: __dirname })
})


app.listen(port, () => {
    console.log('Example app listening on port 4000!');
});
