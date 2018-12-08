import React, { Component } from React;
import axiosInstance from "../../constants/axiosInstance";

const withAuthen = wrappedComponent => {
    return class extends Component {
        state = {
            isAuthen: 0
        }
        componentDidMount() {
            const token = localStorage.token;
            if (token) {
                axiosInstance.
            }

        }
        render() {

        }
    }
}