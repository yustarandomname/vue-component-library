import InfiniteList from "./InfiniteList.vue";

const template = `
<InfiniteList v-bind="args">

</InfiniteList>
`

export default {
  title: "Example/Infinte list",
  component: InfiniteList,
};

const InfiniteListStory = (args) => ({
  components: { InfiniteList },
  setup() {
    // const fetchItems = async (list, amount) => {
    //   const cards = new Array(amount).fill(0).map((_, i) => {
    //     return {
    //       id: i,
    //     }
    //   });
    //   await new Promise((resolve) => setTimeout(resolve, 2000));
    //   list = list.concat(cards);
    // }

    return { args };
  },
  template
})

export const Default = InfiniteListStory({});
Default.args = {
  title: "Infinite list",
  initCount: 10,
  pageCount: 10,
  autoLoad: true,
  bottomOffset: 400,
}