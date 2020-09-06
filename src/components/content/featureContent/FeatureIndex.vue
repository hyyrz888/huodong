<template>
  <div class="service-wrap layout-content">
    <div class="container">

      <div class="service-topbar">
        <a href="" class="service-banner"><img src="@/assets/images/fbanner.jpg" alt=""></a>
        <div class="service-tab-box flex align-center justify-between">
          <router-link to="/feature/indexService" active-class="checked"><div class="item">付费功能详情</div></router-link>
          <router-link to="/feature/allService" active-class="checked"><div class="item checked">全部功能列表</div></router-link>
        </div>
      </div>

      <router-view></router-view>

    </div>
  </div>
</template>

<script>
export default {
name: "FeatureIndex"
}
</script>

<style scoped>
.layout-content{
  height:100vh;
  overflow-y: auto
}
.container{
  width: 1200px;
  margin:0 auto
}
.service-wrap .service-topbar{
  margin: 102px auto 70px;
  text-align: center;
}
.service-topbar .service-banner{
  width: 100%;
  height: 168px;
  margin-bottom: 48px;
  display: inline-block;
}
.service-topbar img{
  display: block;
}
.service-tab-box{
  display: inline-block;
  height: 56px;
  padding: 3px;
  margin: 0 auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: #e6eaee;
  border-radius: 28px;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
}
.service-tab-box .item{
  width: 172px;
  height: 50px;
  line-height: 50px;
  color:#535353;
  display: inline-block;
  text-align: center;
}
.service-tab-box .item:hover{
  color:#4ac227;
}
.service-tab-box .checked div{
  background-color: #fff;
  border-radius: 25px;
  color:#4ac227;
}
</style>
