<template>
  <Table
    :height="tableHeight"
    ref="selection"
    :columns="columns"
    :data="jobList"
    @on-selection-change="changeSelect"
  >
  </Table>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { JOB_MODULE } from '@/store/namespaces'

const { mapState, mapActions } = createNamespacedHelpers(JOB_MODULE)

export default {
  name: 'job-table',
  props: {
    tableHeight: {
      type: Number,
      default: 0
    },
    jobList: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  computed: {
    ...mapState({
      selectedJob: state => state.selectedJob
    })
  },
  data() {
    return {
      columns: [
        {
          type: 'selection',
          width: 44,
          align: 'left'
        },
        {
          title: '拍摄者',
          key: 'captureUserName'
        },
        {
          title: '货柜号',
          key: 'containerNumber'
        },
        {
          title: '拍摄日期',
          key: 'photoDate'
        },
        {
          title: '拍摄地点',
          key: 'photoLocation'
        },
        {
          title: '损坏位置',
          key: 'container_side'
        },
        {
          title: '损坏类型',
          key: 'damageType'
        },
        {
          title: '操作',
          key: 'operation',
          render: (h, params) => {
            return h('div', [
              h('a', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '10px'
                },
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }
              }, '查看'),
              h('a', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.download(params.index)
                  }
                }
              }, '下载')
            ])
          }
        }
      ]
    }
  },
  watch: {
    jobList() {
      this.renderCheckBox()
    }
  },
  created() {
    this.renderCheckBox()
  },
  methods: {
    ...mapActions([
      'setSelectedJob'
    ]),
    renderCheckBox() {
      setTimeout(() => {
        this.jobList.forEach((item, index) => {
          if (this.selectedJob.includes(item._id)) {
            this.$refs.selection.objData[index]._isChecked = true
          } else {
            this.$refs.selection.objData[index]._isChecked = false
          }
        })
      }, 0)
    },
    show(index) {
      console.log('show: ', index)
      this.$emit('onTableItemClick', true)
    },
    download(index) {
      console.log('download: ', index)
    },
    changeSelect(selectList) {
      let currentPageAllIdx = this.jobList.map(item => item._id)
      let idxWithoutCurrentPageIdx = this.selectedJob.filter((item) => {
        return currentPageAllIdx.includes(item) === false
      })
      let currentPageSelectIdx = selectList.map(item => item._id)
      let selectedJobList = idxWithoutCurrentPageIdx.concat(currentPageSelectIdx)

      this.setSelectedJob(selectedJobList)
    }
  }
}
</script>

<style scoped>
</style>
