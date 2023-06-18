/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { Habbits } from "../database/HabbitDB";


export const DataContext = createContext()
const handleHabbits = (state, action) => {
    switch (action.type) {
        case "ADD_NEW_HABBIT" : return {...state, habbits : [...state.habbits, action.payload]}
        case "CHANGE_HABBIT" : return {...state, habbits : state.habbits.map(habb => habb.id===action.payload.id ? action.payload : habb)}
        case "DELETE_HABBIT" : return {...state, habbits : state.habbits.filter(habb => habb.id!==action.payload.id)}
        case "ADD_TO_ARCHIVE" : return {...state, archive : [...state.archive, action.payload]}
        default : return state;
    }
}
export const DataProvider = ({children}) => {
    const [state, dispatch] = useReducer(handleHabbits, {habbits : Habbits, archive : []})
    return (
        <DataContext.Provider value={{state, dispatch}}>
            {children}
        </DataContext.Provider>
    )
}