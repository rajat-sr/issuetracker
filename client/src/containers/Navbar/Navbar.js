import React from 'react';
import { Navbar, NavbarDivider, NavbarGroup, NavbarHeading, Button, Alignment } from '@blueprintjs/core';

const NavbarLayout = props => {
  return (
    <Navbar>
      <NavbarGroup>
        <NavbarHeading>{props.boardName}</NavbarHeading>
        <NavbarDivider />
        <Button icon="home" text="Boards" />
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <Button icon="log-out" text="Logout" />
      </NavbarGroup>
    </Navbar>
  );
};

export default NavbarLayout;
