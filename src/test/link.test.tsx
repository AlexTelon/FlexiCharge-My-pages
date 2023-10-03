import '@testing-library/jest-dom'
import { render, screen, waitFor} from './test-utils';
import {BrowserRouter, Router} from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import {createMemoryHistory} from 'history';
import Login from '../pages/Login';
import AuthService from '../components/AuthService';
import { Timer10 } from '@mui/icons-material';



test('should redirect and update history', () => {
    const history = createMemoryHistory();

    render(<Router history={history}><Login/></Router>);

    userEvent.click(screen.getByTestId("forgotPassword"));

    expect(history.location.pathname).toEqual('/forgot-password');
});

test('Try fetching user information', async () => {
    const testusername = "testuser.flexicharge@hotmail.com";
    const testpassword = "mahnux-tokbyp-9Xaxbi";
    await AuthService.login(testusername, testpassword);
    let userData = AuthService.getUserProfileInfo();
    while(userData == null){
        await new Promise((resolve) => {
            setTimeout(resolve, 500);
        });
        userData = AuthService.getUserProfileInfo();
    }
    
    
    
    console.log(userData)
    expect(userData.firstName = "Test");
    expect(userData.lastName = "Testson");

    AuthService.logout();

    expect(userData.firstName = undefined);
})