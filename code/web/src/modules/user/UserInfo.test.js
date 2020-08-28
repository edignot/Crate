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

    test('User info form inputs can be edited when in editing mode', () => {
        const { getByTestId, getByText, getByDisplayValue } = UserInfoContainer;
        fireEvent.click(getByText('Edit'));
        fireEvent.change(getByTestId('email-input'), {
            target: { value: 'email@test.com' },
        });
        fireEvent.change(getByTestId('description-input'), {
            target: { value: 'test description' },
        });
        fireEvent.change(getByTestId('shipping-input'), {
            target: { value: 'test address' },
        });
        expect(getByDisplayValue('email@test.com')).toBeInTheDocument();
        expect(getByDisplayValue('test description')).toBeInTheDocument();
        expect(getByDisplayValue('test address')).toBeInTheDocument();
    });

    test('User info form updated inputs are saved after editing', () => {
        const { getByTestId, getByText } = UserInfoContainer;
        fireEvent.click(getByText('Edit'));
        fireEvent.change(getByTestId('email-input'), {
            target: { value: 'email@test.com' },
        });
        fireEvent.change(getByTestId('description-input'), {
            target: { value: 'test description' },
        });
        fireEvent.change(getByTestId('shipping-input'), {
            target: { value: 'test address' },
        });
        fireEvent.click(getByText('Save Changes'));
        expect(getByText('email@test.com')).toBeInTheDocument();
        expect(getByText('test description')).toBeInTheDocument();
        expect(getByText('test address')).toBeInTheDocument();
    });
});

// Need sad paths once error handling is implemented:
//  should print a message if email is left empty
//  should print a message if shipping address is left empty
//  should print a message if description is left empty
//  should print a message if the profile pic is left empty
// ABOVE TESTS ARE JUST INITIAL THOUGHTS...MAY NOT NEED THEM IN THE FUTURE
