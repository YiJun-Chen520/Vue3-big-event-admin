import request from '../utils/request'

// 账号注册
export const userRegisterService = ({ username, password, repassword }) => {
  return request.post('/api/reg', { username, password, repassword })
}

// 账号登录
export const userLoginService = ({ username, password }) => {
  return request.post('/api/login', { username, password })
}

// 获取账号信息
export const userGetInfoService = () => {
  return request.get('/my/userinfo')
}
