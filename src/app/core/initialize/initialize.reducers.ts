



import {IInitialize, INITIALIZE_INITIAL_STATE} from "./initialize.model";
import {InitializeActions} from "./initialize.actions";

export function initializeReducer(state: IInitialize = INITIALIZE_INITIAL_STATE, action) {
  switch(action.type) {
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
