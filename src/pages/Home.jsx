import { useContext, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import { NewHabbitDialog } from "../components/NewHabbitDialog";
import { Habbit } from "../components/Habbit";
import { NavLink } from "react-router-dom";

export const Home = () => {
  const { state } = useContext(DataContext);
  const [newInputModal, setNewInputModal] = useState(false)
  const handleAdd = () => {
    setNewInputModal(false)
  }
  return (
    <>
      <h1>All your Habbits here 🦜</h1>
      <NavLink to="archive">Go to Archive</NavLink>
      <NewHabbitDialog open={newInputModal} addFunction={handleAdd}/>
      <ul className="habbit-container">
        <li onClick={()=>setNewInputModal(true)}>+ Add a Habbit</li>
        {state.habbits.map((habbit) => {
          return (
            <Habbit habbit={habbit} key={habbit.id}/>
          );
        })}
      </ul>
    </>
  );
};
