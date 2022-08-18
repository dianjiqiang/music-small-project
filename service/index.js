const baseUrl = 'http://123.207.32.32:9001'
class KeyieRequest {
  request(url, method, params){
    return new Promise((resove,reject)=>{
      wx.request({
        url: baseUrl + url,
        method,
        data:params, 
        success(data){
          resove(data.data)
        }, 
        fail(rej){
          reject(rej) 
        }
      })
    })
  }

  get(url,params){
    return this.request(url,'get',params)
  }

  post(url,params){
    return this.request(url,'post',params)
  }
}

const keyieReuest = new KeyieRequest()

export default keyieReuest