<template>
  <section class="weathers">
    <header class="weathers__header">
      <img 
        class="weathers__header-cog"
        src="../assets/cog.svg"
        alt="Settings"
        @click="settingsToggler.set(true)"
      />
    </header>
    <article class="weathers__body">
      <WeatherItem v-for="item of weathers.state.value" :key="item" :item="item" />
    </article>
  </section>
</template>

<script setup lang="ts">
import { useSettingsToggler } from '@/composables/useSettingsToggler';
import { useWeathers } from '@/composables/useWeathers';

import WeatherItem from './WeatherItem.vue';

const settingsToggler = useSettingsToggler();
const weathers = useWeathers();
</script>

<style lang="scss" scoped>
.weathers {
  padding: .5rem;

  &__header {
    display: flex;
    justify-content: flex-end;

    &-cog {
      cursor: pointer;
    }
  }
}
</style>
