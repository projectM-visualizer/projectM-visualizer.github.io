<template>
  <div class="navbar px-4 rounded-3xl shadow-md bg-base-200">
    <div class="navbar-start">
      <NavbarMobileMenu :icon="mobileMenu.icon" :menu="mobileMenu.menu" />
      <Logo />
    </div>

    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li v-for="(item, index) in menu" :key="index" tabindex="0">
          <NuxtLink v-if="!item.submenu" :to="item.path">
            {{ item.name }}
          </NuxtLink>
          <details v-if="item.submenu">
            <summary>{{ item.name }}</summary>
            <ul class="p-2">
              <li v-for="(subItem, subIndex) in item.submenu" :key="subIndex">
                <NuxtLink :to="subItem.path">
                  {{ subItem.name }}
                </NuxtLink>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>

    <div class="navbar-end">
      <NavbarSearch />
    </div>
  </div>
</template>

<script setup lang="ts">
const menu = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projects",
    path: "/projects",
    submenu: [
      {
        name: "ProjectM",
        path: "/projectm",
      },
    ],
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const mobileMenu = {
  icon: "heroicons-solid:menu-alt-1",
  menu,
};
</script>
