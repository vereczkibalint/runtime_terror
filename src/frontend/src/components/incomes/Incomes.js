//Fő komponensek a bevételekhez
import React, { useEffect } from 'react';
import IncomeItem from './IncomeItem';
import { connect } from 'react-redux';
import { getIncomes } from '../../actions/incomeAction';
import PropTypes from 'prop-types';

const Incomes = ({ income: { incomes, loading }, getIncomes }) => {
    useEffect(() => {
      getIncomes();
      //eslint-disable-next-line
    }, []);
    return(
        <div>
      <div className='d-flex justify-content-between'>
        <h1>Bevételek</h1>
      </div>
      <button>Bevétel rögzítése</button>

      {loading || incomes === null ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {incomes !== null && incomes.length !== 0 ? (
            incomes.map((income) => (
              <IncomeItem key={income.id} income={income} />
            ))
          ) : (
            <h3>Adjon hozzá új bevételt!</h3>
          )}
        </ul>
      )}
    </div>
    );
};

Incomes.propTypes = {
    income: PropTypes.object.isRequired,
    getIncomes: PropTypes.func.isRequired
  };

  const mapStateToProps = (state) => ({
    income: state.income
  });

  export default connect(mapStateToProps, { getIncomes })(Incomes);