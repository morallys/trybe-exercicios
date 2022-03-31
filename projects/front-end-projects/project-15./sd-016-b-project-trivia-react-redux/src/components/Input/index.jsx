import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Input extends Component {
  render() {
    const { type, name, value, testId, label, onChange } = this.props;

    return (
      <label htmlFor={ name }>
        {label}
        <input
          type={ type }
          id={ name }
          name={ name }
          value={ value }
          data-testid={ testId }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  testId: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  testId: '',
};

export default Input;
