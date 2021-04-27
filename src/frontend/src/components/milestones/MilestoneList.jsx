import React from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
import MilestoneListItem from "./MilestoneListItem";

const MilestoneList = ({ milestones }) => {
  return (
    <Table striped bordered hover className="no-vertical-border">
      <thead>
        <tr>
          <th>Név</th>
          <th>Szín</th>
          <th>Egyenleg</th>
          <th>Határidő</th>
          <th>Lehetőségek</th>
        </tr>
      </thead>
      <tbody>
        {milestones.map((milestone) => (
          <MilestoneListItem key={milestone._id} milestone={milestone} />
        ))}
      </tbody>
    </Table>
  );
};

MilestoneList.propTypes = {
  milestones: PropTypes.array.isRequired,
};

export default MilestoneList;