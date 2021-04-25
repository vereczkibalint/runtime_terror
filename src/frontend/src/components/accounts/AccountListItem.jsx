import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { moneyFormatter } from "../../utils/formatter";
import { setCurrent, deleteAccount } from "../../actions/accountActions";

const AccountListItem = ({ account, setCurrent, deleteAccount }) => {
  return (
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
  );
};

AccountListItem.propTypes = {
  account: PropTypes.object.isRequired,
  setCurrent: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

export default connect(null, { setCurrent, deleteAccount })(AccountListItem);
