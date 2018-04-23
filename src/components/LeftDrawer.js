import React, { Component } from "react";
import withStyles from "material-ui/styles/withStyles";
import PropTypes from "prop-types";
import Drawer from "material-ui/Drawer";
import { MenuItem } from "material-ui/Menu";
import Avatar from "material-ui/Avatar";
import List from "material-ui/List";
import { Link } from "react-router-dom";
import "./LeftDrawer.css";
import Divider from "material-ui/Divider";

const styles = {
  avatar: {
    div: {
      backgroundImage: "url(" + require("../images/material_bg.png") + ")",
      color: "black",
    },
  },
  list: {
    width: 250,
  },
};

class LeftDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: false,
    };
  }

  render() {
    return (
      <Drawer
        open={this.props.navDrawerOpen}
        onClose={() => {
          this.props.handleChangeRequestNavDrawer();
        }}
        style={{
          width: "250px",
        }}
      >
        <div className="drawer--header" style={styles.avatar.div}>
          <Avatar
            src="http://www.material-ui.com/images/uxceo-128.jpg"
            size={50}
          />
          <span>Foo bar baz</span>
        </div>
        <Divider />
        <div className="drawer--navmenu">
          <List>
            {this.props.navItems.map((menu, index) => {
              return (
                <MenuItem
                  key={index}
                  component={Link}
                  to={menu.path}
                  onClick={() => {
                    this.props.handleChangeRequestNavDrawer();
                  }}
                >
                  {menu.icon}
                  {menu.name}
                </MenuItem>
              );
            })}
          </List>
        </div>
        <Divider />
      </Drawer>
    );
  }
}

LeftDrawer.propTypes = {
  navDrawerOpen: PropTypes.bool,
  navItems: PropTypes.array,
  handleChangeRequestNavDrawer: PropTypes.func,
};

export default withStyles(styles)(LeftDrawer);
