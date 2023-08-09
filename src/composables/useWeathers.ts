import { computed, ref, watch } from "vue";

const state = ref<string[]>([]);

try {
  const localWeathers = JSON.parse(localStorage.getItem('weathers') ?? '[]');
  if (!Array.isArray(localWeathers) || localWeathers.some((item) => typeof item !== 'string')) {
    throw new Error('Not valid save data');
  }

  state.value = [...localWeathers];
} catch (e) {
  alert(e);

  state.value = [];
}

export function useWeathers() {
  watch(state, (value) => {
    localStorage.setItem('weathers', JSON.stringify(value));
  }, {
    deep: true
  });

  const isEmpty = computed(() => state.value.length === 0);

  function add(value: string) {
    if (state.value.includes(value)) {
      alert('This location is already in list.');
      return;
    }
  
    state.value.push(value);
  }

  function remove(index: number) {
    state.value.splice(index, 1);
  }

  return {
    state,
    isEmpty,
    add,
    remove
  }
}