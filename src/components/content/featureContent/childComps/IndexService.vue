<template>
  <div id="servicePay">
    <div class="container" ref="conRef">

      <div class="flex">

        <!--锚导航-->
        <div class="service-sidebar-anchor">
          <div class="" ref="anchor">

          <div  class="anchor-wrapper" >
            <div class="anchor-content">
              <h4>你可以用米点云互动解决以下问题:</h4>
              <ul>
                <li v-for="(item,index) in navlist" :class="{'link-active':index===currentIndex}" :key="index" @click.prevent="anchor(index+1)"><a :href="'#'+(index+1)">{{item}}</a></li>
              </ul>
            </div>
          </div>
        </div>
        </div>
        <!--导航内容-->
        <div class="service-content">

          <div class="service-item" id="1" >
            <div class="service-scene">涨粉引流</div>
            <el-row :gutter="20">
              <el-col :span="8">
                <div class="grid-content pointer">
                    <div class="content-body flex justify-between align-center">
                        <div class="icon"></div>
                        <div class="info flex flex-column flex-item">
                          <div class="theme flex">
                            <div class="title">
                              组队参加
                            </div>
                            <div class="symobl v1">
                                铂金版
                            </div>
                          </div>
                          <div class="article">
                            老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                          </div>
                        </div>
                    </div>
                    <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v2">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v3">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v1">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v2">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v3">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v1">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v2">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v3">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>


          <div class="service-item" id="2">
            <div class="service-scene">卖货促销</div>
            <el-row :gutter="20">
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v2">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v2">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v2">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v2">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v2">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v2">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v2">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v2">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v2">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>

          <div class="service-item" id="3">
            <div class="service-scene">突出自有品牌</div>
            <el-row :gutter="20">
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v3">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v3">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v3">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v3">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v3">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v3">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v3">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v3">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v3">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>

          <div class="service-item" id="4">
            <div class="service-scene">搜索参与人信息</div>
            <el-row :gutter="20">
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v4">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v4">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v4">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v4">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v4">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v4">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v4">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v4">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v4">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>

          <div class="service-item" id="5">
            <div class="service-scene">自定义活动展示情况</div>
            <el-row :gutter="20">
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v5">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v5">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v5">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v5">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v5">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v5">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v5">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content pointer">
                  <div class="content-body flex justify-between align-center">
                    <div class="icon"></div>
                    <div class="info flex flex-column flex-item">
                      <div class="theme flex">
                        <div class="title">
                          组队参加
                        </div>
                        <div class="symobl v5">
                          铂金版
                        </div>
                      </div>
                      <div class="article">
                        老用户为获取参与机会，分享活动链接。促进老带新，极速裂变。
                      </div>
                    </div>
                  </div>
                  <div class="item-line"></div>
                  <div class="item-btn-group flex">
                    <div class="flex align-center flex-item justify-center pointer xq"><i class="el-icon-warning-outline"></i>了解详情</div>
                    <div class="flex align-center flex-item justify-center pointer sj"><i class="el-icon-upload2"></i>升级解锁</div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>


        </div>

      </div>


    </div>

  </div>
</template>

<script>
export default {
  name: "IndexService",
  data(){
    return {
      currentIndex:0,
      navlist:["涨粉引流","卖货促销","突出自有品牌","搜集参与人信息","自定义活动展示情况"]
    }
  },
  mounted:function(){
  //监听页面滚动
     //  console.log(this.$refs.conRef.offsetTop)
    this.$nextTick(()=>{
      window.addEventListener("scroll", this.scrollEvent,true)
    })
  },
  methods:{
    scrollEvent(){
      //console.log(this.$parent.$el)
      //console.log(this.$refs.anchor)
      let top  = this.$parent.$el.scrollTop
      if(top > 355){
        this.$refs.anchor ?  this.$refs.anchor.style.position = 'fixed' : ''
        this.$refs.anchor.style.top = 86+'px'
        this.$refs.anchor.style.left = ((window.innerWidth-10) - 1200) / 2 +'px'
        this.$refs.anchor.style.width = 199+'px'
      }else{
        this.$refs.anchor.style.position = ''
      }

      //let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      //滑动右侧左侧导航到指定位置
      let item = document.querySelectorAll('.service-item');
      let itemLen = item.length;
      //滚动区域
      let scrollHeight = this.$parent.$el.scrollHeight
      //可视区域高度
      let windowHeight = document.body.clientHeight || document.documentElement.clientHeight
      //console.log(scrollHeight,windowHeight)
      // let length = this.themeTopYs.length; //4
       for (let i = 0; i < itemLen; i++) {
        if (
          this.currentIndex !== i && (
          (i < itemLen - 1 && top >= (item[i].offsetTop-70) && top < (item[i + 1].offsetTop-70)) ||
          (i === itemLen - 1 && top >= (item[i].offsetTop-70)) ||
            //页面滚动到最底部的条件
          ((top + windowHeight) ===scrollHeight)
        )) {
          this.currentIndex = i;
        }
       }
    },
    anchor(anchorName){
      this.currentIndex = anchorName-1
      let anchorElement = document.getElementById(anchorName);
      /*如果对应id的锚点存在，就跳转到锚点*/
      if(anchorElement) {
        anchorElement.scrollIntoView({
          behavior:'smooth',
          block:'center'
        });
      }
      //先移除类样式
      // var i=0,len = e.path[2].querySelectorAll("li").length;
      // for(;i<len;i++){
      //   e.path[2].querySelectorAll("li")[i].classList.remove('link-active')
      // }
      // e.currentTarget.classList.add('link-active')
    }
  },
  destroyed() {
    window.removeEventListener("scroll",this.scrollEvent,true)
  }
}
</script>

