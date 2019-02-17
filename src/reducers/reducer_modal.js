import { SHOW_MODAL } from '../actions/index';

const INITIAL_STATE = {
  isOpen: false,
  image: null
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case SHOW_MODAL:
    return {
      ...state,
      isOpen: true,
      image: action.image
    }
  default:
    return state;
  }
}