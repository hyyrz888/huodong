<template>
  <div id="service">
    <el-card class="box-card">
      <div slot="header" class="clearfix header-title flex align-center">
        <span class="flex-item">公众号付费功能</span>
      </div>
      <div  class="text item">
        <p>企业帐号： lf18864016</p>
      </div>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix header-title flex align-center">
        <span class="flex-item">公众号授权</span>
      </div>
      <div  class="text item flex align-center justify-between">
        <div class="item-left">
          <p>公众号授权状态： <b>未授权</b></p>
          <p class="myInfo_tips">授权后根据不同公众号类型可开启以下微信应用功能 <a class="myInfo_link">详情</a></p>
        </div>
        <div class="item-right">
          <el-button icon="el-icon-wchat" type="success" plain>前往微信授权</el-button>
        </div>
      </div>

      <!--微信功能-->
      <div class="wchat-feature">
        <p>微信应用功能</p>
        <el-row :gutter="20">
          <el-col :span="6" :md="12" :lg="8" :xl="6">
            <div class="grid-content">
              <div class="grid-img">
                <img src="@/assets/images/mp01.jpg" alt="" />
              </div>
              <div class="grid-info">
                <h4>开通微信授权功能</h4>
                <small>需已验证服务号</small>
                <el-button type="info" size="medium">立即开通</el-button>
              </div>
            </div>
          </el-col>
          <el-col :span="6" :md="12" :lg="8" :xl="6">
            <div class="grid-content">
              <div class="grid-img">
                <img src="@/assets/images/mp01.jpg" alt="" />
              </div>
              <div class="grid-info">
                <h4>开通微信授权功能</h4>
                <small>需已验证服务号</small>
                <el-button type="info" size="medium">立即开通</el-button>
              </div>
            </div>
          </el-col>
          <el-col :span="6" :md="12" :lg="8" :xl="6">
            <div class="grid-content">
              <div class="grid-img">
                <img src="@/assets/images/mp01.jpg" alt="" />
              </div>
              <div class="grid-info">
                <h4>开通微信授权功能</h4>
                <small>需已验证服务号</small>
                <el-button type="info" size="medium">立即开通</el-button>
              </div>
            </div>
          </el-col>
          <el-col :span="6" :md="12" :lg="8" :xl="6">
            <div class="grid-content">
              <div class="grid-img">
                <img src="@/assets/images/mp01.jpg" alt="" />
              </div>
              <div class="grid-info">
                <h4>开通微信授权功能</h4>
                <small>需已验证服务号</small>
                <el-button type="info" size="medium">立即开通</el-button>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
name: "AuthService"
}
</script>

<style scoped>
.header-title{
  font-size: 16px;
}
.myInfo_tips{
  color:#b1b1b1;
  line-height:22px
}
.myInfo_link{
  color:#888;
  text-decoration: underline;
  margin-left: 16px;
}
.myInfo_link:hover{
  color:#4ac227;
}
.item{
  margin-bottom: 20px;
  border-bottom:1px solid #e7e7e7
}
.wchat-feature p{
  margin-top:12px;
  margin-bottom: 20px;
}
.wchat-feature .grid-content{
  border: 1px solid #e7e7e7;
  overflow: hidden;
  margin-bottom: 20px;
}
.wchat-feature .grid-content .grid-img{
  float: left;
  width:99px;
  height: 100px;
  border-right:1px solid #e7e7e7
}
.wchat-feature .grid-content .grid-img img{
  width: 100%;
  display: block;
}
.wchat-feature .grid-content .grid-info{
  position: relative;
  padding-top:10px;
  padding-left: 110px;
}
.wchat-feature .grid-content .grid-info small{
  color:#898989;
}
.wchat-feature .grid-content .grid-info button{
  position: absolute;
  right: 10px;
  top:32px
}
</style>
<style>
.el-link{
  color:#888
}
</style>
