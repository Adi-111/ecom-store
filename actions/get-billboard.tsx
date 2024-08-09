import axios from 'axios';
import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
    try {
        const res = await axios.get<Billboard>(`${URL}/${id}`);
        return res.data;
    } catch (error) {
        console.error("Failed to fetch Billboard:", error);
        throw new Error("Failed to fetch Billboard");
    }
};

export default getBillboard;
