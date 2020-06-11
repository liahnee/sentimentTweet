import React from 'react';


function withLoading(Component) {
    return function WihLoadingComponent({ isLoading, ...props }) {
        if (!isLoading) return (<Component {...props} />);
        return null;
      }
}

export default withLoading;