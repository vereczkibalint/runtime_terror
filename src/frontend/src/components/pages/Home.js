import React from "react";
import { checkIsAuthenticated } from "../../utils/authentication";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Home = ({ auth }) => {
  if (!checkIsAuthenticated(auth))
    return (
      <div>
        <div className="d-flex justify-content-between">
          <h1>Jelentkezz be!</h1>
        </div>
      </div>
    );

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>Kezdőlap</h1>
      </div>

      <table className="cardcollector">
        <tbody>
          <tr>
            <td className="cardcell">
              <div className="card text-white bg-primary mb-3">
                <div className="card-header">Havi költség</div>
                <div className="card-body">
                  <h5 className="card-title">350. 000 Ft</h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </td>

            <td className="cardcell">
              <div className="card text-white bg-primary mb-3">
                <div className="card-header">Heti költség</div>
                <div className="card-body">
                  <h5 className="card-title">50. 000 Ft</h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </td>

            <td className="cardcell">
              <div className="card text-white bg-primary mb-3">
                <div className="card-header">Napi költség</div>
                <div className="card-body">
                  <h5 className="card-title">5. 000 Ft</h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Home.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Home);
