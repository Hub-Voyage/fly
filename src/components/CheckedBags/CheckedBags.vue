<script lang="ts" setup>
  import { defineProps } from 'vue'
  import { Icon } from '@iconify/vue';
  defineProps<{
    includedCheckedBags: boolean;
  }>();

  const hasIncludedCheckedBags = (hasBags: boolean) => {
    return hasBags ? `var(--color-primary-dark)` : `var(--color-text-base-opacity)`
  }
</script>

<template>
  <div class="checked-bags">
    <div class="checked-bags-icons">
      <Icon icon="fluent:backpack-32-regular" width="22" color="var(--color-primary-dark)"/>
      <Icon icon="bi:luggage" width="24" style="color: var(--color-primary-dark)"/>
      <Icon icon="fluent:luggage-48-regular" width="28" :color="hasIncludedCheckedBags(includedCheckedBags)" />
    </div>
    <p>Bagagens</p>
  </div>
</template>

<style scoped>
  .checked-bags {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: var(--size-small);
  }
  
  .checked-bags-icons {
    display: flex;
    align-items: flex-end;
    gap: var(--space-xsmall);
  }
</style>
