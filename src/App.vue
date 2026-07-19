<script setup>
import { useUserStore } from './stores/index'
const userStore = useUserStore()
</script>

<template>
  <router-view></router-view>
  <hr />
  <hr />
  <hr />
  <div>app</div>
  <p></p>
  <div>{{ userStore.token }}</div>
  <el-button @click="userStore.setToken('asjhdiohewoiasdw')" type="">更新</el-button>
  <el-button @click="userStore.removeToken()" type="">退出</el-button>
</template>

<style scoped></style>
