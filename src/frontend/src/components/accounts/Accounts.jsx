import React, { Fragment, useEffect, useState } from "react";
import AccountForm from "./AccountForm";
import { connect } from "react-redux";
import { getAccounts } from "../../actions/accountActions";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import AccountList from "./AccountList";

const Accounts = ({ accounts: { accounts, current }, getAccounts }) => {
  const [showForm, setShowForm] = useState(false);
  const [formTitle, setFormTitle] = useState("");

  const handleClose = () => setShowForm(false);
  const handleShow = () => setShowForm(true);

  useEffect(() => {
    getAccounts();
    //eslint-disable-next-line
  }, []);

  const showAddAccountModal = () => {
    setFormTitle("Új számla hozzáadása");
    handleShow();
  };

  return (
    <div>
      <div className="d-flex justify-content-between my-3">
        <h1>Számlák</h1>
        <Button variant="success" onClick={showAddAccountModal}>
          Számla hozzáadása
        </Button>
      </div>

      <AccountForm
        show={showForm}
        handleClose={handleClose}
        title={formTitle}
      />

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
};

const mapStateToProps = (state) => ({
  accounts: state.accounts,
});

export default connect(mapStateToProps, { getAccounts })(Accounts);
