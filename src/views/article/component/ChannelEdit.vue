<script setup>
import { ref } from 'vue'
import { artAddService, artEditService } from '@/api/article'

const dialogVisible = ref(false)
const formRef = ref(null)

const open = async (row) => {
  dialogVisible.value = true
  formModel.value = { ...row }
}

defineExpose({
  open,
})

const formModel = ref({
  cate_name: '',
  cate_alias: '',
})
const rules = {
  cate_name: [
    { required: true, message: '请输入分类名称', trigger: 'blur' },
    {
      pattern: /^\S{1,10}$/,
      message: '分类名称长度不能超过10个字符',
      trigger: 'blur',
    },
  ],
  cate_alias: [
    { required: true, message: '请输入分类别名', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9_]{1,15}$/,
      message: '分类别名长度不能超过15个字符',
      trigger: 'blur',
    },
  ],
}

const emit = defineEmits(['success'])
// 提交表单
const handleSub = async () => {
  // 表单预校验
  await formRef.value.validate()

  if (formModel.value.id) {
    // 编辑
    await artEditService(formModel.value)
    ElMessage.success('编辑成功')
  } else {
    // 添加
    await artAddService(formModel.value)
    ElMessage.success('添加成功')
  }

  dialogVisible.value = false
  // 子传父刷新页面
  emit('success')
}
</script>

<template>
  <el-dialog v-model="dialogVisible" :title="formModel.id ? '编辑分类' : '添加分类'" width="30%">
    <el-form
      ref="formRef"
      :model="formModel"
      :rules="rules"
      label-width="100px"
      style="padding-right: 30px"
    >
      <el-form-item label="分类名称" prop="cate_name">
        <el-input v-model="formModel.cate_name"></el-input>
      </el-form-item>
      <el-form-item label="分类别名" prop="cate_alias">
        <el-input v-model="formModel.cate_alias"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSub">确认</el-button>
      </div>
    </template>
  </el-dialog>
</template>
