import Vue from 'vue'
import Button from  './button'
import Icon from './icon'
import ButtonGroup from './buttongroup'
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group', ButtonGroup)
new Vue({
    el:'#app'
})