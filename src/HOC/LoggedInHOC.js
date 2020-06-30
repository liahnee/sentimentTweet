
import React from 'react'
import { Redirect } from "react-router-dom"
import { connect } from 'react-redux';


///add in a prop that sets render true/false on login. (for example not to render per login and to render per login)

const LoggedInHOC = WrappedComponent => {
    const sToP = (state) => {
        return {
            login: state.manageLogin.login,
        };
    };
    
    
    const dToP = (dispatch) => ({
    });

    class LoggedinHOC extends React.Component {
        shouldRenderWrapped = () => {
            return this.props.login;
        }
        render() {
            return this.shouldRenderWrapped()?<WrappedComponent {...this.props} />: <Redirect to="/" />
        }
    }

    return connect(sToP, dToP)(LoggedinHOC)
}



export default (LoggedInHOC);