<script setup>
useHead({
  title: 'Vitesse Nuxt 3',
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/nuxt.png',
    },
  ],
  htmlAttrs: {
    class: 'font-sans',
  },
  bodyAttrs: {
    class: 'min-h-100vh',
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
