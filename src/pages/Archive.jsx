import { useContext } from "react"
import { DataContext } from "../contexts/DataContext"
import { Habbit } from "../components/Habbit"
import { NavLink } from "react-router-dom"

export const Archive = () => {
    const {state} = useContext(DataContext)
    return (
        <>
            <h1>Your Archive Here 🤖</h1>
            <NavLink to="/">Back to Home</NavLink>
            <ul className="habbit-container">
                {state.archive.map(habbit => {
                    return (
                        <Habbit habbit={habbit} key={habbit.id}/>
                    )
                })}
            </ul>
        </>
    )
}