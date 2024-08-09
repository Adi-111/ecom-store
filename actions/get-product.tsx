import axios from 'axios';
import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  try {
    const { data } = await axios.get<Product>(`${URL}/${id}`);
    return data;
  } catch (error) {
    // Handle the error, e.g., log it or throw a custom error
    console.error("Failed to fetch product:", error);
    throw error;
  }
};

export default getProduct;
