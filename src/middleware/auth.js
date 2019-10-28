export default ({ store, redirect }) => {
    const auth = store.state.auth.loggedIn
    if (!auth) {
        return redirect('/auth/login')
    }
};
