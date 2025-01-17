<script lang="ts">
import { defineComponent, computed } from "vue";
import { mdiLoading } from "@mdi/js";

import Icon from "../Icon/Icon.vue";

export default defineComponent({
  name: "Button",
  components: {
    Icon,
  },
  props: {
    state: {
      type: String,
      default: "default",
    },
    size: {
      type: String,
      default: "medium",
    },
    icon: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const mdi = {
      loading: mdiLoading,
    };

    const classes = computed(() => {
      const classObj: { [key: string]: boolean } = {};
      classObj["disabled"] = !!props.disabled || !!props.loading;
      classObj["size-" + props.size] = !!props.size;
      classObj["state-" + props.state] = !!props.state;
      return classObj;
    });

    return { mdi, classes };
  },
});
</script>

<template>
  <button @click="$emit('click')" :class="classes" :disabled="disabled || loading">
    <div v-if="loading">
      <icon :path="mdi.loading" :spin="true" />
      Loading...
    </div>
    <div v-else>
      <icon v-if="icon" :path="icon" />
      <slot />
    </div>
  </button>
</template>

<style scoped>
@import "./../main.css";
button {
  --color: var(--grey-color-200);
  --bg: var(--grey-color-900);

  all: unset;
  min-width: 20rem;
  max-width: 90vw;
  height: 3em;
  color: var(--color);
  background: var(--bg);
  border-radius: var(--corner-radius);
  cursor: pointer;
  outline-offset: 0px;
  transition: outline-offset 0.2s;
}

button > div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--margin-small);
}

/* STATE */
button.state-primary {
  --bg: var(--primary-color);
}
button.state-success {
  --bg: var(--secondary-color);
  --color: var(--grey-color-900);
}
button.state-destructive {
  --bg: var(--destructive-color);
}
button.state-disabled,
button.disabled {
  --bg: var(--grey-color-200);
  --color: var(--grey-color-500);
  cursor: not-allowed !important;
}

/* SIZE */
button.size-small {
  height: 2em;
  min-width: 10rem;
  font-size: 0.8rem;
}
button.size-large {
  height: 3rem;
  width: 100%;
  min-width: unset;
}

/* HOVER */
button:hover:not(.state-disabled, .disabled),
.state-hover {
  outline: 1px solid var(--color);
  outline-offset: -5px;
}
</style>
