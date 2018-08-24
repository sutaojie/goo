const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('Input 存在.', () => {
        expect(Input).to.be.ok

    })
    describe('props', ()=>{
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(()=>{
            vm.$destroy()
        })
        it('接受 value', () => {

            vm = new Constructor({
                propsData: {
                    value: '小王'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('小王')
        })
        it('接受 disabled', () => {

            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })
        it('接受 readonly', () => {

            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
        })
        it('接受 error', () => {

            vm = new Constructor({
                propsData: {
                    error: '错了错了'
                }
            }).$mount()
            const useElements = vm.$el.querySelector('use')
            expect(useElements.getAttribute('xlink:href')).to.equal('#i-error')
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerHTML).to.equal('错了错了')
        })
    })
    describe('事件', ()=>{
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(()=>{
            vm.$destroy()
        })
        it('支持 input / focus / change / blur 事件', () => {
            let array = 'input change focus blur'.split(' ');
            array.forEach((eventName)=>{
                vm = new Constructor({}).$mount()
                const callback = sinon.fake();
                vm.$on(eventName, callback)
                //触发 input 的 change 事件
                let event = new Event(eventName);
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith(event)
            })


        })

    })

})