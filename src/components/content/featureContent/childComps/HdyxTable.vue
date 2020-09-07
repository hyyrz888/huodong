<template>
  <el-table :show-header="false" :data="yxServiceList" :border="true" :span-method="objectSpanMethod">

    <el-table-column prop="serviceType" align="center">
    </el-table-column>
    <el-table-column prop="serviceContent" width="230" align="center">
    </el-table-column>

    <el-table-column prop="freeIcon" align="center">
      <template slot-scope="scope">
        <i :class="scope.row.freeIcon"></i>
      </template>
    </el-table-column>

    <el-table-column prop="silverIcon" align="center">
      <template slot-scope="scope">
        <i :class="scope.row.silverIcon"></i>
      </template>
    </el-table-column>

    <el-table-column prop="platinaIcon" align="center">
      <template slot-scope="scope">
        <i :class="scope.row.platinaIcon"></i>
      </template>
    </el-table-column>

    <el-table-column prop="masonryIcon" align="center">
      <template slot-scope="scope">
        <i :class="scope.row.masonryIcon"></i>
      </template>
    </el-table-column>

    <el-table-column prop="interactiveIcon" align="center">
      <template slot-scope="scope">
        <i :class="scope.row.interactiveIcon"></i>
      </template>
    </el-table-column>

    <el-table-column prop="shopIcon" align="center">
      <template slot-scope="scope">
        <i :class="scope.row.shopIcon"></i>
      </template>
    </el-table-column>

  </el-table>
</template>

<script>
export default {
  name: "HdyxTable",
  data() {
    return {
      yxServiceList: [
        {
          serviceType: '活动营销',
          serviceContent: "抽奖（大转盘、摇一摇等）",
          freeIcon: "el-icon-circle-check",
          silverIcon: "el-icon-circle-check",
          platinaIcon: "el-icon-circle-check",
          masonryIcon: "el-icon-circle-check",
          interactiveIcon: "el-icon-circle-check",
          shopIcon: "el-icon-circle-check"
        },
        {
          serviceContent: "游戏营销",
          freeIcon: "el-icon-circle-check",
          silverIcon: "el-icon-circle-check",
          platinaIcon: "el-icon-circle-check",
          masonryIcon: "el-icon-circle-check",
          interactiveIcon: "el-icon-circle-check",
          shopIcon: "el-icon-circle-check"
        },
        {
          serviceContent: "涨粉/推广活动",
          freeIcon: "el-icon-circle-close",
          silverIcon: "el-icon-circle-close",
          platinaIcon: "el-icon-circle-check",
          masonryIcon: "el-icon-circle-check",
          interactiveIcon: "el-icon-circle-check",
          shopIcon: "el-icon-circle-check"
        },
        {
          serviceContent: "促销活动（拼团、秒杀等）",
          freeIcon: "el-icon-circle-close",
          silverIcon: "el-icon-circle-close",
          platinaIcon: "el-icon-circle-close",
          masonryIcon: "el-icon-circle-check",
          interactiveIcon: "el-icon-circle-check",
          shopIcon: "el-icon-circle-check"
        },
        {
          serviceContent: "留存活动（种树等）",
          freeIcon: "el-icon-circle-close",
          silverIcon: "el-icon-circle-close",
          platinaIcon: "el-icon-circle-close",
          masonryIcon: "el-icon-circle-check",
          interactiveIcon: "el-icon-circle-check",
          shopIcon: "el-icon-circle-check"
        },
        {
          serviceContent: "投票活动",
          freeIcon: "el-icon-circle-check",
          silverIcon: "el-icon-circle-check",
          platinaIcon: "el-icon-circle-check",
          masonryIcon: "el-icon-circle-check",
          interactiveIcon: "el-icon-circle-check",
          shopIcon: "el-icon-circle-check"
        },
        {
          serviceContent: "答题活动",
          freeIcon: "el-icon-circle-check",
          silverIcon: "el-icon-circle-check",
          platinaIcon: "el-icon-circle-check",
          masonryIcon: "el-icon-circle-check",
          interactiveIcon: "el-icon-circle-check",
          shopIcon: "el-icon-circle-check"
        }
      ]
    }
  },
  methods:{
    objectSpanMethod({rowIndex, columnIndex }) {
      if(columnIndex === 0){
        //console.log(rowIndex)
        if(rowIndex === 0){
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

<style scoped>
.el-table {
  margin-top: 10px;
}
i {
  font-size: 20px;
}
</style>
