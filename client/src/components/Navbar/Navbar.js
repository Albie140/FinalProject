import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

function Navbar() {
  return (

    <Nav >
      <NavItem>
        <NavLink href="#">GraderDashboard</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">LearnerDashboard</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">LearnerAssignments</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">LearnerTimeline</NavLink>
      </NavItem>
    </Nav>
  );
}
export default Navbar;