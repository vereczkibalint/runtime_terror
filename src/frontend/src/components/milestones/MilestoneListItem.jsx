import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { moneyFormatter } from "../../utils/formatter";
import { setCurrent, deleteMilestone } from "../../actions/milestoneActions";

const MilestoneListItem = ({ milestone, setCurrent, deleteMilestone }) => {
  return (
    <tr key={milestone.id}>
      <td>{milestone.name}</td>
      <td>
        {milestone.type === "cash"
          ? "Készpénz"
          : milestone.type === "bank" && "Bank"}
      </td>
      <td>
        <input type="color" value={milestone.color} disabled />
      </td>
      <td>{moneyFormatter(milestone.balance)}</td>
      <td>
        <Button
          className="mr-1"
          variant="primary"
          onClick={() => {
            setCurrent(milestone);
          }}
        >
          <i class="fas fa-edit" />
        </Button>
        <Button
          className="ml-1"
          variant="danger"
          onClick={() => deleteMilestone(milestone._id)}
        >
          <i class="fas fa-trash-alt" />
        </Button>
      </td>
    </tr>
  );
};

MilestoneListItem.propTypes = {
  milestone: PropTypes.object.isRequired,
  setCurrent: PropTypes.func.isRequired,
  deleteMilestone: PropTypes.func.isRequired,
};

export default connect(null, { setCurrent, deleteMilestone })(MilestoneListItem);
