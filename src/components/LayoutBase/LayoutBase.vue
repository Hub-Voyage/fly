<script lang="ts" setup>
  import Header from "../Header/Header.vue"
</script>
<template>
  <div class="intro">
    <Header />
  </div>
  <slot />
</template>
<style>
  .intro {
    padding-bottom: 4px;
    background-color: var(--color-primary-light);
  }
</style>
