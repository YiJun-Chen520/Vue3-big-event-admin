<script setup>
import { ref } from 'vue'
import { artGetChannelsService } from '../../api/article'
import { onMounted } from 'vue'
import { Edit, Delete } from '@element-plus/icons-vue'

const artChannels = ref([])
const loading = ref(false)

// 获取文章分类
const getArtChannels = async () => {
  loading.value = true
  const res = await artGetChannelsService()
  artChannels.value = res.data.data
  loading.value = false
}

onMounted(() => {
  getArtChannels()
})

// 编辑文章分类
const ChannelEdit = (row, $index) => {
  console.log(row, $index)
}

// 删除文章分类
const ChannelDelete = (row, $index) => {
  console.log(row, $index)
}
</script>

<template>
  <page-container title="文章分类">
    <template #extra>
      <el-button type="primary">添加分类</el-button>
    </template>

    <el-table v-loading="loading" :data="artChannels" style="width: 100%">
      <el-table-column label="序号" width="100" type="index"></el-table-column>
      <el-table-column label="分类名称" prop="cate_name"></el-table-column>
      <el-table-column label="分类别名" prop="cate_alias"></el-table-column>
      <el-table-column label="操作" width="150">
        <template #default="{ row, $index }">
          <el-button
            type="primary"
            plain
            circle
            :icon="Edit"
            @click="ChannelEdit(row, $index)"
          ></el-button>
          <el-button
            type="danger"
            plain
            circle
            :icon="Delete"
            @click="ChannelDelete(row, $index)"
          ></el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="暂无数据"></el-empty>
      </template>
    </el-table>
  </page-container>
</template>

<style lang="scss" scoped></style>
