import * as types from './mutation-types'

export const setSelectedJob = ({ commit, state }, selectedJob) => {
  commit(types.SET_SELECTED_JOB, selectedJob)
}
