<template>

    <el-card class="box-card"><el-tabs v-model="activeAllInit">
    <el-tab-pane label="全部" name="all">
      <el-table
        :data="allDate"
        stripe
        style="width: 100%">
        <el-table-column
          align="center"
          header-align="center"
          type="index"
          prop="#"
          label="序号">
        </el-table-column>
        <el-table-column
          align="center"
          header-align="center"
          prop="name"
          label="活动名称"
          width="180">
        </el-table-column>
        <el-table-column
          header-align="center"
          align="center"
          prop="id"
          label="活动编号"
          width="180">
        </el-table-column>
        <el-table-column
          header-align="center"
          align="center"
          prop="date"
          label="活动时间">
        </el-table-column>
        <el-table-column
          header-align="center"
          align="center"
          prop="status"
          label="全部状态">
        </el-table-column>
        <el-table-column
          header-align="center"
          align="center"
          prop="limit"
          label="参与人数/最大限制">
        </el-table-column>
        <el-table-column
          header-align="center"
          align="center"
          prop="defail"
          label="奖品/商品详情">
          <template slot-scope="scope">
            {{scope.row.occupied}}
            <el-dropdown>
            <span class="el-dropdown-link pointer">
              详情<i class="el-icon-search el-icon--right"></i>
            </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>奖品一：一份</el-dropdown-item>
                <el-dropdown-item>奖品二：一份</el-dropdown-item>
                <el-dropdown-item>奖品三：一份</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
        <el-table-column
          header-align="center"
          align="center"
          prop="action"
          label="操作">

          <template slot-scope="scope">
            <el-link type="success" class="el-dropdown-link">发布</el-link>&nbsp;&nbsp;
            <el-link type="success" class="el-dropdown-link">编辑</el-link>&nbsp;&nbsp;
            <el-link type="success" class="el-dropdown-link">预览</el-link>&nbsp;&nbsp;
            {{scope.row.occupied}}
          <el-dropdown>
              <el-link type="success" class="el-dropdown-link">
                更多<i class="el-icon-arrow-down el-icon--right"></i>
              </el-link>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>复制</el-dropdown-item>
              <el-dropdown-item>渠道管理</el-dropdown-item>
              <el-dropdown-item>传播数据</el-dropdown-item>
              <el-dropdown-item>获奖名单</el-dropdown-item>
              <el-dropdown-item>配置核销员</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          </template>
        </el-table-column>
      </el-table>
<!--      <el-pagination background page-sizes="[1, 10, 20, 30]" page-size="1" layout="total, sizes, prev, pager, next, jumper" :total="total"></el-pagination>-->
    </el-tab-pane>
    <el-tab-pane label="未发布" name="unpublished ">

    </el-tab-pane>
    <el-tab-pane label="未开始" name="unstart">未开始</el-tab-pane>
    <el-tab-pane label="进行中" name="pending">进行中</el-tab-pane>
    <el-tab-pane label="已结束" name="end">已结束</el-tab-pane>

  </el-tabs>

    </el-card>
</template>

<script>
export default {
  name: "ManageIndex",
  data(){
    return {
      activeAllInit:'all',
      allDate:[
        {
          occupied:'',
          name: '参与活动赢大奖\n',
          id: 'HD1',
          date: '2016-05-02 - 2020-09-20',
          status: '进行',
          limit: '0/100',
          detail: '详情',
          action: '家'
        },
        {
          occupied:'',
          name: '参与活动赢大奖\n',
          id: 'HD1',
          date: '2016-05-02 - 2020-09-20',
          status: '进行',
          limit: '0/100',
          detail: '详情',
          action: '家'
        }
      ]
    }
 }
}
</script>

<style scoped>

</style>

<style>
.el-tabs__item{
  height: 60px!important;
  line-height: 60px !important;
  font-size: 16px !important;
}
.el-menu{
  border-right: 0 !important;
}
.el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover{
  color:#4ac227 !important;
}
</style>
