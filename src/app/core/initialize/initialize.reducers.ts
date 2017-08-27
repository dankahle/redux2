



import {IInitialize, INITIALIZE_INITIAL_STATE} from "./initialize.model";
import {InitializeActions} from "./initialize.actions";

export function initializeReducer(state: IInitialize = INITIALIZE_INITIAL_STATE, action) {
  switch(action.type) {
    case InitializeActions.INITIALIZE:
      return {...state, initializing: true};
    case InitializeActions.INITIALIZE_LEVEL1:
      return {...state, level1: action.payload};
    case InitializeActions.INITIALIZE_LEVEL2:
      return {...state, level2: action.payload};
    case InitializeActions.INITIALIZE_LEVEL3:
      return {...state, level3: action.payload};
    case InitializeActions.INITIALIZE_SUCCESS:
      return {...state, success: true, initializing: false, initialized: true};
    case InitializeActions.INITIALIZE_FAILURE:
      return {...state, failure: action.payload};

      case InitializeActions.init1_LOAD_SUCCESS:
      return {...state, init1: action.payload}
    case InitializeActions.init2_LOAD_SUCCESS:
      return {...state, init2: action.payload}
    case InitializeActions.init3_LOAD_SUCCESS:
      return {...state, init3: action.payload}
    case InitializeActions.init4_LOAD_SUCCESS:
      return {...state, init4: action.payload}
    case InitializeActions.init5_LOAD_SUCCESS:
      return {...state, init5: action.payload}
    default:
      return state;
  }
}
