import React, { useState } from 'react'
import PropTypes from 'prop-types'
import InputField from '../InputField/InputField';

const GenericForm = ({ formSource, submitText, submitAction }) => {
    const formInitState = {};
    const propertyNameArray = [];
    formSource.forEach((entity) => {
        let tentativePropertyName = entity.name;
        while (tentativePropertyName !== undefined && tentativePropertyName !== null) {
            if (formInitState[tentativePropertyName] !== undefined) {
                tentativePropertyName = tentativePropertyName + tentativePropertyName.length;
            }
            else {
                formInitState[tentativePropertyName] = entity.initValue || '';
                propertyNameArray.push(tentativePropertyName);
                tentativePropertyName = null; //exits loop;
            }
        }
    });
    const [formData, setFormData] = useState(formInitState);

    return (
        <div>
            {formSource.map(entity => {
                if (entity.name !== undefined && entity.name !== null) {
                    const propertyName = propertyNameArray.shift();
                    return (<InputField
                        key={`input-${propertyName}`}
                        name={propertyName}
                        title={entity.title || `${propertyName}:`}
                        value={formData[propertyName]}
                        changeCall={e => setFormData(prev => { return { ...prev, [propertyName]: e.target.value } }
                        )}
                    />)
                }
            })}
            <button onClick={e => submitAction(formData)}>{submitText}</button>
        </div >
    );
};

GenericForm.propTypes = {
    formSource: PropTypes.array.isRequired,
    submitText: PropTypes.string,
    submitAction: PropTypes.func.isRequired,
};

GenericForm.defaultProps = {
    submitText: 'Submit',
};

export default GenericForm;