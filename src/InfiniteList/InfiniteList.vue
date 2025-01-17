<script lang="ts">
import { defineComponent, ref, Ref, reactive, watch, onMounted } from "vue";
import Button from "../Button/Button.vue";

export default defineComponent({
  name: "InfiniteList",
  components: {
    Button,
  },
  props: {
    title: {
      type: String,
    },
    initCount: {
      type: Number,
      default: 10,
    },
    pageCount: {
      type: Number,
      default: 5,
    },
    autoLoad: {
      type: Boolean,
      default: true,
    },
    bottomOffset: {
      type: Number,
      default: 400,
    },
  },
  setup(props, { emit }) {
    const list: Ref<any[]> = ref([]);
    const loading = ref(props.initCount);

    watch(list, () => {
      loading.value = 0;
    });

    const loadMore = () => {
      loading.value = props.pageCount;
      emit("fetch", list, props.pageCount);
    };

    onMounted(async () => {
      emit("fetch", list, props.initCount);

      if (props.autoLoad) {
        console.log("auto load");
        window.addEventListener("scroll", () => {
          if (!!loading.value) return;
          const scrollTop = window.innerHeight + window.scrollY;
          const height = document.body.offsetHeight;

          if (scrollTop < height - props.bottomOffset) return;

          loadMore();
        });
      }
    });

    return { list, loading, loadMore };
  },
});
</script>

<template>
  <div class="list">
    <div v-if="title" class="title">{{ title }}</div>

    <section v-for="(item, index) in list" :key="index" class="card">
      <slot v-bind:item="item"> {{ item }}</slot>
    </section>

    <section v-for="item in new Array(loading)" :key="item" class="card">
      <slot name="loading" />
    </section>

    <div class="loadMore">
      <Button @click="loadMore" :loading="!!loading">Meer laden</Button>
    </div>
  </div>
</template>

<style scoped>
.list {
  --width: var(--width-large, 35rem);
  width: var(--width);
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: var(--margin-large);
}
.list .title {
  font-size: var(--header);
}
.list .loading {
  display: flex;
  flex-direction: column;
  gap: var(--margin-large);
}
.list .card {
  padding: var(--padding-large);
  background: var(--white-color);
  border-radius: var(--corner-radius);
}

.loadMore {
  display: flex;
  justify-content: center;
  margin-top: var(--margin-large);
}

/* MEDIA QUERIES */
@media screen and (max-width: 40rem) {
  .list {
    --width: var(--width-full);
    gap: 0;
  }
  .list .loading {
    gap: 0;
  }
  .list .card {
    padding: var(--padding-huge);
    border-radius: 0;
  }
  .list .card:first-of-type {
    border-radius: var(--corner-radius-large) var(--corner-radius-large) 0 0;
  }
  .list .card:last-of-type {
    border-radius: 0 0 var(--corner-radius-large) var(--corner-radius-large);
  }
  .list .card:not(:last-child) {
    border-bottom: 2px solid var(--grey-color-200);
  }
}
</style>
