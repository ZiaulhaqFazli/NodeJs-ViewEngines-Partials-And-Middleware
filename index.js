const express = require('express');
const app = express();
const port = 3000;

//Set the view engine
app.set('view engine', 'ejs');
//Set your views directory in the sencond argument.
app.set('views', 'views');

//Middleware and static files
app.use(express.static('public'));

app.get('/', (req, res) => {

    const blogs = [
        { title: 'Blog 1',  body: ' A new blog1'},
        { title: 'Blog 2',  body: ' A new blog2'},
        { title: 'Blog 3',  body: ' A new blog3'},
    ];
    //Html file rendering and pass data to it.
    res.render('index', { title:'Index', blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title:'About'});
});

app.get('/404', (req, res) => {
    res.render('404', { title:'404'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create-blog', { title:'Create'});
});

//Middleware to handle the unknown request/route
app.use((req, res) => {
    res.status(404).render('404', { title:'404'});
});

//Port No on which the server is running
app.listen(port, 'localhost', () => {
    console.log("Server is running on Port:"+ port );
})