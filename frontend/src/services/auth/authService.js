import {HttpClient} from "../../infra/HttpClient/HttpClient";
import {tokenService} from "./tokenService";

export const authService = {
  async login({username, password}) {
    return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, {
      method: "POST",
      body: {username, password}
    })
    .then(async (serverResponse) => {
      if (!serverResponse.ok) throw new Error('Usuário e/ou senha inválidos.');
      const body = serverResponse.body;
      tokenService.save(body.data.access_token);
    })
  }
}
