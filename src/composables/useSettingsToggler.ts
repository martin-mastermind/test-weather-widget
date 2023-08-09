import { ref } from "vue";

const isOpened = ref(false);

export function useSettingsToggler() {
  function set(value: boolean) {
    isOpened.value = value;
  }

  return {
    isOpened,
    set
  }
}