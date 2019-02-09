<template>
  <div>
    <h2 id="title" style="padding: 10px 0 0 16px">货柜照片</h2>
    <div id="header-group">
      <div class="input-group">
        <Form :model="formItem" :label-width="60" label-position="left" style="display: flex; flex-wrap: wrap">
          <FormItem label="货柜号" class="form-item">
            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
          </FormItem>
          <FormItem v-show="isSuperSearch" label="损坏类型" class="form-item">
            <Select v-model="formItem.select">
              <Option value="beijing">New York</Option>
              <Option value="shanghai">London</Option>
              <Option value="shenzhen">Sydney</Option>
            </Select>
          </FormItem>
          <FormItem v-show="isSuperSearch" label="损坏位置" class="form-item">
            <Select v-model="formItem.select">
              <Option value="beijing">New York</Option>
              <Option value="shanghai">London</Option>
              <Option value="shenzhen">Sydney</Option>
            </Select>
          </FormItem>
          <FormItem v-show="isSuperSearch" label="拍摄者" class="form-item">
            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
          </FormItem>
          <FormItem v-show="isSuperSearch" label="时间" class="form-item date">
            <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
            <span> － </span>
            <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
          </FormItem>
          <FormItem :label-width="0" class="form-item search" style="margin-left: 0">
            <Button type="success">Search</Button>
            <a href="javascript:void(0)" @click="toggleSearch" style="margin-left: 20px">收起</a>
          </FormItem>
        </Form>
      </div>
      <div class="switch-group">
        <ButtonGroup>
          <Button @click="showJobCardView">缩略图</Button>
          <Button @click="showJobTableView" type="primary">列表</Button>
        </ButtonGroup>
      </div>
    </div>
    <div class="container">
      <JobTable :tableHeight="offsetHeight" v-if="isShowJobTable" @onTableItemClick="onTableItemClick"></JobTable>
      <JobCard :cardListHeight="offsetHeight" v-if="isShowJobCard"></JobCard>
    </div>
    <PageNavigation></PageNavigation>
    <JobPreview :showDialog="showDialog" @closeDialog="closeDialog"></JobPreview>
  </div>
</template>

<script>
import JobTable from '_c/job-table'
import JobCard from '_c/job-card'
import JobPreview from '_c/job-preview'
import PageNavigation from '_c/page-navigation'

export default {
  name: 'home-page',
  components: {
    JobCard,
    JobTable,
    JobPreview,
    PageNavigation
  },
  data() {
    return {
      formItem: {
        input: '',
        select: ''
      },
      offsetHeight: 0,
      isSuperSearch: false,
      isShowJobCard: false,
      isShowJobTable: true,
      showDialog: false
    }
  },
  mounted() {
    window.addEventListener('resize', this.resizeWindow)
    this.offsetHeight = document.body.offsetHeight - (document.getElementById('header-group').offsetHeight + document.getElementById('title').offsetHeight + 60 + 50)
  },
  methods: {
    toggleSearch() {
      this.isSuperSearch = !this.isSuperSearch
    },
    resizeWindow(e) {
      this.offsetHeight = document.body.offsetHeight - (document.getElementById('header-group').offsetHeight + document.getElementById('title').offsetHeight + 60 + 50)
    },
    showJobCardView() {
      this.isShowJobCard = true
      this.isShowJobTable = false
    },
    showJobTableView() {
      this.isShowJobTable = true
      this.isShowJobCard = false
    },
    onTableItemClick() {
      this.showDialog = true
    },
    closeDialog() {
      this.showDialog = false
    }
  }
}
</script>

<style scoped>
  .input-group {
    display: inline-block;
    width: calc(100vw - 300px);
  }

  .switch-group {
    position: relative;
    top: 20px;
    display: inline-block;
    width: 300px;
    text-align: center;
    vertical-align: middle;
  }

  .form-item {
    width: 259px;
    padding: 0 20px;
  }

  .form-item.date {
    width: 520px;
  }

  .form-item.search {
    width: 200px;
  }

  .container {
    margin: 0 12px;
  }
</style>
