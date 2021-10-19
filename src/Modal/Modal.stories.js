import Modal from "./Modal.vue";

const code = `<Modal :title="title"><h1>Modal</h1></Modal>`

export default {
  title: "Example/Modal",
  component: Modal,
  argTypes: {
    onClose: { action: 'clicked' }
  }
}

const ModalStory = (args) => ({
  components: { Modal },
  setup() {
    return { args }
  },
  template: `<Modal :title="title"><h1>Modal</h1></Modal>`
})

export const Default = ModalStory.bind({})
Default.args = {
  title: "Modal",
}
Default.parameters = {
  docs: {
    source: code
  }
}