<template>
  <div class="md-header flex justify-between align-center">
    <div class="header-logo">
      <a :href="logoUrl" class="mdlogo"><img src="@/assets/logo.png" alt=""></a>
    </div>
    <div class="header-menu flex flex-item align-center">
      <div class="item first-item pointer" v-for="(item,index) in navList" :key="index">
        <router-link tag='div' router-link-active :to="item.toPath">{{item.title}}</router-link>
      </div>

    </div>
    <!--图标菜单-->
    <div class="hd-menu flex align-center justify-between">
      <div class="menu-item flex justify-center align-center pointer" @mouseenter="handleShowPop('package')"
           @mouseleave="handleClosePop">
        <i class="el-icon-suitcase-1 flex justify-center align-center"/>
        <div class="header-popup package flex flex-column consult-box" v-if="type === 'package'">
          <a :href="item.toLink" v-for="(item,index) in packageList" :key="index" class="flex align-center">
            <span v-html="item.icon"></span> {{ item.title }}
          </a>
        </div>
      </div>
      <div class="menu-item flex justify-center align-center pointer">
        <i class="el-icon-bell"/>
      </div>
      <div class="menu-item flex justify-center align-center pointer" @mouseenter="handleShowPop('services')"
           @mouseleave="handleClosePop">
        <i class="el-icon-service flex justify-center align-center"/>
        <div class="header-popup services flex flex-column consult-box" v-if="type === 'services'">
          <a :href="item.toLink" v-for="(item,index) in servicesList" :key="index" class="flex align-center">
            <span v-html="item.icon"></span> {{ item.title }}
          </a>
        </div>
      </div>
      <div class="menu-item flex justify-center align-center pointer" @mouseenter="handleShowPop('account')"
           @mouseleave="handleClosePop">
        <i class="el-icon-user"/>

        <div class="header-popup account flex flex-column consult-box" v-if="type === 'account'">
          <div class="account-header flex flex-column justify-center">
            <div class="first-line">米点云</div>
            <div class="second-line">Null</div>
            <el-button type="danger" size="mini" plain>退出</el-button>
          </div>
          <a :href="item.toLink" v-for="(item,index) in accountList" :key="index" class="flex align-center">
            <span v-html="item.icon"></span> {{ item.title }} <span class="badge flex align-center justify-center"
                                                                    v-if="item.badge">{{ item.badge }}</span>
          </a>
        </div>
      </div>
    </div>
    <!--按钮-->
    <div class="header-btn flex justify-center">
      <el-popover placement="top-start"
                  title="免费版"
                  width="200"
                  trigger="click"
                  :offset="-50">
        <el-alert title="到期时间" type="error" description="2020-09-10" :closable="false" :show-icon="false"> </el-alert>
        <el-link type="success" style="font-size: 13px;position:absolute;right: 20px;top: 10px">升级</el-link>
        <el-button type="success" plain size="medium" slot="reference">免费版</el-button>
      </el-popover>
    </div>
  </div>
</template>

