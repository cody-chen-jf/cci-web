import * as types from './mutation-types'

const mutations = {
  [types.SET_SELECTED_JOB](state, selectedJob) {
    state.selectedJob = selectedJob
  }
}

export default mutations
