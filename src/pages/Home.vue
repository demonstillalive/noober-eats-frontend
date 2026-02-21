<template>
  <!-- FRAME 1 -->
  <div class="frame-1" :style="{ backgroundImage: `url(${frame1Bg})` }">
    <!-- Buttons row (outside banner) -->
    <div class="buttons-row">
      <img
        v-for="(b, i) in banners"
        :key="i"
        :src="hoverIndex === i ? b.hover : b.normal"
        class="button-img"
        @mouseenter="onHover(i)"
        @mouseleave="hoverIndex = -1"
      />
    </div>

    <!-- Banner -->
    <div class="banner-stack">
      <img :src="banner1" class="banner-img base" />
    </div>
  </div>

  <!-- FRAME 2 -->
  <div class="frame-2" :style="{ backgroundImage: `url(${frame2Bg})` }">
    <p style="font-size: 60px; color:#B9E5FD; text-align:center;">People of Indore,</p>
    <p style="font-size: 37px; color:#B9E5FD; text-align:center;">Tell us How Hungry you are.</p>

    <!-- Button 6,7,8 one per row -->
    <div class="frame2-buttons-col">
      <img
        v-for="(b, i) in frame2Buttons"
        :key="i"
        :src="hoverIndex2 === i ? b.hover : b.normal"
        class="frame2-btn"
        @mouseenter="hoverIndex2 = i"
        @mouseleave="hoverIndex2 = -1"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import frame1Bg from "@/assets/HomePageFrame001BackgroundImage.png";
import frame2Bg from "@/assets/HomePageFrame002BackgroundImage.png";
import banner1 from "@/assets/banner1.png";

/* Frame 1 buttons */
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

/* Frame 2 buttons */
import button6 from "@/assets/hover-button2/button6.svg";
import button6h from "@/assets/hover-button2/button-h6.png";
import button7 from "@/assets/hover-button2/button7.svg";
import button7h from "@/assets/hover-button2/button-h7.png";
import button8 from "@/assets/hover-button2/button8.svg";
import button8h from "@/assets/hover-button2/button-h8.png";

/* Sounds for Frame 1 */
import s1 from "@/assets/sounds/h1.wav";
import s2 from "@/assets/sounds/h2.wav";
import s3 from "@/assets/sounds/h3.wav";
import s4 from "@/assets/sounds/h4.wav";
import s5 from "@/assets/sounds/h5.wav";

const hoverIndex = ref(-1);
const hoverIndex2 = ref(-1);

/* Sound mapping */
const sounds = [s1, s2, s3, s4, s5];
let lastHover = -1;

function onHover(i) {
  if (lastHover === i) return;
  lastHover = i;
  hoverIndex.value = i;

  const audio = new Audio(sounds[i]);
  audio.volume = 0.6;
  audio.play().catch(() => {});
}

const banners = [
  { normal: button1, hover: button1h },
  { normal: button2, hover: button2h },
  { normal: button3, hover: button3h },
  { normal: button4, hover: button4h },
  { normal: button5, hover: button5h },
];

const frame2Buttons = [
  { normal: button6, hover: button6h },
  { normal: button7, hover: button7h },
  { normal: button8, hover: button8h },
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
  position: relative;
}

.banner-stack {
  max-width: 900px;
  margin: 120px auto 0;
  position: relative;
  z-index: 1;
}

.banner-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
}

/* Frame 1 buttons */
.buttons-row {
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 16px;
  z-index: 5;
}

.button-img {
  height: 140px;
  width: auto;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.button-img:hover {
  transform: scale(1.08);
}

/* Frame 2 buttons */
.frame2-buttons-col {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
}

.frame2-btn {
  height: 130px;
  width: auto;
  cursor: pointer;
  transition: transform 0.25s ease;
}

.frame2-btn:hover {
  transform: scale(1.08);
}
</style>
