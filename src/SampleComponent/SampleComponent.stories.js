import SampleComponent from "./SampleComponent.vue";

export default {
  title: "Example/SampleComponent",
  component: SampleComponent
};

const SampleComponentStory = (args) => ({
  components: { SampleComponent },
  setup() {
    return { args };
  },
  template: `<SampleComponent v-bind="args" />`,
});

export const Default = SampleComponentStory.bind({});
Default.args = {
  header: "blah blah blah!!",
  text: "bodytext!!"
};