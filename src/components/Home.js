import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { Label } from 'reactstrap'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTheme: this.props.theme
        }
    }
    handleChange = (event) => {
        if (this.props.datauser.id) {
            this.setState({ selectedTheme: event.target.value });
            this.props.changeTheme(this.props.datauser.id, event.target.value);
        }
        else {
            alert("chua dang nhap");
        }

    };
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3 col-sm-6">
                        <Label>Dark theme</Label>
                        <Checkbox checked={this.state.selectedTheme === 'black'}
                            onChange={this.handleChange}
                            value='black'>
                        </Checkbox>
                    </div>
                    <div className="col-3 col-sm-6">
                        <Label>Light theme</Label>
                        <Checkbox checked={this.state.selectedTheme === ''}
                            onChange={this.handleChange}
                            value='' />
                    </div>

                </div>
                <div className="row" style={{ backgroundColor: this.state.selectedTheme }}>
                    <div className="col-12">
                        <h3>Home</h3> <hr />
                    </div>
                </div>
            </div>

        );
    }

}
export default Home;