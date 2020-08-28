// Imports
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// UI Imports
import { H3, H5 } from '../../ui/typography';
import { Input, File, Textarea } from '../../ui/input';
import { level1 } from '../../ui/common/shadows';
import Button from '../../ui/button';
// image route
import { routeImage } from '../../setup/routes';

// Constants
const IMG_PLACEHOLDER_URL =
    'https://www.ludwigfawcett.com/vsites/storage/allied/071C/user_files/image/staff/user-placeholder.png';
class UserInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            isEditing: false,
            emailInput: '',
            userDescription: '',
            shippingAddressInput: '',
            imageUrl: null,
        };
    }
    componentDidMount = () => {
        const user = this.props.user.details;
        const imageUrl = this.props.user.imageUrl
            ? this.props.user.imageUrl
            : IMG_PLACEHOLDER_URL;

        this.setState({
            emailInput: user.email,
            userDescription: user.description || 'Add a description',
            shippingAddressInput:
                user.shippingAddress || 'Add your shipping address',
            imageUrl,
        });
    };

    imageSelectedHandler = (e) => {
        const imageData = new FormData();
        imageData.append('image', e.target.files[0]);
        // file imageData will be send to the database
        console.log('IMAGE DATA', imageData);
        // temporally imgUrl
        this.setState({
            imageUrl: URL.createObjectURL(e.target.files[0]),
        });
    };

    toggleEdit = () => {
        this.setState({ isEditing: !this.state.isEditing });
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    renderInputs = () => {
        return (
            <section style={infoContainer}>
                <section style={imageEmailNameWrapper}>
                    <div style={imageWrapper}>
                        <img
                            src={this.state.imageUrl}
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
                    <H3>About me</H3>
                    <Textarea
                        data-testid='description-input'
                        name='userDescription'
                        value={this.state.userDescription}
                        style={descriptionInput}
                        onChange={(e) => this.handleChange(e)}
                    />
                </section>
                <section style={shippingAddress}>
                    <H5>Shipping Address</H5>
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
        );
    };
    renderInfo = () => {
        return (
            <section style={infoContainer}>
                <section style={imageEmailNameWrapper}>
                    <div style={imageWrapper}>
                        <img
                            src={this.state.imageUrl}
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
                    <H3>About me</H3>
                    <p style={descriptionInput}>{this.state.userDescription}</p>
                </section>
                <section style={shippingAddress}>
                    <H5>Shipping Address</H5>
                    <p style={shippingInput}>
                        {this.state.shippingAddressInput}
                    </p>
                </section>
            </section>
        );
    };
    render() {
        return (
            <section style={style}>
                {this.state.isEditing ? (
                    <button onClick={this.toggleEdit} style={editSaveButton}>
                        Save Changes
                    </button>
                ) : (
                    <button onClick={this.toggleEdit} style={editSaveButton}>
                        Edit
                    </button>
                )}
                {this.state.isEditing ? this.renderInputs() : this.renderInfo()}
            </section>
        );
    }
}
// Component State
function profileState(state) {
    return {
        user: state.user,
    };
}
export default connect(profileState)(UserInfo);

// Styling
const style = {
    minHeight: '70vh',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: level1,
    borderRadius: '5px',
};
const editSaveButton = {
    alignSelf: 'flex-end',
    width: '20%',
    margin: '10px',
};
const infoContainer = {
    width: '90%',
    margin: '0 auto',
};
const imageEmailNameWrapper = {
    display: 'flex',
    textAlign: 'center',
};
const emailNameWrapper = {
    width: '80%',
    margin: 'auto',
    textAlign: 'center',
};
const imageWrapper = {
    width: '20%',
    display: 'flex',
    flexDirection: 'column',
};
const imageStyle = {
    width: '100%',
    borderRadius: '50%',
};
const imageUpload = {
    position: 'absolute',
};
const descriptionWrapper = {
    margin: 'auto',
    marginTop: '30px',
    width: '80%',
    height: 'auto',
    textAlign: 'center',
};
const descriptionInput = {
    width: '100%',
    padding: '0',
    margin: '0',
    height: '150px',
    marginTop: '30px',
};
const shippingAddress = {
    paddingTop: '30px',
    width: '80%',
    margin: 'auto',
    textAlign: 'center',
};
const shippingInput = {
    width: '100%',
    padding: '0',
    margin: '0',
    marginTop: '30px',
};
const emailInput = {
    padding: '0',
    margin: '0',
    marginTop: '30px',
};
