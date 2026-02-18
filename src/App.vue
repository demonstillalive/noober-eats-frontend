<template>
  <div id="app">
    <div class="custom-cursor"></div>
    <Home />
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import Home from "./pages/Home.vue";

let cursor;

const moveCursor = (e) => {
  const size = 32; // match your PNG size
  cursor.style.transform = `translate(${e.clientX - size / 2}px, ${e.clientY - size / 2}px)`;
};

onMounted(() => {
  cursor = document.querySelector(".custom-cursor");
  document.addEventListener("mousemove", moveCursor);
});

onBeforeUnmount(() => {
  document.removeEventListener("mousemove", moveCursor);
});
</script>

<style>
* {
  cursor: none; /* hide default */
}

.custom-cursor {
  position: fixed;
  top: 15px;
  left: 5px;
  width: 140px;
  height: 140px;
  background: url("/src/assets/cursor.png") no-repeat center center;
  background-size: contain;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-100px, -100px);
}
</style>
