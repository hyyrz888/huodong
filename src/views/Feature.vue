<template>
  <div class="layout-wrap el-scrollbar">

    <div class="el-scrollbar__wrap" style="margin-left:-4px;margin-top:-4px">

      <div class="el-scrollbar__view">

        <!--头部-->
        <md-header />

        <FeatureIndex />

      </div>
    </div>
  </div>

</template>

<script>
import MdHeader from "@/components/common/MdHeader";
import FeatureIndex from "@/components/content/featureContent/FeatureIndex";

export default {
  name: "Feature",
  components: {
    MdHeader,
    FeatureIndex
  }
}
</script>

<style scoped>

</style>
