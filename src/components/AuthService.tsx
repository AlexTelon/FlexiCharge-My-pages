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
  changePassword(
    token: string,
    password: string,
    newPassword: string,
    confirmPassword: string
  ) {
    return axios.post(API_URL + "change-password", {
      accessToken: token,
      previousPassword: password,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    });
  }

  getUpdatedUserProfile() {
    let axios = require("axios");

    let config = {
      method: "get",
      url: API_URL + "user-information",
      headers: {
        Authorization: `Bearer ${this.getCurrentUser().accessToken}`,
      },
    };

    axios(config)
      .then(function (response: any) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }

  updateUserProfile(
    newFirstName: string,
    newLastName: string,
    newPhoneNumber: string,
    newStreetAddress: string,
    newZipCode: string,
    newCity: string,
    newCountry: string
  ) {
    const axios = require("axios");

    const config = {
      method: "put",
      url: API_URL + "user-information",
      data: {
        firstName: newFirstName,
        lastName: newLastName,
        phoneNumber: newPhoneNumber,
        streetAddress: newStreetAddress,
        zipCode: newZipCode,
        city: newCity,
        country: newCountry,
      },
    };

    axios(config)
      .then(function (response: any) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }

  logout() {
    localStorage.removeItem("user");
    window.location.href = '/sign-in';
  }

  register(username: string, password: string, confirmPassword: string) {
    return axios.post(API_URL + "sign-up", {
      username: username,
      password: password,
      confirmPassword: confirmPassword,
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
