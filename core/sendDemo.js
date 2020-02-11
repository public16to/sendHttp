/* eslint-disable no-console */
const send = require('./send.js');

// 回调函数
const showResult=(res)=>{
  console.log(res.headers['set-cookie'][0]);
}

// send.SendForm("http://16to.com/admin/login.php","adminname=1&adminpass=2&code=xzfa","123",showResult);

send.GetHtml("http://220.191.224.121:8090/yypt/search/portlet.xhtml",showResult);
send.GetHtml("http://220.191.224.124:8090/yypt/search/portlet.xhtml",showResult);
send.GetHtml("http://220.191.224.132:8090/yypt/search/portlet.xhtml",showResult);
send.GetHtml("http://220.191.224.133:8090/yypt/search/portlet.xhtml",showResult);
send.GetHtml("http://220.191.224.134:8090/yypt/search/portlet.xhtml",showResult);
send.GetHtml("http://220.191.224.159:8090/yypt/search/portlet.xhtml",showResult);