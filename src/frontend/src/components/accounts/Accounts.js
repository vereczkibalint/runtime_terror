import React, { Fragment, useEffect } from "react";
import AccountItem from "./AccountItem";
import AccountForm from "./AccountForm";
import { connect } from "react-redux";
import { getAccounts } from "../../actions/accountActions";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { PREFIX } from "../../config";

const Accounts = ({ accounts: { accounts, current }, getAccounts }) => {
  useEffect(() => {
    getAccounts();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Accounts</h1>
      {accounts ? (
        <ul>
          {accounts.map((account) => (
            <Fragment>
              <li>ID: ${account._id}</li>
              <li>Type: ${account.type}</li>
              <li>Color: ${account.color}</li>
              <li>Name: ${account.name}</li>
              <li>Balance: ${account.balance}</li>
            </Fragment>
          ))}
        </ul>
      ) : (
        <h1>No account to show</h1>
      )}
      <hr />
      <AccountForm />
    </div>
  );
};

Accounts.propTypes = {
  accounts: PropTypes.object.isRequired,
  getAccounts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  accounts: state.accounts,
});

export default connect(mapStateToProps, { getAccounts })(Accounts);
