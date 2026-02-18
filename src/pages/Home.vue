<template>
  <!-- Section 1 -->
  <div
    class=" frame-1"
    :style="{ backgroundImage: `url(${frame1Bg})` }"
  >
    <img 
      :src="banner" 
      alt="Noober Eats Banner" 
      class="banner-img"
    />

    
  </div>

  <!-- Section 2 -->
  <div
    class="frame-2"
    :style="{ backgroundImage: `url(${frame2Bg})` }"
  >
    


  </div>
</template>

<script setup>
import banner from "@/assets/banner1.png";
import frame1Bg from "@/assets/HomePageFrame001BackgroundImage.png";
import frame2Bg from "@/assets/HomePageFrame002BackgroundImage.png";
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

/* Banner image */
.banner-img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  display: block;
  margin-bottom: 20px;
}
</style>
