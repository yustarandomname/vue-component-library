import Grid from "./Grid.vue"
import Avatar from "./../Avatar/Avatar.vue"

const avatar = `
  <Avatar :src="'https://proteus-eretes.nl/fotodir/0/0_tumb.jpg'">User</Avatar>
`

const code = `
// title = 'string'
<Grid :title="title">
  ${avatar}
  ${avatar}
  ${avatar}
  ${avatar}
</Grid>
`

const template = `<Grid v-bind="args">${avatar}${avatar}${avatar}${avatar}</Grid>`

export default {
  title: "Example/Grid",
  component: Grid
};

const GridStory = (args) => ({
  components: { Grid, Avatar },
  setup() {
    return { args }
  },
  template: template
})

export const Default = GridStory.bind({});
Default.args = {
  title: "Grid"
}
Default.parameters = {
  docs: {
    source: code,
  }
}