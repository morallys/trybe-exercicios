import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  handleSum = () => {
    const { expenses } = this.props;

    const total = expenses.reduce((acc, curr) => {
      const cambio = curr.exchangeRates[curr.currency].ask;

      acc += Number(curr.value) * cambio;

      return acc;
    }, 0);

    return total.toFixed(2);
  }

  render() {
    const { emailState, expenses } = this.props;

    return (
      <>
        <span data-testid="email-field">
          { emailState }
        </span>
        <div>
          <span
            data-testid="total-field"
          >
            { expenses.length ? this.handleSum() : 0 }
          </span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </>
    );
  }
}

Header.propTypes = {
  emailState: PropTypes.any,
}.isRequired;

const mapStateToProps = (state) => ({
  emailState: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
