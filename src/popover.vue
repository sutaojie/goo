<template>
    <div class="popover" @click="onClick" ref="popover">
        <div class="content-wrapper" ref="contentWrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper">
            <slot></slot>
       </span>
    </div>
</template>

<script>
    export default {
        name: "popover",
        data() {
            return {visible: false}
        },
        methods: {
            onClick(event) {
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    if (this.visible === true) {
                        this.close()
                    } else {
                        this.open()
                    }
                }

            },
            onClickDocument(e) {
                if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
                    return
                }
                if (this.$refs.contentWrapper && (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))) {
                    return
                }
                this.close()
            },
            close() {
                this.visible = false
                document.removeEventListener('click', this.onClickDocument)
            },
            open() {
                this.visible = true
                this.$nextTick(() => {
                    this.positionContent()
                    document.addEventListener('click', this.onClickDocument)
                })
            },
            positionContent() {
                document.body.appendChild(this.$refs.contentWrapper)
                let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
                this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
                this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
            },

        }
    }
</script>

<style lang='scss' scoped>
    $border-color:#333;
    $border-radius:4px;
    .popover {
        display: inline-flex;
        position: relative;
    }

    .content-wrapper {
        position: absolute;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        transform: translateY(-100%);
        padding: .5em 1em;
        margin-top: -10px;
        max-width: 20em;
        word-break: break-all;
        filter: drop-shadow(0 1px 1px rgba(0,0,0,0.5));
        background-color: white;
        &::before,&::after{
            content:'';
            display: block;
            border: 10px solid transparent;
            width:0;
            height: 0;
            position: absolute;
            left: 10px;
        }
        &:before{
            border-top-color:black;
            top:100%;
        }
        &::after{
            border-top-color:white;
            top: calc(100% - 1px);
        }
    }
</style>