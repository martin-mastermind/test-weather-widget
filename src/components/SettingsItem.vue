<template>
  <div class="setting">
    <div class="setting-replace__icon">
      <img src="../assets/burger.svg" alt="Replace" />
    </div>
    <span class="setting-name">
      {{ item }}
    </span>
    <div class="setting-delete__icon" @click="$emit('remove')">
      <img src="../assets/remove.svg" alt="Remove" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  item: string
}>();

defineEmits<{
  (e: 'remove'): void
}>()
</script>

<style lang="scss" scoped>
.setting {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: .3rem;

  background: var(--primary);

  &-replace__icon {
    cursor: grab;
  }

  &-name {
    user-select: none;
  }

  &-delete__icon {
    cursor: pointer;
  }
}
</style>
