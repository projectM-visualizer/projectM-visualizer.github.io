<template>
  <div
    class="min-h-screen w-full flex flex-col items-center p-2 sm:p-3 lg:p-4 gap-1 sm:gap-2 md:gap-3 lg:gap-4"
  >
    <Navbar />

    <div
      class="flex flex-grow self-stretch rounded-3xl shadow-md bg-gray-300 overflow-hidden"
    >
      <slot />
    </div>

    <Footer />
    <!-- <Footer2 /> -->
  </div>
</template>

<script setup lang="ts"></script>
