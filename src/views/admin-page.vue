<template>
  <div id="admin-page">
    <NavHeader></NavHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import NavHeader from '_c/nav-header'

export default {
  name: 'admin-page',
  components: {
    NavHeader
  }
}
</script>

<style scoped lang="less">

</style>
