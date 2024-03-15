<script setup lang="ts">
    const setI18nParams = useSetI18nParams()
    const route = useRoute()
    setI18nParams({
        de: { slug: route.params.slug }, // slug: 'red-mug'
    })
    const { t } = useI18n()
    const slug = route.params.slug
</script>
<template>
    <div>{{ t('work') }}: {{ slug }}</div>
</template>