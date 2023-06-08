const express = require('express');
const app = express();
const ejs = require ('ejs');
const path = require('path');
const PORT = 5555;

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('public'));
const products = [
    {
        title: 'iphone 14',
        src: 'images/iphone.jpg'
    },
    {
        title: 'oppo',
        src: 'images/oppo.jpg'
    },
    {
        title: 'samsung',
        src: 'images/samsung.jpg'
    },
    {
        title: 'xiaomi',
        src: 'images/xiaomi.jpg'
    }
]

app.get('/',(req, res)=>{
    res.render('home',{data:products});
})

app.listen(PORT,'localhost',()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})