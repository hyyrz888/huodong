<template>
  <div id="gift-center">
    <el-card class="box-card">
      <div slot="header" class="clearfix flex align-center">
        <span class="flex-item" style="font-size: 16px">礼品中心</span>
        <el-button type="success" size="medium" style="float: right;" plain>礼品账户</el-button>
        <el-button type="success" size="medium" style="float: right;margin-right: 15px;" plain>礼品购物车</el-button>
      </div>
      <div class="text item">
        <div class="gift-sort">
          <div>
            <img src="@/assets/images/smallCountGift.png" alt="">
            <img src="@/assets/images/smallCountGift.png" alt="">
            <img src="@/assets/images/smallCountGift.png" alt="">
          </div>
          <div class="giftEffect" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <div class="effect-icon">
              <i class="el-icon-question"></i>
            </div>
            <span class="effectText" >礼品作用</span>
            <div class="arrowPosition" ref="tipbox">
              <span class="arrow-box">提供企业/商家做活动时，作为奖品吸引用户参与，购买后的礼品可以在创建的活动【奖项设置-奖项类型】里进行设置</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hotSale">
        <h2>热卖</h2>
        <el-card :body-style="{ padding: '0px' }" class="pointer">
          <img src="//hd.faisys.com/version2/image/giftCenter/newGiftCenterImg/wireless.jpg?v=201907311509" class="image">
          <div class="giftDesc">
            <div class="con">1/2/5/10/20/50/100元</div>
          </div>
          <div style="padding: 14px;">
            <span>全国三网用户直冲</span>
            <div class="bottom clearfix">
              <div class="giftPricebox">
                <span class="gift-price">
                  ￥<b class="floorPrice">1.5</b>
                </span>
                起
              </div>
            </div>
          </div>
        </el-card>
        <el-card :body-style="{ padding: '0px' }" class="pointer">
          <img src="//hd.faisys.com/version2/image/giftCenter/newGiftCenterImg/wireless.jpg?v=201907311509" class="image">
          <div class="giftDesc">
            <div class="con">1/2/5/10/20/50/100元</div>
          </div>
          <div style="padding: 14px;">
            <span>全国三网用户直冲</span>
            <div class="bottom clearfix">
              <div class="giftPricebox">
                <span class="gift-price">
                  ￥<b class="floorPrice">1.5</b>
                </span>
                起
              </div>
            </div>
          </div>
        </el-card>
        <el-card :body-style="{ padding: '0px' }" class="pointer">
          <img src="//hd.faisys.com/version2/image/giftCenter/newGiftCenterImg/wireless.jpg?v=201907311509" class="image">
          <div class="giftDesc">
            <div class="con">1/2/5/10/20/50/100元</div>
          </div>
          <div style="padding: 14px;">
            <span>全国三网用户直冲</span>
            <div class="bottom clearfix">
              <div class="giftPricebox">
                <span class="gift-price">
                  ￥<b class="floorPrice">1.5</b>
                </span>
                起
              </div>
            </div>
          </div>
        </el-card>
        <el-card :body-style="{ padding: '0px' }" class="pointer">
          <img src="//hd.faisys.com/version2/image/giftCenter/newGiftCenterImg/wireless.jpg?v=201907311509" class="image">
          <div class="giftDesc">
            <div class="con">1/2/5/10/20/50/100元</div>
          </div>
          <div style="padding: 14px;">
            <span>全国三网用户直冲</span>
            <div class="bottom clearfix">
              <div class="giftPricebox">
                <span class="gift-price">
                  ￥<b class="floorPrice">1.5</b>
                </span>
                起
              </div>
            </div>
          </div>
        </el-card>
      </div>

      <div class="hotSale">
        <h2>上新</h2>
        <el-card :body-style="{ padding: '0px' }" class="pointer">
          <img src="//hd.faisys.com/version2/image/giftCenter/newGiftCenterImg/wireless.jpg?v=201907311509" class="image">
          <div class="giftDesc">
            <div class="con">1/2/5/10/20/50/100元</div>
          </div>
          <div style="padding: 14px;">
            <span>全国三网用户直冲</span>
            <div class="bottom clearfix">
              <div class="giftPricebox">
                <span class="gift-price">
                  ￥<b class="floorPrice">1.5</b>
                </span>
                起
              </div>
            </div>
          </div>
        </el-card>
        <el-card :body-style="{ padding: '0px' }" class="pointer">
          <img src="//hd.faisys.com/version2/image/giftCenter/newGiftCenterImg/wireless.jpg?v=201907311509" class="image">
          <div class="giftDesc">
            <div class="con">1/2/5/10/20/50/100元</div>
          </div>
          <div style="padding: 14px;">
            <span>全国三网用户直冲</span>
            <div class="bottom clearfix">
              <div class="giftPricebox">
                <span class="gift-price">
                  ￥<b class="floorPrice">1.5</b>
                </span>
                起
              </div>
            </div>
          </div>
        </el-card>
        <el-card :body-style="{ padding: '0px' }" class="pointer">
          <img src="//hd.faisys.com/version2/image/giftCenter/newGiftCenterImg/wireless.jpg?v=201907311509" class="image">
          <div class="giftDesc">
            <div class="con">1/2/5/10/20/50/100元</div>
          </div>
          <div style="padding: 14px;">
            <span>全国三网用户直冲</span>
            <div class="bottom clearfix">
              <div class="giftPricebox">
                <span class="gift-price">
                  ￥<b class="floorPrice">1.5</b>
                </span>
                起
              </div>
            </div>
          </div>
        </el-card>
        <el-card :body-style="{ padding: '0px' }" class="pointer">
          <img src="//hd.faisys.com/version2/image/giftCenter/newGiftCenterImg/wireless.jpg?v=201907311509" class="image">
          <div class="giftDesc">
            <div class="con">1/2/5/10/20/50/100元</div>
          </div>
          <div style="padding: 14px;">
            <span>全国三网用户直冲</span>
            <div class="bottom clearfix">
              <div class="giftPricebox">
                <span class="gift-price">
                  ￥<b class="floorPrice">1.5</b>
                </span>
                起
              </div>
            </div>
          </div>
        </el-card>
      </div>


    </el-card>


  </div>
