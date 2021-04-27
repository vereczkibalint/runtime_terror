import React from "react";
import PropTypes from "prop-types";
import { Alert } from "react-bootstrap";
import { connect } from "react-redux";

const Alerts = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <Alert key={alert.id} className={`alert-${alert.alertType}`}>
      {alert.msg}
    </Alert>
  ));

Alerts.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alerts,
});

export default connect(mapStateToProps)(Alerts);
