<template>
  <div class="photo-list">
    <div class="job-photo">
      <div class="photo-description">
        <div>柜左侧 - 外表</div>
        <div>生锈/凹凸</div>
      </div>
    </div>
    <div class="job-photo">
      <div class="photo-description">
        <div>柜左侧 - 外表</div>
        <div>生锈/凹凸</div>
      </div>
    </div>
    <div class="job-photo">
      <div class="photo-description">
        <div>柜左侧 - 外表</div>
        <div>生锈/凹凸</div>
      </div>
    </div>
    <div class="job-photo">
      <div class="photo-description">
        <div>柜左侧 - 外表</div>
        <div>生锈/凹凸</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'photo-list'
}
</script>

<style scoped lang="less">
  .photo-list {
    display: flex;
    flex-wrap: wrap;
  }

  .job-photo {
    position: relative;
    width: 300px;
    height: 320px;
    margin: 10px;
    background: url('/img/container/test_container2.jpeg');
    background-size: cover;
  }

  .photo-description {
    width: 100%;
    position: absolute;
    background-color: #000;
    bottom: 0;
    opacity: 0.7;
    color: #ffffff;
    padding: 10px;
  }
</style>
