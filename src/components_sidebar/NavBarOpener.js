import React from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';


const OpenNavButton = (props) => (
  <Button circular basic inverted color='blue'  id='navBarBtn' onClick={props.show}>
    #menubar
  </Button>
)



const sToP = (state) => {
	return {
    	open: state.manageNavBar.open,
	};
};

const dToP = (dispatch) => ({
  show: () => dispatch({ type: 'TOGGLE'}),
});

export default connect(sToP, dToP)(OpenNavButton);