<template>
  <div class="market-wrap layout-content">

<!-- 左侧菜单-->
    <div class="market-sidebar">
      <div class="market-sidebar-header">
        <el-input
            placeholder="输入搜索内容"
            suffix-icon="el-icon-search"
             class="search">
        </el-input>
      </div>
      <!--遮罩眼阴影-->
      <div class="market-sidebar-mask" :show="isShow"></div>

      <div class="market-sidebar-content">

        <!--行业活动推荐-->
        <div class="list flex">
          <div class="title align-center bold"><i class="el-icon-star-on"></i> 行业活动推荐</div>
          <div class="item align-center">
            <div class="item-icon">
              <i class="el-icon-s-tools"></i>
            </div>
            <div class="info">
              <div class="first-line"><span class="blod">未设置所属行业</span><span class="link-button pointer">立刻设置</span>
              </div>
              <div class="second-line"><span class="text">设置行业可给你更精准的模板推荐</span></div>
            </div>
          </div>
        </div>


        <div class="list flex pointer">
          <div class="title align-center bold"><i class="el-icon-set-up"></i> 活动分类</div>
          <div class="item align-center poa">
            <div class="item-icon">
              <i class="el-icon-s-tools"></i>
            </div>
            <div class="info">
              <div class="first-line"><span class="blod">游戏抽奖</span></div>
              <div class="second-line"><span class="text">幸运大转盘 天降红包雨 疯狂抢红包</span></div>
            </div>
            <i class="el-icon-arrow-right"></i>
            <!--market-slider-popup-->
            <div class="market-slider-popup" style="position: absolute;left:340px;top: 0">
              <div class="popup-title">
                <span>游戏抽奖</span>
                <span>查看更多>></span>
              </div>
              <!--中间部分-->
              <div class="popup content">
                <div class="popup-active">
                  <div class="popup-active-cover"></div>
                  <div class="popup-active-info">
                    <div class="popup-active-name">幸运大转盘</div>
                    <div class="popup-active-explain">常规的大转盘抽奖</div>
                  </div>
                </div>
              </div>
              <!--文字列表-->
              <div class="popup-list">
                <div class="popup-list-item">疯狂抢红包</div>
                <div class="popup-list-item">疯狂抢红包</div>
                <div class="popup-list-item">疯狂抢红包</div>
                <div class="popup-list-item">疯狂抢红包</div>
              </div>
            </div>
          </div>
        </div>

        <!--热度排行-->
        <div class="list flex pointer">
          <div class="title align-center bold"><i class="el-icon-set-up"></i> 热度排行</div>
          <div class="item align-center poa">
            <div class="left-side">
              <div class="icon flex align-center justify-center">
                <i class="el-icon-s-tools"></i>
              </div>
            </div>
            <div class="info">
              <div class="first-line"><span class="blod">图片投票</span></div>
              <div class="second-line"><span class="text">纯投票的排行活动</span></div>
            </div>
          </div>
          <div class="item align-center poa">
            <div class="left-side">
              <div class="icon flex align-center justify-center">
                <i class="el-icon-s-tools"></i>
              </div>
            </div>
            <div class="info">
              <div class="first-line"><span class="blod">图片投票</span></div>
              <div class="second-line"><span class="text">纯投票的排行活动</span></div>
            </div>
          </div>
          <div class="item align-center poa">
            <div class="left-side">
              <div class="icon flex align-center justify-center">
                <i class="el-icon-s-tools"></i>
              </div>
            </div>
            <div class="info">
              <div class="first-line"><span class="blod">图片投票</span></div>
              <div class="second-line"><span class="text">纯投票的排行活动</span></div>
            </div>
          </div>
          <div class="item align-center poa">
            <div class="left-side">
              <div class="icon flex align-center justify-center">
                <i class="el-icon-s-tools"></i>
              </div>
            </div>
            <div class="info">
              <div class="first-line"><span class="blod">图片投票</span></div>
              <div class="second-line"><span class="text">纯投票的排行活动</span></div>
            </div>
          </div>
          <!--数字-->
          <div class="item align-center poa">
            <div class="left-side">
              <div class="serial-num flex align-center justify-center">
                4
              </div>
            </div>
            <div class="info">
              <div class="first-line"><span class="blod">图片投票</span></div>
              <div class="second-line"><span class="text">纯投票的排行活动</span></div>
            </div>
          </div>
          <div class="item align-center poa">
            <div class="left-side">
              <div class="serial-num flex align-center justify-center">
                4
              </div>
            </div>
            <div class="info">
              <div class="first-line"><span class="blod">图片投票</span></div>
              <div class="second-line"><span class="text">纯投票的排行活动</span></div>
            </div>
          </div>
          <div class="item align-center poa">
            <div class="left-side">
              <div class="serial-num flex align-center justify-center">
                4
              </div>
            </div>
            <div class="info">
              <div class="first-line"><span class="blod">图片投票</span></div>
              <div class="second-line"><span class="text">纯投票的排行活动</span></div>
            </div>
          </div>
        </div>

      </div>
    </div>


