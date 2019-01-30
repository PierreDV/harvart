import { FETCH_IMAGES } from '../actions/index';

const INITIAL_STATE = {
	items: [],
	isFetching: false,
	error: null,
}

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
	case FETCH_IMAGES:
		return {
			...state,
			isFetching: false,
			items: action.data
		}
	}
	return state;
}
