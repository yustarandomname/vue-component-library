import InfiniteList from "./InfiniteList.vue";

const template = `
<InfiniteList v-bind="args" @fetch="fetchItems">
<template #default="card">
  <div class="card">
    {{ card}}
  </div>
</template>

  <template #loading>
    <div>Loading...</div>
  </template>
</InfiniteList>
`

export default {
  title: "Example/Infinte list",
  component: InfiniteList,
};

const InfiniteListStory = (args) => ({
  components: { InfiniteList },
  setup() {
    const fetchItems = async (list, amount) => {
      const cards = new Array(amount).fill("Loaded").map(() => {
        return {
          id: Math.floor(Math.random() * 10000),
          title: "Card",
        }
      })
      await new Promise((resolve) => setTimeout(resolve, args.delay));
      list.value = [...list.value, ...cards];
    }

    return { args, fetchItems };
  },
  template: template,
})

export const Default = InfiniteListStory.bind({});
Default.args = {
  title: "Infinite list",
  initCount: 10,
  pageCount: 5,
  autoLoad: true,
  bottomOffset: 400,
  delay: 2000,
}