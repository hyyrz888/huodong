<template>
  <div class="manage-active">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部" name="first">全部</el-tab-pane>
      <el-tab-pane label="未发布" name="second">未发布</el-tab-pane>
      <el-tab-pane label="未开始" name="third">未开始</el-tab-pane>
      <el-tab-pane label="进行中" name="fourth">进行中</el-tab-pane>
      <el-tab-pane label="已结束" name="five">已结束</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
name: "CavIndex"
}
</script>

<style scoped>

</style>
