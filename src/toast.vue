<template>
    <div class="toast">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
        <span class="close" v-if="closeButton" @click="close">{{closeButton.text}}</span>
    </div>
</template>

<script>
    export default {
        name: "toast",
        props:{
            closeButton:{
                type:Object,
                default(){
                    return {
                        text:'关闭',
                    }
                }
            },
            autoClose:{
                type:Boolean,
                default:true
            },
            autoCloseDelay:{
                type:Number,
                default:5
            },
            enableHtml:{
                type:Boolean,
                default:false
            }
        },
        mounted(){
            this.execAutoClose()
        },
        methods:{
            close(){
                this.$el.remove()
                this.$destroy()
            },
            execAutoClose(){
               if(this.autoClose){
                   setTimeout(()=>{
                       this.close()
                   },this.autoCloseDelay * 1000)
               }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg:rgba(0,0,0,0.75);
    .toast{
        font-size: $font-size;height: $toast-height;line-height: 1.8;
        position:fixed;top:0;left:50%;transform:translateX(-50%);
        display: flex;align-items:center;
        border-radius: 4px;background-color: $toast-bg;color: #fff;
        padding:0 16px;box-shadow:0 0 3px 0 rgba(0,0,0,0.5);
    }
</style>