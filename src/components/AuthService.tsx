import { waitFor } from "@testing-library/react";
import axios from "axios";

const API_URL = "http://18.202.253.30:8080/auth/";



class AuthService {
  async login(username: string, password: string) {
    return axios
      .post(API_URL + "sign-in", {
        username: username,
        password: password,
      })
      .then((response:any) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
          this.fetchCurrentUserData();
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
        return JSON.parse(response.data)
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
    const token = this.getCurrentUser().accessToken
    const axios = require("axios");
    const oldUserInformation = this.getUserProfileInfo()
    const config = {
      method: "put",
      url: API_URL + "user-information",
      headers: {Authorization: `Bearer ${token}`},
      data: {
        firstName: newFirstName.length !== 0 ? newFirstName : oldUserInformation.firstName,
        lastName: newLastName.length !== 0 ? newLastName : oldUserInformation.lastName,
        phoneNumber: newPhoneNumber.length !== 0 ? newPhoneNumber : oldUserInformation.phoneNumber,
        streetAddress: newStreetAddress.length !== 0 ? newStreetAddress : oldUserInformation.streetAddress,
        zipCode: newZipCode.length !== 0 ? newZipCode : oldUserInformation.zipCode,
        city: newCity.length !== 0 ? newCity : oldUserInformation.city,
        country: newCountry.length !== 0 ? newCountry : oldUserInformation.country,
      },
    };

    return axios(config)
    .then(function (response: any) {
      console.log(response.data)
    })
    .catch(function (error: any) {
      console.log(error)
    });
  }

  logout() {
   
    localStorage.removeItem("user");
    
    
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

  fetchCurrentUserData() {
    const axios = require('axios') 
    const token = this.getCurrentUser().accessToken;
    const config = {
      headers: {Authorization: `Bearer ${token}`}
    }
    axios.get(API_URL + "user-information", config)
      .then((response: any) => {
        localStorage.setItem("userProfile", JSON.stringify(response.data))
      });
  }

  getUserProfileInfo() {
    this.fetchCurrentUserData();
    const userProfile = localStorage.getItem("userProfile");
    if (userProfile) return JSON.parse(userProfile);

    return null;
  }
}

export default new AuthService();
