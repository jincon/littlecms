function shareWeixin(){
    window.shareData = {
     "imgUrl": "http://zt.hefei.cc/zt2015/qixingtiyan/images/share.jpg",
    "sendFriendLink": "http://zt.hefei.cc/zt2015/qixingtiyan/",
    "tTitle": "青春骑行“助力合肥蓝 低碳骑行体验团”10月17日开拔探路！",
    "tContent":"2015魅力合肥金秋骑游大会“低碳骑行体验团”即将开始，50位骑友已整装待发！"
};

wx.config({
    debug: false, //为true时为调试模式,false为正常
    appId: appid,
    timestamp: timestamp,
    nonceStr:  nonceStr,
    signature: signature,
    jsApiList: ["onMenuShareTimeline",
        "onMenuShareAppMessage",
        "onMenuShareQQ",
        "onMenuShareWeibo"]
});

wx.ready(function (res) {
    //分享到朋友圈
    wx.onMenuShareTimeline({
        title: window.shareData.tTitle, // 分享标题
        link: window.shareData.sendFriendLink, // 分享链接
        imgUrl: window.shareData.imgUrl, // 分享图标
        success: function (res) {
            // 用户确认分享后执行的回调函数
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        }
    });
    //分享给朋友
    wx.onMenuShareAppMessage({
        title: window.shareData.tTitle, // 分享标题
        desc: window.shareData.tContent, // 分享描述
        link: window.shareData.sendFriendLink, // 分享链接
        imgUrl: window.shareData.imgUrl, // 分享图标
        success: function (res) {
            // 用户确认分享后执行的回调函数
        },
        cancel: function () {
            // 用户取消分享后执行的回调函
        }
    });
});
}
window.addEventListener("load",shareWeixin);