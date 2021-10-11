import axios from "axios";

const API_URL = "http://54.220.194.65:8080/transactions/";

class AuthService {
	getChargingSessions(userID: string) {
		return axios
			.get(API_URL + `userTransactions/${userID}`)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				console.log("failed", error);
			});
	}
}

export default new AuthService();
