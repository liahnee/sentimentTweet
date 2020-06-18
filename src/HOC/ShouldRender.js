
import React from 'react'
import { Redirect } from "react-router-dom"

const ShouldRender = WrappedComponent => {
    return class LoggedInHOC extends React.Component {
        shouldRenderWrapped = () => {
            return this.props.shouldRender;
        }
        render() {
            return this.shouldRenderWrapped()?<WrappedComponent {...this.props} />: null
        }
    }
}

export default ShouldRender;