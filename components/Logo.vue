<template>
  <div class="flex-1">
    <NuxtLink
      :to="props.link"
      class="btn btn-ghost normal-case text-xl overflow-hidden"
    >
      <NuxtImg
        v-if="props.src"
        :src="props.src"
        :alt="props.alt"
        class="w-12 h-12"
      />
      <div v-else>{{ props.alt }}</div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
interface Props {
  src?: string;
  alt?: string;
  link?: string;
}

const props = withDefaults(defineProps<Props>(), {
  src: "",
  alt: "ProjectM",
  link: "/",
});
</script>
