import axios from 'axios';
import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  try {
    const { data } = await axios.get<Category>(`${URL}/${id}`);
    return data;
  } catch (error) {
    // Handle error, e.g., log it or throw a custom error
    console.error("Failed to fetch category:", error);
    throw error;
  }
};

export default getCategory;
