<template>
  <div class="w-full max-w-xs mr-4">
    <ul class="menu menu-xs bg-neutral rounded-lg shadow-md w-full p-4">
      <li v-for="(item, index) in menu" :key="index">
        <NuxtLink :to="getProjectMUrl() + item.to">
          <Icon :name="item.icon" class="w-4 h-4" :class="item.iconClass" />
          {{ item.label }}
        </NuxtLink>

        <ul v-if="item.links">
          <li v-for="(subItem, subIndex) in item.links" :key="subIndex">
            <NuxtLink :to="getProjectMUrl() + subItem.to">
              <Icon
                :name="subItem.icon"
                class="w-4 h-4"
                :class="subItem.iconClass"
              />
              {{ subItem.label }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import menu from "~/generated/projectm/sidebar-menu-links.json";

// interface MenuEntry {
//   label: string;
//   icon: string;
//   iconClass: string;
//   to: string;
//   divider?: boolean;
//   subMenu?: MenuEntry[];
// }

// interface Props {
//   menu: MenuEntry[]
// }

// const props = defineProps<Props>()

// const menu: MenuEntry[] = [
//   {
//     label: 'Github',
//     icon: 'bxl:github',
//     iconClass: 'hover:text-secondary',
//     to: '/github',
//   },
//   {
//     label: 'Discord',
//     icon: 'bxl:discord-alt',
//     iconClass: 'hover:text-secondary',
//     to: '/discord',
//     subMenu: [
//       {
//         label: 'Discord 1',
//         icon: 'bxl:discord-alt',
//         iconClass: 'hover:text-secondary',
//         to: '/discord',
//       },
//       {
//         label: 'Discord 2',
//         icon: 'bxl:discord-alt',
//         iconClass: 'hover:text-secondary',
//         to: '/discord',
//       },
//     ],
//   },
// ]
</script>
