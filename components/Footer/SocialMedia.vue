<template>
  <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <NuxtLink v-for="(item, index) in props.menu" :key="index" :to="item.link">
      <Icon :name="item.icon" class="w-7 h-7" :class="item.iconClass" />
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
interface Props {
  menu: {
    label: string;
    icon: string;
    iconClass: string;
    link: string;
  }[];
}

const props = withDefaults(defineProps<Props>(), {
  menu: () => [
    {
      label: "Discord",
      icon: "logos:discord-icon",
      iconClass: "",
      link: "https://discord.gg/7fQXN43n9W",
    },
    {
      label: "Twitter",
      icon: "devicon:twitter",
      iconClass: "",
      link: "https://twitter.com/projectMViz",
    },
    {
      label: "Github",
      icon: "devicon:github",
      iconClass: "text-white",
      link: "https://github.com/projectM-visualizer",
    },
  ],
});
</script>
