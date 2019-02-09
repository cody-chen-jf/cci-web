<template>
  <div class="photo-detail">
    <div class="photo-description">
      <div>柜左侧 - 外表</div>
      <div style="display: flex; flex-wrap: wrap; width: 100%">
        <span class="damage-item">生锈</span>
        <span class="damage-item">凹凸</span>
        <span class="damage-item">生锈</span>
        <span class="damage-item">凹凸</span>
        <span class="damage-item">生锈</span>
        <span class="damage-item">凹凸</span>
        <span class="damage-item">生锈</span>
        <span class="damage-item">凹凸</span>
      </div>
      <div class="description-item">
        <span>拍摄人</span>
        <span>张三</span>
      </div>
      <div class="description-item">
        <span>拍摄时间</span>
        <span>2019-01-17, 15:22:44</span>
      </div>
      <div class="description-item">
        <span>拍摄地点</span>
        <span>HK Science Park, Shatin, Hong Kong</span>
      </div>
    </div>
    <div class="back-button"><Icon type="md-arrow-back" /> 返回</div>
    <div class="download-button"><Icon type="md-download" /> 下载</div>
  </div>
</template>

<script>
export default {
  name: 'photo-detail'
}
</script>

<style scoped lang="less">
  .photo-detail {
    position: relative;
    width: 100%;
    height: 100%;
    background: url('/img/container/test_container2.jpeg');
    background-size: cover;
  }

  .photo-description {
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: #000;
    opacity: 0.6;
    color: #ffffff;
    padding: 8px;
    border-radius: 8px;
    top: 10px;
    right: 10px;
    width: 350px;

    .damage-item {
      text-align: center;
      display: inline-block;
      color: #19be6b;
      border: 1px solid #19be6b;
      padding: 3px 4px;
      width: 50px;
      border-radius: 8px;
      margin: 5px 5px 5px 0;
    }

    .description-item > span:first-child {
      width: 70px;
      display: inline-block;
    }
  }

  .back-button {
    position: absolute;
    background-color: #000;
    opacity: 0.6;
    color: #ffffff;
    padding: 8px;
    border-radius: 8px;
    top: 10px;
    left: 10px;
  }

  .download-button {
    position: absolute;
    background-color: #000;
    opacity: 0.6;
    color: #ffffff;
    padding: 8px;
    border-radius: 8px;
    bottom: 10px;
    right: 10px;
  }

</style>
