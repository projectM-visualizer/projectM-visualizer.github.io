<template>
  <footer class="footer p-10 bg-base-200 text-base-content">
    <nav>
      <header class="footer-title">{{ footer.organization.title }}</header>
      <NuxtLink
        v-for="(item, index) in footer.organization.links"
        :key="index"
        :to="item.link"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>
    <nav>
      <header class="footer-title">{{ footer.legal.title }}</header>
      <NuxtLink
        v-for="(item, index) in footer.legal.links"
        :key="index"
        :to="item.link"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>
    <nav>
      <header class="footer-title">{{ footer.social.title }}</header>
      <div class="grid grid-flow-col gap-4">
        <NuxtLink
          v-for="(item, index) in footer.social.links"
          :key="index"
          :to="item.link"
        >
          <Icon :name="item.icon" class="w-7 h-7" :class="item.iconClass" />
        </NuxtLink>
      </div>
    </nav>
  </footer>
</template>

<script setup lang="ts">
const footer = {
  organization: {
    title: "Organization",
    links: [
      {
        label: "About Us",
        link: "/about",
      },
      {
        label: "Contact",
        link: "/contact",
      },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      {
        label: "Terms Of Use",
        link: "/terms-of-service",
      },
      {
        label: "Privacy Policy",
        link: "/privacy-policy",
      },
      {
        label: "Cookie Policy",
        link: "/cookie-policy",
      },
    ],
  },
  social: {
    title: "Social",
    links: [
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
  },
};
</script>
