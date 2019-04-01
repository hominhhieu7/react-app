import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, changeTheme } from '../store/auth/action';
import Home from './Home';
import Header from '../container/Header';
import LeftMenu from '../container/Leftmenu';
import LoginPage from '../page/LoginPage';

const mapstateToProps = state => {
    return {
        auth: state.auth,

    }
}
const mapDishpatchToProps = ({
    login: (username, password) => login(username, password),
    changeTheme: (id, theme) => changeTheme(id, theme)
})

class Main extends Component {
    componentDidMount() {
    }
    render() {
        const Login = () => {
            return (
                <LoginPage login={this.props.login} />
            );
        }
        return (
            <div>
                <Header datauser={this.props.auth.datauser} theme={this.props.auth.theme} />
                <LeftMenu />
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/home" component={(props) =>
                        <Home
                            {...props}
                            changeTheme={this.props.changeTheme}
                            datauser={this.props.auth.datauser}
                            theme={this.props.auth.theme}>
                        </Home>
                    } />
                    <Redirect to="/login" />
                </Switch>
            </div>
        );
    }
}
export default withRouter(connect(mapstateToProps, mapDishpatchToProps)(Main));