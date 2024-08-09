import axios from "axios";
import { Category } from "@/types";


const URL=`${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
    try {
        const res = await axios.get<Category[]>(URL);
        return res.data;
    } catch (error) {
        console.error("Failed to fetch categories:", error);
        throw new Error("Failed to fetch categories");
    }
};

export default getCategories;
