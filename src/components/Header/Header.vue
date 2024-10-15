<script lang="ts" setup>
  import { Icon } from '@iconify/vue';
  import CustomerCare from "../CustomerCare/CustomerCare.vue"
</script>

<template>
  <CustomerCare />
  <header>
    <div class="container">
      <div id="logo">
        <Icon icon="material-symbols:travel-explore" width="36" />
        VoyageHub
      </div>
      <nav class="menu">
        <ul>
          <li class="menu-item"><RouterLink to="/" class="link">Home</RouterLink></li>
          <li class="menu-item"><RouterLink to="/results" class="link">Passagens</RouterLink></li>
        </ul>
      </nav>
      <button class="shopping-cart">
        <Icon icon="simple-line-icons:basket" />
      </button>
    </div>
  </header>
</template>

<style scoped>
  header {
    border-bottom: 1px solid var(--color-commom-light-opacity);
    background-color: var(--color-primary-light);
  }

  .container {
    display: flex;
    align-items: center;
    gap: var(--space-large);
  }

  #logo {
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 600;
    color: var(--color-commom-light);
  }

  .menu {
    flex-grow: 1;
  }

  .menu-item {
    margin-right: var(--space-small);
    display: inline-block;
  }

  .link {
    display: block;
    padding: 16px var(--space-small);
    text-decoration: none;
    font-weight: 600;
    font-size: large;
    color: var(--color-commom-light);
    border-bottom: 3px solid transparent;
    &:hover {
      color: var(--color-secondary);
      border-bottom: 3px solid  var(--color-secondary);
    }
  }

  .shopping-cart {
    line-height: 0;
    border: 0;
    font-size: var(--size-large);
    font-weight: 700;
    background-color: transparent;
    color: var(--color-commom-light);
    cursor: pointer;

    &:hover {
      color: var(--color-secondary);
    }
  }

</style>
