import {createRouter,createWebHistory} from "vue-router";

import Buttons from '../components/asideControl/ButtonsComponent.vue'
import Cards from '../components/asideControl/CardsComponent.vue'
import Charts from '../components/asideControl/ChartsComponent.vue'
import Dashboard from '../components/asideControl/DashboardComponent.vue'
import Forms from '../components/asideControl/FormsComponent.vue'
import Modals from '../components/asideControl/ModalsComponent.vue'
import Pages from '../components/asideControl/PagesComponent.vue'
import Tables from '../components/asideControl/TablesComponent.vue'
import LoginPage from "../components/LoginPage.vue";
import ForgotPasswordPage from "../components/ForgotPasswordPage.vue";
import CreateAccountPage from "../components/CreateAccountPage.vue";

const routes=[
  {path:'/buttons',component:Buttons},
  {path:'/cards',component:Cards},
  {path:'/charts',component:Charts},
  {path:'/dashBoard',component:Dashboard},
  {path:'/forms',component:Forms},
  {path:'/modals',component:Modals},
  {path:'/pages',component:Pages},
  {path:'/tables',component:Tables},
  {path:'/login',component:LoginPage},
  {path:'/forgetPassword',component:ForgotPasswordPage},
  {path:'/createAccount',component:CreateAccountPage},
]

const router=createRouter({
  history:createWebHistory(),
  routes,
  scrollBehavior(to,from,savePosition){
    if(savePosition){
      //如果有保存的位置信息，则返回到该位置
      return savePosition;
    }else{
      //否则，滚动到页面顶部
      return{top:0,behavior:'smooth'}
    }
  },
});

export default router