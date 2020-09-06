<template>
  <div id="manage-right">
    <div class="right-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
name: "ManageRight"
}
</script>

<style scoped>
#manage-right{
  position: fixed;
  left: 216px;
  bottom: 0;
  right: 0;
  top: 70px;
  overflow-y:auto;
}
.right-content{
  width: 100%;
  height: 100%;
  padding:32px
}
</style>
