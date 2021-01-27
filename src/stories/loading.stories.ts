import Navbar from '@/components/Navbar.vue';
import { Story, Meta } from '@/@types/storybook.d';
import Loading from '@/components/Loading.vue';

export default {
  title: 'Loading Utility',
  components: [Loading],
}as Meta

const Template: Story = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Loading,Navbar },
  template: `
    <Loading v-slot="{loading,process}" :callback="callback">
    <Navbar :loading="linearLoader && loading"></Navbar>
      <v-btn :loading="loading" @click="process"> click me
      </v-btn>
    </Loading>
  `
});

export const useLoader = Template.bind({})
// useLoader.args = {
//   linearLoader:false,
//   callback: () => new Promise((resolve)=>{
//     setTimeout(()=>resolve(),2000)
//   })
// }
