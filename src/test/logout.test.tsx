import '@testing-library/jest-dom'
import AuthService from '../components/AuthService';


test("Login, check data, logout and check if information is gone", async () => {
    const testusername = "testuser.flexicharge@hotmail.com";
    const testpassword = "mahnux-tokbyp-9Xaxbi";

    const user = AuthService.login(testusername, testpassword);
    await user;
    let data = AuthService.getCurrentUser();
    expect(data.email).toEqual(testusername);

    AuthService.logout();
    data = AuthService.getCurrentUser();
    expect(data).toEqual(null);
});