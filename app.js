/* eslint-disable no-console */
const send = require('./core/send.js');
const config = require('./config.js');
const querystring = require('querystring');

// 回调函数
const showResult=(res)=>{
  console.log(res);
}

// 发送抢购
function sendSX(){
    send.SendForm(config.url,querystring.stringify(config.form),config.cookie,showResult);
}

setInterval(() => {
    sendSX();
}, 50);
