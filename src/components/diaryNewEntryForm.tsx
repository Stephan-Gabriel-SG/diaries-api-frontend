import { useState } from "react";
import { NewDiary, Visibility, Weather } from "../services/types";

const visibilities = Object.values(Visibility);
const weathers = Object.values(Weather);

const NewDiaryForm = () => {
  const [newDiary, setNewDiary] = useState<NewDiary>({
    date: "",
    weather: weathers[0],
    visibility: visibilities[0],
    comment: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>();

  const handleAddNewDiary = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(newDiary);
  };

  return (
    <form onSubmit={handleAddNewDiary}>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <div>
        <label htmlFor="diaryDate">Date</label>
        <input
          type="date"
          id="diaryDate"
          required
          onChange={({ target }) =>
            setNewDiary({ ...newDiary, date: target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="visibility">Visibility</label>
        <select
          id="visibility"
          defaultValue={newDiary.visibility}
          onChange={({ target }) =>
            setNewDiary({ ...newDiary, visibility: target.value as Visibility })
          }
          required
        >
          {visibilities.map((visibility, index) => (
            <option key={index} value={visibility}>
              {visibility}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="weather">Weather</label>
        <select
          id="weather"
          defaultValue={newDiary.weather}
          onChange={({ target }) =>
            setNewDiary({ ...newDiary, weather: target.value as Weather })
          }
          required
        >
          {weathers.map((weather, index) => (
            <option key={index} value={weather}>
              {weather}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="comment">Comment</label>
        <input
          id="comment"
          value={newDiary.comment}
          onChange={({ target }) =>
            setNewDiary({ ...newDiary, comment: target.value })
          }
        />
      </div>
      <button type="submit">add</button>
    </form>
  );
};

export default NewDiaryForm;
