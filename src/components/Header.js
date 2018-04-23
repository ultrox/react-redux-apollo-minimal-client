import './Header.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {withStyles} from 'material-ui/styles';

import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';
import Menu, {MenuItem} from 'material-ui/Menu';

import MenuIcon from '@material-ui/icons/Menu';
import ViewModule from '@material-ui/icons/ViewModule';

import {AUTH_TOKEN} from "../constants";

const styles = theme => {
    return {
        appbar: {},
        appbarText: {
            color: [theme.palette.primary.contrastText, '!important'],
        }
    };
};

class Header extends Component {
    state = {
        anchorEl: null,
        authToken: localStorage.getItem(AUTH_TOKEN),
    };

    render() {
        const {handleChangeRequestNavDrawer, classes} = this.props;
        const {anchorEl} = this.state;

        return (
            <AppBar position='fixed' color='primary'>
                <Toolbar className={`${classes.appbar} Header-AppBar-Toolbar`}>
                    <IconButton
                        className={classes.appbarText}
                        onClick={handleChangeRequestNavDrawer}>
                        <MenuIcon></MenuIcon>
                    </IconButton>
                    <Typography
                        type="title">
                        <Button
                            component={Link} to='/'
                            className={classes.appbarText}>React, Redux, and Apollo 2</Button>
                    </Typography>

                    {this.props.navRoutes.map((nav, index) => {
                        return (
                            <Tooltip
                                key={index}
                                title={nav.name}>
                                <IconButton
                                    className={classes.appbarText}
                                    aria-label={nav.name}
                                    component={Link} to={nav.path}>
                                    {nav.icon}
                                </IconButton>
                            </Tooltip>
                        )
                    })}
                    <IconButton
                        className={classes.appbarText}
                        aria-owns={anchorEl ? 'simple-menu' : null}
                        aria-haspopup="true"
                        onClick={this.handleClick}>
                        <ViewModule/>
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}>
                        {this.props.navRoutes.map((nav, index) => {
                            return (
                                <MenuItem
                                    key={index}
                                    component={Link} to={nav.path}
                                    onClick={this.handleClose}>
                                    {nav.icon} {nav.name}
                                </MenuItem>
                            )
                        })}
                    </Menu>
                </Toolbar>
            </AppBar>
        );
    }

    handleClick = (event) => {
        this.setState({anchorEl: event.currentTarget});
    };
    handleClose = () => {
        this.setState({anchorEl: null});
    };
    handleLogout = () => {
        localStorage.removeItem(AUTH_TOKEN);
        this.setState({
            authToken: localStorage.getItem(AUTH_TOKEN)
        })
    }

}

Header.propTypes = {
    navRoutes: PropTypes.array,
    handleChangeRequestNavDrawer: PropTypes.func.isRequired
};
export default withStyles(styles)(Header)
