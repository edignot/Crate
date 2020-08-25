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
                    name: 'testName',
                    email: 'test@test.com',
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

    test('<UserInfo/> component successfully renders', () => {
        expect(true).toBeTruthy();
    });
});
