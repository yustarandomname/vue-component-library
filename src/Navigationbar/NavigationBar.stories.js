import NavigationBar from "./NavigationBar.vue"

const code = `
<NavigationBar :userName="userName" :userAvatar="userAvatar">
  <template #menu>
    <h1>Menu</h1>
  </template>
</NavigationBar>
`

const template = `
<NavigationBar v-bind="args" />
`

export default {
  title: "Example/navigation bar",
  component: NavigationBar,
  decorators: [() => ({ template: '<div style="height: 600vh"><story/></div>' })],
};

const NavigationBarStory = (args) => ({
  components: { NavigationBar },
  setup() {
    return { args }
  },
  template: template
})

export const Default = NavigationBarStory.bind({});
Default.args = {
  userName: "John Doe",
  userAvatar: "https://proteus-eretes.nl/fotodir/0/0_tumb.jpg"
}
Default.parameters = {
  docs: {
    source: code,
  }
}