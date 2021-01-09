import  axios from "axios";
import { apiServerBaseUrl } from './config'

export  const AuthService = async () => {

  var config = {
    method: "post",
    url: ` ${apiServerBaseUrl}auth/user/validate`,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios(config)
};
