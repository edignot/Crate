import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Input from '../../ui/input/Input';
import { level1 } from '../../ui/common/shadows';

class DeliveryInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            dateInput: '',
            isEditing: false,
        };
    }

    handleChange = (e) => {
        this.setState({ dateInput: e.target.value });
    };

    toggleEdit = () => {
        this.setState({ isEditing: !this.state.isEditing });
    };

    render() {
        return (
            <section style={style}>
                {this.state.isEditing ? (
                    <section>
                        <Input
                            type='date'
                            value={this.state.dateInput}
                            onChange={(e) => this.handleChange(e)}
                        />
                        <button onClick={this.toggleEdit}>Save Changes</button>
                    </section>
                ) : (
                    <section>
                        <p>Delivery Date: {this.state.dateInput}</p>
                        <button onClick={this.toggleEdit}>Edit</button>
                    </section>
                )}
                <section>
                    <p>Product History</p>
                    <p>product product product</p>
                    <p>product product product</p>
                    <p>product product product</p>
                    <p>product product product</p>
                </section>
            </section>
        );
    }
}

function profileState(state) {
    return {
        user: state.user,
    };
}

export default connect(profileState)(DeliveryInfo);

// Styling
const style = {
    minHeight: '70vh',
    boxShadow: level1,
    borderRadius: '5px',
};
