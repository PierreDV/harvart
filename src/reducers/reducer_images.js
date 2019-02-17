import { FETCH_IMAGES_SUCCESS, FETCH_IMAGES_REQUEST, FETCH_IMAGES_FAILURE } from '../actions/index';

const INITIAL_STATE = {
	items: [],
	isFetching: false,
	error: null,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case FETCH_IMAGES_REQUEST:
		return {
			...state,
			isFetching: true,
			error: null,
		};
	case FETCH_IMAGES_SUCCESS:
		return {
			...state,
			isFetching: false,
			items: action.data,
			error: null,
		};
	case FETCH_IMAGES_FAILURE:
		return {
			...state,
			isFetching: false,
			error: action.error,
		};
	default:
		return state;
	}
}
