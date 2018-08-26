<template>
    <div class="toast" :class="toastClasses">
        <div class="message" ref="messageHight" >
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
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
                        callback: undefined
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
            position:{
                type:String,
                validator(value){
                    return ['top', 'bottom', 'middle'].includes(value)
                }
            },
            enableHtml:{
                type:Boolean,
                default:false
            }
        },
        computed:{
          toastClasses(){
              return {
                  [`position-${this.position}`]:true
              }
          }
        },
        mounted(){
            this.execAutoClose()
            this.updateStyle()
        },
        methods:{
            updateStyle(){
                this.$nextTick(()=>{
                    this.$refs.line.style.height = `${this.$refs.messageHight.getBoundingClientRect().height}px`
                })
            },
            close(){
                this.$el.remove()
                this.$emit('beforeClose')
                this.$destroy()
            },
            onClickClose(){
             this.close()
             if(this.closeButton && typeof this.closeButton.callback === 'function') {
                 this.closeButton.callback(this)
             }
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
    $toast-min-height: 40px;
    $toast-bg:rgba(0,0,0,0.75);
    .toast{
        font-size: $font-size;min-height: $toast-min-height;line-height: 1.8;
        position:fixed;left:50%;
        display: flex;align-items:center;
        border-radius: 4px;background-color: $toast-bg;color: #fff;
        padding:0 16px;box-shadow:0 0 3px 0 rgba(0,0,0,0.5);
        .message{
            margin: 8px 0;
        }
        .close{
            flex-shrink:0;
            margin-left: 16px;
        }
        .line{
            height: 100%;
            border-left: 1px solid #666;
            margin-left: 16px;
        }
        &.position-top{
            top:0;
            transform: translateX(-50%);
        }
        &.position-middle{
            top:50%;
            transform:translate(-50%,-50%);
        }
        &.position-bottom{
            bottom:0;
            transform:translateX(-50%);
        }
    }
</style>