import toast from "react-hot-toast";

const API_KEY = import.meta.env.VITE_API_KEY;
export const fetchQuote = async () => {
    const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
        headers: { "X-Api-Key": API_KEY },
    });
    if (!response.ok) {
        toast.error("Failed to fetch quote");
        throw new Error("Failed to fetch quote");
    }
    const data = await response.json();
    return data
};