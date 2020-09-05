<template>
  <div id="manageContent">
   <ManageLeft />
   <ManageRight />
  </div>
</template>

<script>

import ManageLeft from "@/components/content/manageContent/childComps/ManageLeft";
import ManageRight from "@/components/content/manageContent/childComps/ManageRight";

export default {
name: "ManageContent",
  components:{
    ManageLeft,
    ManageRight
  }
}
</script>

<style scoped>
#manageContent{
  position: absolute;
  top: 70px;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
}
</style>
