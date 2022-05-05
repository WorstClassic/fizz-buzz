import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ name, title, value, changeCall }) => {
    ;
    return (
        <div>
            {title}
            <br />
            <input
                name={name}
                value={value}
                onChange={changeCall}
            />
        </div>
    );
};
InputField.defaultProps = {
    value: null,
    title: ''
};
InputField.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    value: PropTypes.string.isRequired,
};

export default InputField;