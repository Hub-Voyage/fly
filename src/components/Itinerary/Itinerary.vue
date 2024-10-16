<script lang="ts" setup>
  import { defineProps } from 'vue'
  import Segments from '../Segments/Segments.vue'
  import FlightDuration from '../FlightDuration/FlightDuration.vue'
  import CheckedBags from '../CheckedBags/CheckedBags.vue'

  import LogoLatam from '../../assets/logo-latam.svg'
  import LogoAzul from '../../assets/logo-azul.svg'
  import LogoGol from '../../assets/logo-gol.svg'

  const props = defineProps<{
    title: string;
    flightSegment: Object;
    luggageOptions: Object
  }>();

  const toDateDisplay = (datetime: any) => {
    return new Date(datetime).toLocaleDateString(
      "pt-BR",
      { weekday: "short", month: "long", day: "numeric" }
    );
  };

  const getIconComponent = (icon: string) => {
    return {
      "LA": LogoLatam,
      "AD": LogoAzul,
      "G3": LogoGol,
    }[icon] || null
  }
  
  const { length, 0: firstStep, [length - 1]: lastStep } = props.flightSegment.segments;

  const departureData = {
    departure: firstStep.departure,
    carrierCode: firstStep.carrierCode,
  };

  const arrivalData = {
    arrival: lastStep.arrival,
    carrierCode: lastStep.carrierCode,
  };

</script>

<template>
  <section class="itinerary">
    <div>
      <component :is="getIconComponent(departureData.carrierCode)" class="carrier"/>
      <h1>{{title}}</h1>
      <p class="itinerary-date">
        {{toDateDisplay(departureData.departure.at)}}
      </p>
    </div>
    <Segments :iataCode="departureData.departure.iataCode" :flightDateTime="departureData.departure.at" />     
    <FlightDuration :duration="flightSegment.duration" :seguimentsQuantity="flightSegment.segments.length" />
    <Segments :iataCode="arrivalData.arrival.iataCode" :flightDateTime="arrivalData.arrival.at" />
    <CheckedBags :includedCheckedBags="luggageOptions.includedCheckedBagsOnly" />
  </section>
</template>

<style scoped>
  .itinerary {
    display: grid;
    grid-template-columns: 38% 10% 10% 10% 16%;
    grid-column-gap: 4%;
    align-items: center;
  }

  .itinerary-date {
    font-size: var(--size-base);
    font-weight: 500;
    color: var(--color-text-base);
  }

  .carrier {
    float: left;
    margin-top: var(--space-small);
    margin-right: var(--space-small);
    margin-bottom: var(--space-small);
  }
</style>
