<template>
        <button class="g-button" :class="{[`i-${iconPostion}`]:true}">
            <g-icon v-if="icon" class="icon"
                    :name="icon" ></g-icon>
            <div class="content">
                <slot></slot>
            </div>

        </button>
</template>

<script>
    export default {
        props:{
            icon:{},
            iconPostion:{
                type:String,
                default:'left',
                validator(value){
                    return value === 'right' || value === 'left';
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .g-button{
        font-size:var(--font-size);
        height:var(--button-height);
        padding: 0 1em;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        border-radius: var(--border-radius);
        border:1px solid var(--border-color);
        background: var(--button-bg);
        &:hover{
            border-color: var(--border-color-hover);
        }
        &:active{
            background-color: var(--button-active-bg);
        }
        &:focus{
            outline: none;
        }
        > .content{
            order:2;
        }
        > .icon{
            order: 1; margin-right: .3em;
        }
        &.i-right{
            > .content{
                order:1;
            }
            > .icon{
                order: 2; margin-right: 0;
                margin-left: .3em;
            }
        }
    }
</style>