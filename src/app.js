import Vue from 'vue'
import Button from  './button'
import Icon from './icon'
import ButtonGroup from './buttongroup'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsBody from './tabs-body'
import TabsPane from './tabs-pane'
import Popover from './popover'
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout',Layout)
Vue.component('g-header', Header)
Vue.component('g-sider', Sider)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-toast', Toast)
Vue.use(plugin)
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-pane',TabsPane)
Vue.component('g-popover', Popover)
new Vue({
    el:'#app',
    data:{
        selectedTab:'sports'

    },
    mounted(){
        // this.$toast(`<a href="http://qq.com">文字</a>`, {enableHtml:true})
    },
    methods:{
         showToast1(){
           this.showToast('top')
         },
        showToast2(){
            this.showToast('middle')
        },
        showToast3(){
            this.showToast('bottom')
        },
         showToast(position){
             this.$toast('余额不足，请及时充值!',{
                 position,
                 enableHtml:false,
                 closeButton:{
                     text:'充值',
                     callback(){
                         console.log('充值成功')
                     }
                 },
                 autoClose:false
             })
        }
    }
})
