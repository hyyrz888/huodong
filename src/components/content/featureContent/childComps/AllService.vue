<template>

  <div id="allService">

    <el-table class="allService">
      <template slot="empty">

      </template>
      <el-table-column label="服务列表">
        <el-table-column label="服务类型" prop="serviceType">
        </el-table-column>
        <el-table-column label="服务内容" prop="serviceContent" width="230">
        </el-table-column>
      </el-table-column>
      <el-table-column label="互动免费版" prop="freeIcon" :render-header="renderFree">
      </el-table-column>
      <el-table-column label="互动白银版" prop="silverIcon" :render-header="rendersilver">
      </el-table-column>
      <el-table-column label="互动铂金版" prop="platinaIcon" :render-header="renderplatina">
      </el-table-column>
      <el-table-column label="互动钻石版" prop="masonryIcon" :render-header="rendermasonry">
      </el-table-column>
      <el-table-column label="H5互动联合版" prop="interactiveIcon" :render-header="renderinteractive">
      </el-table-column>
      <el-table-column label="互动门店版" prop="shopIcon" :render-header="rendershop">
      </el-table-column>
    </el-table>

     <!--H5-->
    <H5Table />

    <!--活动营销-->
    <HdyxTable/>

    <!--活动传播-->
    <HdcbTable/>

  </div>
</template>

<script>
import H5Table from "@/components/content/featureContent/childComps/H5Table";
import HdyxTable from "@/components/content/featureContent/childComps/HdyxTable";
import HdcbTable from "@/components/content/featureContent/childComps/HdcbTable";

export default {
  name: "AllService",
  components: {
    H5Table,
    HdcbTable,
    HdyxTable
  },
  methods:{
    renderFree(h,{column}){
      console.log(h)
      return h(
        'div',
        [
          h('span',{
            class:'info'
          }, column.label),
          h('b',{
            style:'color:#ff4d4d;display:block;margin:10px 0;'
          },'免费'),
          h('small',{
            class:'small'
          },'当前版本')
        ],
      );
    },
    rendersilver(h,{column}){
      console.log(h)
      return h(
        'div',
        [
          h('span',{
            class:'info'
          }, column.label),
          h('b',{
            style:'color:#ff4d4d;display:block;margin:10px 0;font-size:16px'
          },'998元/年'),
          h("el-button",{
            props:{
              round:'',
              size:'medium'
            },
            class:'button is-warning',
            style:'color:#fff'
          },'立即购买'),
          h('small',{
            class:'small'
          },'限时买二送二')
        ],
      );
    },
    renderplatina(h,{column}){
      console.log(h)
      return h(
        'div',
        [
          h('span',{
            class:'info'
          }, column.label),
          h('b',{
            style:'color:#ff4d4d;display:block;margin:10px 0;font-size:16px'
          },'1498元/年'),
          h("el-button",{
            props:{
              round:'',
              size:'medium'
            },
            class:'button is-danger',
            style:'color:#fff'
          },'立即购买'),
          h('small',{
            class:'small'
          },'当前版本')
        ],
      );
    },
    rendermasonry(h,{column}){
      return h(
        'div',
        [
          h('span',{
            class:'info'
          }, column.label),
          h('b',{
            style:'color:#ff4d4d;display:block;margin:10px 0;font-size:16px'
          },'1998元/年'),
          h("el-button",{
            props:{
              round:'',
              size:'medium'
            },
            class:'button is-primary',
            style:'color:#fff'
          },'立即购买'),
          h('small',{
            class:'small'
          },'当前版本')
        ],
      );
    },
    renderinteractive(h,{column}){
      console.log(h)
      return h(
        'div',
        [
          h('span',{
            class:'info'
          }, column.label),
          h('b',{
            style:'color:#ff4d4d;display:block;margin:10px 0;font-size:16px'
          },'2798元/年'),
          h("el-button",{
            props:{
              round:'',
              size:'medium'
            },
            class:'button is-blueCyan',
            style:'color:#fff'
          },'立即购买'),
          h('small',{
            class:'small'
          },'当前版本')
        ],
      );
    },
    rendershop(h,{column}){
      console.log(h)
      return h(
        'div',
        [
          h('span',{
            class:'info'
          }, column.label),
          h('b',{
            style:'color:#ff4d4d;display:block;margin:10px 0;font-size:16px'
          },'2798元/年'),
          h("el-button",{
            props:{
              round:'',
              size:'medium'
            },
            class:'button is-purple',
            style:'color:#fff'
          },'立即购买'),
          h('small',{
            class:'small'
          },'当前版本')
        ],
      );
    }
  }
}
</script>

