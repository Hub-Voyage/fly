<script lang="ts" setup>
  import { defineProps } from 'vue';
  import Button from '../Button/Button.vue'
  import Itinerary from '../Itinerary/Itinerary.vue'

  const props = defineProps<{
    itineraries: Array<any>;
    price: Object;
    luggage: Object;
  }>();

  const toCurrency = (number: number) => {
    return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(number);
  };

  const { itineraries, price } = props;

  const [start, finish] = itineraries;

</script>

<template>
  <article class="ticket">
    <div class="itineraries">
      <Itinerary :title="'Ida'" :flightSegment="start" :luggageOptions="luggage" />
      <Itinerary :title="'Volta'" :flightSegment="finish" :luggageOptions="luggage" />
    </div>
    <div class="price">
      <span>{{toCurrency(price.grandTotal)}}</span>
      <Button>Selecionar voo</Button>
    </div>
  </article>
</template>

<style scoped>
  .ticket {
    display: grid;
    grid-template-columns: 65% 20%;
    margin-bottom: var(--space-large)
  }

  .itineraries {
    position: relative;
    padding: var(--space-large);
    border-radius: var(--radius-xlarge);
    box-shadow: var(--shadow-base)
    &::before,
    &::after {
      content: "";
      top: var(--size-small);
      right: -1px;
      position: absolute;
      width: var(--size-small);
      height: calc(100% - var( --size-large));
      border: 0px dashed #ececec;
      background: var(--color-commom-light);
    }
    &::after {
      margin-right: -12px;
      border-left-width: 2px;
    }

    & section {
      &:first-child {
        border-bottom: 1px solid var(--color-text-base-opacity);
        padding-bottom: var(--space-base);
      }
      &:last-child {
        padding-top: var(--space-base);
      }
    }
  }

  .price {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: var(--size-large);
    border-radius: var(--radius-xlarge);
    box-shadow: var(--shadow-base);

    & span {
      font-size: var(--size-large);
      font-weight: 800;
      &::after {
        content: "Taxas inclusas";
        display: block;
        text-align: center;
        font-weight: 500;
        font-size: var(--size-small);
      }
    }
  }
</style>
