import * as types from './mutation-types'

export const setPhotoData = ({ commit, state }, photoData) => {
  commit(types.SET_PHOTO_DATA, photoData)
}
