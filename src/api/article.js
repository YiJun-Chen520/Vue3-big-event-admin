import request from '@/utils/request'

// 获取文章频道列表
export const artGetChannelsService = () => {
  return request.get('/my/cate/list')
}
