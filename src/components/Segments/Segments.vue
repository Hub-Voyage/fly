<script lang="ts" setup>
  import { defineProps } from 'vue';
  
  defineProps<{
    iataCode: string;
    flightDateTime: string;
  }>();

  const toHourDisplay = (datetime: any) => {
    return new Date(datetime).toLocaleTimeString(
      "pt-BR",
      { hour: "2-digit", minute: "2-digit", timeZone: "UTC" }
    )
  }
</script>

<template>
  <div class="segment">
    <p>{{iataCode}}</p>
    <time datetime={{flightDateTime}}>
      {{toHourDisplay(flightDateTime)}}
    </time>
  </div>
</template>

<style scope>
  .segment {
    text-align: center;
    & p {
      line-height: .8;
      font-size: var(--size-xlarge);
      font-weight: 800;
      color: var(--color-text-base);
    }

    & time {
      display: block;
      font-size: var(--size-base);
      color: var(--color-primary-light);
    }
  }
</style>
