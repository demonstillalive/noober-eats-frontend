<template>
  <!-- FRAME 1 -->
  <div class="frame-1" :style="{ backgroundImage: `url(${frame1Bg})` }">
    <!-- Buttons row (outside banner) -->
<div class="buttons-row">
  <img
    v-for="(btn, i) in banners"
    :key="i"
    class="button-img"
    :src="hoverIndex === i ? btn.hover : btn.normal"
    @mouseenter="onHover(i)"
    @mouseleave="onLeave(i)"
  />
</div>


    <!-- Banner -->
    <div class="banner-stack">
      <img :src="banner1" class="banner-img base" />
    </div>
  </div>

  <!-- FRAME 2 -->
  <!-- FRAME 2 -->
  <div class="frame-2" :style="{ backgroundImage: `url(${frame2Bg})` }">
    <p class="title-big">People of Indore,</p>
    <p class="title-small">Tell us How Hungry you are.</p>

    <!-- Buttons -->
    <div class="frame2-buttons-col">
      <img
  v-for="(b, i) in frame2Buttons"
  :key="i"
  :src="hoverIndex2 === i ? b.hover : b.normal"
  class="frame2-btn"
  @mouseenter="onHover2(i)"
  @mouseleave="onLeave2"
/>

    </div>

    <!-- Layered Section -->
<div class="layer-wrapper">
  <!-- BG strips -->
  <img :src="topBg" class="layer-bg top" />

  <!-- MIDDLE STRIP (solid color instead of image) -->
  <div class="layer-bg middle solid-strip"></div>

  <img :src="downBg" class="layer-bg bottom" />

  <!-- Content -->
  <div class="layer-content">
    <p class="layer-title">WIN A TABLE</p>
    <p class="layer-subtitle">FOR 02 PEOPLE</p>
    <p style="font-size:23px; color:black;">EVERY SINGLE WEEK!</p>
    <p style="margin-top:40px; color:black;">ENTER YOUR DETAILS BELOW</p>

<div class="form-box">
  <div class="form-row">
    <span class="form-label">FULL NAME:</span>
    <input type="text" placeholder="Full Name" />
  </div>

  <div class="form-row">
    <span class="form-label">EMAIL ADDRESS:</span>
    <input type="email" placeholder="Email Address" />
  </div>

  <div class="form-row">
    <span class="form-label">PHONE NUMBER:</span>
    <input type="tel" placeholder="Phone Number" />
  </div>

  <label class="agree">
    <input type="checkbox" style="width:fit-content;" />
    <span>I agree to the Terms & Conditions</span>
  </label>

<div style="text-align: center !important;">
<button class="text-btn submit-center">SUBMIT</button>
</div>
  
</div>

  </div>

  <!-- Top Layer -->
  <img :src="topLayer" class="top-layer-img" />
</div>

  </div>

</template>

<script setup>

// Unlock audio context on first user interaction
let audioUnlocked = false;

function unlockAudio() {
  if (audioUnlocked) return;
  audioUnlocked = true;

  const silence = new Audio();
  silence.play().catch(() => {});

  document.removeEventListener("click", unlockAudio);
}

document.addEventListener("click", unlockAudio);


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

/*Frame 3 assets*/
import topBg from "@/assets/win-table/top-bg.svg";
import middleBg from "@/assets/win-table/middle-bg.svg";
import downBg from "@/assets/win-table/down-bg.svg";
import topLayer from "@/assets/win-table/top-layer.png";

/* Sounds for Frame 1 */
import s1 from "@/assets/sounds/h1.wav";
import s2 from "@/assets/sounds/h2.wav";
import s3 from "@/assets/sounds/h3.wav";
import s4 from "@/assets/sounds/h4.wav";
import s5 from "@/assets/sounds/h5.wav";

/* Sounds for Frame 2 */
import s6 from "@/assets/sounds/h6.wav";
import s7 from "@/assets/sounds/h7.wav";
import s8 from "@/assets/sounds/h8.wav";

const hoverIndex = ref(-1);
const hoverIndex2 = ref(-1);

/* Sound mapping */
const sounds = [s1, s2, s3, s4, s5];
let currentAudio = null;

function onHover(i) {
  hoverIndex.value = i;

  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  const audio = new Audio(sounds[i]);
  audio.volume = 0.6;
  audio.play().catch(() => {});
  currentAudio = audio;
}

function onLeave(i) {
  hoverIndex.value = -1;

  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}


/* Frame 2 sound mapping */
const sounds2 = [s6, s7, s8];
let currentAudio2 = null;

function onHover2(i) {
  hoverIndex2.value = i;

  if (currentAudio2) {
    currentAudio2.pause();
    currentAudio2.currentTime = 0;
  }

  const audio = new Audio(sounds2[i]);
  audio.volume = 0.6;
  audio.play().catch(() => {});
  currentAudio2 = audio;
}

function onLeave2() {
  hoverIndex2.value = -1;

  if (currentAudio2) {
    currentAudio2.pause();
    currentAudio2.currentTime = 0;
    currentAudio2 = null;
  }
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


.title-big {
  font-size: 60px;
  color: #b9e5fd;
  text-align: center;
}

.title-small {
  font-size: 37px;
  color: #b9e5fd;
  text-align: center;
}

.layer-wrapper {
  position: relative;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Background strips */
.layer-bg {
  width: 100vw;
  margin-top:-20px;
  padding-bottom:20px;
  position: relative;
  z-index: 1;
}

.layer-bg.middle {
  margin-top: -20px;
}

.layer-bg.bottom {
  margin-top: -20px;
  padding-top:20px;
}

/* Top layer */
.top-layer-img {
  position: absolute;
  top: 58%;
  transform: translateY(-50%);
  width: 70%;
  max-width: 850px;
  z-index: 3;
}

/* Text + Form */
.layer-content {
  position: absolute;
  top: 38%;
  transform: translateY(-50%);
  z-index: 4;
  text-align: center;
  color: #b9e5fd;
}

.layer-title {
  font-size: 64px;
  color:black;
  margin-bottom: 8px;
}

.layer-subtitle {
color:black;
  font-size: 38px;
  margin-top:-5px;
  margin-bottom: 0px;
}

.form-box {
width: 784px;
color:black;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top:70px;
  align-items: baseline;
}

.form-box input {
  width: 260px;
  padding: 6px 14px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 14px;
}

.agree {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
}

.text-btn {
  background: none;
  border: none;
  color: black;
  font-size: 18px;
  cursor: pointer;
  margin-top: 10px;
}

.text-btn:hover {
  text-decoration: underline;
}


/* Solid middle strip */
.solid-strip {
  background: #FF8200;
  height: 180px;          /* adjust height if needed */
  width: 100vw;
  height:600px;
  
}


</style>
