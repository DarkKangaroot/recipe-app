import React from "react";
import { Menu, Container } from "semantic-ui-react";
const Navbar = (React.FC = () => {
  return (
    <div>
      <Menu inverted borderless>
        <Container>
          <Menu.Item as="a" header>
            {/* <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} /> */}
            Cook Needs
          </Menu.Item>
          <Menu.Item as='a' position="right">Logout</Menu.Item>
        </Container>
      </Menu>
    </div>
  );
});

export default Navbar;
