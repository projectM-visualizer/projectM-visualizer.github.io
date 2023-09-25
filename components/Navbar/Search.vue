<template>
  <div class="form-control">
    <input
      type="text"
      :placeholder="props.placeholder"
      class="input input-bordered w-24 md:w-auto"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  placeholder: string;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: "Search...",
});
</script>
