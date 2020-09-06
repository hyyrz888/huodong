<template>
  <el-card class="box-card">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="玩家记录" name="first">
        <el-table
          ref="multipleTable"
          :data="whiteList"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            prop="nickname"
            label="微信昵称"
            width="200">
          </el-table-column>
          <el-table-column
            prop="sex"
            label="性别"
            width="120">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="mobile"
            label="联系电话"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="address"
            label="联系地址"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="history"
            label="参与活动历史"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="actions"
            label="操作">
            <template slot-scope="scope">
              {{ scope.row.id }}
              <el-button type="warning" class="el-dropdown-link" size="mini" plain>编辑</el-button>
              <el-button type="danger" class="el-dropdown-link" size="mini" plain>删除</el-button>&nbsp;&nbsp;
            </template>
          </el-table-column>
        </el-table>
        <!--分页-->
        <el-pagination
          background
          :page-sizes="[8,12,16]"
          layout="total, sizes, prev, pager, next"
          :total="total">
        </el-pagination>
      </el-tab-pane>

      <el-tab-pane label="玩家黑名单" name="second">
        <el-table
          empty-text="该功能为铂金版功能，需升级后才可查看"
          ref="multipleTable"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            prop="nickname"
            label="微信昵称"
            width="200">
          </el-table-column>
          <el-table-column
            prop="sex"
            label="性别"
            width="120">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="mobile"
            label="联系电话"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="address"
            label="联系地址"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="history"
            label="参与活动历史"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="actions"
            label="操作">
            <template slot-scope="scope">
              {{ scope.row.id }}
              <el-button type="warning" class="el-dropdown-link" size="mini" plain>编辑</el-button>
              <el-button type="danger" class="el-dropdown-link" size="mini" plain>删除</el-button>&nbsp;&nbsp;
            </template>
          </el-table-column>
        </el-table>
        <!--分页-->
        <el-pagination
          background
          :page-sizes="[8,12,16]"
          layout="total, sizes, prev, pager, next"
          :total="total">
        </el-pagination>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  name: "PlayerRecord",
  data() {
    return {
      activeName: 'first',
      multipleSelection: [],
      whiteList: [
        {
          nickname: "hyyrz_888@163.com",
          sex: '男',
          name: '陈工',
          mobile: 13486731033,
          address: '米点云',
          history: '我的历史记录'
        }
      ]
    }
  },
  computed: {
    total() {
      return this.whiteList.length
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleSelectionChange(val) {
      //全选打印所有数据
      this.multipleSelection = val;
      console.log(val)
    }
  }
}
</script>

<style scoped>

</style>
