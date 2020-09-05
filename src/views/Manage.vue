<template>
  <div class="layout-wrap el-scrollbar">

    <div class="el-scrollbar__wrap" style="margin-left:-4px;margin-top:-4px">

      <div class="el-scrollbar__view">

        <!--头部-->
        <md-header />
        <!--左边-->
        <ManageLeft />
        <!--右边-->
        <ManageRight />

      </div>
    </div>
  </div>
</template>

<script>
import MdHeader from "@/components/common/MdHeader";
import ManageLeft from "@/components/content/manageContent/childComps/ManageLeft";
import ManageRight from "@/components/content/manageContent/childComps/ManageRight";

export default {
  name: "Manage",
  components:{
    MdHeader,
    ManageLeft,
    ManageRight
  }
}
</script>

<style scoped>

</style>
