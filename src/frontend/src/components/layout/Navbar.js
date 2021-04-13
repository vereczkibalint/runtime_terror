import React, { Fragment, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { PREFIX } from "../../config";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import { Button } from "react-bootstrap";

const Navbar = () => {
  const [expenditures, setExpenditure] = useState(false);
  const [incomes, setIncomes] = useState(false);
  const [stats,setStats] =useState(false);
  const [milestones,setMilestone]=useState(false);

  return (
    <nav id="sidebar" className="bg-primary text-light">
      <div className="sidebar-header">
        <h3>Menü</h3>
      </div>

      <div className="d-flex flex-column">
        <Button className="my-1" as={NavLink} to={`${PREFIX}/`} exact>
          Kezdőlap
        </Button>
        <Button className="my-1" as={NavLink} to={`${PREFIX}/accounts`} exact>
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
            <Button variant="dark" as={NavLink} exact to={`${PREFIX}/incomes`}>
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
             <Button variant="dark" as={NavLink} exact to={`${PREFIX}/stats`}>
              Futó hónap
            </Button>
            <Button variant="dark" as={NavLink} exact to={`${PREFIX}/stats/previousmonth`}>
              Előző hónap
            </Button>

            <Button variant="dark" as={NavLink} exact to={`${PREFIX}/stats/other`}>
              Egyéb
            </Button>
          </div>
)}

        
        <Button active={milestones}  onClick={() => setMilestone(!milestones)} className="my-1" as={NavLink} to={`${PREFIX}/milestones`} exact>
          Mérföldkövek
        </Button>
        <Button  className="my-1" as={NavLink} to={`${PREFIX}/register`} exact>
          Regisztráció
        </Button>
        <Button className="my-1" as={NavLink} to={`${PREFIX}/login`} exact>
          Bejelentkezés
        </Button>
        <Button className="my-1" as={NavLink} to={`${PREFIX}/settings`} exact>
          Beállítások
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
