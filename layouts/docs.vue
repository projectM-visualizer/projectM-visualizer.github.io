<template>
  <div class="min-h-screen w-full flex flex-col items-center">
    <Navbar />

    <div class="flex flex-col flex-grow self-stretch px-2 sm:px-3 lg:px-4 pb-2 sm:pb-3 lg:pb-4">
      <!-- Sidebar Button & Breadcrumbs -->
      <div class="w-full pl-3 sm:pl-4 lg:pl-5">
        <Breadcrumbs :breadcrumbs="breadcrumbs" />
      </div>

      <div class="flex flex-grow self-stretch">
        <Sidebar />

        <div class="flex-grow self-stretch p-4 bg-neutral rounded-3xl shadow-md">
          <slot />
        </div>
      </div>
    </div>


    <Footer />
  </div>
</template>

<script setup lang="ts">
const { breadcrumbs } = useBreadcrumbs();
</script>
