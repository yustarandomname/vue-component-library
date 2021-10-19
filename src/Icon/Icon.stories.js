import Icon from "./Icon.vue"
import { mdiAbTesting } from "@mdi/js"

const code = `<Icon :path="path" :size="1em" :flip="flip" :rotate="rotate" :spin="spin"/>`


export default {
  title: "Example/Icon",
  component: Icon,
  argTypes: {
    flip: {
      options: ["horizontal", "vertical", "h", "v", "none"],
      control: 'radio'
    }
  }
};

const IconStory = (args) => ({
  components: { Icon },
  setup() {
    return { args }
  },
  template: `<Icon :icon="mdiAbTesting" v-bind="args" />`
})

export const Default = IconStory.bind({});
Default.args = {
  path: mdiAbTesting,
  size: "1em",
  flip: "",
  rotate: 0,
  spin: false
}
Default.parameters = {
  docs: {
    source: code,
  }
}