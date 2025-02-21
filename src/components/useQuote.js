import { useQuery } from "@tanstack/react-query";
import { fetchQuote } from "../services/apicall";

export const useQuote = () => {
    const { data, isPending, error, refetch } = useQuery({
        queryKey: ["quote"],
        queryFn: fetchQuote,
        refetchOnWindowFocus: false
    });

    if (error) {
        console.error("Error fetching quote:", error);
    }

    return { data, isPending, error, refetch };
};