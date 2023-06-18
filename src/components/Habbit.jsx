import { useContext, useState } from "react";
import { HabbitDialog } from "./HabbitDialog";
import { DataContext } from "../contexts/DataContext";

/* eslint-disable react/prop-types */
export const Habbit = ({ habbit }) => {
  const { state, dispatch } = useContext(DataContext);
  const [isDetails, setIsDetails] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = () => {
    setIsEdit(true);
  };
  const handleDelete = () => {
    dispatch({ type: "DELETE_HABBIT", payload: habbit });
  };
  const handleArchive = () => {
    dispatch({ type: "DELETE_HABBIT", payload: habbit });
    dispatch({ type: "ADD_TO_ARCHIVE", payload: habbit });
  };
  return (
    <>
      <li key={habbit.id}>
        <HabbitDialog open={isEdit} closeFunc={setIsEdit} habbit={habbit} />
        <p style={{ marginTop: "0" }}>{habbit.habbit}</p>
        {isDetails && (
          <div className="details">
            <p>Repeat : {habbit.repeat}</p>
            <p>Goal : {habbit.goal}</p>
            <p>Time of Day : {habbit.time}</p>
            <p>Start Date : {habbit.startDate}</p>
          </div>
        )}
        <div className="button-holder">
          <button onClick={() => setIsDetails((prev) => !prev)}>
            {isDetails ? "Hide Details" : "Show Details"}
          </button>
          {!state.archive.includes(habbit) && (
            <>
              <button onClick={() => handleEdit()}>Edit</button>
              <button onClick={() => handleDelete()}>Delete</button>
              <button onClick={() => handleArchive()}>Archive</button>
            </>
          )}
        </div>
      </li>
    </>
  );
};
