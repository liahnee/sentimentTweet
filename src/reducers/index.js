import { combineReducers } from 'redux';
import manageCelebs from './manageCelebs';
import manageLoading from './manageLoading';
import manageNavBar from './manageNavBar';

export default combineReducers({
    manageCelebs,
    manageLoading,
    manageNavBar,
})