import { createModule } from 'vdi'

import { AppModule } from './app/App.Module'

import './styles/index.css'

/**创建vue实例绑定module */
createModule(AppModule).then((vueInstance) => {
    /**
     * 在这里可以获取到vue实例
     * 使用vue.use之类的方法
     */
    vueInstance.mount('#app')
})
