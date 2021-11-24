import axios from "axios";

export const userService = {
  login: function () {
    // userService.login().then((response) => setToken(response.data.token));
    return axios.post(
      "https://sebo-rural-rest-api-cakephp.herokuapp.com/api/v1/users/login.json",
      { email: "merciofilho@gmail.com", password: "123" }
    );
  },
  logout: function () {}
};
