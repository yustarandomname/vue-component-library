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
    },
    rotate: {
      control: { type: 'range', min: 0, max: 360 }
    },
    onClick: { action: 'clicked' }
  }
};

const IconStory = (args) => ({
  components: { Icon },
  setup() {
    return { args }
  },
  template: `<Icon :style="{'--color':args.color}" :icon="mdiAbTesting" v-bind="args" />`
})

export const Default = IconStory.bind({});
Default.args = {
  path: mdiAbTesting,
  size: "1em",
  flip: "",
  rotate: 0,
  spin: false,
  color: "black"
}
Default.parameters = {
  docs: {
    source: code,
  }
}