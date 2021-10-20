import axios from "axios";

const loginService = {
  login: function () {
    return axios.post(
      "https://sebo-rural-rest-api-cakephp.herokuapp.com/api/v1/users/login.json",
      { email: "merciofilho@gmail.com", password: "123" }
    );
  }
};

export default loginService;
