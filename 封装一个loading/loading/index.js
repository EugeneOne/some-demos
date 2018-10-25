import Vue from 'vue'
import loading from './loading.vue'
import merge from '@common/utils/merge'
import afterLeave from '@common/utils/after-leave'

console.log('123')

// 创建一个loading子类,参数是一个包含组件选项的对象
const LoadingConstructor = Vue.extend(loading)

const defaults = {
    text: null,
    fullscreen: true
}

let fullscreenLoading

LoadingConstructor.prototype.close = function() {
    fullscreenLoading = undefined
    afterLeave(
        this,
        _ => {
            const target = this.body ? document.body : this.target
            if (this.$el && this.$el.parentNode) {
                this.$el.parentNode.removeChild(this.$el)
            }
            this.$destroy()
        },
        300
    )

    this.visible = false
}

// 创建loading并返回loading实例
const Loading = (options = {}) => {
    options = merge({}, defaults, options)
    options.target = options.target || document.body
    if (options.target !== document.body) {
        options.fullscreen = false
    } else {
        options.body = true
    }
    // 全屏模式下使用单例模式，返回full实例
    if (options.fullscreen && fullscreenLoading) {
        return fullscreenLoading
    }
    let parent = options.body ? document.body : options.target
    // 创建loading实例
    let instance = new LoadingConstructor({
        el: document.createElement('div'),
        data: options
    })

    parent.appendChild(instance.$el)
    Vue.nextTick(() => {
        instance.visible = true
    })
    if (options.fullscreen) {
        fullscreenLoading = instance
    }
    return instance
}

export default Loading
