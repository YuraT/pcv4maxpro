import { mount, createLocalVue } from '@vue/test-utils';
import Login from '@/views/Login';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
// import flushPromises from 'flush-promises';
import createMockStore from './store/store.spec';

const [localVue, vuetify] = [createLocalVue(), new Vuetify()];
localVue.use(Vuex);
describe('Login.vue', () => {
  let { store /* , authActions */ } = createMockStore();

  let wrapper = mount(Login, { store, localVue, vuetify });
  beforeEach(() => {
    ({ store /* , authActions */ } = createMockStore());
    wrapper = mount(Login, { store, localVue, vuetify });
  });
  afterEach(() => {
    wrapper.destroy();
  });

  it('dispatches "loginUser" when login button is clicked', async () => {
    // wrapper = mount(Login, {
    //   data: () => ({
    //     email: 'test@email.com',
    //     password: 'SuperSecretSecurePassword1000'
    //   }),
    //   store,
    //   localVue,
    //   vuetify
    // });
    // console.log(JSON.stringify(wrapper.vm, null, 2));
    // await flushPromises();
    // const btn = wrapper.findComponent({ ref: 'loginBtn' });
    // await btn.trigger('click');
    // expect(authActions.loginUser).toHaveBeenCalled();
  });
});
