import React, { useReducer } from 'react';

import componentContext from './componentContext';
import componentReducer from './componentReducer';
import { 
    CHANGE_COMPONENT,
} from './types';


const ComponentProvider = props => {
   
    const initialState = {
        component:''
    }

    const [state, dispatch] = useReducer(componentReducer, initialState)

    const changeComponent = (component) => {
        dispatch({
            type: CHANGE_COMPONENT,
            payload:component
        })
    }
   
    return (
        <proyectoContext.Provider
            value={{ 
                initialState,
                changeComponent
                
             }}
        >
            {props.children}
        </proyectoContext.Provider>
    )

}

export default ComponentProvider;