<script>
export default {
  name: "MdHeader",
  data() {
    return {
      isNow:0,
      type: '',
      popIsShow: false,
      logoUrl: 'http://www.dq800.com',
      navList:[
        {
          toPath:'/main',
          title:'活动市场'
        },
        {
          toPath:'/manage',
          title:'管理中心'
        },
        {
          toPath:'/feature',
          title:'功能目录'
        }
      ],
      packageList: [
        {
          toLink: 'http://www.dq800.com',
          title: '预约下载',
          icon: '<i class="el-icon-download" />'
        },
        {
          toLink: 'http://www.dq800.com',
          title: '互动功略',
          icon: '<i class="el-icon-notebook-2" />'

        },
        {
          toLink: 'http://www.dq800.com',
          title: '帮助中心',
          icon: '<i class="el-icon-question" />'
        },
        {
          toLink: 'http://www.dq800.com',
          title: '发现活动',
          icon: '<i class="el-icon-view" />'
        }
      ],
      servicesList: [
        {
          toLink: 'http://www.dq800.com',
          title: '人工咨询',
          icon: '<i class="el-icon-chat-round" />'
        },
        {
          toLink: 'http://www.dq800.com',
          title: '功能建议',
          icon: '<i class="el-icon-edit-outline" />'

        },
        {
          toLink: 'http://www.dq800.com',
          title: '代理咨询',
          icon: '<i class="el-icon-chat-dot-square" />'
        },
        {
          toLink: 'http://www.dq800.com',
          title: '关注互动',
          icon: '<i class="el-icon-star-off" />'
        }
      ],
      accountList: [
        {
          toLink: 'http://www.dq800.com',
          title: '进去企业中心',
          icon: '<i class="el-icon-office-building" />'
        },
        {
          toLink: 'http://www.dq800.com',
          title: '管理中心',
          icon: '<i class="el-icon-setting" />'
        },
        {
          toLink: 'http://www.dq800.com',
          title: '现金券',
          icon: '<i class="el-icon-money" />',
          badge: 4
        },
        {
          toLink: 'http://www.dq800.com',
          title: '我的订单',
          icon: '<i class="el-icon-tickets" />',
          badge: 5
        }
      ]
    }
  },
  mounted() {
    // console.log(this.$route.path ,this.route)
  },
  computed:{
    // isActive(){
    //
    // }
  },
  methods: {
    handleShowPop(type) {
      this.type = type
      // this.popIsShow = true
    },
    handleClosePop() {
      this.type = ''
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

.header-menu .item {
  position: relative;
  font-size: 16px;
  color: #535353;
  margin-left: 50px;
}

.header-menu .item:hover {
  color: #4ec227
}

.header-menu .item .router-link-active  {
  font-weight: 700;
  color: #4ec227
}
.header-menu .item .router-link-active:after {
  position: absolute;
  width: 40px;
  height: 4px;
  content: '';
  bottom: -23px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2px;
  background-color: #4ec227;
}

.header-menu .item.first-item {
  margin-left: 76px;
}

.hd-menu .menu-item {
  width: 40px;
  height: 40px;
  margin-left: 14px;
  border-radius: 50%;
  position: relative;
}

.hd-menu .menu-item:hover {
  background: #f0f5ff;
}

.hd-menu .menu-item:hover > i {
  color: #4ec227;
}

.hd-menu .menu-item > i {
  font-size: 24px;
  height: 70px;
  line-height: 70px;
}

.header-popup {
  position: absolute;
  top: 55px;
  left: 50%;
  box-shadow: 0 2px 20px rgba(0, 0, 0, .12);
  padding: 10px 0;
  border-radius: 6px;
  transform: translateX(-50%);
  background: #fff;
}

.header-btn {
  width: 120px
}

.header-popup.consult-box {
  width: 122px;
}

.header-popup.message {
  width: 320px;
}

.header-popup.account {
  width: 180px;
}

.header-popup.consult-box a {
  height: 40px;
  padding: 0 16px;
  color: #535353;
  width: 100%;
}

.header-popup a:hover {
  background-color: #f0f5ff;
  color: #4ac227;
}

.header-popup a:hover span {
  color: #4ac227;
}

.header-popup a span {
  font-size: 22px;
  margin-right: 10px;
  color: #b2b2b2;
}

.account-header {
  padding: 0 16px;
  height: 59px;
  border-bottom: 1px solid #e7e7e7;
  position: relative;
  margin-top: -10px;
}

.account-header .first-line {
  font-size: 16px;
  line-height: 22px;
}

.account-header .second-line {
  font-size: 12px;
  color: #5c5c5c;
  line-height: 18px;
}

.account-header button {
  position: absolute;
  right: 16px;
  top: 10px;
}

.account a {
  position: relative;
}

.account .badge {
  font-size: 14px;
  height: 20px;
  padding: 0 6px;
  line-height: 20px;
  background: #f0f5ff;
  color: #4ac227;
  border-radius: 10px;
  position: absolute;
  right: 16px;
  top: 10px;
}
</style>
