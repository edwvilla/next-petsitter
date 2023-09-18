import axios from "axios";
import { getToken } from "../helpers/getTokenHelper";

export const ApiClient = axios.create({
  baseURL: "http://127.0.0.1:4000/api",
  headers: {
    "Content-Type": "application/json",
    // Authorization: getToken(),
  },
});
