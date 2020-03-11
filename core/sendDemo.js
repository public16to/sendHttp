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
  // var imgData = "";
  // res.setEncoding("binary"); //一定要设置response的编码为binary否则会下载下来的图片打不开
  // res.on("data", function(chunk){ //这步是我百度来的。。。。
  //     imgData+=chunk;
  // });
  fs.writeFile('aa.png',res,(err)=>{
    console.log(err)
  });
}
send.GetJpeg("http://jwgl.cqjtu.edu.cn/jsxsd/verifycode.servlet?t=0.33489178693749055",saveJpeg);
