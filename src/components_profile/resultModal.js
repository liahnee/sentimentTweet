import React from 'react';
import { Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const ModalContainer = (props) => {
	return (
		<Modal open={props.isOpen} closeIcon size="tiny" onClose={props.close}>
			{props.text}
		</Modal>
	);
};

export default ModalContainer;
