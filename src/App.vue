<template>
  <main class="weather__widget">
    <WeatherScreen v-if="!settingsToggler.isOpened.value" />
    <SettingsScreen v-else />
  </main>
</template>

<script setup lang="ts">
import { useSettingsToggler } from './composables/useSettingsToggler';

import WeatherScreen from './components/WeatherScreen.vue';
import SettingsScreen from './components/SettingsScreen.vue';
import { useWeathers } from './composables/useWeathers';

const settingsToggler = useSettingsToggler();
const weathers = useWeathers();

settingsToggler.set(weathers.isEmpty.value)
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?&family=Ubuntu:wght@400;700&display=swap');

::-webkit-scrollbar {
  width: .5rem;
}

::-webkit-scrollbar-track {
  background: var(--background);
}

::-webkit-scrollbar-thumb {
  background: var(--color);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-hover);
}

weather-widget {
  --background: #030123;
  --color: #E4E4E4;
  --color-hover: #727272;
  --primary: #000046;
  --icon-background: #85B1FF;

  display: block;

  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: 'Ubuntu', sans-serif;

  width: 20rem;
  max-width: 320px;

  position: absolute;

  top: 0;
  left: 0;
}

.weather__widget {
  background: var(--background);
  color: var(--color);
}

h2, h4 {
  margin: 0;
}

h2 {
  font-size: 1.25rem;
}

h4 {
  font-size: 1.2rem;
}
</style>
