<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import LayoutBase from '../../components/LayoutBase/LayoutBase.vue';
  import Tickets from '../../components/Tickets/Tickets.vue'
  import { flights } from '../../mocks/flightsMock'
  
  const route = useRoute()
  const flightOffer = ref(null)
  const loading = ref(false);

  const loadFlightOffer = async () => {
    loading.value = true

    const { origem, destino, dataIda, dataVolta, adultos } = route.params
    
    const fligthsUrl = `http://localhost:3333/flights?originLocationCode=${origem}&destinationLocationCode=${destino}&departureDate=${dataIda}&returnDate=${dataVolta}&adults=${adultos}&max=${5}`

    try {
      const response = await fetch(fligthsUrl)
      const data = await response.json()
      console.log(data);
      
      flightOffer.value = data

    } catch(error) {
      console.log(error)
      
    } finally {
      loading.value = false
      console.log('finnaly')
    }
  }

  const selectFlight = (flightId: string) => {
    console.log('clicou', flightId);
  }

  onMounted(() => {
    loadFlightOffer()
  })

</script>

<template>
  <LayoutBase>
    <div class="container">
      <h1>Results</h1>
      <div v-if="loading">
        <p>Carregando...</p>
      </div>
      <div v-else-if="flightOffer">
        <div v-for="flight in flightOffer" :key="flight.id">
          <Tickets 
            :itineraries="flight.itineraries" 
            :price="flight.price"
            :luggage="flight.pricingOptions"
            @click="selectFlight(flight.id)"
          />
        </div>
      </div>
      <div v-else>
        <p>nenhum dado encontrado</p>
      </div>
    </div>
  </LayoutBase>
</template>
<style>
</style>
