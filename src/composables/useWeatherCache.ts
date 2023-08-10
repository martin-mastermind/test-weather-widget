import { ref, watch, onMounted } from "vue";

const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const UNITS = 'metric';

const LOCALSTORAGE_KEY = 'weather-cache';
const VALID_MS = 300000; // 5 minutes

const cache = ref<{
  [key: string]: {
    validUntil: number
    data: object
  }
}>({});

try {
  const localCache = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) ?? '{}');
  const isObject = typeof localCache === 'object';
  const hasFields = Object.keys(localCache).every(key => localCache[key].validUntil && localCache[key].data);

  if (!isObject || !hasFields) {
    throw new Error('Not valid save data');
  }

  cache.value = {...localCache};
} catch (e) {
  alert(e);

  cache.value = {};
}

export function useWeatherCache(location: string) {
  const weather = ref();

  watch(cache, (value) => {
    localStorage.setItem('weather-cache', JSON.stringify(value));
  }, {
    deep: true
  })
  
  onMounted(async () => {
    const cachedWeather = cache.value[location];

    if (cachedWeather && Date.now() - cachedWeather.validUntil < VALID_MS) {
      weather.value = cachedWeather.data;
      return;
    }

    const weatherRequest = `${API_URL}?q=${location}&appid=${process.env.WEATHER_API}&units=${UNITS}`;
    
    try {
      const response = await fetch(weatherRequest);
      const json = await response.json();

      cache.value[location] = {
        validUntil: Date.now() + VALID_MS,
        data: json
      };
      weather.value = json;
    } catch {
      alert(`Error while loading data for location: ${location}`);
    }
  });

  return {
    weather
  };
}