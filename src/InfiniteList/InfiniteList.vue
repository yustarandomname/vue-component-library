<script lang="ts">
import { defineComponent, ref, Ref, reactive, watch, onMounted } from "vue";

export default defineComponent({
  name: "InfiniteList",
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
    const loading = reactive({
      init: true,
      page: false,
    });

    watch(list, () => {
      loading.init = false;
      loading.page = false;
    });

    const loadMore = () => {
      loading.page = true;
      emit("fetch", list, props.pageCount);
    };

    onMounted(async () => {
      emit("fetch", list, props.initCount);

      if (props.autoLoad) {
        window.addEventListener("scroll", () => {
          if (loading.page) return;
          const scrollTop = window.innerHeight + window.scrollY;
          const height = document.body.offsetHeight;
          if (scrollTop >= height - props.bottomOffset) {
            loadMore();
          }
        });
      }
    });
  },
});
</script>

<template>
  <div class="list">
    <div v-if="title" class="title">{{ title }}</div>

    <div v-for="(item, index) in list" :key="index" :class="{ first: index == 0 }" class="card">
      <slot v-bind:item="item"> {{ item }}</slot>
    </div>

    <div v-if="loading.init" class="loading">
      <div v-for="(item, index) in new Array(initCount)" :class="{ first: index == 0 }" :key="item" class="card">
        <slot name="loading" />
      </div>
    </div>

    <div v-if="loading.page" class="loading">
      <div v-for="item in new Array(pageCount)" :key="item" class="card">
        <slot name="loading" />
      </div>
    </div>

    <div class="loadMore">
      <Button @click="loadMore" :loading="loading.page || loading.init">Meer laden</Button>
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
  .list .card.first {
    border-radius: var(--corner-radius-large) var(--corner-radius-large) 0 0;
  }
  .list .card:not(:last-child) {
    border-bottom: 2px solid var(--grey-color-200);
  }
}
</style>
