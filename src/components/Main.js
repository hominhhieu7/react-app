import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, changeTheme } from '../store/auth/action';
import Home from './Home';
import Header from '../container/Header';
import LeftMenu from '../container/Leftmenu';
import LoginPage from '../page/LoginPage';
import Comments from './Comments';

const mapstateToProps = state => {
    return {
        auth: state.auth,
    }
}
const mapDishpatchToProps = ({
    login: (username, password) => login(username, password),
    changeTheme: (id, theme) => changeTheme(id, theme),
    
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
        const CommentPage = () => {
            return (
                <Comments/>
            );
        }
        return (
            <div className="container-fluid" style={{ paddingRight: 0, paddingLeft: 0 }}>
                <Header datauser={this.props.auth.datauser} theme={this.props.auth.theme} />
                <Switch >
                    <Route path="/login" component={Login} />
                    <Route path="/home" component={(props) =>
                        <Home
                            {...props}
                            changeTheme={this.props.changeTheme}
                            datauser={this.props.auth.datauser}
                            theme={this.props.auth.theme}>
                        </Home>

                    } />
                    <Route path="/comments" component={CommentPage} />
                    <Redirect to="/login" />
                </Switch>
                <LeftMenu />
            </div>
        );
    }
}
export default withRouter(connect(mapstateToProps, mapDishpatchToProps)(Main));