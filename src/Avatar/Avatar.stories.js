import Avatar from "./Avatar.vue";

const code = `
// size = 'small' | 'medium' | 'large'
// alt = 'alt text'
// src = 'url'
// align = 'left' | 'top' | 'right' | 'bottom'
<Avatar :size="size" :alt="alt" :src="src" :align="align">
  <p>{{title}}</p>
 </Avatar>
`

export default {
  title: "Example/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: 'radio'
    },
    align: {
      options: ['left', 'top', 'right', 'bottom'],
      control: 'radio'
    },
  }
};

const AvatarStory = (args) => ({
  components: { Avatar },
  setup() {
    return { args };
  },
  template: `<Avatar v-bind="args"><p>{{args.title}}</p></Avatar>`,
});

export const Default = AvatarStory.bind({});
Default.args = {
  alt: "123",
  title: "This is a title",
  src: "https://proteus-eretes.nl/fotodir/0/0_tumb.jpg",
  align: 'left',
  size: 'medium',
};
Default.parameters = {
  docs: {
    source: {
      code: code,
    },
  },
}

