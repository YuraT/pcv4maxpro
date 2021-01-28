import createMockStore from './store.spec';

const { store, authActions } = createMockStore();
describe('Auth Module', () => {
  it('It can access the realmApp from the rootState', () => {
    expect(store.state.realmApp.app.id).toBe(process.env.VUE_APP_REALM_ID);
  });
  it('Starts without a loggedin User', async () => {
    expect(store.state.realmApp.app.currentUser).toBe(null);
  });
  it('Can login a user', async () => {
    await store.dispatch('auth/loginUser');
    expect(authActions.loginUser).toHaveBeenCalled();
  });
});
