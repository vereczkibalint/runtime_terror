//Fő komponense a kiadásoknak
import React, { useEffect } from 'react';
import ExpenditureItem from './ExpenditureItem';
import { connect } from 'react-redux';
import { getExpenditures } from '../../actions/expenditureAction';
import PropTypes from 'prop-types';

const Expenditures = ({ expenditure: { expenditures, loading }, getExpenditures }) => {
    useEffect(() => {
      getExpenditures();
      //eslint-disable-next-line
    }, []);
    return(
        <div>
      <div className='d-flex justify-content-between'>
        <h1>Kiadások</h1>
      </div>
      <button className="btn btn-primary">Kiadás rögzítése</button>

      {loading || expenditures === null ? (
        <h1>Loading...</h1>
      ) : (
        <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr className="bg-primary text-light">
              <th scope="col">Személy</th>
              <th scope="col">Megnevezés</th>
              <th scope="col">Összeg</th>
              <th scope="col">...</th>
            </tr>
          </thead>
          {expenditures !== null && expenditures.length !== 0 ? (
            expenditures.map((expenditure) => (
              <ExpenditureItem key={expenditure.id} expenditure={expenditure} />
            
            ))
          ) : (
            <h3>Adjon hozzá új kiadást!</h3>
          )}
        </table>
        
        </div>

       
        

        
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
