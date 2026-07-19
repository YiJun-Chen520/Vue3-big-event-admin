import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userGetInfoService } from '@/api/user'

export const useUserStore = defineStore(
  'big-user',
  () => {
    // 登录状态
    const token = ref('')
    const setToken = (newToken) => {
      token.value = newToken
    }
    const removeToken = () => {
      token.value = ''
    }

    // 用户信息
    const userInfo = ref({})
    const getUserInfo = async () => {
      const res = await userGetInfoService()
      userInfo.value = res.data.data
    }

    return {
      token,
      setToken,
      removeToken,
      userInfo,
      getUserInfo,
    }
  },
  {
    persist: true,
  },
)
