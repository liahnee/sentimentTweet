
import React from 'react'
import { Redirect } from "react-router-dom"
import { connect } from 'react-redux';

const LoggedInHOC = WrappedComponent => {
    return class LoggedInHOC extends React.Component {
        shouldRenderWrapped = () => {
            return this.props.login;
        }
        render() {
            return this.shouldRenderWrapped()?<WrappedComponent {...this.props} />: <Redirect to="/" />
        }
    }
}


const sToP = (state) => {
	return {
    	login: state.manageLogin.login,
	};
};

const dToP = (dispatch) => ({
});

export default connect(sToP, dToP)(LoggedInHOC);