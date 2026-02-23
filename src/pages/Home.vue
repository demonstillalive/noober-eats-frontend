<template>

  <!-- ============================================================
       FRAME 1 — Hero section with background + nav buttons + banner
       ============================================================ -->
  <div class="frame-1" :style="{ backgroundImage: `url(${frame1Bg})` }">

    <!-- Top navigation image buttons (hover = image swap + sound) -->
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

    <!-- Main hero banner image -->
    <div class="banner-stack">
      <img :src="banner1" class="banner-img base" />
    </div>

  </div>


  <!-- ============================================================
       FRAME 2 — "How Hungry Are You" section with buttons + form
       ============================================================ -->
  <div class="frame-2" :style="{ backgroundImage: `url(${frame2Bg})` }">

    <!-- Section heading -->
    <p class="title-big">People of Indore,</p>
    <p class="title-small">Tell us How Hungry you are.</p>

    <!-- Frame 2 hover buttons (vertical column) -->
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

    <!-- ── Win A Table layered section ── -->
    <div class="layer-wrapper">

      <!-- Background decorative strips (top / middle / bottom) -->
      <img :src="topBg"  class="layer-bg top"    />
      <div               class="layer-bg middle solid-strip"></div>
      <img :src="downBg" class="layer-bg bottom"  />

      <!-- Form content sits above the strips -->
      <div class="layer-content">
        <p class="layer-title">WIN A TABLE</p>
        <p class="layer-subtitle">FOR 02 PEOPLE</p>
        <p class="layer-week">EVERY SINGLE WEEK!</p>
        <p class="layer-enter">ENTER YOUR DETAILS BELOW</p>

        <!-- Entry form -->
        <div class="form-box">

          <div class="form-row">
            <span class="form-label">FULL NAME:</span>
            <input type="text"  placeholder="Full Name"     />
          </div>

          <div class="form-row">
            <span class="form-label">EMAIL ADDRESS:</span>
            <input type="email" placeholder="Email Address" />
          </div>

          <div class="form-row">
            <span class="form-label">PHONE NUMBER:</span>
            <input type="tel"   placeholder="Phone Number"  />
          </div>

          <!-- T&C checkbox -->
          <label class="agree">
            <input type="checkbox" class="agree-check" />
            <span>I agree to the Terms &amp; Conditions</span>
          </label>

          <!-- Submit -->
          <div class="submit-wrap">
            <p class="text-btn">SUBMIT</p>
          </div>

        </div>
      </div>

      <!-- Decorative top-layer image overlaid on the strips -->
      <img :src="topLayer" class="top-layer-img" />

    </div>
  </div>

</template>


<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// ── Background images ──────────────────────────────────────────
import frame1Bg from "@/assets/HomePageFrame001BackgroundImage.png";
import frame2Bg from "@/assets/HomePageFrame002BackgroundImage.png";
import banner1   from "@/assets/banner1.png";

// ── Frame 1 nav buttons (normal + hover pairs) ─────────────────
import button1  from "@/assets/hover-button1/button1.png";
import button1h from "@/assets/hover-button1/button-h1.png";
import button2  from "@/assets/hover-button1/button2.png";
import button2h from "@/assets/hover-button1/button-h2.png";
import button3  from "@/assets/hover-button1/button3.png";
import button3h from "@/assets/hover-button1/button-h3.png";
import button4  from "@/assets/hover-button1/button4.png";
import button4h from "@/assets/hover-button1/button-h4.png";
import button5  from "@/assets/hover-button1/button5.png";
import button5h from "@/assets/hover-button1/button-h5.png";

// ── Frame 2 buttons (normal + hover pairs) ─────────────────────
import button6  from "@/assets/hover-button2/button6.svg";
import button6h from "@/assets/hover-button2/button-h6.png";
import button7  from "@/assets/hover-button2/button7.svg";
import button7h from "@/assets/hover-button2/button-h7.png";
import button8  from "@/assets/hover-button2/button8.svg";
import button8h from "@/assets/hover-button2/button-h8.png";

