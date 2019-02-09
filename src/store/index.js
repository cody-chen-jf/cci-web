import Vue from 'vue'
import Vuex from 'vuex'

import photoModule from './modules/photo'

import {
  PHOTO_MODULE
} from './namespaces'

import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const modules = {
  [PHOTO_MODULE]: photoModule
}

export default new Vuex.Store({
  modules,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
