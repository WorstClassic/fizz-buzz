import React, { useState } from 'react'
import PropTypes from 'prop-types'

const GenericForm = ({ formSource, submitText, submitAction }) => {
    return (
        <div>GenericForm</div>
    );
};

GenericForm.propTypes = {
    formSource: PropTypes.array.isRequired,
    submitText: PropTypes.string,
    submitAction: PropTypes.func,
};

GenericForm.defaultProps = {
    submitText:'Submit',
    submitAction: ()=>{},
};

export default GenericForm;