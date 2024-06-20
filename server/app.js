const express = require('express');
const hbs = require('express-handlebars');
const PORT = 3023;
const path = require("path") 

const app = express();

app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main'
}));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname + '/public')))

const indexRoutes = require("./routes/indexRoutes")

app.use ("", indexRoutes)

app.listen(PORT, ()=> {
    console.log('server is running')
});