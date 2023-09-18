import { ApiClient } from "./client";

export const Register = (data) => ApiClient.post("/usuarios/signup", data);

export const Login = (data) => ApiClient.post("/usuarios/login", data);
