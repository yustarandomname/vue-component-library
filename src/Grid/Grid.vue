<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      default: "",
    },
  },
});
</script>

<template>
  <div class="grid">
    <div v-if="title" class="title">{{ title }}</div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
@import "../main.css";
.grid {
  width: var(--width, 40rem);
  max-width: var(--max-width);
  margin: 2rem auto;
}
.grid .title {
  font-size: var(--header);
}
.grid .content {
  display: grid;
  grid-template-columns: repeat(var(--columns, 2), 1fr);
  grid-gap: var(--margin-small) var(--margin-large);
}
</style>
