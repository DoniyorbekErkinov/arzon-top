<template>
  <swiper
    :modules="modules"
    :loop="true"
    :slides-per-view="3"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide ><span>Slide 1</span></swiper-slide>
    <swiper-slide ><span>Slide 2</span></swiper-slide>
    <swiper-slide ><span>Slide 3</span></swiper-slide>
    <swiper-slide ><span>Slide 1</span></swiper-slide>
    <swiper-slide ><span>Slide 2</span></swiper-slide>
    <swiper-slide ><span>Slide 3</span></swiper-slide>
    <swiper-slide ><span>Slide 1</span></swiper-slide>
    <swiper-slide ><span>Slide 2</span></swiper-slide>
    <swiper-slide ><span>Slide 3</span></swiper-slide>
    <swiper-slide ><span>Slide 1</span></swiper-slide>
    <swiper-slide ><span>Slide 2</span></swiper-slide>
    <swiper-slide ><span>Slide 3</span></swiper-slide>
    <swiper-slide ><span>Slide 1</span></swiper-slide>
    <swiper-slide ><span>Slide 2</span></swiper-slide>
    <swiper-slide ><span>Slide 3</span></swiper-slide>
  </swiper>
</template>
<script>
  // import Swiper core and required modules
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

  // Import Swiper styles
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y],
      };
    },
  };
</script>
<style scoped>
.swiper {
  min-height: 400px;
  width: 100%;
}
.swiper-slide {
  height: 400px;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}
</style>
