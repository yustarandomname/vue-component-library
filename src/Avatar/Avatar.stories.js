import Avatar from "./Avatar.vue";

export default {
  title: "Example/Avatar",
  component: Avatar
};

export const Default = () => ({
  components: { Avatar },
  template:
    '<Avatar/>'
});

export const Small = () => ({
  components: { Avatar },
  template:
    '<Avatar size="small"/>'
});


export const Large = () => ({
  components: { Avatar },
  template:
    '<Avatar size="large"/>'
});

