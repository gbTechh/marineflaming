import {
  CHANGE_COMPONENT,
} from './types';



const proyectoReducer = (state, action) => {
   switch (action.type) {
      case CHANGE_COMPONENT:
          return {
              ...state,
              component:action.payload
          }      
      default:
          return state;
   }
}

export default proyectoReducer