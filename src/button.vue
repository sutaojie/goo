<template>
        <button class="g-button">
            <g-icon v-if="icon" class="icon" :name="icon"></g-icon>
            <div class="content">
                <slot></slot>
            </div>

        </button>
</template>

<script>
    export default {
        props:{
            icon:{}
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
    }
</style>