<template>
  <div id="tool-kit">
    <div class="container">
      <div class="main-tools clearfix">

        <div class="tools-item jz">
          <div class="item-top">
            米点建站
          </div>
          <div class="item-desc">
            快速建站，全网四合一
          </div>
          <div class="user-btn">
            免费体验 >
          </div>
        </div>

        <div class="tools-item shop">
          <div class="item-top">
            米点商城
          </div>
          <div class="item-desc">
            快速建站，全网四合一
          </div>
          <div class="user-btn">
            免费体验 >
          </div>
        </div>

        <div class="tools-item qz">
          <div class="item-top">
            米点轻站
          </div>
          <div class="item-desc">
            快速建站，全网四合一
          </div>
          <div class="user-btn">
            免费体验 >
          </div>
        </div>

        <div class="tools-item wcd">
          <div class="item-top">
            米点微传单
          </div>
          <div class="item-desc">
            快速建站，全网四合一
          </div>
          <div class="user-btn">
            免费体验 >
          </div>
        </div>
      </div>

      <div class="open-btn-con">
        <div class="content-txt">
          &lt;&lt;&lt; 展开更多推荐 &gt;&gt;&gt;
        </div>
      </div>

      <div class="bottom-con">
        <a href="">获取更多服务 &gt;&gt;</a>
        <a href="">代理加盟 &gt;&gt;</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HdManageToolKit"
}
</script>

<style scoped>
#tool-kit {
  padding-top: 20px
}

.container {
  width: 1580px;
  margin: 0 auto
}

.main-tools{

}
.main-tools .tools-item {
  width: 380px;
  height: 220px;
  margin-left: calc((100% - 1520px) / 3);
  position: relative;
  float: left;
  border-radius: 6px 7px 44px;
  background: #fff;
  transition: transform .3s ease 0s;
  overflow: hidden;
}

.main-tools .tools-item:first-child {
  margin-left: 0;
}

.tools-item:hover {
  transform: translateY(-10px);
}

.tools-item .item-top {
  position: absolute;
  left: 20px;
  width: 120px;
  height: 40px;
  color: #fff;
  text-align: center;
  line-height: 40px;
  border-radius: 0 0 10px 10px;
  font-size: 16px;
  z-index: 1
}

.tools-item.jz .item-top {
  background: #4ac227;
  box-shadow: 0 2px 10px rgba(74, 194, 39, .4);
}

.tools-item.shop .item-top {
  background: rgb(255, 117, 77);
  box-shadow: 0 2px 10px rgba(255, 117, 77, .4);
}

.tools-item.qz .item-top {
  background: rgb(9, 186, 222);
  box-shadow: 0 2px 10px rgba(9, 186, 222, .4);
}

.tools-item.wcd .item-top {
  background: rgb(51, 107, 255);
  box-shadow: 0 2px 10px rgba(51, 107, 255, .4);
}

.tools-item .item-desc {
  position: absolute;
  top: 70px;
  left: 20px;
  font-size: 24px;
  color: #333;
  font-weight: bold;
  z-index: 1;
}

.tools-item .user-btn {
  width: 120px;
  height: 40px;
  position: absolute;
  top: 140px;
  left: 20px;
  text-align: center;
  line-height: 38px;
  background: #fff;
  border-radius: 20px;
  z-index: 1;
  transform: background-color .3 ease 0s;
  cursor: pointer;
}

.tools-item.jz .user-btn {
  border: 1px solid #4ac227;
  color: #4ac227;
}

.tools-item .user-btn:hover {
  background-color: rgb(238, 243, 254);
}

.tools-item.shop .user-btn {
  border: 1px solid rgb(255, 117, 77);
  color: rgb(255, 117, 77);
}

.tools-item.qz .user-btn {
  border: 1px solid rgb(9, 186, 222);
  color: rgb(9, 186, 222)
}

.tools-item.wcd .user-btn {
  border: 1px solid rgb(51, 107, 255);
  color: rgb(51, 107, 255);
}
.open-btn-con{
  margin-top: 50px;
  height: 45px;
}
.open-btn-con div{
  width: 500px;
  text-align: center;
  line-height: 45px;
  background-color: #fff;
  font-size: 14px;
  border-radius: 2px 5px 5px;
  margin: 0 auto;
  opacity: .7;
  cursor: pointer;
  transition: color .3s;
  color: #999;
}
.open-btn-con div:hover{
  color:#4ac227;
}
.bottom-con{
  margin-top: 50px;
  text-align: center;
}
.bottom-con a{
  color:#4ac227;
}
.bottom-con a:hover{
  text-decoration: underline;
}
.bottom-con a:last-child{
  margin-left: 60px;
}

@media  (max-width: 1860px) and (min-width: 1700px){
  .container{
    width: 1410px;
  }
  .main-tools .tools-item{
    width:330px;
    height:180px;
    margin-left: calc((100% - 330px * 4) / 3);
    margin-bottom: 30px;
  }
  .tools-item .item-top {
    width: 110px;
    height: 36px;
    font-size: 15px;
    line-height: 36px;
  }
  .tools-item .item-desc {
    top: 60px;
    font-size: 20px;
  }

  .tools-item .user-btn {
    width: 110px;
    height: 35px;
    top: 120px;
    line-height: 35px;
  }
}
@media  (max-width: 1699px) and (min-width: 1520px){
  .container{
    width: 1260px;
  }
  .main-tools .tools-item{
    width:400px;
    height:200px;
    margin-left: calc((100% - 400px*3) / 2);
    margin-bottom: 30px;
  }
  .main-tools .tools-item:nth-child(3n+1) {
    margin-left: 0;
  }
}
@media  (max-width: 1519px) and (min-width: 1170px){
  .container{
    width: 1100px;
  }
  .main-tools .tools-item{
    width:350px;
    height:160px;
    margin-left: calc((100% - 350px*3) / 2);
    margin-bottom: 25px;
  }
  .main-tools .tools-item:nth-child(3n+1) {
    margin-left: 0;
  }
  .tools-item .item-top {
    width: 90px;
    height: 30px;
    font-size: 13px;
    line-height: 30px;
  }
  .tools-item .item-desc {
    top: 50px;
    font-size: 18px;
  }

  .tools-item .user-btn {
    width: 100px;
    height: 30px;
    top: 100px;
    line-height: 30px;
  }
}
</style>
