<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    path: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "1em",
    },
    flip: {
      type: String,
      default: "",
    },
    rotate: {
      type: Number,
      default: 0,
    },
    spin: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const styles = computed(() => {
      const transform: string[] = [];
      const styleObject: { [key: string]: string } = {};

      // Transform
      if (props.flip == "v" || props.flip == "vertical") transform.push("scaleX(-1)");
      if (props.flip == "h" || props.flip == "horizontal") transform.push("scaleY(-1)");
      if (props.rotate != 0) transform.push(`rotate(${props.rotate}deg)`);

      if (transform.length > 0) {
        styleObject["transform"] = transform.join(" ");
        styleObject["transform-origin"] = "center";
      }

      // Style
      styleObject["width"] = props.size;
      styleObject["height"] = props.size;

      return styleObject;
    });

    return { styles };
  },
});
</script>

<template>
  <svg @click="$emit('click')" viewBox="0 0 24 24" :class="{ spin: spin }" :style="styles">
    <path :d="path" />
  </svg>
</template>

<style scoped>
svg {
  vertical-align: middle;
  fill: var(--color, "black");
  margin: var(--margin, 0);
}

.spin {
  animation: spin 1s infinite cubic-bezier(0.79, 0.14, 0.15, 0.86);
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
