import { FETCH_IMAGES_SUCCESS, FETCH_IMAGES_REQUEST } from '../actions/index';

const INITIAL_STATE = {
	items: [],
	isFetching: false,
	error: null,
}

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
	case FETCH_IMAGES_REQUEST:
		return {
			...state,
			isFetching: true,
		}
	case FETCH_IMAGES_SUCCESS:
		return {
			...state,
			isFetching: false,
			items: action.data
		}
	}
	return state;
}
