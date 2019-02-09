<template>
  <div>
    <Table :height="tableHeight" ref="selection" :columns="columns4" :data="data1"></Table>
    <!--<Button @click="handleSelectAll(true)">Set all selected</Button>-->
    <!--<Button @click="handleSelectAll(false)">Cancel all selected</Button>-->
  </div>
</template>

<script>
export default {
  name: 'job-table',
  props: {
    tableHeight: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      columns4: [
        {
          type: 'selection',
          width: 44,
          align: 'left'
        },
        {
          title: '拍摄者',
          key: 'name'
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
          key: 'damageSide'
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
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }
              }, 'View'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.download(params.index)
                  }
                }
              }, 'Download')
            ])
          }
        }
      ],
      data1: [
        {
          name: '李四',
          containerNumber: 'BSIU2253788',
          photoDate: '2019-01-11, 15:22:40',
          photoLocation: 'HK Science Park, Shatin, Hong Kong',
          damageSide: '左侧/右侧',
          damageType: '生锈/凹凸'
        },
        {
          name: '李四',
          containerNumber: 'BSIU2253788',
          photoDate: '2019-01-11, 15:22:40',
          photoLocation: 'HK Science Park, Shatin, Hong Kong',
          damageSide: '左侧/右侧',
          damageType: '生锈/凹凸'
        },
        {
          name: '李四',
          containerNumber: 'BSIU2253788',
          photoDate: '2019-01-11, 15:22:40',
          photoLocation: 'HK Science Park, Shatin, Hong Kong',
          damageSide: '左侧/右侧',
          damageType: '生锈/凹凸'
        },
        {
          name: '李四',
          containerNumber: 'BSIU2253788',
          photoDate: '2019-01-11, 15:22:40',
          photoLocation: 'HK Science Park, Shatin, Hong Kong',
          damageSide: '左侧/右侧',
          damageType: '生锈/凹凸'
        },
        {
          name: '李四',
          containerNumber: 'BSIU2253788',
          photoDate: '2019-01-11, 15:22:40',
          photoLocation: 'HK Science Park, Shatin, Hong Kong',
          damageSide: '左侧/右侧',
          damageType: '生锈/凹凸'
        },
        {
          name: '李四',
          containerNumber: 'BSIU2253788',
          photoDate: '2019-01-11, 15:22:40',
          photoLocation: 'HK Science Park, Shatin, Hong Kong',
          damageSide: '左侧/右侧',
          damageType: '生锈/凹凸'
        },
        {
          name: '李四',
          containerNumber: 'BSIU2253788',
          photoDate: '2019-01-11, 15:22:40',
          photoLocation: 'HK Science Park, Shatin, Hong Kong',
          damageSide: '左侧/右侧',
          damageType: '生锈/凹凸'
        },
        {
          name: '李四',
          containerNumber: 'BSIU2253788',
          photoDate: '2019-01-11, 15:22:40',
          photoLocation: 'HK Science Park, Shatin, Hong Kong',
          damageSide: '左侧/右侧',
          damageType: '生锈/凹凸'
        },
        {
          name: '李四',
          containerNumber: 'BSIU2253788',
          photoDate: '2019-01-11, 15:22:40',
          photoLocation: 'HK Science Park, Shatin, Hong Kong',
          damageSide: '左侧/右侧',
          damageType: '生锈/凹凸'
        },
        {
          name: '李四',
          containerNumber: 'BSIU2253788',
          photoDate: '2019-01-11, 15:22:40',
          photoLocation: 'HK Science Park, Shatin, Hong Kong',
          damageSide: '左侧/右侧',
          damageType: '生锈/凹凸'
        },
        {
          name: '李四',
          containerNumber: 'BSIU2253788',
          photoDate: '2019-01-11, 15:22:40',
          photoLocation: 'HK Science Park, Shatin, Hong Kong',
          damageSide: '左侧/右侧',
          damageType: '生锈/凹凸'
        },
        {
          name: '李四',
          containerNumber: 'BSIU2253788',
          photoDate: '2019-01-11, 15:22:40',
          photoLocation: 'HK Science Park, Shatin, Hong Kong',
          damageSide: '左侧/右侧',
          damageType: '生锈/凹凸'
        },
        {
          name: '李四',
          containerNumber: 'BSIU2253788',
          photoDate: '2019-01-11, 15:22:40',
          photoLocation: 'HK Science Park, Shatin, Hong Kong',
          damageSide: '左侧/右侧',
          damageType: '生锈/凹凸'
        },
        {
          name: '李四',
          containerNumber: 'BSIU2253788',
          photoDate: '2019-01-11, 15:22:40',
          photoLocation: 'HK Science Park, Shatin, Hong Kong',
          damageSide: '左侧/右侧',
          damageType: '生锈/凹凸'
        },
        {
          name: '李四',
          containerNumber: 'BSIU2253788',
          photoDate: '2019-01-11, 15:22:40',
          photoLocation: 'HK Science Park, Shatin, Hong Kong',
          damageSide: '左侧/右侧',
          damageType: '生锈/凹凸'
        }

      ]
    }
  },
  mounted() {
  },
  methods: {
    show(index) {
      console.log('show: ', index)
      this.$emit('onTableItemClick', true)
    },
    download(index) {
      console.log('download: ', index)
    }
  }
}
</script>

<style scoped>
</style>
