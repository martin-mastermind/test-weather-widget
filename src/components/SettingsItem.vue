<template>
  <div>
    {{ item }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  item: string
}>()
</script>

<style lang="scss" scoped>
</style>
