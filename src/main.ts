import './assets/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import StyleClass from 'primevue/styleclass'
import { Ripple } from 'primevue'
import ToastService from 'primevue/toastservice'

import 'primeicons/primeicons.css'
import Aura from '@primevue/themes/aura'

// PrimeVue components
import DataView from 'primevue/dataview'
import Button from 'primevue/button'
import Tag from 'primevue/tag'
import InputGroup from 'primevue/inputgroup'
import InputText from 'primevue/inputtext'
import Avatar from 'primevue/avatar'
import SelectButton from 'primevue/selectbutton'
import Select from 'primevue/select'
import Checkbox from 'primevue/checkbox'
import Dialog from 'primevue/dialog'
import Divider from 'primevue/divider'
import Drawer from 'primevue/drawer'
import Toast from 'primevue/toast'
import Badge from 'primevue/badge'
import OverlayBadge from 'primevue/overlaybadge'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(ToastService)
app.directive('styleclass', StyleClass)
app.directive('ripple', Ripple)
app.component('DataView', DataView)
app.component('Button', Button)
app.component('Tag', Tag)
app.component('InputGroup', InputGroup)
app.component('InputText', InputText)
app.component('Avatar', Avatar)
app.component('SelectButton', SelectButton)
app.component('Select', Select)
app.component('Checkbox', Checkbox)
app.component('Dialog', Dialog)
app.component('Divider', Divider)
app.component('Drawer', Drawer)
app.component('Toast', Toast)
app.component('Badge', Badge)
app.component('OverlayBadge', OverlayBadge)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.my-app-dark',
    },
  },
  Ripple: true,
})

app.mount('#app')
