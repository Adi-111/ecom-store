import axios from 'axios';
import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  try {
    const { data } = await axios.get<Color[]>(URL);
    return data;
  } catch (error) {
    // Handle the error, e.g., log it or throw a custom error
    console.error("Failed to fetch colors:", error);
    throw error;
  }
};

export default getColors;
