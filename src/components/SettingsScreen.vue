<template>
  <section class="settings">
    <header class="settings__header">
      <h2 class="settings__header-title">Settings</h2>
      <img
        class="settings__header-close"
        src="../assets/close.svg"
        alt="Close"
        @click="$emit('switch')"
      />
    </header>
    <article class="settings__body">
      <SettingsItem v-for="item of items" :key="item" :item="item" />
    </article>
    <footer class="settings__footer">
      <label class="settings__footer-field" for="new-location">
        <span>Add location:</span>
        <input v-model="newLocation" id="new-location" type="text">
      </label>
      <img 
        class="settings__footer-add"
        src="../assets/add.svg"
        alt="Add"
        @click="emitAdd"
      />
    </footer>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SettingsItem from './SettingsItem.vue';

defineProps<{
  items: string[]
}>()

const emit = defineEmits<{
  (e: 'add', location: string): void
  (e: 'switch'): void
}>();

const newLocation = ref('');

function emitAdd() {
  emit('add', newLocation.value);

  newLocation.value = '';
}
</script>

<style lang="scss" scoped>
.settings {
  padding: .5rem;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    &-close {
      cursor: pointer;
    }
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    gap: .5rem;

    &-field {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: .25rem;

      font-weight: 700;

      input {
        padding: .25rem;
        font-size: 1rem;

        background: var(--background);
        color: var(--color);

        border: 1px solid var(--primary);
      }
    }

    &-add {
      cursor: pointer;
    }
  }
}
</style>
