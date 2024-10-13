<script setup lang="ts">
  import { ref } from 'vue'

  const subtitle = ref<string>('Frontend Application for selling airline tickets')
</script>

<template>
  <h1 class="title">Fly</h1>
  <p>{{ subtitle }}</p>
</template>

<style scoped>
  .title {
    color:#F8DB1C;
  }
</style>
