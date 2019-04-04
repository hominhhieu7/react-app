import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
});
class LeftMenu extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="col-3 col-sm-3">
                <div className={classes.root}>
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        anchor="left"
                    >
                        <div className={classes.toolbar} />
                        <List>
                            <Link to="/home">
                                <ListItem button key="Home">
                                    <ListItemText primary="Home" />
                                </ListItem>
                            </Link>
                            <Link to="/comments">
                                <ListItem button key="Comments">
                                    <ListItemText primary="Comments" />
                                </ListItem>
                            </Link>
                        </List>
                        <Divider />
                    </Drawer>
                </div>
            </div>
        );
    }
}
LeftMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(LeftMenu);