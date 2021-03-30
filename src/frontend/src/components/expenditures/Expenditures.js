//Fő komponense a kiadásoknak
import React, { useEffect } from 'react';
import ExpenditureItem from './ExpenditureItem';
import { connect } from 'react-redux';
import { getMilestones } from '../../actions/expenditureAction';
import PropTypes from 'prop-types';

const Expenditures = ({ expenditure: { expenditures, loading }, getExpenditures }) => {
    useEffect(() => {
      getExpenditures();
      //eslint-disable-next-line
    }, []);
    return(
        <div>
      <div className='d-flex justify-content-between'>
        <h1>Expenditures</h1>
      </div>
      <button>Kiadás rögzítése</button>

      {loading || expenditures === null ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {expenditures !== null && expenditures.length !== 0 ? (
            expenditures.map((expenditure) => (
              <ExpenditureItem key={expenditure.id} expenditure={expenditure} />
            ))
          ) : (
            <h3>Adjon hozzá új kiadást!</h3>
          )}
        </ul>
      )}
    </div>
    );
};

Expenditures.propTypes = {
    expenditure: PropTypes.object.isRequired,
    getExpenditures: PropTypes.func.isRequired
  };

  const mapStateToProps = (state) => ({
    expenditure: state.expenditure
  });

  export default connect(mapStateToProps, { getExpenditures })(Expenditures);