<style scoped>
#allService{
  padding-bottom:50px
}
.allService{
  box-shadow: 0 2px 10px 0 rgba(0,0,0,.1);
}
</style>
<style>
.el-table thead.is-group tr:first-child th:first-child{
  border-top:6px solid #dcdcdc;
}
.el-table thead.is-group tr:first-child th:nth-child(2){
  border-top:6px solid #99ebbe;
}
.el-table thead.is-group tr:first-child th:nth-child(3){
  border-top:6px solid #fed696;
}
.el-table thead.is-group tr:first-child th:nth-child(4){
  border-top:6px solid #fcb6b4;
}
.el-table thead.is-group tr:first-child th:nth-child(5){
  border-top:6px solid #a1c8fe;
}
.el-table thead.is-group tr:first-child th:nth-child(6){
  border-top:6px solid #0cc5c3;
}
.el-table thead.is-group tr:first-child th:nth-child(7){
  border-top:6px solid #824af3;
}
.button{
  border:0 !important
}
.button.is-warning{
  background: -webkit-gradient(linear,left top,right top,from(#ffaa30),to(#ffcd47));
  background: linear-gradient(90deg,#ffaa30,#ffcd47);
  -webkit-box-shadow: 0 3px 8px 0 rgba(255,175,51,.3);
  box-shadow: 0 3px 8px 0 rgba(255,175,51,.3);
}
.button.is-warning:hover {
  background: -webkit-gradient(linear,left top,right top,from(#f79f20),to(#f8be23));
  background: linear-gradient(90deg,#f79f20,#f8be23);
}
.button.is-danger{
  background: -webkit-gradient(linear,left top,right top,from(#ff4d4d),to(#ff793e));
  background: linear-gradient(90deg,#ff4d4d,#ff793e);
  -webkit-box-shadow: 0 3px 8px 0 rgba(255,84,76,.3);
  box-shadow: 0 3px 8px 0 rgba(255,84,76,.3);
}
.button.is-danger:hover {
  background: -webkit-gradient(linear,left top,right top,from(#f84141),to(#f8692a));
  background: linear-gradient(90deg,#f84141,#f8692a);
}
.button.is-primary {
  background: -webkit-gradient(linear,left top,right top,from(#4381fd),to(#44b6ff));
  background: linear-gradient(90deg,#4381fd,#44b6ff);
  -webkit-box-shadow: 0 3px 8px 0 rgba(67,137,253,.3);
  box-shadow: 0 3px 8px 0 rgba(67,137,253,.3);
}
.button.is-primary:hover {
  background: -webkit-gradient(linear,left top,right top,from(#2d70f6),to(#29a8f9));
  background: linear-gradient(90deg,#2d70f6,#29a8f9);
}
.button.is-blueCyan{
  background: -webkit-gradient(linear,left top,right top,from(#00cbd2),to(#40e4b8));
  background: linear-gradient(90deg,#00cbd2,#40e4b8);
  -webkit-box-shadow: 0 3px 8px 0 rgba(5,205,209,.3);
  box-shadow: 0 3px 8px 0 rgba(5,205,209,.3);
}
.button.is-blueCyan:hover {
  background: -webkit-gradient(linear,left top,right top,from(#00c4cb),to(#2ae0af));
  background: linear-gradient(90deg,#00c4cb,#2ae0af);
}
.button.is-purple{
  background: -webkit-gradient(linear,left top,right top,from(#8169ff),to(#a37aff));
  background: linear-gradient(90deg,#8169ff,#a37aff);
  -webkit-box-shadow: 0 3px 8px 0 rgba(133,107,255,.3);
  box-shadow: 0 3px 8px 0 rgba(133,107,255,.3);
}
.button.is-purple:hover {
  background: -webkit-gradient(linear,left top,right top,from(#745bf9),to(#9164f9));
  background: linear-gradient(90deg,#745bf9,#9164f9);
}
th .info{
  position: relative;
  line-height: 1;
  font-size: 18px;
  color: #000;
  margin-bottom: 10px;
  font-weight: 400;
}
th .small{
  height: 12px;
  line-height: 12px;
  margin-bottom: 0;
  color: #b2b2b2;
  display: block;
  margin-top: 20px;
}
#allService .el-table th{
  padding: 50px 0 !important;
}
.el-table thead.is-group th{
  background-color: #fff !important;
}
.allService th .cell{
  font-size: 16px;
  font-weight: normal;
}
.el-table__empty-block{
  display: none !important;
}
.allService .cell {
  text-align: center;
}

.el-icon-circle-close {
  color: #ff4d4d
}

.el-icon-circle-check {
  color: #4ac227;
}
</style>
<style>
.allService i {
  font-size: 24px;
}
</style>
