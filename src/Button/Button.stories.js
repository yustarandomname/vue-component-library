import Button from "./Button.vue";
import { mdiAbTesting } from "@mdi/js"

const code = `<Button :title="title"><h1>Modal</h1></Modal>`

export default {
  title: "Example/Button",
  component: Button,
  decorators: [() => ({ template: '<div style="background: white; padding: 3rem; display: flex; justify-content:center; border-radius: var(--corner-radius-large);"><story/></div>' })],
  argTypes: {
    state: {
      options: ["primary", "success", "destructive", "disabled", "hover", "default"],
      control: 'radio'
    },
    size: {
      options: ["small", "medium", "large"],
      control: 'radio'
    },
    background: {
      control: 'color'
    },
    color: {
      control: 'color'
    },
    onClick: { action: 'clicked' }
  }
}

const ButtonStory = (args) => ({
  components: { Button },
  setup() {
    return { args }
  },
  template: `
  <Button v-if="args.customBackground" v-bind="args" :style="{'--bg': args.background, '--color': args.color}">Button</Button>
  <Button v-else v-bind="args">Button</Button>
  `
})

export const Default = ButtonStory.bind({})
Default.args = {
  state: 'default',
  size: 'medium',
  icon: mdiAbTesting,
  loading: false,
  disabled: false,
  background: "",
  color: "",
  customBackground: false,
}
Default.parameters = {
  docs: {
    source: code
  }
}