<template>
  <main class="weather__widget">
    <WeatherScreen 
      v-if="!isSettingsOpened"
      :items="weathers"
      @switch="isSettingsOpened = true"
    />
    <SettingsScreen 
      v-else
      :items="weathers"
      @add="addLocation"
      @switch="isSettingsOpened = false"
    />
  </main>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

import WeatherScreen from './components/WeatherScreen.vue';
import SettingsScreen from './components/SettingsScreen.vue';

const isSettingsOpened = ref(false);

const weathers = ref<string[]>([]);
try {
  const localWeathers = JSON.parse(localStorage.getItem('weathers') ?? '[]');
  if (!Array.isArray(localWeathers) || localWeathers.some((item) => typeof item !== 'string')) {
    throw new Error('Not valid save data');
  }

  weathers.value = [...localWeathers];
} catch (e) {
  alert(e);

  weathers.value = [];
} finally {
  isSettingsOpened.value = weathers.value.length === 0;
}

watch(weathers, (value) => {
  localStorage.setItem('weathers', JSON.stringify(value));
}, {
  deep: true
});

function addLocation(location: string) {
  if (weathers.value.includes(location)) {
    alert('This location is already in list.');
    return;
  }

  weathers.value.push(location);
}
</script>

<style lang="scss">
weather-widget {
  --background: #000;
  --color: #E4E3E8;
  --primary: #42414E;
  --secondary: #1A1A1F;
  --accent: #79778D;

  display: block;

  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: Verdana, Geneva, Tahoma, sans-serif;

  width: 320px;
}

.weather__widget {
  background: var(--background);
  color: var(--color);
}

h2 {
  font-size: 1rem;
  margin: 0;
}
</style>
