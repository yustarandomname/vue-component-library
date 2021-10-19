import SampleComponent from "./SampleComponent.vue";

export default {
  title: "Example/SampleComponent",
  component: SampleComponent
};

export const Default = () => ({
  components: { SampleComponent },
  template:
    '<SampleComponent header="blah blah blah!" text="bodytext"/>'
});
