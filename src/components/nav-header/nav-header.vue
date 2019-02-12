<template>
  <div>
    <Menu mode="horizontal"  active-name="1">
      <img @click="jumpHome" src="./../../assets/logo.svg" alt="logo" style="width: 50px; height: 100%; float: left; padding: 10px">
      <span @click="jumpPage" style="float: left; padding: 0 20px 0 8px">口袋貨櫃3</span>
      <MenuItem name="1">
        货柜照片
      </MenuItem>
      <Dropdown style="margin-right: 40px; float: right">
        <a href="javascript:void(0)" style="color: #666">
          Cody
          <Icon type="md-arrow-dropdown" />
        </a>
        <DropdownMenu slot="list">
          <DropdownItem>退出</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown trigger="click" style="margin-right: 40px; float: right">
        <a href="javascript:void(0)" style="color: #666">
          简体中文
          <Icon type="md-arrow-dropdown" />
        </a>
        <DropdownMenu slot="list">
          <DropdownItem>简体中文</DropdownItem>
          <DropdownItem>繁体中文</DropdownItem>
          <DropdownItem>English</DropdownItem>
        </DropdownMenu>
      </Dropdown>

    </Menu>

  </div>
</template>

<script>
export default {
  name: 'nav-header',
  methods: {
    jumpPage() {
      this.$router.push('/about')
    },
    jumpHome() {
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>

</style>
