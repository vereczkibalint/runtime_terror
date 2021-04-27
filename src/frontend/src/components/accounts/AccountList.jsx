import React from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
import AccountListItem from "./AccountListItem";

const AccountList = ({ accounts }) => {
  return (
    <Table striped bordered hover className="no-vertical-border">
      <thead>
        <tr>
          <th>Név</th>
          <th>Típus</th>
          <th>Szín</th>
          <th>Egyenleg</th>
          <th>Lehetőségek</th>
        </tr>
      </thead>
      <tbody>
        {accounts.map((account) => (
          <AccountListItem key={account._id} account={account} />
        ))}
      </tbody>
    </Table>
  );
};

AccountList.propTypes = {
  accounts: PropTypes.array.isRequired,
};

export default AccountList;
