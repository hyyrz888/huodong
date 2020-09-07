<template>
    <el-table :show-header="false" :data="tableDate" :border="true" :span-method="objectSpanMethod">
      <el-table-column prop="serviceType" align="center">

      </el-table-column>

      <el-table-column prop="serviceContent" width="230" align="center">

      </el-table-column>

      <el-table-column prop="freeIcon" align="center">

      </el-table-column>

      <el-table-column prop="silverIcon" align="center">

      </el-table-column>

      <el-table-column prop="platinaIcon" align="center">

      </el-table-column>

      <el-table-column prop="masonryIcon" align="center">

      </el-table-column>

      <el-table-column prop="interactiveIcon" align="center">

      </el-table-column>

      <el-table-column prop="shopIcon" align="center">

      </el-table-column>

    </el-table>
</template>

<script>
export default {
name: "HdcbTable",
  data(){
  return {
    tableDate:[
      {
        serviceType:'活动传播',
        serviceContent:"单个活动浏览人数上限",
        freeIcon:"不限",
        silverIcon:"不限",
        platinaIcon:"不限",
        masonryIcon:"不限",
        interactiveIcon:"不限",
        shopIcon:"不限"
      },
      {
        serviceContent:"单个活动分享次数上限",
        freeIcon:"不限",
        silverIcon:"不限",
        platinaIcon:"不限",
        masonryIcon:"不限",
        interactiveIcon:"不限",
        shopIcon:"不限"
      },
      {
        serviceContent:"单个活动参与人数上限",
        freeIcon:"100人",
        silverIcon:"1000人",
        platinaIcon:"不限",
        masonryIcon:"不限",
        interactiveIcon:"不限",
        shopIcon:"不限"
      },
      {
        serviceContent:"单个活动投票人数上限",
        freeIcon:"100人",
        silverIcon:"1000人",
        platinaIcon:"不限",
        masonryIcon:"不限",
        interactiveIcon:"不限",
        shopIcon:"不限"
      },
      {
        serviceContent:"单个活动设置奖品上限",
        freeIcon:"2000份",
        silverIcon:"10000份",
        platinaIcon:"50000份",
        masonryIcon:"200000份",
        interactiveIcon:"200000份",
        shopIcon:"200000份"
      },
    ]
  }
  },
  methods:{
    objectSpanMethod({rowIndex, columnIndex }) {


      if(columnIndex === 0){
        //console.log(rowIndex)
        if(rowIndex === 0){
          return {
            rowspan:5,
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
.el-table{
  margin-top: 10px;
}
</style>
