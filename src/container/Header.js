import React, { } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function RenderUser({datauser}) {
    if (datauser.username) {
        return (
            <div>
                {datauser.username}
            </div>
        );
    }
    else {
        return (
            <div>

            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        const { classes } = this.props;
        const background = {
            backgroundColor: this.props.theme
        }
        return (
            <div className={classes.root} >
                <div>
                    <AppBar position="static" style={background}>
                        <Toolbar>
                            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" color="inherit" className={classes.grow}>
                                <Link to="/home">Home</Link>
                            </Typography>                                
                            <RenderUser datauser={this.props.datauser} />
                            <Link to="/login"> <Button color="inherit">Login</Button></Link>
                        </Toolbar>
                    </AppBar>
                </div>
            </div>
        );
    }

}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);