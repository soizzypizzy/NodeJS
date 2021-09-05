// client
'use strict'

const socket = io();    //client socket io를 담아줌

const nickname = document.querySelector('#nickname');
const chatList = document.querySelector('.chatting-list');
const chatInput = document.querySelector('.chatting-input');
const sendButton = document.querySelector('.send-button');
const displayContainer = document.querySelector('.display-container')

chatInput.addEventListener('keypress', (event) =>{
    if(event.keyCode === 13){
        send();
    }
})

function send(){
    const param = {
        name : nickname.value,
        msg : chatInput.value,
    }
    socket.emit('chatting', param);
}

sendButton.addEventListener('click', ()=>{
   send();
});

socket.on('chatting', (data)=>{
    const { name, msg, time } = data;
    const item = new LiModel(name, msg, time); //초기화
    item.makeLi();
    displayContainer.scrollTo(0, displayContainer.scrollHeight)
});

function LiModel(name, msg, time){
    this.name = name;
    this.msg = msg;
    this.time = time;

    this.makeLi = ()=>{
        const li = document.createElement('li');
        li.classList.add(nickname.value === this.name ? 'sent' : 'received');
        const dom = `<span class="profile">
        <span class='user'>${this.name}</span>
        <img class="image" src="https://placeimg.com/50/50/any" alt="any">
        </span>
        <span class="message">${this.msg}</span>
        <span class="time">${this.time}</span>`;
        li.innerHTML = dom;
        chatList.appendChild(li);
    }
}

/*
// emit을 통해서 보내고 on을 통해서 받음
socket.emit('chatting', 'from front');  // emit(채팅아이디, 전달할 문자열);

socket.on('chatting', (data)=>{
    console.log(data);
});
*/

console.log(socket);