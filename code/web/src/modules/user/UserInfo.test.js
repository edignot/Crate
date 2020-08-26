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
            common: null,
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
            products: null,
            product: null,
            productsRelated: null,
            subscriptions: null,
            subscriptionsByUser: null,
            subscription: null,
            crates: null,
            crate: null,
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
});

// expect(getByTestId('note-input')).toBeInTheDocument();
// data - testid = 'title';
