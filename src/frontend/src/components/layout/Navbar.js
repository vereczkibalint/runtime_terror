import React, { Fragment, useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { PREFIX } from "../../config";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { checkIsAuthenticated } from "../../utils/authentication";
import { logout } from "../../actions/authActions";

const Navbar = ({ auth, logout }) => {
  const [expenditures, setExpenditure] = useState(false);
  const [incomes, setIncomes] = useState(false);
  const [stats, setStats] = useState(false);
  const [milestones, setMilestone] = useState(false);
  const history = useHistory();

  const onLogout = () => {
    logout();
    history.push(`${PREFIX}/login`);
  };

  return (
    <nav id="sidebar" className="bg-primary text-light">
      <div className="sidebar-header">
        <h3>Menü</h3>
      </div>

      <div className="d-flex flex-column">
        <Button className="my-1" as={NavLink} to={`${PREFIX}/`} exact>
          Kezdőlap
        </Button>
        {checkIsAuthenticated(auth) ? (
          <Fragment>
            <Button
              className="my-1"
              as={NavLink}
              to={`${PREFIX}/accounts`}
              exact
            >
              Számlák
            </Button>
            <Button
              className="my-1"
              onClick={() => setExpenditure(!expenditures)}
              active={expenditures}
            >
              Kiadás <i className="fas fa-caret-down"></i>
            </Button>
            {expenditures && (
              <div className="d-flex flex-column bg-dark">
                <Button
                  variant="dark"
                  as={NavLink}
                  exact
                  to={`${PREFIX}/expenditures`}
                >
                  Mindent megjelenít
                </Button>
                <Button
                  variant="dark"
                  as={NavLink}
                  exact
                  to={`${PREFIX}/expenditures/b`}
                >
                  Futó hónap
                </Button>
                <Button
                  variant="dark"
                  as={NavLink}
                  exact
                  to={`${PREFIX}/expenditures/c`}
                >
                  Előző hónap
                </Button>
              </div>
            )}

            <Button
              className="my-1"
              active={incomes}
              onClick={() => setIncomes(!incomes)}
            >
              Bevétel <i className="fas fa-caret-down"></i>
            </Button>
            {incomes && (
              <div className="d-flex flex-column bg-dark">
                <Button
                  variant="dark"
                  as={NavLink}
                  exact
                  to={`${PREFIX}/incomes`}
                >
                  Mindent megjelenít
                </Button>
                <Button
                  variant="dark"
                  as={NavLink}
                  exact
                  to={`${PREFIX}/incomes/b`}
                >
                  Futó hónap
                </Button>
                <Button
                  variant="dark"
                  as={NavLink}
                  exact
                  to={`${PREFIX}/incomes/c`}
                >
                  Előző hónap
                </Button>
              </div>
            )}

            <Button
              className="my-1"
              active={stats}
              onClick={() => setStats(!stats)}
            >
              Statisztika <i className="fas fa-caret-down"></i>
            </Button>
            {stats && (
              <div className="d-flex flex-column bg-dark">
                <Button
                  variant="dark"
                  as={NavLink}
                  exact
                  to={`${PREFIX}/stats`}
                >
                  Futó hónap
                </Button>
                <Button
                  variant="dark"
                  as={NavLink}
                  exact
                  to={`${PREFIX}/stats/previousmonth`}
                >
                  Előző hónap
                </Button>

                <Button
                  variant="dark"
                  as={NavLink}
                  exact
                  to={`${PREFIX}/stats/other`}
                >
                  Egyéb
                </Button>
              </div>
            )}

            <Button
              active={milestones}
              onClick={() => setMilestone(!milestones)}
              className="my-1"
              as={NavLink}
              to={`${PREFIX}/milestones`}
              exact
            >
              Mérföldkövek
            </Button>
            <Button
              className="my-1"
              as={NavLink}
              to={`${PREFIX}/settings`}
              exact
            >
              Beállítások
            </Button>
            <Button className="my-1" onClick={onLogout}>
              Kijelentkezés <i className="fas fa-sign-out-alt"></i>
            </Button>
          </Fragment>
        ) : (
          <Fragment>
            <Button
              className="my-1"
              as={NavLink}
              to={`${PREFIX}/register`}
              exact
            >
              Regisztráció <i class="far fa-plus-square"></i>
            </Button>
            <Button className="my-1" as={NavLink} to={`${PREFIX}/login`} exact>
              Bejelentkezés <i class="fas fa-sign-in-alt"></i>
            </Button>
          </Fragment>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
