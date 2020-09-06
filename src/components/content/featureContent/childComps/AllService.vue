<template>

  <el-table class="allService" :span-method="objectSpanMethod" :data="yxServiceList" :header-row-style="headerStyle">

    <el-table-column label="服务列表">

      <el-table-column label="服务类型" prop="serviceType">

      </el-table-column>

      <el-table-column label="服务内容" prop="serviceContent" width="230">

      </el-table-column>

    </el-table-column>

    <el-table-column label="互动免费版" prop="freeIcon">
      <template slot-scope="scope">
        <i :class="scope.row.freeIcon"></i>
      </template>
    </el-table-column>

    <el-table-column label="互动白银版" prop="silverIcon">
      <template slot-scope="scope">
        <i :class="scope.row.silverIcon"></i>
      </template>
    </el-table-column>

    <el-table-column label="互动铂金版" prop="platinaIcon">
      <template slot-scope="scope">
        <i :class="scope.row.platinaIcon"></i>
      </template>
    </el-table-column>

    <el-table-column label="互动钻石版" prop="masonryIcon">
      <template slot-scope="scope">
        <i :class="scope.row.masonryIcon"></i>
      </template>
    </el-table-column>

    <el-table-column label="H5互动联合版" prop="interactiveIcon">
      <template slot-scope="scope">
        <i :class="scope.row.interactiveIcon"></i>
      </template>
    </el-table-column>

    <el-table-column label="互动门店版" prop="shopIcon">
      <template slot-scope="scope">
        <i :class="scope.row.shopIcon"></i>
      </template>
      <div>
        啊发发
      </div>
    </el-table-column>

  </el-table>
</template>

<script>
export default {
name: "AllService",
  data(){
  return{
    yxServiceList:[
      {
        serviceType:'H5功能',
        serviceContent:"微传单尊享版功能（H5、表单）",
        freeIcon:"el-icon-circle-close",
        silverIcon:"el-icon-circle-close",
        platinaIcon:"el-icon-circle-close",
        masonryIcon:"el-icon-circle-close",
        interactiveIcon:"el-icon-circle-check",
        shopIcon:"el-icon-circle-close"
      },
      {
        serviceType:'活动营销',
        serviceContent:"抽奖（大转盘、摇一摇等）",
        freeIcon:"el-icon-circle-check",
        silverIcon:"el-icon-circle-check",
        platinaIcon:"el-icon-circle-check",
        masonryIcon:"el-icon-circle-check",
        interactiveIcon:"el-icon-circle-check",
        shopIcon:"el-icon-circle-check"
      },
      {
        serviceContent:"游戏营销",
        freeIcon:"el-icon-circle-check",
        silverIcon:"el-icon-circle-check",
        platinaIcon:"el-icon-circle-check",
        masonryIcon:"el-icon-circle-check",
        interactiveIcon:"el-icon-circle-check",
        shopIcon:"el-icon-circle-check"
      },
      {
        serviceContent:"涨粉/推广活动",
        freeIcon:"el-icon-circle-close",
        silverIcon:"el-icon-circle-close",
        platinaIcon:"el-icon-circle-check",
        masonryIcon:"el-icon-circle-check",
        interactiveIcon:"el-icon-circle-check",
        shopIcon:"el-icon-circle-check"
      },
      {
        serviceContent:"促销活动（拼团、秒杀等）",
        freeIcon:"el-icon-circle-close",
        silverIcon:"el-icon-circle-close",
        platinaIcon:"el-icon-circle-close",
        masonryIcon:"el-icon-circle-check",
        interactiveIcon:"el-icon-circle-check",
        shopIcon:"el-icon-circle-check"
      },
      {
        serviceContent:"留存活动（种树等）",
        freeIcon:"el-icon-circle-close",
        silverIcon:"el-icon-circle-close",
        platinaIcon:"el-icon-circle-close",
        masonryIcon:"el-icon-circle-check",
        interactiveIcon:"el-icon-circle-check",
        shopIcon:"el-icon-circle-check"
      },
      {
        serviceContent:"投票活动",
        freeIcon:"el-icon-circle-check",
        silverIcon:"el-icon-circle-check",
        platinaIcon:"el-icon-circle-check",
        masonryIcon:"el-icon-circle-check",
        interactiveIcon:"el-icon-circle-check",
        shopIcon:"el-icon-circle-check"
      },
      {
        serviceContent:"答题活动",
        freeIcon:"el-icon-circle-check",
        silverIcon:"el-icon-circle-check",
        platinaIcon:"el-icon-circle-check",
        masonryIcon:"el-icon-circle-check",
        interactiveIcon:"el-icon-circle-check",
        shopIcon:"el-icon-circle-check"
      }
    ]
  }
  },
  methods:{
    headerStyle({row, rowIndex}){
     if(rowIndex ===1){
       return {
         marginBottom:'10px'
       }
     }
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {


      if(columnIndex === 0){
        //console.log(rowIndex)
        if(rowIndex === 0){
          return {
              rowspan:1,
              colspan:1
          }
        }
        if(rowIndex === 1){
          return {
            rowspan:7,
            colspan:1
          }
        }else{
          return {
            rowspan:0,
            colspan:0
          }
        }
      }

    }
  }
}
</script>

<style>
.allService .cell{
  text-align: center;
}
.allService  i{
  font-size: 24px;
}
.el-icon-circle-close{
  color:#ff4d4d
}
.el-icon-circle-check{
  color:#4ac227;
}
</style>
<style>

</style>
