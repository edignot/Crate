// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// UI Imports
import { H3, H5 } from '../../ui/typography'
import { Input, File, Textarea } from '../../ui/input'
import { level1 } from '../../ui/common/shadows'
import Button from '../../ui/button'
// image upload
import { routeImage } from '../../setup/routes'
import { upload, messageShow, messageHide } from '../common/api/actions'
import { updateUser } from './api/actions'

import { MdEmail, MdHome } from 'react-icons/md'
import { BsFillPersonLinesFill } from 'react-icons/bs'

// Constants
const IMG_PLACEHOLDER_URL =
  'https://www.ludwigfawcett.com/vsites/storage/allied/071C/user_files/image/staff/user-placeholder.png'
class UserInfo extends React.Component {
  constructor() {
    super()
    this.state = {
      isEditing: false,
      emailInput: '',
      userDescription: '',
      shippingAddressInput: '',
      imageUrl: null,
    }
  }
  componentDidMount = () => {
    const user = this.props.user.details

    this.setState({
      emailInput: user.email,
      userDescription: user.description || 'Add a description',
      shippingAddressInput: user.shippingAddress || 'Add your shipping address',
      imageUrl: user.imageUrl || IMG_PLACEHOLDER_URL,
    })
  }

  imageSelectedHandler = (e) => {
    this.props.messageShow('Uploading image, please wait...')

    let data = new FormData()
    data.append('file', e.target.files[0])

    this.props
      .upload(data)
      .then((response) => {
        if (response.status === 200) {
          this.props.messageShow('Image uploaded successfully.')

          let user = this.state
          user.imageUrl = `/images/uploads/${response.data.file}`

          this.setState({
            ...user,
          })
        } else {
          this.props.messageShow('Please try again.')
        }
      })
      .catch((error) => {
        this.props.messageShow('There was some error. Please try again.')
      })
      .then(() => {
        window.setTimeout(() => {
          this.props.messageHide()
        }, 5000)
      })
  
        this.props.updateUser(user)
        this.toggleEdit()
    }


  addDefaultImageSrc = (e) => {
    e.target.src = IMG_PLACEHOLDER_URL
  }

  toggleEdit = () => {
    this.setState({ isEditing: !this.state.isEditing })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  saveChanges = () => {
    const user = {
      id: this.props.user.details.id,
      email: this.state.emailInput,
      description: this.state.userDescription,
      shippingAddress: this.state.shippingAddressInput
      // imageUrl: this.state.imageUrl 
    }
    this.props.updateUser(user)
    this.toggleEdit()
  }

  renderInputs = () => {
    return (
      <section style={infoContainer}>
        <section style={imageEmailNameWrapper}>
          <div style={imageWrapper}>
            <img
              src={routeImage + this.state.imageUrl}
              onError={this.addDefaultImageSrc}
              style={imageStyle}
              data-testid='user-img'
              alt='user image'
            />
            <div style={imageUpload}>
              <input
                data-testid='image-input'
                type='file'
                onChange={this.imageSelectedHandler}
              />
            </div>
          </div>
          <section style={emailNameWrapper}>
            <H3>{this.props.user.details.name}</H3>
            <Input
              data-testid='email-input'
              type='text'
              name='emailInput'
              value={this.state.emailInput}
              style={emailInput}
              onChange={(e) => this.handleChange(e)}
            />
          </section>
        </section>
        <section style={descriptionWrapper}>
          <section style={iconWrapper}>
            <BsFillPersonLinesFill fontSize='40px' style={icon} />
            <H3>About me</H3>
          </section>
          <Textarea
            data-testid='description-input'
            name='userDescription'
            value={this.state.userDescription}
            style={descriptionInput}
            onChange={(e) => this.handleChange(e)}
          />
        </section>
        <section style={shippingAddress}>
          <section style={iconWrapper}>
            <MdHome fontSize='40px' style={icon} />
            <H5>Shipping Address</H5>
          </section>
          <Input
            data-testid='shipping-input'
            type='text'
            name='shippingAddressInput'
            value={this.state.shippingAddressInput}
            style={shippingInput}
            onChange={(e) => this.handleChange(e)}
          />
        </section>
      </section>
    )
  }
  
  renderInfo = () => {
    return (
      <section style={infoContainer}>
        <section style={imageEmailNameWrapper}>
          <div style={imageWrapper}>
            <img
              src={routeImage + this.state.imageUrl}
              onError={this.addDefaultImageSrc}
              style={imageStyle}
              data-testid='user-img'
              alt='user image'
            />
          </div>
          <section style={emailNameWrapper}>
            <H3>{this.props.user.details.name}</H3>
            <p style={emailInput}>{this.state.emailInput}</p>
          </section>
        </section>
        <section style={descriptionWrapper}>
          <section style={iconWrapper}>
            <BsFillPersonLinesFill fontSize='40px' style={icon} />
            <H3>About me</H3>
          </section>
          <p style={descriptionInput}>{this.state.userDescription}</p>
        </section>
        <section style={shippingAddress}>
          <section style={iconWrapper}>
            <MdHome fontSize='40px' style={icon} />
            <H5>Shipping Address</H5>
          </section>
          <p style={shippingInput}>{this.state.shippingAddressInput}</p>
        </section>
      </section>
    )
  }
  
  render() {
    return (
      <section style={style}>
        {this.state.isEditing ? (
          <button
            onClick={this.saveChanges}
            style={editSaveButton}
            data-testid='editUserBtn'
          >
            Save Changes
          </button>
        ) : (
          <button
            onClick={this.toggleEdit}
            style={editSaveButton}
            data-testid='editUserBtn'
          >
            Edit
          </button>
        )}
        {this.state.isEditing ? this.renderInputs() : this.renderInfo()}
      </section>
    )
  }
}

// Component State
function profileState(state) {
  return {
    user: state.user,
  }
}
export default connect(profileState, { upload, updateUser, messageShow, messageHide })(
  UserInfo
)

// Styling
const style = {
  minHeight: '70vh',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: level1,
  borderRadius: '5px',
  margin: '50px',
}
const editSaveButton = {
  alignSelf: 'flex-end',
  width: '20%',
  margin: '10px',
}
const infoContainer = {
  width: '90%',
  margin: '0 auto',
}
const imageEmailNameWrapper = {
  display: 'flex',
  textAlign: 'center',
}
const emailNameWrapper = {
  width: '80%',
  margin: 'auto',
  textAlign: 'center',
}
const imageWrapper = {
  width: '20%',
  display: 'flex',
  flexDirection: 'column',
}
const imageStyle = {
  width: '110px',
  height: '110px',
  borderRadius: '50%',
}
const imageUpload = {
  position: 'absolute',
}
const descriptionWrapper = {
  margin: 'auto',
  marginTop: '30px',
  width: '80%',
  height: 'auto',
  textAlign: 'center',
}
const descriptionInput = {
  width: '100%',
  padding: '0',
  margin: '0',
  height: '150px',
  marginTop: '30px',
  fontFamily: 'Arial',
  textAlign: 'center',
}
const shippingAddress = {
  paddingTop: '30px',
  width: '80%',
  margin: 'auto',
  textAlign: 'center',
}
const shippingInput = {
  width: '100%',
  padding: '0',
  margin: '0',
  marginTop: '30px',
  textAlign: 'center',
}
const emailInput = {
  padding: '0',
  margin: '0',
  marginTop: '30px',
  textAlign: 'center',
}

const iconWrapper = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}

const icon = {
  marginRight: '20px',
}