// ── Win-a-Table section assets ─────────────────────────────────
import topBg    from "@/assets/win-table/top-bg.svg";
import middleBg from "@/assets/win-table/middle-bg.svg";
import downBg   from "@/assets/win-table/down-bg.svg";
import topLayer from "@/assets/win-table/top-layer.png";

// ── Frame 1 hover sounds ───────────────────────────────────────
import s1 from "@/assets/sounds/h1.wav";
import s2 from "@/assets/sounds/h2.wav";
import s3 from "@/assets/sounds/h3.wav";
import s4 from "@/assets/sounds/h4.wav";
import s5 from "@/assets/sounds/h5.wav";

// ── Frame 2 hover sounds ───────────────────────────────────────
import s6 from "@/assets/sounds/h6.wav";
import s7 from "@/assets/sounds/h7.wav";
import s8 from "@/assets/sounds/h8.wav";


// ── Audio unlock (Chrome requires a real user gesture) ─────────
// We listen for the first click anywhere on the page, play a
// silent buffer through AudioContext, which satisfies Chrome's
// autoplay policy. After that, all hover sounds work freely.
let audioUnlocked = false;

function unlockAudio() {
  if (audioUnlocked) return;
  audioUnlocked = true;
  try {
    const ctx    = new (window.AudioContext || window.webkitAudioContext)();
    const buffer = ctx.createBuffer(1, 1, 22050);
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(ctx.destination);
    source.start(0);
    ctx.close();
  } catch (e) {}
}

onMounted(() => {
  // Any of these gestures will unlock audio
  document.addEventListener("click",      unlockAudio);
  document.addEventListener("touchstart", unlockAudio);
  document.addEventListener("keydown",    unlockAudio);
});

onUnmounted(() => {
  document.removeEventListener("click",      unlockAudio);
  document.removeEventListener("touchstart", unlockAudio);
  document.removeEventListener("keydown",    unlockAudio);
});


// ── Reactive hover state ───────────────────────────────────────
const hoverIndex  = ref(-1); // active button index for frame 1
const hoverIndex2 = ref(-1); // active button index for frame 2


// ── Frame 1 sound & hover logic ───────────────────────────────
const sounds      = [s1, s2, s3, s4, s5];
let   currentAudio = null;

function onHover(i) {
  hoverIndex.value = i;

  // Stop any currently playing sound
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  // Play the sound for this button
  const audio = new Audio(sounds[i]);
  audio.volume = 0.6;
  audio.play().catch(() => {});
  currentAudio = audio;
}

function onLeave() {
  hoverIndex.value = -1;

  // Stop sound when mouse leaves
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}


// ── Frame 2 sound & hover logic ───────────────────────────────
const sounds2      = [s6, s7, s8];
let   currentAudio2 = null;

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


// ── Button data arrays ─────────────────────────────────────────
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

/* ============================================================
   BASE — shared frame styles
   ============================================================ */
.frame-1,
.frame-2 {
  padding: 24px;
  min-height: 80vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}


/* ============================================================
   FRAME 1 — hero banner
   ============================================================ */
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

