import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../css/Table.css';

export class Table extends Component {
  handleExpenses = (expense, op) => {
    const { exchangeRates } = expense;
    const currenciesRates = Object.values(exchangeRates);

    const currencyExpense = currenciesRates
      .find((currency) => currency.code === expense.currency);

    switch (op) {
    case 'currency':
      return currencyExpense.name.split('/', 1);
    case 'cambio':
      return Number(currencyExpense.ask).toFixed(2);
    case 'convert':
      return Number(currencyExpense.ask * expense.value).toFixed(2);
    default:
      break;
    }
  }

  render() {
    const { expenses } = this.props;

    return (
      <div className="div-table">
        <table>
          <thead>
            <tr>
              <th className="th-display">Descrição</th>
              <th className="th-display">Tag</th>
              <th className="th-display">Método de pagamento</th>
              <th className="th-display">Valor</th>
              <th className="th-display">Moeda</th>
              <th className="th-display">Câmbio utilizado</th>
              <th className="th-display">Valor convertido</th>
              <th className="th-display">Moeda de conversão</th>
              <th className="th-display">Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            { expenses && (
              expenses.map((expense) => (
                <tr key={ expense.id }>
                  <td>{expense.description}</td>
                  <td>{expense.tag}</td>
                  <td>{expense.method}</td>
                  <td>{expense.value}</td>
                  <td>{this.handleExpenses(expense, 'currency')}</td>
                  <td>{this.handleExpenses(expense, 'cambio')}</td>
                  <td>{this.handleExpenses(expense, 'convert')}</td>
                  <td>Real</td>
                  <td><button type="button">Excluir</button></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.any,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
