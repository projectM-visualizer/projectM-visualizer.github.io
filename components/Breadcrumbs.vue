<template>
  <div class="text-sm breadcrumbs py-2 sm:py-3 lg:py-4 max-w-full">
    <ul>
      <li v-for="(item, index) in props.breadcrumbs" :key="index">
        <NuxtLink
          :to="item.path"
          class="link link-hover text-sm text-secondary"
        >
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  breadcrumbs: any[];
}

const props = defineProps<Props>();
</script>
