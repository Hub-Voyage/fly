<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  import LayoutBase from '../../components/LayoutBase/LayoutBase.vue';
  import SearchForm from '../../components/SearchForm/SearchForm.vue';

  const router = useRouter();

  const fetchFlightData = (data: any) => {
    router.push({
      name: 'Results',
      params: {
        ...data
      }
    })
  }
</script>

<template>
  <LayoutBase>
    <section id="search-box">
      <div class="container">
        <h1>Olá, encontre aqui os melhores<br> voos para sua viagem!</h1>
        <SearchForm @searchFlights="fetchFlightData" />
      </div>
    </section>
  </LayoutBase>
</template>

<style>
  #search-box {
    height: 400px;
    padding: var(--space-xlarge) 0;
    background-color: var(--color-primary-light);
    background-image: url('../../assets/02.jpg');
    background-position: 50% 60%;
    background-size: 60%;
    background-repeat: no-repeat;
    background-blend-mode: multiply;

    & h1 {
      margin-bottom: var(--space-xxxlarge);
      line-height: 1;
      font-size: var(--size-xxxlarge);
      font-weight: 700;
      color: var(--color-secondary);
    }
  }
</style>
