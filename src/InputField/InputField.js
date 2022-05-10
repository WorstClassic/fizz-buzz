import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ name, title, value, changeCall }) => {
    return (
        <div data-testid={`title-${name}`} >
            {title}
            <br />
            <input
                data-testid={name}
                name={name}
                value={value}
                onChange={changeCall}
            />
        </div>
    );
};
InputField.defaultProps = {
    title: ''
};
InputField.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    value: PropTypes.string.isRequired,
    changeCall: PropTypes.func.isRequired
};

export default InputField;