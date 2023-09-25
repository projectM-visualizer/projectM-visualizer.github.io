<template>
  <div
    class="min-h-screen w-full flex flex-col items-center gap-1 sm:gap-2 lg:gap-4"
  >
    <Navbar />

    <div class="flex flex-grow">
      <slot />
    </div>

    <Footer />
    <Footer2 />
  </div>
</template>

<script setup lang="ts"></script>
