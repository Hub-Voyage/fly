<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import TravelersCounter from '../TravelersCounter/TravelersCounter.vue'
  import { airportList } from '../../utils/airportList';
  
  interface FormData {
    origem: string;
    destino: string;
    dataIda: string;
    dataVolta: string;
    adultos: number;
  }
  
  const emit = defineEmits(['searchFlights']);

  const showDataList = ref(false);
  const airports = ref(airportList);
  const inputId = ref('');

  const form = reactive<FormData>({
    origem: '',
    destino: '',
    dataIda: '',
    dataVolta: '',
    adultos: 1,
  });

  const filterLocales = () => {   
    airports.value = airportList.filter(airport => 
    airport.airportUF.toLowerCase().includes(form.origem.toLowerCase()) ||
    airport.iataCode.toLowerCase().includes(form.origem.toLowerCase()) ||
    airport.airportCity.toLowerCase().includes(form.origem.toLowerCase())
    );
  }

  const handleFocus = (event: FocusEvent): void => {
    const { id } = event.target as HTMLInputElement
    inputId.value = id
    showDataList.value = true
  }

  const handleCountUpdate = (newCount: number) => {
    form.adultos = newCount;
  };

  const selectCity = (newCity: string, inputId: string) =>{            
    form[inputId] = newCity
    showDataList.value = false
    airports.value = airportList
  }

  const searchFlights = () => {   
    emit('searchFlights', { ...form });
  };
</script>

<template>
  <form @submit.prevent="searchFlights">
    <div class="input">
      <label for="origem">Origem:</label>
      <input 
        type="text" 
        id="origem" 
        list="airport-list" 
        v-model="form.origem" 
        @input="filterLocales"
        @focus="handleFocus" 
        placeholder="De onde você vai sair?"
        autocomplete="off"        
        required  
      />
      <datalist id="airport-list" class="airport-list" v-if="showDataList">
        <option 
          v-for="airport in airports" 
          :key="airport.iataCode" 
          :value="airport.iataCode" 
          @click="selectCity(airport.iataCode, inputId)"
          >
          {{airport.airportCity}}, {{airport.airportUF}}
          <span>
            {{`${airport.airportName}, (${airport.iataCode})`}}
          </span>
        </option>
      </datalist>
    </div>
    <div class="input">
      <label for="destino">Destino:</label>
      <input 
        type="text" 
        id="destino" 
        list="airport-list" 
        v-model="form.destino" 
        @input="filterLocales"
        @focus="handleFocus" 
        placeholder="Pra onde você vai?"
        autocomplete="off"    
        required 
      />
    </div>
    <div class="input">
      <label for="dataIda">Data de Ida:</label>
      <input v-model="form.dataIda" type="date" id="dataIda" required />
    </div>
    <div class="input">
      <label for="dataVolta">Data de Volta:</label>
      <input v-model="form.dataVolta" type="date" id="dataVolta" required />
    </div>
    <TravelersCounter @updateCount="handleCountUpdate" />
    <button type="submit" class="action-button">Buscar voos</button>
  </form>
</template>
  
<style scoped>
  form {
    display: flex;
    align-items: center;
    gap: var(--space-base);
  }

  .input {
    position: relative;
    display: flex;
    width: max-content;
    height: 64px;
    padding: var(--size-base);
    text-align: left;
    border-radius: var(--radius-medium);
    background-color: var(--color-commom-light);

    & label {
      font-size: 14px;
      color: var(--color-text-base);
    }

    &:focus-within {
      outline: 2px solid var(--color-secondary);
    }

    &:focus-within > label {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }

    & label {
      position: absolute;
      top: var(--space-small);
      left: var(--space-base);
    }

    & input {
      border: 0;
      outline: 0;
      font-size: var(--size-base);
      padding-top: var(--size-medium);
      background-color: var(--color-commom-light);
      color: var(--color-text-base);
      &::placeholder {
        font-size: var(--size-small);
        color: black;
      }
      &:focus {
        padding-top: 0;

        &::placeholder {
          font-size: initial;
        }
      }
    }

    & input[type="date"] {
      padding-top: var(--size-xsmall);
      max-width: 162px;
    }

    & label.has-value {
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0 ,0, 0);
      border: 0;
    }
  }

  .action-button {
    max-width: 256px;
    padding: var(--size-base) var(--size-xlarge);
    border: 0;
    line-height: 2;
    font-size: var(--size-base);
    font-weight: 700;
    background-color: var(--color-secondary);
    color: var(--color-text-base);
    border-radius: var(--radius-base);
    cursor: pointer;

    &:hover {
      filter: brightness(85%)
    }
  }

  .airport-list {
    left: 0;
    position: absolute;
    display: block;
    width: 512px;
    max-height: 300px;
    margin-top: 54px;
    font-size: 0.8rem;
    border-radius: 6px;
    background-color: var(--color-commom-light);
    overflow: hidden scroll;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);

    & option {
      display: block;
      padding: var(--size-small) var(--size-base);
      font-size: var(--size-small);
      font-weight: 600;
      color: var(--color-text-base);
      z-index: 20;
      cursor: pointer;
      &:hover {
        background-color: var(--color-secondary);
      }
    }

    & span {
      display: block;
      font-weight: 400;
      color: var(--color-text-base);
      z-index: 10;
      cursor: pointer;
    }
  }
</style>
  