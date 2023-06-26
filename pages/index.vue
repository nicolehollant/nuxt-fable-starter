<template>
  <div>
    <NuxtLink to="/_stories">stories</NuxtLink>
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
onMounted(() => {
  router.push('/_stories');
});
</script>
