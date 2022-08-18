// pages/detail-video/index.js
import { getMVURL, getMVDetail, getRelatedVideo } from '../../service/api_video'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mvUrlInfo:{},
    mvDetail:{},
    relatedVideos:[],
    barrageList:[], // 弹幕列表(暂无)
  },
  onLoad(options) {
    //获取对应的ID
    const id = options.id
    //获取对应ID的数据
    this.getPageData(id)
  },
  getPageData(id){
    // 1.请求播放地址
    getMVURL(id).then(res=> this.setData({mvUrlInfo: res.data}))
    // 2.请求视频信息
    getMVDetail(id).then(res=> this.setData({mvDetail: res.data}))
    // 3.请求相关视频
    getRelatedVideo(id).then(res=> this.setData({relatedVideos: res.data}))
  },
  handleVideoItemClick(event){
    const id = event.currentTarget.dataset.item.vid
    wx.navigateTo({
      url: '/pages/detail-video/index?id='+id,
    })
  }
})