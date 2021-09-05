const nodemailer = require('nodemailer'); //require -> 설치된 모듈을 가져오는 명령어
const email = { //mailtrap -> smtp 서버를 대행해주는 사이트
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
    user: "0582b894d04f1d",
    pass: "77747b8e687dfd"
  }
};

const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) =>{
        if(error) {
            console.log(error);
        } else{
            console.log(info);
            return info.response;
        }
    });
};

let email_data = {
    from : 'soizzypizzy@gmail.com',
    to : 'soizzypizzy@gmail.com',
    subject : '테스트메일 입니다.',
    text : 'nodejs 한시간만에 끝내보자.'
}
send(email_data);