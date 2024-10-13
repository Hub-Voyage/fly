<script setup lang="ts">
  import { ref } from 'vue'
  const count = ref(0)
</script>

<template>
  <button type="button" class="button" @click="count++">count {{ count }}</button>
</template>

<style scoped>
  .button {
    background-color: #F8DB1C;
  }
</style>
