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

const settingsToggler = useSettingsToggler();
</script>

<style lang="scss">
weather-widget {
  --background: #0A0A0A;
  --color: #E4E4E4;
  --primary: #171717;

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
  font-size: 1.25rem;
  margin: 0;
}
</style>
