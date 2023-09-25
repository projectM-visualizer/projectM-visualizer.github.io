<template>
  <nav
    class="grid-flow-col gap-4 md:place-self-center md:justify-self-end hidden sm:grid"
  >
    <NuxtLink v-for="(item, index) in props.menu" :key="index" :to="item.link">
      <Icon :name="item.icon" class="w-7 h-7" :class="item.iconClass" />
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
interface Props {
  menu?: {
    label: string;
    icon: string;
    iconClass: string;
    link: string;
  }[];
}

const props = withDefaults(defineProps<Props>(), {
  menu: () => [
    {
      label: "Github",
      icon: "bxl:github",
      iconClass: "hover:text-secondary",
      link: "https://github.com/projectM-visualizer",
    },
    {
      label: "Discord",
      icon: "bxl:discord-alt",
      iconClass: "hover:text-secondary",
      link: "https://discord.gg/7fQXN43n9W",
    },
    {
      label: "Twitter",
      icon: "bxl:twitter",
      iconClass: "hover:text-secondary",
      link: "https://twitter.com/projectMViz",
    },
  ],
});
</script>
