import { combineReducers } from 'redux-immutable';

const homeReducer = (state = [], action) => {
	return state
}

const reducer = combineReducers({
	home: homeReducer
});

export default reducer;
