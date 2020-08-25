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
            name: 'The User',
            email: 'user@crate.com',
            role: 'USER',
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
