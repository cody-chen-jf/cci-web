<template>
  <div id="job-card" style="overflow: auto" :style="{height: cardListHeight + 'px'}">
    <CheckboxGroup style="display: flex; flex-wrap: wrap;" v-model="selectedList">
      <span @mouseenter="mouseOver(jobItem._id)" @mouseleave="mouseOver('')" v-for="jobItem in jobList" :key="jobItem._id">
        <Card class="card-item" :class="[selectedList.includes(jobItem._id) ? 'is-active' : '']">
          <img src="/img/container/test_container2_preview.jpeg" style="width: 100%">
          <div class="card-description">
            <div>BSIU2253788</div>
            <div>柜门</div>
            <div>2019-01-11, 15:22:40</div>
            <div>
              {{jobItem.captureUserName}}
              <Checkbox class="check-box" :label="jobItem._id" :class="[(selectedList.includes(jobItem._id) || jobItem._id === isActiveItem) ? 'show-check-box' : 'hide-check-box' ]">
                <div></div>
              </Checkbox>
            </div>
          </div>
        </Card>
      </span>
    </CheckboxGroup>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { JOB_MODULE } from '@/store/namespaces'

const { mapState, mapActions } = createNamespacedHelpers(JOB_MODULE)

export default {
  name: 'job-card',
  props: {
    cardListHeight: {
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
    }),
    selectedList: {
      get: function () {
        return this.selectedJob
      },
      set: function (newValue) {
        this.setSelectedJob(newValue)
      }
    }
  },
  data() {
    return {
      indeterminate: true,
      checkAll: false,
      checkAllGroup: ['香蕉', '西瓜'],
      isActiveItem: ''
    }
  },
  methods: {
    ...mapActions([
      'setSelectedJob'
    ]),
    mouseOver(id) {
      this.isActiveItem = id
    }
  }
}
</script>

<style lang="less">
  #job-card .ivu-card-body {
    padding: 10px;
  }

  #job-card .ivu-checkbox-checked .ivu-checkbox-inner {
    border-color: black;
    background-color: black;
  }

  #job-card .ivu-checkbox-checked .ivu-checkbox-inner:after {
    content: '';
    display: table;
    width: 4px;
    height: 8px;
    position: absolute;
    top: 1px;
    left: 4px;
    border: 2px solid #44b500;
    border-top: 0;
    border-left: 0;
    -webkit-transform: rotate(45deg) scale(1);
    transform: rotate(45deg) scale(1);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  .ivu-card:hover .check-box {
    display: none;
  }
</style>

<style scoped lang="less">
  #job-card {
    .is-active {
      background-color: #f7fcf3;
      border: 2px solid #6fd400;
    }
    .card-item {
      padding-bottom: 0;
      width: 250px;
      height: 340px;
      margin: 10px;
    }

    .check-box {
      display: inline;
      float: right;
      margin: 0;
    }

    .hide-check-box {
      visibility: hidden;
    }

    .show-check-box {
      visibility: inherit;
    }

    .card-description {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
    }

    .card-description > div {
      width: 100%;
    }

  }
</style>