<style scoped>
.container{
  width: 1200px;
  margin:0 auto;
}
#servicePay .service-sidebar-anchor{
  width: 200px;
  height: 415px;
  margin-right: 41px;
}
.service-sidebar-anchor .anchor-wrapper{
  height: 100%;
  width: 100%;
  overflow: auto;
  background: #fff;
  padding:16px 0 16px 15px;
  box-shadow: 0 1px 6px 0 rgba(0,0,0,.06);
  border-radius: 6px;
  border-top: 4px solid rgba(67,129,253,.2);
}
.anchor-content h4{
  font-size: 16px;
  width: 128px;
  margin-bottom: 16px;
}
.anchor-content ul li{
  height: 36px;
  line-height: 36px;
  position: relative;
}
.anchor-content ul li:hover a,.anchor-content ul li.link-active a{
  color: #4ac227;
}
.anchor-content ul li a{
  padding-left: 15px;
}
.anchor-content ul li a:before{
  content: "";
  width: 4px;
  height:4px;
  position: absolute;
  top:16px;
  left: 0;
  background: #dcdcdc;
  transition: all .3s;
}
.anchor-content ul li:hover a:before,.anchor-content ul li.link-active a:before{
  background: #4ac227;
}
.service-content{
  width: 956px;
}
.service-item .service-scene{
  height: 22px;
  line-height: 22px;
  font-size: 22px;
  font-weight: 400;
  color: #000;
}
.service-item .grid-content{
  margin-top: 28px;
  margin-bottom: 38px;
  background-color: #fff;
  box-shadow: 0 1px 6px 0 rgba(0,0,0,.06);
  border-radius: 6px;
}
.grid-content .content-body:hover ~ .item-btn-group div:first-child{
  color:#4ac227;
}
.service-item .grid-content .content-body{
  height:112px;
  padding: 12px 0;
}
.service-item .grid-content .item-line{
  margin: 0 auto;
  width: 249px;
  height: 1px;
  background: #eee;
}
.service-item .grid-content .icon{
  margin-left: 20px;
  width:56px;
  height:56px;
  border-radius: 20px;
  background-color: #eee;
}
.info{
  margin-left: 13px;
}
 .info .theme{
  height: 18px;
  line-height: 18px;
  width: 206px;
}
.info .theme .title{
  font-size: 16px;
  font-weight: 400;
  color: #000;
}
.symobl{
  display: inline-block;
  line-height: 16px;
  background: rgba(255,81,97,.1);
  padding: 0 8px;
  margin-left: 10px;
  border: 1px solid #4ac227;
  border-radius: 9px;
  color: #4ac227;
  text-align: center;
  font-size: 12px;
}
.symobl.v1{
  border-color: #ff5161;
  background: rgba(255,81,97,.1);
  color: #ff5161;
}
.symobl.v2 {
  border-color: #9b60d7;
  background: rgba(155, 96, 215, .1);
  color: #9b60d7;
}
.symobl.v3 {
  border-color: #4088ff;
  background: rgba(64,136,255,.1);
  color: #4088ff;
}
.symobl.v4 {
  border-color: #ffa044;
  background: rgba(255,160,68,.1);
  color: #ffa044;
}
.symobl.v5 {
  border-color: #29c6dd;
  background: rgba(41,198,221,.1);
  color: #29c6dd;
}
.info .article{
  width: 181px;
  line-height: 18px;
  margin-top: 8px;
  font-size: 12px;
  color: #898989;
}
.item-btn-group{
 height: 52px;
  font-size: 16px;
  color:#535353
}
.item-btn-group > div:hover{
  color:#4ac227;
}
.item-btn-group i{
  margin-right: 7px;
}
</style>
