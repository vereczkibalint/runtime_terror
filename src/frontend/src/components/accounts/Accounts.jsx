import React, { useEffect, useState } from "react";
import AccountForm from "./AccountForm";
import { connect } from "react-redux";
import { getAccounts, setAccountModal } from "../../actions/accountActions";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import AccountList from "./AccountList";

const Accounts = ({
  accounts: { accounts, current, modal },
  getAccounts,
  setAccountModal,
}) => {
  useEffect(() => {
    getAccounts();
    //eslint-disable-next-line
  }, []);

  const showAddAccountModal = () => {
    setAccountModal({ title: "Új számla hozzáadása", open: true });
  };

  return (
    <div>
      <div className="d-flex justify-content-between my-3">
        <h1>Számlák</h1>
        <Button variant="success" onClick={showAddAccountModal}>
          Számla hozzáadása
        </Button>
      </div>

      <AccountForm />

      {accounts && accounts.length > 0 ? (
        <AccountList accounts={accounts} />
      ) : (
        <h3>Nincs megjelenítendő számla</h3>
      )}
    </div>
  );
};

Accounts.propTypes = {
  accounts: PropTypes.object.isRequired,
  getAccounts: PropTypes.func.isRequired,
  setAccountModal: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  accounts: state.accounts,
});

export default connect(mapStateToProps, { getAccounts, setAccountModal })(
  Accounts
);
