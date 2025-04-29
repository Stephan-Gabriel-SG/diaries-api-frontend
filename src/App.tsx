import { useEffect, useState } from "react";
import { Diary } from "./services/types";
import { getDiaries } from "./services/diaryService";
import DiaryComponent from "./components/diaryComponent";

const App = () => {
  const [diaries, setDiaries] = useState<Diary[]>([]);

  useEffect(() => {
    const fetchDiaries = async () => {
      const data = await getDiaries();
      if (data) {
        setDiaries(data);
      }
    };
    fetchDiaries();
  }, []);
  return (
    <>
      <h1>Diary entries</h1>
      {diaries.map((diary) => (
        <DiaryComponent key={diary.id} diary={diary} />
      ))}
    </>
  );
};

export default App;
