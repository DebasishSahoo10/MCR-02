import { useContext, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import { v4 as uuid} from "uuid";
/* eslint-disable react/prop-types */
export const NewHabbitDialog = ({ open, addFunction }) => {
  const { dispatch } = useContext(DataContext);
  const [isInputBlank, setIsInputBlank] = useState(false);
  const [newHabbit, setNewHabbit] = useState({
    habbit: "",
    id : uuid(),
    repeat: "",
    goal: "",
    time: "",
    startDate: "",
  });
  const handleAddClick = () => {
    setNewHabbit(prev => ({...prev, id : uuid()}))
    if (newHabbit.habbit === "" || newHabbit.repeat === "" || newHabbit.goal === "" || newHabbit.time === "" || newHabbit.startDate === "") {
      setIsInputBlank(true);
    } else {
      dispatch({ type: "ADD_NEW_HABBIT", payload: newHabbit });
      setIsInputBlank(false);
      addFunction();
    }
  };
  return (
    <>
      <dialog open={open}>
        <p>New Habbit</p>
        {isInputBlank && <p>Inputs Can Not Be Blank</p>}
        <div className="habbit-name">
          <label htmlFor="name-habbit">Name of the Habbit :</label>
          <input
            type="text"
            id="name-habbit"
            value={newHabbit.habbit}
            onChange={(e) =>
              setNewHabbit((prev) => ({ ...prev, habbit: e.target.value  }))
            }
          />
        </div>
        <div className="habbit-other">
          <label htmlFor="repeat">Repeat :</label>
          <select
            name="repeat"
            id="repeat"
            onChange={(e) =>
              setNewHabbit((prev) => ({ ...prev, repeat: e.target.value }))
            }
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
          <label htmlFor="goal">Goal :</label>
          <select
            name="goal"
            id="goal"
            onChange={(e) =>
              setNewHabbit((prev) => ({ ...prev, goal: e.target.value }))
            }
          >
            <option value="1 times daily">1 times Daily</option>
            <option value="2 times daily">2 times Daily</option>
            <option value="3 times daily">3 times Daily</option>
            <option value="4 times daily">4 times Daily</option>
            <option value="5 times daily">5 times Daily</option>
          </select>
        </div>
        <div className="habbit-other">
          <label htmlFor="time">Time of Day :</label>
          <select
            name="time"
            id="time"
            onChange={(e) =>
              setNewHabbit((prev) => ({ ...prev, time: e.target.value }))
            }
          >
            <option value="any time">Any Time</option>
            <option value="6:00 PM">6:00 PM</option>
            <option value="8:00 AM">8:00AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="10:00 PM">10:00 PM</option>
            <option value="4:00 PM">4:00 PM</option>
          </select>
          <label htmlFor="start">Start Date :</label>
          <select
            name="start"
            id="start"
            onChange={(e) =>
              setNewHabbit((prev) => ({ ...prev, startDate: e.target.value }))
            }
          >
            <option value="Today">Today</option>
            <option value="Tommorrow">Tommorrow</option>
            <option value="After 3 days">After 3 days</option>
            <option value="Day after Tommorrow">Day after Tommorrow</option>
          </select>
        </div>
        <button onClick={() => handleAddClick()}>Add</button>
      </dialog>
    </>
  );
};
