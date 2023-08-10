<template>
  <section class="settings">
    <header class="settings__header">
      <h2 class="settings__header-title">Settings</h2>
      <img
        v-if="!weathers.isEmpty.value"
        class="settings__header-close"
        src="../assets/close.svg"
        alt="Close"
        @click="settingsToggler.set(false)"
      >
    </header>
    <draggable
      v-if="!weathers.isEmpty.value"
      v-model="weathers.state.value"
      tag="article"
      class="settings__body"
      handle=".setting-replace__icon"
    >
      <template #item="{ element: item, index }">
        <SettingsItem 
          :key="item"
          :item="item"
          @remove="weathers.remove(index)"
        />
      </template>
    </draggable>
    <footer class="settings__footer">
      <label class="settings__footer-field" for="new-location">
        <span>Add location:</span>
        <input v-model="newLocation" id="new-location" type="text">
      </label>
      <img 
        class="settings__footer-add"
        src="../assets/add.svg"
        alt="Add"
        @click="triggerAdd"
      >
    </footer>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import draggable from 'vuedraggable';

import { useSettingsToggler } from '@/composables/useSettingsToggler';
import { useWeathers } from '@/composables/useWeathers';

import SettingsItem from './SettingsItem.vue';

const settingsToggler = useSettingsToggler();
const weathers = useWeathers();

const newLocation = ref('');

function triggerAdd() {
  weathers.add(newLocation.value);

  newLocation.value = '';
}
</script>

<style lang="scss" scoped>
.settings {
  padding: 1rem;

  display: flex;
  flex-direction: column;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    &-close {
      cursor: pointer;
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: .5rem;

    margin-top: .5rem;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    gap: .5rem;

    margin-top: 1.5rem;

    &-field {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: .25rem;

      font-weight: 700;

      input {
        padding: .3rem;
        font-size: 1rem;

        background: var(--background);
        color: var(--color);

        font-family: 'Ubuntu', sans-serif;

        border: 1px solid var(--color);
      }
    }

    &-add {
      cursor: pointer;
    }
  }
}
</style>
