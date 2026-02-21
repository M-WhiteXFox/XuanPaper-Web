import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入Element框架相关内容
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/styles/theme.css'
//引入Element图标相关
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const BASE_URL = 'http://localhost:8080';
//window里面添加的内容 是全局内容 可以在任意script标签内部使用
window.BASE_URL = BASE_URL;

const app = createApp(App)
//在vue实例中添加全局内容
app.config.globalProperties.BASE_URL = BASE_URL;

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus).use(store).use(router).mount('#app')


