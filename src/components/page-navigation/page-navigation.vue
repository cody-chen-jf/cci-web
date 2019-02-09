<template>
  <div class="page-navigation">
    <div class="download-selector">
      <Button type="success" size="small" style="margin-right: 20px">Download</Button>
      <Checkbox
        :indeterminate="indeterminate"
        :value="checkAll"
        @click.prevent.native="handleCheckAll">全选
      </Checkbox>
    </div>
    <div class="page-selector">
      <Page :total="100" show-elevator size="small" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-navigation',
  data() {
    return {
      indeterminate: true,
      checkAll: false
    }
  }
}
</script>

<style scoped lang="less">
  .page-navigation {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #eeeeee;
  }

  .download-selector {
    margin-left: 16px;
  }
  .page-selector {
    margin-right: 16px;
  }
</style>
