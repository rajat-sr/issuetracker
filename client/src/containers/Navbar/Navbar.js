import React from 'react';
import { Navbar, NavbarDivider, NavbarGroup, NavbarHeading, Button } from '@blueprintjs/core';

const NavbarLayout = props => {
  return (
    <Navbar>
      <NavbarGroup>
        <NavbarHeading>{props.boardName ? props.boardName : "Issue Tracker"}</NavbarHeading>
        <NavbarDivider />
      </NavbarGroup>
    </Navbar>
  );
};

export default NavbarLayout;
