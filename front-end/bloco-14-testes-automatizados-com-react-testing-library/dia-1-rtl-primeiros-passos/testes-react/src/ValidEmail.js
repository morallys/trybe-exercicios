// ValidEmail.js
import React from 'react';
import PropTypes from 'prop-types';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;

  return (
    <div>
      { email ? <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2> : null }

      { email ? (
        (verifyEmail(email) ? (
        <h3 style={{color: "green"}}
          >
            Email Válido
        </h3> ) : (
        <h3 style={{color: "red"}}
          >
            Email Inválido
        </h3>))
      ) : null }
    </div>
  );
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;