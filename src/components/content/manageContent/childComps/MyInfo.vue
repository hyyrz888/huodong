<template>
  <div id="myinfo">
    <el-card class="box-card">
      <div slot="header" class="clearfix header-title">
        <span>企业信息</span>
      </div>
      <div  class="text item">
        <p>企业帐号： lf18864016</p>
        <p>帐号版本：  互动免费版</p>
        <p>到期时间： <span>无</span> <el-link type="success" :underline="true">立即升级</el-link>  <el-link type="success" underline>了解更多</el-link></p>
        <p>绑定微信： <el-link type="success">马上绑定</el-link></p>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix header-title">
        <span>红包</span>
      </div>
      <div class="text item">
        <p>红包派发方式： 互动代发</p>
        <p>红包余额： <span class="showBlanace">0.00<i>元</i></span> <el-link type="success">立即充值 </el-link>
          <el-link type="success">余额流水 </el-link><el-link type="success">提现 </el-link>
          <el-link type="success">提现记录</el-link> <el-link type="success">了解更多</el-link> <el-link type="success"> 接入商户号</el-link>
        </p>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix header-title">
        <span>短信模板</span>
      </div>
      <div class="text item">
        <p>短信模板：<el-link type="success">查看模板</el-link></p>
        <p>短信剩余条数：<span class="num msgNum">0<i>条</i></span> <el-link type="success">购买短信包</el-link></p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "MyInfo"
}
</script>

<style scoped>
.header-title span{
  font-size: 16px;
}
.item p{
  margin-bottom: 26px;
}
.item span{
  margin-right: 22px;
}
</style>
<style>
.el-card{
  margin-bottom: 24px;
}
#myinfo .el-card{
  color:#585858;
}
#myinfo .el-link{
  margin-right:22px;
  border-bottom: 1px solid #4ac227;
}
</style>
