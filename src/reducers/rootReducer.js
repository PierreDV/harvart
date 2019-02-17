import { combineReducers} from 'redux';
import ImageReducer from './reducer_images';
import ModalReducer from './reducer_modal';

const rootReducer = combineReducers({
  records: ImageReducer,
  modal: ModalReducer
});

export default rootReducer;