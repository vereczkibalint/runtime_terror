//Fő komponense a milestone-oknak
import React, { useEffect } from "react";
import MilestoneItem from "./MilestoneItem";
import { connect } from "react-redux";
import { getMilestones } from "../../actions/milestoneActions";
import PropTypes from "prop-types";

const Milestones = ({ milestone: { milestones, loading }, getMilestones }) => {
  useEffect(() => {
    getMilestones();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>Mérföldkövek</h1>
      </div>
      <button className="btn btn-primary">Cél kitűzése</button>

      {loading || milestones === null ? (
        <h1>Töltés...</h1>
      ) : (
        <div class="table-responsive">
          <table class="table table-hover">
            <thead>
              <tr className="bg-primary text-light">
                <th scope="col">#</th>
                <th scope="col">Megnevezés</th>
                <th scope="col">Ár</th>
                <th scope="col">...</th>
              </tr>
            </thead>
            {milestones !== null && milestones.length !== 0 ? (
              milestones.map((milestone) => (
                <MilestoneItem key={milestone.id} milestone={milestone} />
              ))
            ) : (
              <h3>Adjon hozzá új célt!</h3>
            )}
          </table>
          {/*<ul>
          {milestones !== null && milestones.length !== 0 ? (
            milestones.map((milestone) => (
              <MilestoneItem key={milestone.id} milestone={milestone} />
            
            ))
          ) : (
            <h3>Adjon hozzá új célt!</h3>
          )}
          </ul>*/}
        </div>
      )}
    </div>
  );
};

Milestones.propTypes = {
  milestone: PropTypes.object.isRequired,
  getMilestones: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  milestone: state.milestone,
});

export default connect(mapStateToProps, { getMilestones })(Milestones);
