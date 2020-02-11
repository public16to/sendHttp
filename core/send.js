/* eslint-disable no-console */
/**
 * @author 16to
 * @desc http send发送类
 *
 */
const rp = require('request-promise');
const moment = require('moment');

// 表单发送
const SendForm = (url, content, cookie,callback) => {
  const timestamp = moment().format("YYYY-MM-DD HH:mm:ss.SSS");
  console.log(timestamp);
  return rp({
    uri : url,
    method: "POST",
    headers : { 
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
      'Content-Length':content.length,
      'Cookie':cookie,
    },
    body:content,
  })
  .then((response) => {
    if (callback) {
      callback(response);
    }
    return response;
  })
  .catch((error) => error);
}

// 获取页面
const GetHtml = (url, callback) => {
  return rp({
    uri : url,
    method: "GET",
    resolveWithFullResponse: true,// 返回体带所有内容
  })
  .then((response) => {
    if (callback) {
      callback(response);
    }
    return response;
  })
  .catch((error) => error);
}

exports.SendForm = SendForm;
exports.GetHtml = GetHtml;