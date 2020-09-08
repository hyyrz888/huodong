<template>

  <div id="myActivity">

    <el-card class="box-card" v-if="isShow">

      <el-tabs v-model="activeAllInit" lazy="true">
        <!--全部-->
        <el-tab-pane label="全部" name="all">
          <el-table
            :data="allData"
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
                {{ scope.row.occupied }}
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
                {{ scope.row.occupied }}
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
          <!--分页-->
          <el-pagination
            background
            :page-sizes="[8,12,16]"
            layout="total, sizes, prev, pager, next"
            :total="total">
          </el-pagination>
          <!--      <el-pagination background page-sizes="[1, 10, 20, 30]" page-size="1" layout="total, sizes, prev, pager, next, jumper" :total="total"></el-pagination>-->
        </el-tab-pane>
        <!--未发布-->
        <el-tab-pane label="未发布" name="unpublished ">
        </el-tab-pane>
        <el-tab-pane label="未开始" name="unstart">未开始</el-tab-pane>
        <el-tab-pane label="进行中" name="pending">进行中</el-tab-pane>
        <el-tab-pane label="已结束" name="end">已结束</el-tab-pane>
      </el-tabs>
    </el-card>

    <div class="activeTools poa">

      <div class="activeCon flex align-center justify-between">
        <div class="tools-switchBtnGroup flex">
          <div class="btnItem flex align-center justify-center">
            <i class="el-icon-menu"></i>
          </div>
          <div class="btnItem flex align-center justify-center active">
            <i class="el-icon-s-operation"></i>
          </div>

        </div>
        <div class="rubbish-box">
          <el-button type="primary" size="medium" icon="el-icon-plus" plain>创建活动</el-button>
          <el-button type="danger" size="medium" icon="el-icon-delete" plain>活动回收站</el-button>
        </div>
      </div>

    </div>

  </div>

</template>

<script>
export default {
  name: "ManageIndex",
  data() {
    return {
      loading:1,
      activeAllInit: 'all',
      isShow:true,
      allData: [
        {
          occupied: '',
          name: '参与活动赢大奖\n',
          id: 'HD1',
          date: '2016-05-02 - 2020-09-20',
          status: '进行',
          limit: '0/100',
          detail: '详情',
          action: '家'
        },
        {
          occupied: '',
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
  },
  mounted() {
    let vueThis = this
    setTimeout(() => {
      this.loading = false;
    }, 2000);
   // console.log(this.$route,this.$router)
    let btnGroup = document.querySelector('.tools-switchBtnGroup')
    console.log(btnGroup.children)
    for(let i=0;i<btnGroup.children.length;i++){
      btnGroup.children[i].onclick = function(){
        for(let j=0;j<btnGroup.children.length;j++){
          btnGroup.children[j].classList.remove('active')
        }
        console.log(i)
        if(i===0){
          vueThis.isShow = false
        }else{
          vueThis.isShow = true
        }
        btnGroup.children[i].classList.add('active')
      }
    }
  },
  computed:{
    total(){
      return this.allData.length
    }
  },
  methods:{
    itemClick(e){
      console.log(e)
    //  e.currentTarget.classList.add('active')
    }
    // handleSizeChange(val) {
    //   console.log(`每页 ${val} 条`);
    // },
    // handleCurrentChange(val) {
    //   console.log(`当前页: ${val}`);
    // }
  }
}
</script>

<style>
#myActivity{
  position: relative;
}
.activeTools{
  position: absolute;
  top: 30px;
  right: 20px;
  z-index: 99;
}
.activeTools .tools-switchBtnGroup{
  background-color: transparent;
  border-radius: 2px;
  height:35px;
  line-height: 35px;
  border: 1px solid #dadada;
  margin-right: 10px;
}
.activeTools .tools-switchBtnGroup .btnItem{
  width: 35px;
  cursor: pointer;
  font-size: 20px;
  color:#bfbfbf
}
.activeTools .tools-switchBtnGroup .btnItem:hover{
  color: #b2b2b2;
}
.activeTools .tools-switchBtnGroup .btnItem.active{
  color: #b2b2b2;
  background: #e9e9e9;
  cursor: default;
}
.el-tabs__item {
  height: 60px !important;
  line-height: 60px !important;
  font-size: 16px !important;
}

.el-menu {
  border-right: 0 !important;
}

.el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover {
  color: #4ac227 !important;
}
.el-pagination{
  margin-top:20px
}
</style>
