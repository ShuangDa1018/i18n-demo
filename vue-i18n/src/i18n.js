// i18n.js
import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n) // $t('test.message')
const i18n = new VueI18n({
    locale: 'en',
    messages: {
        'zh': require('./locale/zh.js'),
        'en': require('./locale/en.js')
    }
})

export default i18n
