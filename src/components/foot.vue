<template>
  <div class="footer">
    <div class="footer-info">
      <img src="@/assets/images/logo.png" alt="logo" />
      <div class="footer-text">
        主办：中华人民共和国应急管理部国家减灾中心（卫星减灾应用中心）
        京ICP备05086388号-5 京公网安备 11010502037912号
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  width: 100%;
  background: #35609A;
  height: 100px;
  display: flex;
  align-items: center;
}

.footer-info {
  width: 1160px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

.footer-info img {
  width: 64px;
  height: 69px;
}

.footer-text {
  font-family: PingFangSC, PingFang SC;
  font-size: 18px;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 25px;
  margin-top: 22px;
}

@media (max-width: 1200px) {
  .footer-info {
    width: 90%;
  }
}
</style>
