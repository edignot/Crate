import React from 'react'
import Profile from './Profile'

import { render, fireEvent } from '@testing-library/react'
import { BrowserRouter } from  'react-router-dom'
import '@testing-library/jest-dom'

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from '../../setup/store'

let store;

describe('Profile', () => {
  beforeEach(() => {
    store = createStore(rootReducer, {
      user: {
        error: null,
        isLoading: false,
        isAuthenticated: true,
        details: { 
          name: 'The User',
          email: 'user@crate.com',
          role: 'USER'
        }
      }
    })
  })
  it('should return true', () => {
    expect(true).toEqual(true)
  })

  it('should render other components', () => {
    const { getByText, getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Profile />
        </Provider>
      </BrowserRouter>
    )

    const shippingAddress = getByText('Shipping Address')
    const deliveryDate = getByText('Delivery Date', { exact: false })
    const editBtn = getByTestId('editUserBtn')

    expect(shippingAddress).toBeInTheDocument()
    expect(deliveryDate).toBeInTheDocument()
    expect(editBtn).toBeInTheDocument()
  })

  it('should display inputs when clicking the edit button on the profile section', () => {
    const { getByTestId} = render(
      <BrowserRouter>
        <Provider store={store}>
          <Profile />
        </Provider>
      </BrowserRouter>
    )

    const editBtn = getByTestId('editUserBtn')
    fireEvent.click(editBtn)

    const emailInput = getByTestId('emailInput')
    const userDescriptionInput = getByTestId('userDescriptionInput')
    const shippingAddressInput = getByTestId('shippingAddressInput')

    expect(emailInput).toBeInTheDocument()
    expect(userDescriptionInput).toBeInTheDocument()
    expect(shippingAddressInput).toBeInTheDocument()
  })

  it('should change the inputs when typing', () => {
    const { getByTestId, getByDisplayValue } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Profile />
        </Provider>
      </BrowserRouter>
    )

    const editBtn = getByTestId('editUserBtn')
    fireEvent.click(editBtn)

    const emailInput = getByTestId('emailInput')
    const userDescriptionInput = getByTestId('userDescriptionInput')
    const shippingAddressInput = getByTestId('shippingAddressInput')

    fireEvent.change(emailInput, { target: { value: 'email@test.com'} })
    fireEvent.change(userDescriptionInput, { target: { value: 'test description'} })
    fireEvent.change(shippingAddressInput, { target: { value: 'test address'} })

    const newEmail = getByDisplayValue('email@test.com')
    const newDescription = getByDisplayValue('test description')
    const newAddress = getByDisplayValue('test address')

    expect(newEmail).toBeInTheDocument()
    expect(newDescription).toBeInTheDocument()
    expect(newAddress).toBeInTheDocument()
  })
})