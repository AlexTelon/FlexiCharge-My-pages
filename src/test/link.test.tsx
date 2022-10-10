import '@testing-library/jest-dom'
import { render, screen} from './test-utils';
import {BrowserRouter, Router} from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import {createMemoryHistory} from 'history';
import Login from '../pages/Login';

test('should redirect and update history', () => {
    const history = createMemoryHistory();

    render(<Router history={history}><Login/></Router>);

    userEvent.click(screen.getByTestId("forgotPassword"));

    expect(history.location.pathname).toEqual('/forgot-password');
});