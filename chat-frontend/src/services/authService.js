import API from "./api";

const AuthService = {
  login: (data) => {
    return API.post("login", data)
      .then(({ data }) => {
        API.defaults.headers["Authorization"] = `Bearer ${data.token}`;
      })
      .catch((err) => {
        console.log("Auth Service err", err);
        throw err;
      });
  },

  register: (data) => {},

  logout: () => {},
};

export default AuthService;
