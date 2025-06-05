import { useEffect } from "react";
import { useSetCards } from "../stores/cardStore";

export const useHydrateCards = () => {
    const setCards = useSetCards();

    useEffect(() => {
        const savedCards = localStorage.getItem("cards");
        if (savedCards) {
            setCards(JSON.parse(savedCards));
        }
    }, []);
};
