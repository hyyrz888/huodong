<template>
  <div class="layout-wrap el-scrollbar">

    <div class="el-scrollbar__wrap" style="margin-left:-4px;margin-top:-4px">

      <div class="el-scrollbar__view">

        <!--头部-->
        <MdHeader />

      <router-view/>

      </div>
    </div>
  </div>
</template>

<script>

import MdHeader from "@/components/common/MdHeader";

export default {
  name: "Main",
  components: {
    MdHeader
  },
  data() {
    return {
      isActive: false,
      menuItem: [
        {
          title: '活动市场',
          url: ''
        }, {
          title: '管理中心',
          url: ''
        },
        {
          title: '功能目录',
          url: ''
        }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped>
.el-scrollbar__wrap {
  overflow-x: hidden
}
</style>
