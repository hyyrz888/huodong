<template>
  <div class="mdy-adv-content">


    <el-row :gutter="16">
      <el-col :span="14">
        <div class="mdy-home-banner">
          <el-carousel indicator-position="inside" height="100%">
            <el-carousel-item v-for="item in bannerList" :key="item.id">
              <a :href="item.toUrl" target="_blank"><img :src="item.sourceUrl" :alt="item.title"></a>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
      <el-col :span="10">
        <el-row :gutter="16">
          <el-col :span="12" v-for="item in smallAdvList" :key="item.id">
            <div class="adv-card">
              <img :src="item"/>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <!--活动详情-->
    <el-row :gutter="16">
      <el-col :span="8">
        <el-card class="box-card mdy-home-activity" :body-style="{ padding: '0px' }">
          <div slot="header" class="clearfix">
            <div class="header-first-line flex justify-betweenalign-start">
              <span class="bold  flex-item">节日营销</span>
              <el-button style="float: right; padding: 3px 0" type="text">更多>></el-button>
            </div>
            <p>节日自带流量属性，降低传播成本，提高效率</p>
          </div>
          <div class="content">
            <div class="text item flex align-center pointer" v-for="item in markList" :key="item.id">
              <div class="item-img">
                <img :src="item.sourceUrl" :alt="item.title">
              </div>
              <div class="info flex-item">
                <span>{{ item.title }}</span>
                <p class="text-ellipsis">{{ item.info }}</p>
              </div>
              <div class="more flex align-center justify-center"><i class="el-icon-plus"/></div>
            </div>
            <div class="text item flex align-center pointer" v-for="item in markList" :key="item.id">
              <div class="item-img">
                <img :src="item.sourceUrl" :alt="item.title">
              </div>
              <div class="info flex-item">
                <span>{{ item.title }}</span>
                <p class="text-ellipsis">{{ item.info }}</p>
              </div>
              <div class="more flex align-center justify-center"><i class="el-icon-plus"/></div>
            </div>
            <div class="text item flex align-center pointer" v-for="(item,index) in markList" :key="index">
              <div class="item-img">
                <img :src="item.sourceUrl" :alt="item.title">
              </div>
              <div class="info flex-item">
                <span>{{ item.title }}</span>
                <p class="text-ellipsis">{{ item.info }}</p>
              </div>
              <div class="more flex align-center justify-center"><i class="el-icon-plus"/></div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card mdy-home-activity" :body-style="{ padding: '0px' }">
          <div slot="header" class="clearfix">
            <div class="header-first-line flex justify-betweenalign-start">
              <span class="bold  flex-item">节日营销</span>
              <el-button style="float: right; padding: 3px 0" type="text">更多>></el-button>
            </div>
            <p>节日自带流量属性，降低传播成本，提高效率</p>
          </div>
          <div class="content">
            <div class="text item flex align-center pointer" v-for="item in markList" :key="item.id">
              <div class="item-img">
                <img :src="item.sourceUrl" :alt="item.title">
              </div>
              <div class="info flex-item">
                <span>{{ item.title }}</span>
                <p class="text-ellipsis">{{ item.info }}</p>
              </div>
              <div class="more flex align-center justify-center"><i class="el-icon-plus"/></div>
            </div>
            <div class="text item flex align-center pointer" v-for="item in markList" :key="item.id">
              <div class="item-img">
                <img :src="item.sourceUrl" :alt="item.title">
              </div>
              <div class="info flex-item">
                <span>{{ item.title }}</span>
                <p class="text-ellipsis">{{ item.info }}</p>
              </div>
              <div class="more flex align-center justify-center"><i class="el-icon-plus"/></div>
            </div>
            <div class="text item flex align-center pointer" v-for="item in markList" :key="item.id">
              <div class="item-img">
                <img :src="item.sourceUrl" :alt="item.title">
              </div>
              <div class="info flex-item">
                <span>{{ item.title }}</span>
                <p class="text-ellipsis">{{ item.info }}</p>
              </div>
              <div class="more flex align-center justify-center"><i class="el-icon-plus"/></div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card mdy-home-activity" :body-style="{ padding: '0px'}">
          <div slot="header" class="clearfix">
            <div class="header-first-line flex justify-betweenalign-start">
              <span class="bold  flex-item">节日营销</span>
              <el-button style="float: right; padding: 3px 0" type="text">更多>></el-button>
            </div>
            <p>节日自带流量属性，降低传播成本，提高效率</p>
          </div>
          <div class="content">
            <div class="text item flex align-center pointer" v-for="item in markList" :key="item.id">
              <div class="item-img">
                <img :src="item.sourceUrl" :alt="item.title">
              </div>
              <div class="info flex-item">
                <span>{{ item.title }}</span>
                <p class="text-ellipsis">{{ item.info }}</p>
              </div>
              <div class="more flex align-center justify-center"><i class="el-icon-plus"/></div>
            </div>
            <div class="text item flex align-center pointer" v-for="item in markList" :key="item.id">
              <div class="item-img">
                <img :src="item.sourceUrl" :alt="item.title">
              </div>
              <div class="info flex-item">
                <span>{{ item.title }}</span>
                <p class="text-ellipsis">{{ item.info }}</p>
              </div>
              <div class="more flex align-center justify-center"><i class="el-icon-plus"/></div>
            </div>
            <div class="text item flex align-center pointer" v-for="item in markList" :key="item.id">
              <div class="item-img">
                <img :src="item.sourceUrl" :alt="item.title">
              </div>
              <div class="info flex-item">
                <span>{{ item.title }}</span>
                <p class="text-ellipsis">{{ item.info }}</p>
              </div>
              <div class="more flex align-center justify-center"><i class="el-icon-plus"/></div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!--热门专题-->
    <el-card class="box-card" id="hot-subject">
      <div slot="header" class="clearfix">
        <span class="bold">热门专题</span>
      </div>
      <div class="content">
        <el-row :gutter="16">
          <el-col :span="8" v-for="item in hotSubject" :key="item.id">
            <div class="item pointer">
              <img :src="item.sourceUrl"/>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>

  </div>
