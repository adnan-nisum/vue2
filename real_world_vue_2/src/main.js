import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { upperFirst } from "lodash"
import { camelCase } from "lodash"

const requireComponent = require.context(
   './components', 
  false, 
  /Base[A-Z]w+\.(vue|js)$/);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
