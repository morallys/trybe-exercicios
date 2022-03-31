import React, { Component } from 'react';

import PropTypes from 'prop-types';

import '../css/Form.css';

export default class Input extends Component {
  render() {
    const { label, testid, type, name, id } = this.props;
    return (
      <label htmlFor={ id }>
        {label}
        :
        <input
          data-testid={ testid }
          type={ type }
          name={ name }
          id={ id }
          className="inputsCss"
        />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};
