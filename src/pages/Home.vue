<template>
  <div class="frame-1" :style="{ backgroundImage: `url(${frame1Bg})` }">
    <!-- Buttons row (outside banner) -->
    <div class="buttons-row">
      <img
        v-for="(b, i) in banners"
        :key="i"
        :src="hoverIndex === i ? b.hover : b.normal"
        class="button-img"
        @mouseenter="hoverIndex = i"
        @mouseleave="hoverIndex = -1"
      />
    </div>

    <!-- Banner -->
    <div class="banner-stack">
      <img :src="banner1" class="banner-img base" />
    </div>
  </div>

  <div class="frame-2" :style="{ backgroundImage: `url(${frame2Bg})` }"></div>
</template>

<script setup>
import { ref } from "vue";

import frame1Bg from "@/assets/HomePageFrame001BackgroundImage.png";
import frame2Bg from "@/assets/HomePageFrame002BackgroundImage.png";

import banner1 from "@/assets/banner1.png";

import button1 from "@/assets/hover-button1/button1.png";
import button1h from "@/assets/hover-button1/button-h1.png";

import button2 from "@/assets/hover-button1/button2.png";
import button2h from "@/assets/hover-button1/button-h2.png";

import button3 from "@/assets/hover-button1/button3.png";
import button3h from "@/assets/hover-button1/button-h3.png";

import button4 from "@/assets/hover-button1/button4.png";
import button4h from "@/assets/hover-button1/button-h4.png";

import button5 from "@/assets/hover-button1/button5.png";
import button5h from "@/assets/hover-button1/button-h5.png";

const hoverIndex = ref(-1);

const banners = [
  { normal: button1, hover: button1h },
  { normal: button2, hover: button2h },
  { normal: button3, hover: button3h },
  { normal: button4, hover: button4h },
  { normal: button5, hover: button5h },
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
  position: relative;   /* IMPORTANT */
}

.banner-stack {
  max-width: 900px;
  margin: 120px auto 0; /* Push banner down so buttons are outside */
  position: relative;
  z-index: 1;
}

/* Base banner */
.banner-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
}

/* Buttons container */
.buttons-row {
  position: absolute;
  top: 40px;              
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 16px;
  z-index: 5;           /* ABOVE banner */
}

/* Button images */
.button-img {
  height: 140px;
  width: auto;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.button-img:hover {
  transform: scale(1.08);
}
</style>
