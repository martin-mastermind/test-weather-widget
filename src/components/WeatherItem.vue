<template>
  <div class="weather">
    <h4 class="weather__title">{{ item }}</h4>
    <div class="weather__main">
      <img class="weather__main-icon" src="https://openweathermap.org/img/wn/02d@2x.png" alt="02d">
      <span class="weather__main-temp">7°C</span>
    </div>
    <span class="weather__description">
      Feels like -3°C. Broken clouds. Light breeze.
    </span>
    <div class="weather__stats">
      <div class="weather__stats-item with-icon">
        <img src="../assets/wind.svg" alt="Wind" style="transform: rotate(240deg)">
        <span>3.0m/s SSE</span>
      </div>
      <div class="weather__stats-item with-icon">
        <img src="../assets/barometer.svg" alt="Pressure">
        <span>1021hPa</span>
      </div>
      <div class="weather__stats-item">
        <span>Humidity: 97%</span>
      </div>
      <div class="weather__stats-item">
        <span>Dew point: 0°C</span>
      </div>
      <div class="weather__stats-item">
        <span>Visibility: 10.0km</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  item: string
}>();
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
