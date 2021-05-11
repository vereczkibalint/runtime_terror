import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { moneyFormatter } from "../../utils/formatter";
import {
  setCurrent,
  deleteMilestone,
  setMilestoneModal,
} from "../../actions/milestoneActions";

const MilestoneListItem = ({
  milestone,
  setCurrent,
  deleteMilestone,
  setMilestoneModal,
}) => {
  return (
    <tr key={milestone.id}>
      <td>{milestone.name}</td>
      <td>{moneyFormatter(milestone.goalPrice)}</td>
      <td>
        {new Date(milestone.deadline).toLocaleDateString(undefined, {
          year: "numeric",
          month: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          day: "numeric",
        })}
      </td>
      <td>
        <Button
          className="mr-1"
          variant="primary"
          onClick={() => {
            setCurrent(milestone);
            setMilestoneModal({ title: "Számla szerkesztése", open: true });
          }}
        >
          <i className="fas fa-edit" />
        </Button>
        <Button
          className="ml-1"
          variant="danger"
          onClick={() => {
            deleteMilestone(milestone._id);
          }}
        >
          <i className="fas fa-trash-alt" />
        </Button>
      </td>
    </tr>
  );
};

MilestoneListItem.propTypes = {
  milestone: PropTypes.object.isRequired,
  setCurrent: PropTypes.func.isRequired,
  deleteMilestone: PropTypes.func.isRequired,
  setMilestoneModal: PropTypes.func.isRequired,
};

export default connect(null, {
  setCurrent,
  deleteMilestone,
  setMilestoneModal,
})(MilestoneListItem);
