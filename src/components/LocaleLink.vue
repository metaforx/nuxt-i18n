<script setup lang="ts">
const localePath = useLocalePath()
const props = defineProps({
  to: {
    type: String,
    default: '/',
    required: true,
  },
})
</script>
<template>
  <NuxtLink
    :to="localePath(to)"
  >
    <slot />
  </NuxtLink>
</template>
