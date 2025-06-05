import { create } from "zustand";
import { v4 as uuidv4 } from 'uuid';

export interface Card {
    id: string;
    title: string;
    text: string;
    tag: string;
}

export interface newCard {
    title: string;
    text: string;
    tag: string;
}

interface CardState {
    cards: Card[];
    setCards: (cards: Card[]) => void;
    addCard: (card: newCard) => void;
    deleteCard: (id: string) => void;
    updateCard: (id: string, updatedCard: Partial<Card>) => void;
    isAdding: boolean;
    toggleIsAdding: () => void;
}
// TODO: Fix Delete and Add cards to reflect changes in localStorage
const useCardStore = create<CardState>((set) => ({
    cards: [],
    setCards: (cards) => {
        console.log("Setting cards:", cards);
        localStorage.setItem("cards", JSON.stringify(cards));
        set({ cards })
    },
    
    addCard: (cardData) => set((state) => {
        const newCard = {
            id: uuidv4(),
            title: cardData.title,
            text: cardData.text,
            tag: cardData.tag,
        }
        const updatedCards = [...state.cards, newCard];
        localStorage.setItem("cards", JSON.stringify(updatedCards));
        return { cards: updatedCards }}),

    deleteCard: (id) => set((state) => {
        const updatedCards = state.cards.filter(card => card.id !== id);
        localStorage.setItem("cards", JSON.stringify(updatedCards));
        return { cards: updatedCards };
    }),
    updateCard: (id, updatedCard) => set((state) => { 
        const updatedCards = state.cards.map(card =>
            card.id === id ? { ...card, ...updatedCard } : card
        )
        localStorage.setItem("cards", JSON.stringify(updatedCards));
        return {
        cards: updatedCards
    }}),
    isAdding: false,
    toggleIsAdding: () => set((state) => ({ isAdding: !state.isAdding })),

}));
export const useCards = () => useCardStore((state) => state.cards);
export const useSetCards = () => useCardStore((state) => state.setCards);
export const useAddCard = () => useCardStore((state) => state.addCard);
export const useDeleteCard = () => useCardStore((state) => state.deleteCard);
export const useUpdateCard = () => useCardStore((state) => state.updateCard);
export const useIsAdding = () => useCardStore((state) => state.isAdding);
export const useToggleIsAdding = () => useCardStore((state) => state.toggleIsAdding);
