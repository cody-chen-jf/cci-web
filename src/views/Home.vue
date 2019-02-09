<template>
  <div class="home">
    <NavHeader/>
    <CheckboxGroup style="display: flex; flex-wrap: wrap" v-model="checkAllGroup" @on-change="checkAllGroupChange">
      <Card class="card-item">
        <p slot="title">The standard card</p>
        <p>Content of card</p>
        <p>Content of card</p>
        <p>Content of card</p>
        <Checkbox label="香蕉"><span></span></Checkbox>
      </Card>
      <Card class="card-item">
        <p slot="title">The standard card</p>
        <p>Content of card</p>
        <p>Content of card</p>
        <p>Content of card</p>
        <Checkbox id="test" label="苹果"></Checkbox>
      </Card>
      <Card class="card-item">
        <p slot="title">The standard card</p>
        <p>Content of card</p>
        <p>Content of card</p>
        <p>Content of card</p>
        <Checkbox label="西瓜"></Checkbox>
      </Card>
    </CheckboxGroup>
    <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
      <Checkbox
        :indeterminate="indeterminate"
        :value="checkAll"
        @click.prevent.native="handleCheckAll">全选
      </Checkbox>
    </div>

    <div>
      <div>
        <Table border ref="selection" :columns="columns4" :data="data1"></Table>
        <Button @click="handleSelectAll(true)">Set all selected</Button>
        <Button @click="handleSelectAll(false)">Cancel all selected</Button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavHeader from '_c/nav-header'

export default {
  name: 'home',
  components: {
    NavHeader
  },
  data() {
    return {
      indeterminate: true,
      checkAll: false,
      checkAllGroup: ['香蕉', '西瓜'],
      columns4: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  },
  created() {
    window.ttt = this
    // update data
    // this.checkAllGroup = ['香蕉', '西瓜', '苹果']
    // this.checkAllGroupChange(this.checkAllGroup)
  },
  methods: {
    handleSelectAll(status) {
      this.$refs.selection.selectAll(status)
    },
    handleCheckAll() {
      if (this.indeterminate) {
        this.checkAll = false
      } else {
        this.checkAll = !this.checkAll
      }
      this.indeterminate = false

      if (this.checkAll) {
        this.checkAllGroup = ['香蕉', '苹果', '西瓜']
      } else {
        this.checkAllGroup = []
      }
    },
    checkAllGroupChange(data) {
      if (data.length === 3) {
        this.indeterminate = false
        this.checkAll = true
      } else if (data.length > 0) {
        this.indeterminate = true
        this.checkAll = false
      } else {
        this.indeterminate = false
        this.checkAll = false
      }
    }
  }
}
</script>

<style scoped lang="less">
  .card-item {
    width: 200px;
    height: 300px;
    margin: 10px;
  }
</style>