</template>

<script>
export default {
  name: "AdvContent",
  data() {
    return {
      bannerList: [
        {
          toUrl: 'https://www.dq800.com',
          title: '广告1',
          sourceUrl: require('@/assets/images/banner1.jpg')
        },
        {
          toUrl: 'https://www.dq800.com',
          title: '广告2',
          sourceUrl: require('@/assets/images/banner1.jpg')
        },
        {
          toUrl: 'https://www.dq800.com',
          title: '广告3',
          sourceUrl: require('@/assets/images/banner1.jpg')
        },
        {
          toUrl: 'https://www.dq800.com',
          title: '广告4',
          sourceUrl: require('@/assets/images/banner1.jpg')
        }
      ],
      smallAdvList: [require('@/assets/images/small-adv1.jpg'), require('@/assets/images/small-adv1.jpg'), require('@/assets/images/small-adv1.jpg'), require('@/assets/images/small-adv1.jpg')],
      markList: [
        {
          toUrl: 'https://www.dq800.com',
          title: '好礼谢恩师',
          info: '多种样式的长页面分享',
          sourceUrl: require('@/assets/images/1.jpg')
        }
      ],
      hotSubject: [
        {
          sourceUrl: require('@/assets/images/hot.png')
        },
        {
          sourceUrl: require('@/assets/images/hot.png')
        },
        {
          sourceUrl: require('@/assets/images/hot.png')
        }
      ]
    }
  }
}
</script>

<style scoped>
.mdy-adv-content {
  padding: 102px 28px 32px 368px;
  min-height: 100vh;
}

.mdy-home-banner {
  border-radius: 6px;
  overflow: hidden;
  padding-bottom: 40%;
  position: relative;
}

.mdy-home-banner img {
  width: 100%;
  display: block;
}

.el-carousel {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.el-carousel__container {
  height: auto !important;
}

.adv-card {
  padding-bottom: 55.2%;
  margin-bottom: 16px;
  border-radius: 6px;
  -webkit-box-shadow: 0 1px 6px 0 rgba(0, 0, 0, .06);
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, .06);
  overflow: hidden;
  position: relative;
}

.adv-card img {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
}

.mdy-home-activity {

}

.header-first-line span {
  font-size: 18px;
}

.mdy-home-activity p {
  margin-top: 0;
  margin-bottom: 0;
  line-height: 22px;
}

.header-first-line button {
  color: #666
}

.header-first-line button:hover {
  color: #4ac227;
}

.mdy-home-activity .content .item {
  height: 99px;
  border-bottom: 1px solid #eee;
  padding: 0 20px;
}

.content .item:hover {
  background: #f7fff4;
}

.content .item:hover .more {
  background: #4ac227;
}

.content .item:hover .more i {
  color: #fff
}

.content .item .item-img {
  width: 96px;
  height: 53px;
  overflow: hidden;
  border-radius: 6px;
  position: relative;
}

.content .item .item-img img {
  width: 100%;
}

.content .info {
  margin: 0 16px
}

.content .info span {
  font-size: 16px;
  color: #000
}

.content .info p {
  font-size: 12px;
  color: #999
}

.content .more {
  width: 32px;
  height: 32px;
  background: #eee;
  border-radius: 50%;
}

.content .more i {
  font-size: 20px;
  color: #fff
}

#hot-subject {
  margin-top: 16px
}

#hot-subject span {
  font-size: 18px;
}

</style>
<style>
#hot-subject .el-card__header {
  border-bottom: 0;
  padding-bottom: 0;
}
</style>
