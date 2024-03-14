<template>
    <div>
      <div>
        Dynamic Slug page
        <pre>{{ $route.params }}</pre>
      </div>
      <NuxtLink to="/">Back to Home page</NuxtLink>
    </div>
  </template>