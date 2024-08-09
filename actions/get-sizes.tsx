import axios from 'axios';
import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  try {
    const { data } = await axios.get<Size[]>(URL);
    return data;
  } catch (error) {
    // Handle the error, e.g., log it or throw a custom error
    console.error("Failed to fetch sizes:", error);
    throw error;
  }
};

export default getSizes;
