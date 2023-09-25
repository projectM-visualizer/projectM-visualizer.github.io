<template>
  <div class="min-h-screen w-full flex flex-col items-center p-2 sm:p-3 lg:p-4">
    <Navbar />

    <!-- Sidebar Button & Breadcrumbs -->
    <div class="w-full pl-3 sm:pl-4 lg:pl-5">
      <Breadcrumbs :breadcrumbs="breadcrumbs" />
    </div>

    <div class="flex flex-grow self-stretch pb-1 sm:pb-2 md:pb-3 lg:pb-4">
      <Sidebar />

      <div class="flex-grow self-stretch p-4 bg-neutral rounded-3xl shadow-md">
        <slot />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
const { breadcrumbs } = useBreadcrumbs();
</script>
