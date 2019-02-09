import * as types from './mutation-types'

const mutations = {
  [types.SET_PHOTO_DATA](state, photoData) {
    state.photoData = photoData
  }
}

export default mutations
