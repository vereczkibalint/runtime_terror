import React, { Fragment } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { PREFIX } from "../../config";
import { Button, ButtonGroup, DropdownButton, Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { checkIsAuthenticated } from "../../utils/authentication";
import { logout } from "../../actions/authActions";
const Navbar = ({ auth, logout }) => {
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
        <ButtonGroup vertical className="my-3">
          <Button className="my-1" as={NavLink} to={`${PREFIX}/`} exact>
            Kezdőlap
          </Button>
          {checkIsAuthenticated(auth) ? (
            <>
              <Button
                className="my-1"
                as={NavLink}
                to={`${PREFIX}/accounts`}
                exact
              >
                Számlák
              </Button>

              <DropdownButton
                className="my-1"
                as={ButtonGroup}
                title="Kiadás"
                id="bg-vertical-dropdown-1"
              >
                <Dropdown.Item as={Link} to="/expenditures">
                  Mindent megjelenít
                </Dropdown.Item>
                <Dropdown.Item>Futó hónap</Dropdown.Item>
                <Dropdown.Item>Előző hónap</Dropdown.Item>
              </DropdownButton>

              <DropdownButton
                className="my-1"
                as={ButtonGroup}
                title="Bevétel"
                id="bg-vertical-dropdown-1"
              >
                <Dropdown.Item eventKey="1">Mindent megjelenít</Dropdown.Item>
                <Dropdown.Item eventKey="2">Futó hónap</Dropdown.Item>
                <Dropdown.Item eventKey="3">Előző hónap</Dropdown.Item>
              </DropdownButton>

              <DropdownButton
                className="my-1"
                as={ButtonGroup}
                title="Statisztika"
                id="bg-vertical-dropdown-1"
              >
                <Dropdown.Item eventKey="2">Futó hónap</Dropdown.Item>
                <Dropdown.Item eventKey="3">Előző hónap</Dropdown.Item>
                <Dropdown.Item eventKey="3">Egyéb</Dropdown.Item>
              </DropdownButton>
              <Button
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
            </>
          ) : (
            <Fragment>
              <Button
                className="my-1"
                as={NavLink}
                to={`${PREFIX}/register`}
                exact
              >
                Regisztráció <i className="far fa-plus-square"></i>
              </Button>
              <Button
                className="my-1"
                as={NavLink}
                to={`${PREFIX}/login`}
                exact
              >
                Bejelentkezés <i className="fas fa-sign-in-alt"></i>
              </Button>
            </Fragment>
          )}
        </ButtonGroup>
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
