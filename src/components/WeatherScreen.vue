<template>
  <section class="weathers">
    <header class="weathers__header">
      <img 
        class="weathers__header-cog"
        src="../assets/cog.svg"
        alt="Settings"
        @click="$emit('switch')"
      />
    </header>
    <article class="weathers__body">
      <WeatherItem v-for="item of items" :key="item" :item="item" />
    </article>
  </section>
</template>

<script setup lang="ts">
import WeatherItem from './WeatherItem.vue';

defineProps<{
  items: string[]
}>();

defineEmits<{
  (e: 'switch'): void
}>()
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
