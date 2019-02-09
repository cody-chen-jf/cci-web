<template>
  <Modal id="job-preview" v-model="isOpen" :mask-closable="false" :footerHide="true" width="80%" @on-cancel="closeDialog">
    <div slot="header">
      <div style="display: flex; flex-direction: column; flex-wrap: wrap">
        <div class="job-preview-title">货柜号 OOLU1234567</div>
        <div class="job-preview-detail" style="display: flex; flex-direction: row">
          <div>拍摄于 2019-01-18, 15:22:32</div>
          <div>拍摄人 张三</div>
          <div>拍摄地点 HK Science Park, Shatin, Hong Kong</div>
        </div>
      </div>
    </div>
    <div class="container">
      <PhotoList v-if="true"></PhotoList>
      <PhotoDetail v-if="false"></PhotoDetail>
    </div>
  </Modal>
</template>

<script>
import PhotoList from '_c/photo-list'
import PhotoDetail from '_c/photo-detail'

export default {
  name: 'job-preview',
  components: {
    PhotoList,
    PhotoDetail
  },
  props: {
    showDialog: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  created() {
    this.isOpen = this.showDialog
  },

  watch: {
    showDialog(a) {
      this.isOpen = a
    }
  },
  methods: {
    closeDialog() {
      console.log('close')
      this.$emit('closeDialog')
    }
  }
}
</script>

<style lang="less">
  #job-preview .ivu-modal-body {
    padding: 0;
  }
</style>

<style scoped lang="less">
  #job-preview {
    .job-preview-title {
      font-size: 16px;
      padding: 0 0 8px;
      font-weight: bold;
    }

    .job-preview-detail {
      font-size: 13px;

      div {
        margin-right: 50px;
      }
    }

    .container {
      height: 500px;
      overflow: scroll;
    }
  }
</style>
