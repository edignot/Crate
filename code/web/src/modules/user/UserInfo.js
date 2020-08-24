// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// UI Imports
import { H3, H5 } from '../../ui/typography'
import { Input, File, Textarea } from '../../ui/input'

class UserInfo extends React.Component {
  constructor() {
    super() 
    this.state = {
      isEditing: false,
      emailInput: '',
      userDescription: '',
      shippingAddressInput: ''
    }
  }

  componentDidMount = () => {
    const user = this.props.user.details
    this.setState({ 
      emailInput: user.email,
      userDescription: 'Description Here',
      shippingAddressInput: 'Shipping Here'
    })
  }

  toggleEdit = () => {
    this.setState({ isEditing: !this.state.isEditing })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  renderInputs = () => {
    return (
      <section>
        <span>Profile Pic</span>
        <H3>{this.props.user.details.name}</H3>
        <Input 
          type='text'
          name='emailInput'
          value={this.state.emailInput}
          onChange={e => this.handleChange(e)}
        />
        <Textarea 
          name='userDescription'
          value={this.state.userDescription}
          onChange={e => this.handleChange(e)}
        />
        <Input 
          type='text'
          name='shippingAddressInput'
          value={this.state.shippingAddressInput}
          onChange={e => this.handleChange(e)}
        />
      </section>
    )
  }

  renderInfo = () => {
    return (
      <section>
        <span>Profile Pic</span>
        <H3>{this.props.user.details.name}</H3>
        <p>{this.state.emailInput}</p>
        <p>{this.state.userDescription}</p>
        <section>
          <H5>Shipping Address</H5>
          <p>{this.state.shippingAddressInput}</p>
        </section>
      </section>
    )
  }

  render() {
    return (
      <section>
        {this.state.isEditing ? 
          <button onClick={this.toggleEdit}>Save Changes</button> :
          <button onClick={this.toggleEdit}>Edit</button>
        }
        {this.state.isEditing ? 
          this.renderInputs() :
          this.renderInfo()
        }
        
        
      </section>
    )
  }
}

// Component State
function profileState(state) {
  return {
    user: state.user
  }
}

export default connect(profileState)(UserInfo)