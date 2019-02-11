import Vue from 'vue'
import Vuex from 'vuex'

import photoModule from './modules/photo'
import jobModule from './modules/job'

import {
  PHOTO_MODULE,
  JOB_MODULE
} from './namespaces'

import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const modules = {
  [PHOTO_MODULE]: photoModule,
  [JOB_MODULE]: jobModule
}

export default new Vuex.Store({
  modules,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
