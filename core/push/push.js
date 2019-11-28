

const GeTui = require('gt-push-sdk');
const NotificationTemplate = require('gt-push-sdk/getui/template/NotificationTemplate');
const AppMessage = require('gt-push-sdk/getui/message/AppMessage');

// http的域名
const HOST = 'http://sdk.open.api.igexin.com/apiex.htm';

// https的域名
// let HOST = 'https://api.getui.com/apiex.htm';

// 定义常量, appId、appKey、masterSecret 采用本文档 "第二步 获取访问凭证 "中获得的应用配置
const APPID = '8IjojWNlxV58Ue0z5PpT94';
const APPKEY = 'uQGHPiNaO38TSmKRd3MOU3';
const MASTERSECRET = 'w06hgQBOCdAuhCm2ltHotA';

let gt = new GeTui(HOST, APPKEY, MASTERSECRET);

pushMessageToApp();


function pushMessageToApp() {
  // let taskGroupName = 'test';
  let taskGroupName = null;
  let template = new NotificationTemplate({
    appId: APPID,
    appKey: APPKEY,
    title: '时间到了，快喝水 唤醒',
    text: '时间到啦，要喝水啦，别忘记了8； 唤醒屏幕',
    // logoUrl: 'http://3.133.60.176:8080/static/img/robot.jpg',
    isRing: true,
    isVibrate: true,
    isClearable: true,
    transmissionType: 1,
    transmissionContent: '喝水啦2'
  });


  // 定义"AppMessage"类型消息对象，设置消息内容模板、发送的目标App列表、是否支持离线发送、以及离线消息有效期(单位毫秒)
  let message = new AppMessage({
    isOffline: false,
    offlineExpireTime: 3600 * 12 * 1000,
    data: template,
    appIdList: [APPID],
    speed: 0
  });

  gt.pushMessageToApp(message, taskGroupName, function (err, res) {
    console.log(err, res);
    gt.close()
    // gt.stop(res.contentId)
  });
}
