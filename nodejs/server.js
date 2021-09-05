const express = require("express");
const app = express();

const server = app.listen(3000, () => {
    console.log('Start Server : localhost:3000');
});

app.set('views', __dirname + '/views'); //dirname : 현재의 디렉토리 이름
app.set('view engine', 'ejs');  //view를 보여줄 엔진 / ejs : Embedded JavaScript Template -> html 안에서 javascipt 코드를 쓸 수 있게끔 해주는 템플릿
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
    res.render('index.html');
});

app.get('/about', function (req, res) {
    res.render('about.html')
});