/* Nav buttons row */
.buttons-row {
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-wrap: wrap;           /* wraps on small screens */
  justify-content: center;
  gap: 16px;
  z-index: 5;
  width: 100%;
  padding: 0 12px;
  box-sizing: border-box;
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


/* ============================================================
   FRAME 2 — headings
   ============================================================ */
.title-big {
  font-size: clamp(28px, 5vw, 60px);  /* fluid font size */
  color: #b9e5fd;
  text-align: center;
  margin: 0;
}

.title-small {
  font-size: clamp(18px, 3vw, 37px);
  color: #b9e5fd;
  text-align: center;
  margin: 4px 0 0;
}

/* Frame 2 vertical button column */
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


/* ============================================================
   WIN-A-TABLE — layered strip section
   ============================================================ */
.layer-wrapper {
  position: relative;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Decorative background strips */
.layer-bg {
  width: 100vw;
  margin-top: -20px;
  padding-bottom: 20px;
  position: relative;
  z-index: 1;
}

.layer-bg.middle { margin-top: -20px; }
.layer-bg.bottom { margin-top: -20px; padding-top: 20px; }

/* Solid orange middle strip */
.solid-strip {
  background: #FF8200;
  width: 100vw;
  height: 600px;
}

/* Decorative overlay image */
.top-layer-img {
  position: absolute;
  top: 58%;
  transform: translateY(-50%);
  width: 70%;
  max-width: 850px;
  z-index: 3;
}

/* Content block (sits above strips and overlay image) */
.layer-content {
  position: absolute;
  top: 38%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  text-align: center;
  color: #b9e5fd;
  width: 70%;
  max-width: 850px;
  box-sizing: border-box;
}

.layer-title {
  font-size: clamp(32px, 5vw, 64px);
  color: black;
  margin-bottom: 8px;
}

.layer-subtitle {
  font-size: clamp(20px, 3vw, 38px);
  color: black;
  margin-top: -5px;
  margin-bottom: 0;
}

.layer-week  { font-size: clamp(14px, 2vw, 23px); color: black; }
.layer-enter { margin-top: 40px; color: black; font-size: clamp(12px, 1.5vw, 16px); }


/* ============================================================
   FORM
   ============================================================ */
.form-box {
  width: 100%;
  max-width: 600px;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 100px;
  align-items: stretch;
  margin: 0 auto;
  box-sizing: border-box;
}

/* Each label + input pair */
.form-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
}

.form-label {
  white-space: nowrap;
  font-size: clamp(11px, 1.2vw, 14px);
  color: black;
  flex-shrink: 0;
}

.form-box input {
  flex: 1;
  min-width: 0;          /* prevents overflow in flex */
  padding: 6px 14px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 14px;
}

/* T&C checkbox row */
.agree {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: black;
  width: fit-content;
}

.agree-check { width: fit-content; }

/* Submit button */
.submit-wrap { text-align: center; }

.text-btn {
  background: none;
  border: none;
  color: black;
  font-size: 18px;
  cursor: pointer;
  margin-top: 10px;
  display: inline-block;
}

.text-btn:hover { text-decoration: underline; }


/* ============================================================
   MOBILE RESPONSIVE  (≤ 768px)
   ============================================================ */
@media (max-width: 768px) {

  /* Frames */
  .frame-1, .frame-2 { padding: 16px; min-height: auto; }

  /* Frame 1 nav buttons — shrink and stack if needed */
  .button-img { height: 70px; }
  .buttons-row { gap: 8px; top: 16px; }
  .banner-stack { margin-top: 180px; }

  /* Frame 2 buttons */
  .frame2-btn { height: 80px; }
  .frame2-buttons-col { gap: 16px; margin-top: 30px; }

  /* Layer section */
  .layer-wrapper { margin-top: 60px; }
  .solid-strip   { height: 900px; }

  .top-layer-img {
    width: 105%;
    height: 255px;
    top: 29%;
  }

  .layer-content {
    width: 90%;
    top: 20%;
  }

  /* Form stacks vertically on mobile */
  .form-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .form-box input {
    width: 100%;
  }

  .form-box {
    padding-top: 30px;
    gap: 6px;
  }
}


/* ============================================================
   SMALL MOBILE  (≤ 480px)
   ============================================================ */
@media (max-width: 480px) {
  .button-img    { height: 50px; }
  .banner-stack  { margin-top: 140px; }
  .frame2-btn    { height: 60px; }
  .solid-strip   { height: 1000px; }
  .layer-content { top: 30%; }
}

</style>