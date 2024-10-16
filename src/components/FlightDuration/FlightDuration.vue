<script lang="ts" setup>
  import { defineProps } from 'vue';
  
  defineProps<{
    duration: string;
    seguimentsQuantity: number;
  }>();

  const toDuration = (durationData: any) => {
    return durationData.replace(/[A-Z]{2}/, "").replace(/[A-Z]/, "H ");
  };
  
  const toFlightSchedule = (schedule: number) => {
    return schedule === 1
            ? 'Voo direto'
            : (schedule - 1) >= 2
            ? `${schedule - 1} Paradas`
            : `${schedule - 1} Parada`
  }
</script>

<template>
  <div class="duration">
    <time>{{toDuration(duration)}}</time>
    <span>{{toFlightSchedule(seguimentsQuantity)}}</span>
  </div>
</template>

<style scoped>
  .duration {
    text-align: center;
    & time {
      display: block;
      font-size: var(--size-small);
    }
    
    & span {
      position: relative;
      display: block;
      font-size: 12px;
      font-weight: 700;

      &::before {
        content: "";
        display: inline-block;
        width: 100%;
        margin: 0px 16px 4px 0;
        border-top: 1px solid var(--color-text-base-opacity);
      }
      &::after {
        content: "•";
        top: calc(-1 * var(--space-small));
        left: 0;
        position: absolute;
        width: 100%;
        text-align: center;
        font-size: var(--size-large);
        color: var(--color-secondary);
      }
    }
  }
</style>
