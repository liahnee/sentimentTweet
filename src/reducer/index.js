import { combineReducers } from 'redux';
import manageCelebs from './manageCelebs';
import manageLoading from './manageLoading';

export default combineReducers({
    manageCelebs,
    manageLoading
})