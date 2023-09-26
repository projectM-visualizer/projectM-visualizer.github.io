<template>
  <div
    class="min-h-screen w-full flex flex-col items-center"
  >
    <Navbar />

    <div
      class="flex flex-grow self-stretch bg-gray-300 overflow-hidden"
    >
      <slot />
    </div>

    <Footer />
    <!-- <Footer2 /> -->
  </div>
</template>

<script setup lang="ts"></script>
