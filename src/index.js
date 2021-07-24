import DateTime from './dateTime/index.js';
import './theme/dateTime/index.scss'
const components = [
  DateTime
]

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.use(component);
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


export default {
  install,
  DateTime
}