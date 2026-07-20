import request from '@/utils/request'

// 获取文章频道列表
export const artGetChannelsService = () => {
  return request.get('/my/cate/list')
}

// 添加文章
export const artAddService = (data) => {
  return request.post('/my/cate/add', data)
}

// 更新文章
export const artEditService = (data) => {
  return request.put('/my/cate/info', data)
}

// 删除文章
export const artDelService = (id) => {
  return request.delete(`/my/cate/del?id=${id}`)
}
