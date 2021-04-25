import React from "react";
import { Table, Button } from "react-bootstrap";
import { moneyFormatter } from "../../utils/formatter";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setCurrent, deleteAccount } from "../../actions/accountActions";

const AccountList = ({ accounts, setCurrent, deleteAccount }) => {
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
          <tr key={account.id}>
            <td>{account.name}</td>
            <td>
              {account.type === "cash"
                ? "Készpénz"
                : account.type === "bank" && "Bank"}
            </td>
            <td>
              <input type="color" value={account.color} disabled />
            </td>
            <td>{moneyFormatter(account.balance)}</td>
            <td>
              <Button
                className="mr-1"
                variant="primary"
                onClick={() => {
                  setCurrent(account);
                }}
              >
                <i class="fas fa-edit" />
              </Button>
              <Button
                className="ml-1"
                variant="danger"
                onClick={() => deleteAccount(account._id)}
              >
                <i class="fas fa-trash-alt" />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

AccountList.propTypes = {
  accounts: PropTypes.array.isRequired,
  setCurrent: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

export default connect(null, { setCurrent, deleteAccount })(AccountList);
