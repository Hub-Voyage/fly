<script lang="ts" setup>
  import { defineEmits, ref } from 'vue';
  import { Icon } from '@iconify/vue';

  const count = ref(1)
  const emit = defineEmits(['updateCount'])

  const increment = () => {
    count.value++
    emit('updateCount', count.value);
  }
</script>

<template>
  <div class="selected-quantity">
    <span>Adultos</span>
    <div>
      <button type="button" :disabled="count === 1" @click="count--" aria-label="Remover viajante">
        <Icon icon="simple-line-icons:minus" />
      </button>
      <span>{{ count }}</span>
      <button type="button" @click="increment" aria-label="Adicionar viajante">
        <Icon icon="simple-line-icons:plus" />
      </button>
    </div>
  </div>
</template>

<style scoped>
  .selected-quantity {
    min-width: 128px;
    height: 64px;
    padding: 6px 16px;
    border: none;
    border-radius: var(--radius-medium);
    background-color: var(--color-commom-light);

    & span {
      font-size: 14px;
      color: var(--color-text-base);
    }

    & div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      & span {
        font-size: var(--size-base);
        color: var(--color-text-base);
      }
    }
  }

  button {
    border: 0;
    font-size: var(--size-large);
    background-color: transparent;
    color: var(--color-primary-light);
    border-radius: 50%;
    width: var(--size-large);
    height: var(--size-large);
    cursor: pointer;

    &:focus {  
      outline: 2px solid var(--color-secondary);
    }

    &:disabled {
      filter: contrast(30%);
      cursor: not-allowed;
    }
  }
</style>
