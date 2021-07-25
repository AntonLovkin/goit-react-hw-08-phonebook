const getIsAuthenticated = state => state.auth.token;

const getUsername = state => state.auth.user.email;

export default {
    getIsAuthenticated,
    getUsername
}