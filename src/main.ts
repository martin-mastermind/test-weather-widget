import { defineCustomElement } from 'vue';
import App from './App.vue';

const WeatherWidget = defineCustomElement(App);
customElements.define('weather-widget', WeatherWidget);