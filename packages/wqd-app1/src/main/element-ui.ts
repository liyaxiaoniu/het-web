import Vue from 'vue'

// import 'element-ui/lib/theme-chalk/index.css'
import { Button, Select } from 'element-ui'

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }

Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
