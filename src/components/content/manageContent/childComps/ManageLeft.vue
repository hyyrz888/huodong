<template>
  <div id="manage-left">
    <div class="left-navlist">
      <el-row class="tac">
        <el-col>
          <el-menu
            :default-active="currentPage"
            class="el-menu-vertical-demo"
            active-text-color="#4ac227"
            router
          >
            <el-menu-item index="/manage/index">
              <i class="el-icon-menu"></i>
              <span slot="title">我的活动</span>
            </el-menu-item>
            <el-menu-item index="/manage/cavindex">
              <i class="el-icon-menu"></i>
              <span slot="title">核销管理</span>
            </el-menu-item>
            <el-menu-item index="/manage/PlayerRecord">
              <i class="el-icon-document"></i>
              <span slot="title">玩家记录</span>
            </el-menu-item>
            <el-menu-item index="/manage/myInfo">
              <i class="el-icon-setting"></i>
              <span slot="title">账号信息</span>
            </el-menu-item>
            <el-menu-item index="/manage/editHostInfo">
              <i class="el-icon-setting"></i>
              <span slot="title">主办单位</span>
            </el-menu-item>
            <el-menu-item index="/manage/authService">
              <i class="el-icon-setting"></i>
              <span slot="title">授权服务</span>
            </el-menu-item>
            <el-menu-item index="/manage/giftCenter">
              <i class="el-icon-setting"></i>
              <span slot="title">礼品中心</span>
            </el-menu-item>
            <el-menu-item index="/manage/employee">
              <i class="el-icon-setting"></i>
              <span slot="title">员工权限</span>
            </el-menu-item>
            <el-menu-item index="/manage/staffLog">
              <i class="el-icon-setting"></i>
              <span slot="title">操作日志</span>
            </el-menu-item>
            <el-menu-item index="/manage/hdManageToolKit">
              <i class="el-icon-setting"></i>
              <span slot="title">营销工具</span>
            </el-menu-item>
            <el-menu-item index="/manage/businessAstTab">
              <i class="el-icon-setting"></i>
              <span slot="title">商家助手</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "ManageLeft",
  data(){
    return {
      currentPage:'/manage/index'
    }
  },
  mounted() {
    this.currentPage =  this.$route.path
  }
}
</script>

<style scoped>
#manage-left {
  position: fixed;
  top: 70px;
  bottom: 0;
  box-shadow: 1px 0 6px 0 rgba(0, 0, 0, .08);
  overflow-y: auto;
  background: #fff;
}

.left-navlist {
  padding: 20px 0;
  width: 216px;
  height: 100%;
}
</style>
<style>
.left-navlist .el-menu-item {
  padding-left: 50px !important;
}
</style>
