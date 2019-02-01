import { combineReducers} from 'redux';
import ImageReducer from './reducer_images';

const rootReducer = combineReducers({
  records: ImageReducer,
});

export default rootReducer;