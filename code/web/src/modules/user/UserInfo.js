// Imports
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// UI Imports
import { H3, H5 } from '../../ui/typography';
import { Input, File, Textarea } from '../../ui/input';
import Button from '../../ui/button';

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
            image: null,
        };
    }

    componentDidMount = () => {
        const user = this.props.user.details;
        const image = this.state.image ? this.state.image : IMG_PLACEHOLDER_URL;
        this.setState({
            emailInput: user.email,
            userDescription: user.description || 'Add a description',
            shippingAddressInput:
                user.shippingAddress || 'Add your shipping address',
            image,
        });
    };

    fileSelectedHandler = (e) => {
        // console.log('SELECTED FILE', e.target.files[0]);
        // console.log(URL.createObjectURL(e.target.files[0]));
        this.setState({
            image: URL.createObjectURL(e.target.files[0]),
        });
    };

    // fileUploadHandler = (e) => {
    //     const imageData = new FormData();
    //     imageData.append('image', this.state.image);
    //     alert('New image form data added');
    // };

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
                        <img src={this.state.image} style={imageStyle} />
                        <div style={imageUpload}>
                            <input
                                type='file'
                                onChange={this.fileSelectedHandler}
                            />
                            {/* <Button onClick={this.fileUploadHandler}>
                                UPLOAD
                            </Button> */}
                        </div>
                    </div>
                    <section style={emailNameWrapper}>
                        <H3>{this.props.user.details.name}</H3>
                        <Input
                            type='text'
                            name='emailInput'
                            value={this.state.emailInput}
                            onChange={(e) => this.handleChange(e)}
                        />
                    </section>
                </section>

                <Textarea
                    name='userDescription'
                    value={this.state.userDescription}
                    style={description}
                    onChange={(e) => this.handleChange(e)}
                />
                <Input
                    type='text'
                    name='shippingAddressInput'
                    value={this.state.shippingAddressInput}
                    onChange={(e) => this.handleChange(e)}
                />
            </section>
        );
    };

    renderInfo = () => {
        return (
            <section style={infoContainer}>
                <section style={imageEmailNameWrapper}>
                    <div style={imageWrapper}>
                        <img src={this.state.image} style={imageStyle} />
                    </div>

                    <section style={emailNameWrapper}>
                        <H3>{this.props.user.details.name}</H3>
                        <p>{this.state.emailInput}</p>
                    </section>
                </section>

                <p style={description}>{this.state.userDescription}</p>

                <section>
                    <H5>Shipping Address</H5>
                    <p>{this.state.shippingAddressInput}</p>
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
    border: '2px solid red',
    minHeight: '70vh',
    display: 'flex',
    flexDirection: 'column',
};

const editSaveButton = {
    alignSelf: 'flex-end',
    width: '20%',
    margin: '10px',
};

const infoContainer = {
    border: '2px solid red',
    width: '90%',
    margin: '0 auto',
};

const imageEmailNameWrapper = {
    border: '2px solid red',
    display: 'flex',
};

const emailNameWrapper = {
    width: '80%',
    margin: 'auto',
};

const imageWrapper = {
    border: '2px solid red',
    width: '20%',
    display: 'flex',
    flexDirection: 'column',
};

const imageStyle = {
    width: '100%',
    border: '2px solid red',
    borderRadius: '50%',
};

const imageUpload = {
    border: '2px solid red',
    position: 'absolute',
};

const description = {
    paddingTop: '50px',
    width: '80%',
    margin: 'auto',
};
