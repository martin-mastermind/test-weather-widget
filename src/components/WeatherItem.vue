<template>
  <div class="weather" v-if="weather">
    <h4 class="weather__title">{{ name }}</h4>
    <div class="weather__main" v-if="hasMain && hasWeather">
      <img class="weather__main-icon" :src="main.img" alt="Weather Icon">
      <span class="weather__main-temp">{{ main.temp }}°C</span>
    </div>
    <span class="weather__description" v-if="hasWind">
      {{ description }}
    </span>
    <div class="weather__stats">
      <div class="weather__stats-item with-icon" v-if="hasWind">
        <img src="../assets/wind.svg" alt="Wind" :style="wind.style">
        <span>{{ wind.text }}</span>
      </div>
      <div class="weather__stats-item with-icon" v-if="hasMain">
        <img src="../assets/barometer.svg" alt="Pressure">
        <span>{{ weather.main.pressure }}hPa</span>
      </div>
      <div class="weather__stats-item" v-if="hasMain">
        <span>Humidity: {{ weather.main.humidity }}%</span>
      </div>
      <div class="weather__stats-item" v-if="hasMain">
        <span>Dew point: {{ dewPoint }}°C</span>
      </div>
      <div class="weather__stats-item" v-if="hasVisibility">
        <span>Visibility: {{ visibility }}km</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useWeatherCache } from '@/composables/useWeatherCache';
import { useWindInformation } from '@/composables/useWindInformation';

const props = defineProps<{
  item: string
}>();

const { weather } = useWeatherCache(props.item);

const hasMain = computed(() => !!weather.value.main);
const hasWeather = computed(() => weather.value.weather && weather.value.weather.length > 0);
const hasWind = computed(() => !!weather.value.wind);
const hasVisibility = computed(() => !!weather.value.visibility);

const name = computed(() => `${weather.value.name}, ${weather.value.sys.country}`);

const main = computed(() => (
  {
    img: `https://openweathermap.org/img/wn/${weather.value.weather[0].icon}@2x.png`,
    temp: Math.round(weather.value.main.temp)
  }
));

const description = computed(() => {
  const feelsLike = `Feels like ${Math.round(weather.value.main.feels_like)}°C.`;

  let clouds = weather.value.weather[0].description;
  clouds = `${clouds[0].toUpperCase()}${clouds.slice(1)}.`;

  const { speedDescription } = useWindInformation(weather.value.wind);

  return `${feelsLike} ${clouds} ${speedDescription.value}.`;
});

const wind = computed(() => {
  const { degDescription } = useWindInformation(weather.value.wind);

  return {
    style: `transform: rotate(${weather.value.wind.deg}deg)`,
    text: `${weather.value.wind.speed.toFixed(1)}m/s ${degDescription.value}`
  };
});

const dewPoint = computed(() => main.value.temp - ((100 - weather.value.main.humidity) / 5));

const visibility = computed(() => (weather.value.visibility / 1000).toFixed(1));
</script>

<style lang="scss" scoped>
.weather {
  display: flex;
  flex-direction: column;

  gap: 1rem;

  &:not(:first-of-type) {
    padding-top: 2rem;
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid var(--color);
    padding-bottom: 2rem;
  }

  &__main {
    display: flex;
    gap: 1rem;

    justify-content: center;
    align-items: center;

    &-icon {
      background: var(--icon-background);
      border-radius: 50%;
    }

    &-temp {
      font-size: 3.5rem;
    }
  }

  &__stats {
    display: flex;
    flex-wrap: wrap;

    gap: 1rem;
    justify-content: space-between;

    &-item {
      width: calc(50% - 1rem);
      font-size: .9rem;
      font-weight: 700;

      &.with-icon {
        display: flex;
        gap: .5rem;
        align-items: center;

        img {
          width: 1.5rem;
        }
      }
    }
  }
}
</style>
