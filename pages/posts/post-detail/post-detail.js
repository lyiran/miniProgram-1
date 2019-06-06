var postsData = require('../../../data/posts-data.js');

Page({
  data: {

  },
  onLoad:function(option) {
    var postId = option.id;
    var postData = postsData.postList[postId];
    // 如果在onLoad方法中，不是异步的去执行一个数据绑定
    // 则不需要使用this.setData方法
    // 只需要对this.data赋值即可实现数据绑定
    // this.data.postData = postData;
    this.setData({
      postData: postData
    });

    var postsCollected = wx.getStorageSync("posts_collected");
    if (postsCollected) {
      var postCollected = postsCollected[postId]
      if (postcollected) {
        this.setData({
          collected: postCollected
        })
      }
    }
    else {
      var postsCollected = {};
      postsCollected[postId] = false;
      wx.setStorageSync("posts_collected", postsCollected);
    }
  },
  onCollectionTap:function(event) {
    var game = wx.getStorageSync('key');
    console.log(game);
  },
  onShareTap:function(event) {
    wx.removeStorageSync("key");
  }
})