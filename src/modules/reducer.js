import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import mailReducer from './mail/mailReducer';

export default combineReducers({
  routing: routerReducer,
  mail: mailReducer
});
