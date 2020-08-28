import React from 'react';
import Profile from './Profile';

import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from '../../setup/store';

describe('Profile', () => {
    let store;
    let profileContainer;
    beforeEach(() => {
        store = createStore(rootReducer, {
            user: {
                error: null,
                isLoading: false,
                isAuthenticated: true,
                details: {
                    name: 'The User',
                    email: 'user@crate.com',
                    role: 'USER',
                },
            },
        });

        profileContainer = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Profile />
                </BrowserRouter>
            </Provider>
        );
    });

    test('Profile header is displayed correctly ', () => {
        const { getByText } = profileContainer;
        expect(getByText('My profile')).toBeInTheDocument();
    });

    test('User info card is displayed correctly ', () => {
        const { getByText } = profileContainer;
        expect(getByText('About me')).toBeInTheDocument();
    });

    test('Products card is displayed correctly ', () => {
        const { getByText } = profileContainer;
        expect(getByText('Delivery Date:')).toBeInTheDocument();
    });
});
