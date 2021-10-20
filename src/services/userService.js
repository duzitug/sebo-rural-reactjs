import axios from "axios";

const userService = {
  login: function () {
    return axios.post(
      "https://sebo-rural-rest-api-cakephp.herokuapp.com/api/v1/users/login.json",
      { email: "merciofilho@gmail.com", password: "123" }
    );
  },
  logout: function () {}
};

export default userService;
