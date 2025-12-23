<template>
  <div class="announcement-container">
    <div class="title">
      <div class="title-content">
        <img src="@/assets/images/titleLeft.png" alt="title left" />
        <span class="title-span">通知<span class="title-blue">公告</span></span>
        <img src="@/assets/images/titleRight.png" alt="title right" />
      </div>
    </div>
    <div class="container">
      <div class="container-list">
        <div class="swiper-container" ref="swiperContainer">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in guideItems" :key="item.id">
              <div class="kpzn-list">
                <img :src="item.image" :alt="item.title" />
                <div class="kpzn-title">
                  <a :href="item.link" style="text-decoration: none; color: inherit;">{{ item.title }}</a>
                </div>
              </div>
            </div>
          </div>
          <!-- 分页器 -->
          <div class="swiper-pagination"></div>
          <!-- 导航按钮 -->
          <div class="swiper-button-xuanchuan-next"></div>
          <div class="swiper-button-xuanchuan-prev"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const guideItems = [
  {
    id: 1,
    title: '[台风应对]大暴雨，特大暴雨！"蝴蝶"或将登陆两次！',
    link: 'https://mp.weixin.qq.com/s/WKoDbqWcfB4LhQ6ifbykTw',
    image: '@/assets/image/27170403yb3g.png'
  },
  {
    id: 2,
    title: '[台风应对]停航，停业，停运！紧急提醒→',
    link: 'https://mp.weixin.qq.com/s/cbdMiyGuPGz7ZMxINIuzVg',
    image: '@/assets/image/271700338t3d.png'
  },
  {
    id: 3,
    title: '[关注预警信号]今年第1号台风要来了！',
    link: 'https://mp.weixin.qq.com/s/1lsx0EiNgOvDAwdm-grcsw',
    image: '@/assets/image/27165356xse4.png'
  },
  {
    id: 4,
    title: '[暴雨应对]"七下八上"来了，十要十不要请记牢！',
    link: 'https://mp.weixin.qq.com/s/LESmHI6zI0V6suyfmNT1AA',
    image: '@/assets/image/span_'
  },
  {
    id: 5,
    title: '[洪水自救]紧急撤离！！！',
    link: 'https://mp.weixin.qq.com/s/Tx6d51WpigOTKqXtY3DDOw',
    image: '@/assets/image/27171043riea.png'
  },
  {
    id: 6,
    title: '[台风暴雨应对]停课！停运！停航！"蝴蝶"即将登陆',
    link: 'https://mp.weixin.qq.com/s/jCeTjgRrnmkUae9WKdeXcQ',
    image: '@/assets/image/27170729rv7j.png'
  }
];

const swiperContainer = ref(null);

onMounted(() => {
  // 初始化Swiper
  new Swiper(swiperContainer.value, {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: 3,
    spaceBetween: 28,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.swiper-button-xuanchuan-next',
      prevEl: '.swiper-button-xuanchuan-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });
});
</script>

<style scoped>
.container {
  width: 100%;
  margin: 0 auto 32px auto;
}

.container-list {
  display: flex;
  justify-content: space-between;
}

.swiper-container {
  width: 100%;
  height: 350px;
  padding-bottom: 50px;
  position: relative;
  overflow: hidden;
}

.swiper-wrapper {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: visible;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-pagination {
  position: relative;
  bottom: 30px;
  text-align: center;
}

.swiper-button-xuanchuan-next,
.swiper-button-xuanchuan-prev {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.3);
  width: 30px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  border-radius: 5px;
}

.swiper-button-xuanchuan-next {
  right: 10px;
}

.swiper-button-xuanchuan-prev {
  left: 10px;
}

.kpzn-list img {
  width: 100%;
  height: 213px;
  object-fit: cover;
}

/* 响应式调整 */
@media (max-width: 1200px) {
  .swiper-container {
    width: 100%;
    height: auto;
  }

  .swiper-wrapper {
    width: 100%;
    max-width: 100%;
    padding: 0 20px;
  }

  .kpzn-list {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .swiper-container {
    height: auto;
  }

  .kpzn-list {
    width: 100%;
  }
}
</style>