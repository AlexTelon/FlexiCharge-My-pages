import axios from "axios";

const API_URL = "http://18.202.253.30:8080/auth/";

class AuthService {
  login(username: string, password: string) {
    return axios
      .post(API_URL + "sign-in", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  forgotPassword(username: string) {
    return axios.post(API_URL + `forgot-password/${username}`, {
      username: username,
    });
  }

  confirmForgotPassword(
    username: string,
    password: string,
    confirmPassword: string,
    confirmationCode: string
  ) {
    return axios.post(API_URL + "confirm-forgot-password", {
      username: username,
      password: password,
      confirmPassword: confirmPassword,
      confirmationCode: confirmationCode,
    });
  }
  changePassword(token: string, password: string, newPassword: string, confirmPassword: string) {
    return axios.post(API_URL + "change-password", {
      accessToken: token,
      previousPassword: password,
      newPassword: newPassword,
      confirmPassword: confirmPassword
    });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(
   // firstName: string,
    //familyName: string,
    //email: string,
    //streetAddress: string,
    //phoneNumber: string,
    username: string,
    password: string,
    confirmPassword: string
  ) {
    return axios.post(API_URL + "sign-up", {
      //name: firstName,
      //family_name: familyName,
      //email: email,
      //streetAddress: streetAddress,
      //phoneNumber: phoneNumber,
      username: username,
      password: password,
      confirmPassword: confirmPassword
    });
  }

  verify(username: string, code: string) {
    return axios.post(API_URL + "verify", {
      code: code,
      username: username,
    });
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
  }
}

export default new AuthService();
