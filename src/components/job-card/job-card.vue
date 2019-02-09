<template>
  <div id="job-card" style="overflow: scroll" :style="{height: cardListHeight + 'px'}">
    <CheckboxGroup style="display: flex; flex-wrap: wrap; " v-model="checkAllGroup" @on-change="checkAllGroupChange">
      <Card class="card-item">
        <img src="/img/container/test_container2_preview.jpeg" style="width: 100%">
        <div class="card-description">
          <div>BSIU2253788</div>
          <div>柜门</div>
          <div>2019-01-11, 15:22:40</div>
          <div>张三<Checkbox class="check-box" label="香蕉"><div></div></Checkbox></div>
        </div>
      </Card>
      <Card class="card-item">
        <img src="/img/container/test_container2_preview.jpeg" style="width: 100%">
        <div class="card-description">
          <div>BSIU2253788</div>
          <div>柜门</div>
          <div>2019-01-11, 15:22:40</div>
          <div>张三<Checkbox class="check-box" label="香蕉"><div></div></Checkbox></div>
        </div>
      </Card>
    </CheckboxGroup>
  </div>
</template>

<script>
export default {
  name: 'job-card',
  props: {
    cardListHeight: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="less">
  #job-card .ivu-card-body {
    padding: 10px;
  }
</style>

<style scoped lang="less">
  #job-card {
    .card-item {
      padding-bottom: 0;
      width: 200px;
      height: 290px;
      margin: 10px;
    }

    .check-box {
      display: inline;
      float: right;
      margin: 0;
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
