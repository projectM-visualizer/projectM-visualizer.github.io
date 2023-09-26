<template>
  <Html>
    <Body>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | ProjectM` : "ProjectM";
  },
  link: [
    { rel: "icon", href: "/favicon.ico", sizes: "any" },
    { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
  ],
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      name: "description",
      content:
        "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, viewport-fit=cover",
    },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black-translucent",
    },
    {
      "http-equiv": "Permissions-Policy",
      content: "interest-cohort=()",
    },
  ],
  noscript: [{ innerHTML: "This website requires JavaScript." }],
});

useServerSeoMeta({
  title: "ProjectM- Cross-platform Music Visualization Library",
  description: "Cross-platform Music Visualization Library",
  ogTitle: "ProjectM",
  ogDescription: "Cross-platform Music Visualization Library",
  ogSiteName: "ProjectM",
  ogImage:
    "https://github.com/projectM-visualizer/projectm/raw/master/web/projectM%20screenshots/Screen%20Shot%202014-07-18%20at%202.14.41%20PM.png",
});
</script>
