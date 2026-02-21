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

/* Sounds for Frame 1 */
import s1 from "@/assets/sounds/h1.wav";
import s2 from "@/assets/sounds/h2.wav";
import s3 from "@/assets/sounds/h3.wav";
import s4 from "@/assets/sounds/h4.wav";
import s5 from "@/assets/sounds/h5.wav";

/* Frame 2 side images (example for button1 only – repeat for others) */
import h1l1 from "@/assets/hover-side/h1-left1.png";
import h1l2 from "@/assets/hover-side/h1-left2.png";
import h1r1 from "@/assets/hover-side/h1-right1.png";
import h1r2 from "@/assets/hover-side/h1-right2.png";

const hoverIndex = ref(-1);
const hoverIndex2 = ref(-1);

/* Sound mapping */
const sounds = [s1, s2, s3, s4, s5];
let lastHover = -1;

function onHover(i) {
  if (lastHover === i) return;   // prevent sound spam
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

const banners2 = [
  {
    normal: button1,
    hover: button1h,
    left: [h1l1, h1l2],
    right: [h1r1, h1r2],
  },
  {
    normal: button2,
    hover: button2h,
    left: [],
    right: [],
  },
  {
    normal: button3,
    hover: button3h,
    left: [],
    right: [],
  },
  {
    normal: button4,
    hover: button4h,
    left: [],
    right: [],
  },
  {
    normal: button5,
    hover: button5h,
    left: [],
    right: [],
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

/* Frame 2 */
.frame2-buttons {
  margin-top: 60px;
  display: flex;
  justify-content: center;
  gap: 40px;
}

.frame2-btn-wrapper {
  position: relative;
}

.frame2-btn {
  height: 120px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.frame2-btn:hover {
  transform: scale(1.1);
}

.side-img {
  position: absolute;
  height: 80px;
  top: 50%;
  transform: translateY(-50%);
  animation: pop 0.25s ease;
}

.left.one { right: 110%; }
.left.two { right: 170%; }
.right.one { left: 110%; }
.right.two { left: 170%; }

@keyframes pop {
  from { transform: translateY(-50%) scale(0.6); opacity: 0; }
  to { transform: translateY(-50%) scale(1); opacity: 1; }
}
</style>
