<script lang="ts"> 
import { ref } from 'vue'
import { Icon } from '@iconify/vue';

interface iCareItem {
  id: number;
  icon: unknown;
  text: string;
  link?: string
}

export default {
  components: { Icon },
  setup() {
    const customerCareItem = ref<Array<iCareItem>>([])
    customerCareItem.value = [
      {
        id: 0,
        icon: "simple-line-icons:earphones-alt",
        text: "Central de atendimento (11) 4178-7256" 
      },
      {
        id: 1,
        icon: "simple-line-icons:question",
        text: "Precisa de ajuda?"
      }
    ]

    return {
      customerCareItem
    }
  },
}
</script>
<template>
  <aside id="customer-care">
    <div class="container">
      <p v-for="item in customerCareItem" :key="item.id">
        <Icon :icon=item.icon width="20" />
        {{item.text}}
      </p>
    </div>
  </aside>
</template>

<style scoped>
  #customer-care {
    padding: var(--space-base) 0;
    text-align: right;
    background-color: var(--color-primary-dark);
    color: var(--color-commom-light);

    & svg {
      margin-right: var(--size-xsmall);
      vertical-align: inherit;
    }

    & p {
      display: inline-block;
      vertical-align: middle;
      margin-left: 16px;
      font-size: var(--size-small);
      font-weight: 500;
    }
  }
</style>
