import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from '../../setup/store';

import UserInfo from './UserInfo';

describe('<UserInfo/>', () => {
    let store;
    let UserInfoContainer;

    beforeEach(() => {
        store = createStore(rootReducer, {
            user: {
                error: null,
                isLoading: false,
                isAuthenticated: true,
                details: {
                    name: 'name',
                    email: 'email@email.com',
                    role: null,
                },
            },
        });
        UserInfoContainer = render(
            <Provider store={store}>
                <BrowserRouter>
                    <UserInfo />
                </BrowserRouter>
            </Provider>
        );
    });

    afterEach(cleanup);

    // User Info display mode
    test('Edit profile button is displayed correctly when in display mode', () => {
        const { getByText } = UserInfoContainer;
        expect(getByText('Edit')).toBeInTheDocument();
    });

    test('User image or image placeholder is displayed correctly when in display mode', () => {
        const { getByTestId } = UserInfoContainer;
        expect(getByTestId('user-img')).toBeInTheDocument();
    });

    test('User name is displayed correctly when in display mode', () => {
        const { getByText } = UserInfoContainer;
        expect(getByText('name')).toBeInTheDocument();
    });

    test('User email is displayed correctly when in display mode', () => {
        const { getByText } = UserInfoContainer;
        expect(getByText('email@email.com')).toBeInTheDocument();
    });

    test('Description title is displayed correctly when in display mode', () => {
        const { getByText } = UserInfoContainer;
        expect(getByText('About me')).toBeInTheDocument();
    });

    test('Description is displayed correctly when in display mode', () => {
        const { getByText } = UserInfoContainer;
        expect(getByText('Add a description')).toBeInTheDocument();
    });

    test('Shipping address header is displayed correctly when in display mode', () => {
        const { getByText } = UserInfoContainer;
        expect(getByText('Shipping Address')).toBeInTheDocument();
    });

    test('Shipping address is displayed correctly when in display mode', () => {
        const { getByText } = UserInfoContainer;
        expect(getByText('Add your shipping address')).toBeInTheDocument();
    });

    // User Info edit mode
    test('Save changes button is displayed correctly when in edit mode', () => {
        const { getByText } = UserInfoContainer;
        fireEvent.click(getByText('Edit'));
        expect(getByText('Save Changes')).toBeInTheDocument();
    });

    test('User image or image placeholder is displayed correctly when in edit mode', () => {
        const { getByTestId, getByText } = UserInfoContainer;
        fireEvent.click(getByText('Edit'));
        expect(getByTestId('user-img')).toBeInTheDocument();
    });

    test('User name is displayed correctly when in edit mode', () => {
        const { getByText } = UserInfoContainer;
        fireEvent.click(getByText('Edit'));
        expect(getByText('name')).toBeInTheDocument();
    });

    // test('User description placeholder displayed correctly when in edit mode', () => {
    //     const { getByText, getByTestId } = UserInfoContainer;
    //     fireEvent.click(getByText('Edit'));
    //     expect(getByTestId('email-input').value).toBe('email@email.com');
    // });

    test('User email placeholder is displayed correctly when in edit mode', () => {
        const { getByText, getByTestId } = UserInfoContainer;
        fireEvent.click(getByText('Edit'));
        expect(getByTestId('email-input').value).toBe('email@email.com');
    });
});

//  test('Change state input value updates', () => {
//      const { getByLabelText } = SearchContainer;
// getByLabelText('Change state:').value = 'AK';
// fireEvent.change(getByLabelText('Change state:'));
//      expect(getByLabelText('Change state:').value).toBe('AK');
//  });
