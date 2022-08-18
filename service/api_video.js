import keyieReuest from './index'
import keyieRequest from './index'

//请求mvlist
export function getTopMv(offset,limit = 10){
  return keyieRequest.get('/top/mv',{
    offset,
    limit
  })
}

//请求MV播放地址
export function getMVURL(id){
  return keyieReuest.get("/mv/url",{
    id
  })
}
//请求MV详情
export function getMVDetail(mvid){
  return keyieReuest.get("/mv/detail",{
    mvid
  })
}
//请求mv播放视频
export function getRelatedVideo(id){
  return keyieReuest.get("/related/allvideo",{
    id
  })
}