<!--    <el-main>Main</el-main>-->

  </div>
</template>

<script>
export default {
  name: "MainAside",
  data(){
    return{
      isShow: true
    }
  }
}
</script>

<style scoped>
.layout-wrap .layout-content {
  height: 100vh;
  overflow-y: auto;
}

.el-aside {
  background: #fff;
  position: relative;
}

.market-sidebar {
  width: 336px;
  background-color: #fff;
  -webkit-box-shadow: 1px 0 6px 0 rgba(0, 0, 0, .08);
  box-shadow: 1px 0 6px 0 rgba(0, 0, 0, .08);
  position: fixed;
  top: 70px;
  left: 0;
  bottom: 0;
  z-index: 20;
  padding-top: 22px;
}

.market-sidebar-header {
  margin: 18px 0 20px 0;
  padding-left: 24px
}

.market-sidebar-header .search {
  width: 289px;
  height: 40px;
  color: #535353;
  line-height: 40px;
  background-color: #f4f7f9;
  border: 0 none;
  border-radius: 20px;
}

.market-sidebar-header .search .input__inner {
  background-color: #f4f7f9;
  border: 0
}

.market-sidebar-mask {
  width: 336px;
  height: 70px;
  /*background-image: url('');*/
  position: absolute;
  top: 94px;
  pointer-events: none;
}

.market-sidebar-content {
  width: 336px;
  overflow-y: auto;
  height:calc(100% - 78px);
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.list {
  flex-direction: column;
  margin-bottom: 40px;
}
.list .item:hover{
  background: #f7fff4;
}
.list .item-icon i {
  font-size: 24px;
  margin-right: 3px;
}

.list .title {
  height: 50px;
  padding-left: 24px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  color: #999;
}
.list .title i{
  font-size: 22px;
  line-height: 50px;
  margin-right: 3px;
}
.list .item-icon {
  width: 36px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.list .item {
  height: 70px;
  padding-left: 24px;
  border-bottom: 1px solid #eee;
  display: flex;
}

.list .item .info {
  width: 240px;
  margin-left: 10px
}

.first-line {
  display: flex;
  line-height: 22px;
}

.first-line .link-button {
  font-size: 12px;
  color: #4381fd;
  line-height: 17px;
  text-decoration: underline;
  margin-left: 10px;
}

.second-line .text {
  font-size: 12px;
  color: #b2b2b2;
  line-height: 18px;
}

.item > i {
  font-size: 18px;
  color: #b2b2b2;
}

/*popup*/
.market-slider-popup {
  width: 720px;
  padding: 24px 0
}

.market-slider-popup .popup-title {
  height: 26px;
  font-size: 16px;
  color: #000
}

/*热度排行*/
.list .left-side {
  width: 36px;
  height: 36px;
}
.list .left-side .icon{
  width: 100%;
  height:100%;
  border-radius: 50%;
  background:linear-gradient(-35deg, rgb(57, 215, 255), rgb(67, 129, 253));
}
.list .left-side .icon i{
  font-size: 28px;
  color:#fff
}
.serial-num{
  font-size: 16px;
  color:#535353
}
.market-sidebar .market-sidebar-content::-webkit-scrollbar {
  display: none;
}
.el-input.is-active .el-input__inner, .el-input__inner:focus{
  border:1px solid #4ec227
}
</style>
