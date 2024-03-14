<script setup lang="ts">
    const { t, locale } = useI18n()
    const localePath  = useLocalePath()
    const slugs = ref(['slug-1', 'slug-2', 'slug-3']);
</script>
<template>
    <div>
        <NuxtLinkLocale to="work">{{ t('work') }}</NuxtLinkLocale> / 
        <NuxtLinkLocale to="/work/foo">{{ t('work') }} Foo</NuxtLinkLocale> / 
        <LocaleLink :to="localePath('work-foo')">{{ t('work') }} foo</LocaleLink> / 
        <ul>
            <li v-for="slug in slugs" :key="slug">
                <NuxtLink :to="`/tree/${slug}`"> View {{ slug }} </NuxtLink>
            </li>
        </ul>
        <NuxtWelcome />
    </div>
</template>