// pages/home-video/index.js
import { getTopMv } from '../../service/api_video'
Page({
  // 加载的生命周期
  async onLoad(options) {
    this.getTopMVData(0)
  },
  // 滚动到底部的生命周期
  async onReachBottom(){
    this.getTopMVData(this.data.topMVs.length)
  },
  // 下拉的生命周期
  async onPullDownRefresh(){
    this.setData({hasMore: true})
    this.getTopMVData(0)
  },
  data: {
    topMVs:"",
    hasMore:true
  },
  //封装的网络请求的方法
  async getTopMVData(offset){
    if(!this.data.hasMore) return
    wx.showNavigationBarLoading()
    const res = await getTopMv(offset)
    if(offset === 0){
      this.setData({topMVs:res.data})
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
      return
    }
    this.setData({topMVs: this.data.topMVs.concat(res.data)})
    this.setData({hasMore: res.hasMore})
    wx.hideNavigationBarLoading()
  },
  //相应业务方法
  // 加载的生命周期
  async onLoad(options) {
    this.getTopMVData(0)
  },
  // 滚动到底部的生命周期
  async onReachBottom(){
    this.getTopMVData(this.data.topMVs.length)
  },
  // 下拉的生命周期
  handleVideoItemClick(event){
    const id = event.currentTarget.dataset.item.id
    wx.navigateTo({
      url: '/pages/detail-video/index?id='+id,
    })
  }
})