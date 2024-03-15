<script setup lang="ts">
    const { t, locale } = useI18n()
    const localePath  = useLocalePath()
    const slugs = ref(['slug-1', 'slug-2', 'slug-3']);


    console.log('Default path', localePath('/work/foo', 'de'))
    console.log('English path', localePath('work-advanced','en'))
</script>
<template>
    <div>
        <NuxtLinkLocale to="work">{{ t('work') }}</NuxtLinkLocale> / 
        <NuxtLinkLocale :to="'work-slug'">{{ t('work') }} Foo</NuxtLinkLocale> / 
        <NuxtLinkLocale :to="'work-advanced'">{{ t('work') }} Advanced</NuxtLinkLocale> / 
        <ul>
            <li v-for="slug in slugs" :key="slug">
                <NuxtLink :to="localePath(`work-${slug}`)"> View {{ slug }} </NuxtLink>
            </li>
        </ul>
    </div>
</template>