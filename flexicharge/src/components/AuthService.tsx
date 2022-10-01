import axios from "axios";

const API_URL = "http://18.202.253.30:8080/auth/";

class AuthService {
  login(email: string, password: string) {
    return axios
      .post(API_URL + "sign-in", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  forgotPassword(email: string) {
    return axios.post(API_URL + `forgot-password/${email}`, {
      email: email,
    });
  }

  confirmForgotPassword(
    email: string,
    password: string,
    confirmationCode: string
  ) {
    return axios.post(API_URL + "confirm-forgot-password", {
      email: email,
      password: password,
      confirmationCode: confirmationCode,
    });
  }
  changePassword(token: string, password: string, newPassword: string) {
    return axios.post(API_URL + "change-password", {
      accessToken: token,
      previousPassword: password,
      newPassword: newPassword,
    });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(
    //firstName: string,
    //familyName: string,
    email: string,
    //username: string,
    password: string
  ) {
    return axios.post(API_URL + "sign-up", {
      //name: firstName,
      //family_name: familyName,
      email: email,
      //username: username,
      password: password,
    });
  }

  verify(email: string, code: string) {
    return axios.post(API_URL + "verify", {
      code: code,
      email: email,
    });
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
  }
}

export default new AuthService();
