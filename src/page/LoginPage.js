import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import {withRouter} from 'react-router-dom'
// import { connect } from 'react-redux';
// import { login } from '../store/auth/action';
class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        console.log(this.props);
    }
    componentDidMount(){
        console.log(this.props);
    }
    handleLogin = () => {
         this.props.login(this.username.value, this.password.value);
         this.props.history.push("/home");
    }
    render() {
        return (
            <div className="container p-5">
                <div className="row">
                    <div className="col-4 offset-2 col-sm-6">
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username" >User name</Label>
                                <Input type="text" id="username" name="username" innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password" >Password</Label>
                                <Input type="password" name="password" id="password" innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <Button type="submit" value="submit" className="bg-primary">Login</Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}


// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {
//     login: login
// }
// export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)

export default withRouter(LoginPage)