</template>

<script>
export default {
  name: "GiftCenter",
  data(){
    return {

    }
  },
  methods:{
    handleMouseEnter(){
      this.$refs.tipbox.style.display = 'block'
    },handleMouseLeave(){
      this.$refs.tipbox.style.display = 'none'
    }
  }
}
</script>

<style scoped>
.gift-sort img {
  display: inline-block;
  margin-right: 15px;
  margin-bottom: 10px;
}

.gift-sort .giftEffect {
  position: relative;
  margin-bottom: 25px;
  color: #898989;
  cursor: pointer;
  display: inline-block;
}

.gift-sort .giftEffect .effect-icon {
  font-size: 18px;
  margin-right: 3px;
  display: inline-block;
  vertical-align: middle;
  color: #898989;
}

.gift-sort .giftEffect:hover .effect-icon {
  color: #4ac227;
}

.giftEffect .effectText {
  height: 32px;
  line-height: 32px;
  display: inline-block;
  position: relative;
}

.giftEffect:hover {
  color: #535353
}

.arrowPosition {
  position: absolute;
  top: 35px;
  left: 0;
  z-index: 999;
  cursor: default;
  display: none;
}

.arrowPosition .arrow-box {
  position: relative;
  display: inline-block;
  width: 322px;
  background: #fff;
  border: 1px solid #e7e7e7;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 3px 3px 8px;
  color: #898989;
  padding: 10px;
}

.arrowPosition .arrow-box:before, .arrowPosition span:after {
  position: absolute;
  bottom: 100%;
  left: 4%;
  border: solid transparent;
  width: 0;
  height: 0;
  content: ' ';
  pointer-events: none;
}

.arrowPosition .arrow-box:before {
  border-width: 7px;
  margin-left: -7px;
  border-bottom-color: #e7e7e7
}

.arrowPosition .arrow-box:after {
  border-width: 6px;
  margin-left: -6px;
  border-bottom-color: #fff;
}
.hotSale .image{
  width: 100%;
  display: block;
}
.hotSale .giftDesc{
  position: absolute;
  color:#fff;
  font-size: 14px;
  line-height: 18px;
  z-index: 1;
  top:150px;
  width: 100%;
  text-align: center;
}
.giftPricebox{
  color:#b1b1b1;
  font-size: 14px;
}
.gift-price{
  color:#ff4e1f
}
.floorPrice{
  font-size: 16px;
  font-weight: 700;
}
</style>
<style>
.hotSale .el-card{
  width:192px;
  position: relative;
  margin: 0 20px 23px 0;
  display: inline-block;
  z-index: 1;
  vertical-align: middle;
}
.hotSale .el-card:hover{
  transform: translate3d(0,-2px,0);
  box-shadow: 0 2px 10px 0 rgba(0,0,0,.12);
}
</style>
