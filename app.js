/* eslint-disable no-console */
const send = require("./core/send.js");
const config = require("./config.js");
const querystring = require("querystring");
const moment = require("moment");
const Cron = require("cron").CronJob;

// 回调函数
const showResult = res => {
  console.log(res);
};

// 发送抢购
function sendSX() {
  let timestamp;
  config.forEach(e => {
    timestamp = moment().format("YYYY-MM-DD HH:mm:ss.SSS");
    console.log(timestamp);
    send.SendForm(e.url, querystring.stringify(e.form), e.cookie, showResult);
  });
}

// 定时抢
function timeSend() {
  sendSX();
  setInterval(() => {
    sendSX();
  }, 50);
}

// sendSX();

const tmp = new Cron(
  "0 0 15 * * *",
  () => timeSend(),
  null,
  true,
  "Asia/Shanghai"
);
