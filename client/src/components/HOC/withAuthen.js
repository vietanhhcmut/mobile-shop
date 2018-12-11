import React, { Component } from 'react';
import Spinner from "../common/Spinner/Spinner";
import axiosValidate from "../../constants/axiosValidate";
import { withRouter } from 'react-router-dom';

const withAuthen = (WrappedComponent) => {
    const App = class extends Component {
        state = {
            isAuthen: false
        }
        componentDidMount() {
            axiosValidate().get('/api/user/getInfoUser.php')
            .then(res => {
                console.log(res.data.isAdmin);
                if (res.data.isAdmin) {
                    this.setState({ isAuthen: true });
                }
                else {
                    this.props.props.history.push("/");
                }
            })
            .catch(e => this.props.history.push("/"));   
        }
        render() {
            return (
                <React.Fragment>
                    {
                        this.state.isAuthen ?
                        <WrappedComponent {...this.props} />
                        :
                        <Spinner />
                    }
                </React.Fragment>
            );
        }
    }
    return App;
}
export default withAuthen;