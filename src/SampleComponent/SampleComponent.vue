<template>
  <div class="sample-component-container">
    <h2>{{ header }}</h2>
    <p>{{ text }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    header: String,
    text: String,
  },
});
</script>

<style scoped>
.sample-component-container {
  font-family: Arial, Helvetica, sans-serif;
  padding: 40px;
  background-color: black;
  color: white;
}
</style>
