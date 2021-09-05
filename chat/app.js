// server
const express = require('express'); // require -> 설치된 모듈을 가지고 오는 함수
const http = require('http');
const app = express(); //express를 실행한 내용을 app에 담아줌
const path = require('path');
const server = http.createServer(app);
const socketIO = require('socket.io');
const moment = require('moment');

const io = socketIO(server);    //socket.io에서 server를 담아간 내용을 넣어줌

app.use(express.static(path.join(__dirname, 'src')));

const PORT = process.env.PORT || 5000;

io.on('connection', (socket)=>{
    socket.on('chatting', (data)=>{ //on(채팅아이디, 실행할 함수)
        const {name, msg} = data;

        io.emit('chatting', {
            name : name,
            msg : msg,
            time : moment(new Date()).format('h:mm A')
        })
    });
});

server.listen(PORT, ()=>console.log(`server is running ${PORT}`))  //PORT 변수를 사용하기 위해 ''가 아닌 ``를 사용
