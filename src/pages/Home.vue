<template>
  <div class="frame-1" :style="{ backgroundImage: `url(${frame1Bg})` }">
    <div class="banner-stack">
      <!-- Base banner -->
      <img :src="banner1" class="banner-img base" />

      <!-- Overlay buttons -->
      <img
        v-for="(b, i) in banners"
        :key="i"
        :src="hoverIndex === i ? b.hover : b.normal"
        class="button-img"
        :style="b.style"
        @mouseenter="hoverIndex = i"
        @mouseleave="hoverIndex = -1"
      />
    </div>
  </div>

  <div class="frame-2" :style="{ backgroundImage: `url(${frame2Bg})` }"></div>
</template>

<script setup>
import { ref } from "vue";

import frame1Bg from "@/assets/HomePageFrame001BackgroundImage.png";
import frame2Bg from "@/assets/HomePageFrame002BackgroundImage.png";

import banner1 from "@/assets/banner1.png";

import button1 from "@/assets/hover-button/button1.png";
import button1h from "@/assets/hover-button/button-h1.png";

import button2 from "@/assets/hover-button/button2.png";
import button2h from "@/assets/hover-button/button-h2.png";

import button3 from "@/assets/hover-button/button3.png";
import button3h from "@/assets/hover-button/button-h3.png";

import button4 from "@/assets/hover-button/button4.png";
import button4h from "@/assets/hover-button/button-h4.png";

import button5 from "@/assets/hover-button/button5.png";
import button5h from "@/assets/hover-button/button-h5.png";

const hoverIndex = ref(-1);

const banners = [
  {
    normal: button1,
    hover: button1h,
    style: { top: "0", left: "0" },
  },
  {
    normal: button2,
    hover: button2h,
    style: { top: "0", left: "0" },
  },
  {
    normal: button3,
    hover: button3h,
    style: { top: "0", left: "0" },
  },
  {
    normal: button4,
    hover: button4h,
    style: { top: "0", left: "0" },
  },
  {
    normal: button5,
    hover: button5h,
    style: { top: "0", left: "0" },
  },
];
</script>

<style scoped>
.frame-1,
.frame-2 {
  padding: 24px;
  min-height: 80vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.banner-stack {
  position: relative;
  max-width: 900px;
  margin: auto;
}

.banner-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
}

/* Button images placed on banner */
.button-img {
  position: absolute;
  width: 100%; /* adjust to your design */
  left: 0;
  top: 0;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.button-img:hover {
  transform: scale(1.05);
}
</style>
