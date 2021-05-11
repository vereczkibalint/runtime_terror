//Fő komponense a milestone-oknak
import React, { useEffect, useState } from "react";
import MilestoneForm from "./MilestoneForm";
import { connect } from "react-redux";
import {
  getMilestones,
  setMilestoneModal,
} from "../../actions/milestoneActions";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import MilestoneList from "./MilestoneList";

const Milestones = ({
  milestone: { milestones, current },
  getMilestones,
  setMilestoneModal,
}) => {
  useEffect(() => {
    getMilestones();
    //eslint-disable-next-line
  }, []);

  const showAddMilestoneModal = () => {
    setMilestoneModal({ title: "Új mérföldkő hozzáadása", open: true });
  };

  return (
    <div>
      <div className="d-flex justify-content-between my-3">
        <h1>Mérföldkövek</h1>
        <Button variant="success" onClick={showAddMilestoneModal}>
          Mérföldkő hozzáadása
        </Button>
      </div>

      <MilestoneForm />

      {milestones && milestones.length > 0 ? (
        <MilestoneList milestones={milestones} />
      ) : (
        <h3>Nincs megjelenítendő Mérföldkő</h3>
      )}
    </div>
  );
};

Milestones.propTypes = {
  milestone: PropTypes.object.isRequired,
  getMilestones: PropTypes.func.isRequired,
  setMilestoneModal: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  milestone: state.milestone,
});

export default connect(mapStateToProps, { getMilestones, setMilestoneModal })(
  Milestones
);
