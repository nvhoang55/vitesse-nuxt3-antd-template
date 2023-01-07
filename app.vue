<script setup>
useHead({
  title: 'Vitesse Nuxt 3',
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/nuxt.png',
    },
  ],
  htmlAttrs: {
    class: 'font-body',
  },
  bodyAttrs: {
    class: 'text-dark dark:(bg-dark-200 text-light) min-h-100vh',
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
