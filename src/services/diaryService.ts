import axios from "axios";
import { Diary } from "./types";

export const getDiaries = async () => {
  try {
    const data = await axios.get<Diary[]>("http://localhost:3000/api/diaries");
    return data.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      throw new Error(e.message);
    }
    console.error(e);
    throw new Error("something went wrong during data fetch");
  }
};
