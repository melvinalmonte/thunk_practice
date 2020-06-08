import axios from "axios";
import { API_BASE_ADDRESS } from "./constants";

export default class Api {
  static getUsers() {
    const uri = API_BASE_ADDRESS + "/users";
    return axios.get(uri);
  }
}
