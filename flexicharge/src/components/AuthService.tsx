import axios from "axios";

const API_URL = "http://54.220.194.65:8080/auth/";

class AuthService {
  
    login(userName: string, password: string) {
      console.log(userName, password)
        return axios
          .post(API_URL + "sign-in", {
            username: userName,
            password: password
          })
          .then(response => {
            if (response.data.accessToken) {
              localStorage.setItem("user", JSON.stringify(response.data));
            }
    
            return response.data;
          });
      }
    
      logout() {
        console.log("i am here bitcheeeeeeees")
        localStorage.removeItem("user");

      }
      
    
      register(UserName: string, firstName: string, familyName: string, email: string, password: string) {
        
        return axios.post(API_URL + "sign-up", {
          name: firstName,
          family_name: familyName,
          email: email,
          username: UserName,
          password: password
        });
      }

      verify(UserName: string, code: string) {
        
        return axios.post(API_URL + "verify", {
          code: code,
          username: UserName
        });
      }
    
      getCurrentUser() {
        const userStr = localStorage.getItem("user");
        if (userStr) return JSON.parse(userStr);
    
        return null;
      }
    }
    
    export default new AuthService();
