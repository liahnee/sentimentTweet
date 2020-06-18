import { combineReducers } from 'redux';
import manageCelebs from './manageCelebs';
import manageLoading from './manageLoading';
import manageNavBar from './manageNavBar';
import manageLogin from './manageLogin';

export default combineReducers({
    manageCelebs,
    manageLoading,
    manageNavBar,
    manageLogin,
})