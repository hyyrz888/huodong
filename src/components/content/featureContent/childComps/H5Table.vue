<template>
  <el-table  :data="yxServiceList" :show-header="false" border>

    <el-table-column label="服务列表">

      <el-table-column label="服务类型" prop="serviceType" align="center">

      </el-table-column>

      <el-table-column label="服务内容" prop="serviceContent" width="230">

      </el-table-column>

    </el-table-column>

    <el-table-column label="互动免费版" prop="freeIcon" align="center">
      <template slot-scope="scope">
        <i :class="scope.row.freeIcon"></i>
      </template>
    </el-table-column>

    <el-table-column label="互动白银版" prop="silverIcon" align="center">
      <template slot-scope="scope">
        <i :class="scope.row.silverIcon"></i>
      </template>
    </el-table-column>

    <el-table-column label="互动铂金版" prop="platinaIcon" align="center">
      <template slot-scope="scope">
        <i :class="scope.row.platinaIcon"></i>
      </template>
    </el-table-column>

    <el-table-column label="互动钻石版" prop="masonryIcon" align="center">
      <template slot-scope="scope">
        <i :class="scope.row.masonryIcon"></i>
      </template>
    </el-table-column>

    <el-table-column label="H5互动联合版" prop="interactiveIcon" align="center">
      <template slot-scope="scope">
        <i :class="scope.row.interactiveIcon"></i>
      </template>
    </el-table-column>

    <el-table-column label="互动门店版" prop="shopIcon" align="center">
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
  name: "H5Table",
  data() {
    return {
      yxServiceList: [
        {
          serviceType: 'H5功能',
          serviceContent: "微传单尊享版功能（H5、表单）",
          freeIcon: "el-icon-circle-close",
          silverIcon: "el-icon-circle-close",
          platinaIcon: "el-icon-circle-close",
          masonryIcon: "el-icon-circle-close",
          interactiveIcon: "el-icon-circle-check",
          shopIcon: "el-icon-circle-close"
        }
      ]
    }
  }
}
</script>

<style scoped>
.el-table {
  margin-top: 10px;
}
i{
  font-size: 20px;
}
</style>
