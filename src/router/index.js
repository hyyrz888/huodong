import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main.vue'
import Manage from '../views/Manage.vue'
import Feature from '../views/Feature.vue'

import MainContent from "@/components/content/mainContent/MainContent";
import CavIndex from "@/components/content/manageContent/childComps/CavIndex";
import ManageIndex from '@/components/content/manageContent/childComps/ManageIndex'
import PlayerRecord from '@/components/content/manageContent/childComps/PlayerRecord'
import MyInfo from "@/components/content/manageContent/childComps/MyInfo";
import EditHostInfo from '@/components/content/manageContent/childComps/EditHostInfo'
import AuthService from '@/components/content/manageContent/childComps/AuthService'
import GiftCenter from "@/components/content/manageContent/childComps/GiftCenter";
import Employee from "@/components/content/manageContent/childComps/Employee";
import StaffLog from '@/components/content/manageContent/childComps/StaffLog'
import HdManageToolKit from '@/components/content/manageContent/childComps/HdManageToolKit'
import BusinessAstTab from "@/components/content/manageContent/childComps/BusinessAstTab";
import AllService from "@/components/content/featureContent/childComps/AllService";
import IndexService from "@/components/content/featureContent/childComps/IndexService";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: '/main',
    name: '/Main',
    component: Main,
    children: [
      {
        path: "/",
        name: 'MainContent',
        component: MainContent
      }
    ]
  },
  {
    path: '/manage',
    name: '/Manage',
    component: Manage,
    children: [
      {path: '/manage', redirect: '/manage/index',},
      {path: 'index', name: 'index', component: ManageIndex},
      {path: "cavindex", name: 'CavIndex', component: CavIndex},
      {path: 'playerRecord', name: 'playerRecord', component: PlayerRecord},
      {path: 'myInfo', name: 'myInfo', component: MyInfo},
      {path: 'editHostInfo', name: 'editHostInfo', component: EditHostInfo},
      {path: 'authService', name: 'authService', component: AuthService},
      {path: 'giftCenter', name: 'giftCenter', component: GiftCenter},
      {path: 'employee', name: 'employee', component: Employee},
      {path: 'staffLog', name: 'staffLog', component: StaffLog},
      {path: 'hdManageToolKit', name: 'hdManageToolKit', component: HdManageToolKit},
      {path: 'businessAstTab', name: 'businessAstTab', component: BusinessAstTab},
    ]
  },
  {
    path: '/feature',
    name: 'Feature',
    component: Feature,
    children: [
      {path: '/feature', redirect: '/feature/allService'},
      {path: 'allService', name: 'allService',component: AllService},
      {path: 'indexService', name: 'indexService',component: IndexService}
    ]
  },
]

const router = new VueRouter({
  routes,
  'router-link-active': 'active',
  scrollBehavior (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})

export default router
