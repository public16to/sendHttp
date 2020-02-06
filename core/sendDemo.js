/* eslint-disable no-console */
const send = require('./send.js');

// 回调函数
const showResult=(res)=>{
  console.log(res);
}

send.SendForm("http://16to.com/admin/login.php","adminname=1&adminpass=2&code=xzfa",showResult);