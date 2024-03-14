<script setup lang="ts">
    const route = useRoute()
    const { t } = useI18n()
    const slug = route.params.slug
</script>
<template>
    <div>{{ t('work') }}: {{ slug }}</div>
</template>