import React from "react";
import { Link } from "react-router-dom";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
const UISidebar = (React.FC = (props) => {
  const sidebarStyle = { height: "100vh" };
  return (
    <div style={sidebarStyle}>
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="push"
          icon="labeled"
          visible
          vertical
          width="thin"
        >
          <Menu.Item as={Link} to="/">
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item as={Link} to="/About">
            <Icon name="user" />
            About
          </Menu.Item>
          {/* <Menu.Item as="a">
                <Icon name="camera" />
                Channels
              </Menu.Item> */}
        </Sidebar>

        <Sidebar.Pusher>
          <Segment basic>{props.children}</Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
});

export default UISidebar;
