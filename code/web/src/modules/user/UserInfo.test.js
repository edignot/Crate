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
    test('User image upload input is displayed correctly when in edit mode', () => {
        const { getByTestId, getByText } = UserInfoContainer;
        fireEvent.click(getByText('Edit'));
        expect(getByTestId('image-input')).toBeInTheDocument();
    });
    test('User name is displayed correctly when in edit mode', () => {
        const { getByText } = UserInfoContainer;
        fireEvent.click(getByText('Edit'));
        expect(getByText('name')).toBeInTheDocument();
    });
    test('User email placeholder is displayed correctly when in edit mode', () => {
        const { getByText, getByTestId } = UserInfoContainer;
        fireEvent.click(getByText('Edit'));
        expect(getByTestId('email-input').value).toBe('email@email.com');
    });
    test('User email input value can be changed when in edit mode', () => {
        const { getByText, getByTestId } = UserInfoContainer;
        fireEvent.click(getByText('Edit'));
        fireEvent.change(getByTestId('email-input'), {
            target: { value: 'changed@changed.com' },
        });
        expect(getByTestId('email-input').value).toBe('changed@changed.com');
    });
    test('Description title is displayed correctly when in edit mode', () => {
        const { getByText } = UserInfoContainer;
        fireEvent.click(getByText('Edit'));
        expect(getByText('About me')).toBeInTheDocument();
    });
    test('Description placeholder is displayed correctly when in edit mode', () => {
        const { getByText, getByTestId } = UserInfoContainer;
        fireEvent.click(getByText('Edit'));
        expect(getByTestId('description-input').value).toBe(
            'Add a description'
        );
    });
    test('Description value can be changed when in edit mode', () => {
        const { getByText, getByTestId } = UserInfoContainer;
        fireEvent.click(getByText('Edit'));
        getByTestId('description-input').value = 'changed';
        expect(getByTestId('description-input').value).toBe('changed');
    });
    test('Shipping address header is displayed correctly when in edit mode', () => {
        const { getByText } = UserInfoContainer;
        fireEvent.click(getByText('Edit'));
        expect(getByText('Shipping Address')).toBeInTheDocument();
    });
    test('Shipping placeholder is displayed correctly when in edit mode', () => {
        const { getByText, getByTestId } = UserInfoContainer;
        fireEvent.click(getByText('Edit'));
        expect(getByTestId('shipping-input').value).toBe(
            'Add your shipping address'
        );
    });
    test('Shipping address can be changed when in edit mode', () => {
        const { getByText, getByTestId } = UserInfoContainer;
        fireEvent.click(getByText('Edit'));
        getByTestId('shipping-input').value = 'changed';
        expect(getByTestId('shipping-input').value).toBe('changed');
    });
});
