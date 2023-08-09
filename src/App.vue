<template>
  <main class="weather__widget">
    <img class="weather__widget-settings__button" :src="settingsButtonIcon" alt="Settings"/>

    <WeatherScreen v-if="!isSettingsOpened" />
    <SettingsScreen v-else />
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import WeatherScreen from './components/WeatherScreen.vue';
import SettingsScreen from './components/SettingsScreen.vue';

import cogIcon from './assets/cog.svg';
import closeIcon from './assets/close.svg';

const isSettingsOpened = ref(false);
const settingsButtonIcon = computed(() => (isSettingsOpened.value ? closeIcon : cogIcon));
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
  position: relative;
  background: var(--background);

  &-settings__button {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
}
</style>
