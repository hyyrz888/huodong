<template>
  <div class="md-header flex justify-between align-center">
    <div class="header-logo">
      <a :href="logoUrl" class="mdlogo"><img src="@/assets/logo.png" alt=""></a>
    </div>
    <div class="header-menu flex flex-item align-center">
      <div class="item first-item pointer active">
        活动市场
      </div>
      <div class="item manage-center pointer">
        管理中心
      </div>
      <div class="item feature-cate pointer">
        功能目录
      </div>
    </div>
    <!--图标菜单-->
    <div class="hd-menu flex align-center justify-between">
      <div class="menu-item flex justify-center align-center pointer">
        <i class="el-icon-suitcase-1"/>
      </div>
      <div class="menu-item flex justify-center align-center pointer">
        <i class="el-icon-bell"/>
      </div>
      <div class="menu-item flex justify-center align-center pointer">
        <i class="el-icon-service"/>
      </div>
      <div class="menu-item flex justify-center align-center pointer">
        <i class="el-icon-user"/>
      </div>
    </div>
    <!--按钮-->
    <div class="header-btn flex justify-center">
      <el-button type="success" plain size="medium">免费版</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MdHeader",
  data() {
    return {
      logoUrl:'http://www.dq800.com'
    }
  }
}
</script>

<style scoped>
.md-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #fff;
  -webkit-box-shadow: 0 1px 6px 0 rgba(0, 0, 0, .06);
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, .06);
  padding: 0 32px;
  z-index: 30;
}
.header-menu .item{
  position: relative;
  font-size: 16px;
  color: #535353;
  margin-left: 50px;
}
.header-menu .item:hover{
  color:#4ec227
}
.header-menu .item.active{
  font-weight: 700;
  color:#4ec227
}
.header-menu .item.active:after{
  position:absolute;
  width:40px;
  height:4px;
  content:'';
  bottom:-23px;
  left:50%;
  transform: translateX(-50%);
  border-radius: 2px;
  background-color: #4ec227;
}
.header-menu .item.first-item{
  margin-left:76px;
}
.hd-menu .menu-item{
  width:40px;
  height:40px;
  margin-left: 14px;
  border-radius: 50%;
}
.hd-menu .menu-item:hover{
   background: #f0f5ff;
}
.hd-menu .menu-item:hover i {
  color: #4ec227;
}
.hd-menu .menu-item i{
  font-size: 24px;
}
.header-btn{
  width:120px
}
</style>
