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
      
      <button className="btn btn-primary">Bevétel rögzítése</button>

      {loading || incomes === null ? (
        <h1>Loading...</h1>
      ) : (
        
        <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr className="bg-primary text-light">
              <th scope="col">Jogosult</th>
              <th scope="col">Megnevezés</th>
              <th scope="col">Összeg</th>
              <th scope="col">...</th>
            </tr>
          </thead>
          {incomes !== null && incomes.length !== 0 ? (
            incomes.map((income) => (
              <IncomeItem key={income.id} income={income} />
            
            ))
          ) : (
            <h3>Adjon hozzá új bevételt!</h3>
          )}
        </table>
        
        </div>

       
        

        
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