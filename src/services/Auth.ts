import AXIOS from "../config/Axios";
import Prefix from "../config/ApiPrefix"
import headers from "../helpers/headers";

const Auth = {
  login(data: object) {
    return AXIOS.post(`${Prefix.api}/auth/login`, {
      ...data
    });
  },
  checkLogin() {
    return AXIOS.get(`${Prefix.api}/auth/check-login`, { headers: headers() });
  }
};

export default Auth;