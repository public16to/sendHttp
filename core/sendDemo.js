/* eslint-disable no-console */
const send = require('./send.js');
const fs = require('fs');


// // 回调函数
// const showResult=(res)=>{
//   console.log(res.headers['set-cookie'][0]);
// }

// // send.SendForm("http://16to.com/admin/login.php","adminname=1&adminpass=2&code=xzfa","123",showResult);

// send.GetHtml("http://220.191.224.121:8090/yypt/search/portlet.xhtml",showResult);
// send.GetHtml("http://220.191.224.124:8090/yypt/search/portlet.xhtml",showResult);
// send.GetHtml("http://220.191.224.132:8090/yypt/search/portlet.xhtml",showResult);
// send.GetHtml("http://220.191.224.133:8090/yypt/search/portlet.xhtml",showResult);
// send.GetHtml("http://220.191.224.134:8090/yypt/search/portlet.xhtml",showResult);
// send.GetHtml("http://220.191.224.159:8090/yypt/search/portlet.xhtml",showResult);
const saveJpeg=(res)=>{
  fs.writeFile('a.jpeg');
}
send.GetJpeg("http://220.191.224.133:8666/yypt/search/random.xhtml?r=0.24254479444652083",saveJpeg);
