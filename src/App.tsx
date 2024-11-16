import { useState, useEffect } from "react";
import "./App.css";
import { Board } from "./components/board/board.component";
import { Input } from "./components/input/input.component";
import { v4 as uuidv4 } from "uuid";

type Card = {
  id: string;
  text: string;
};

function App() {
  const [cards, setCards] = useState<Card[]>([]);

  const updateCards = () => {
    localStorage.setItem("cards", JSON.stringify(cards));
  };

  const retrieveCards = () => {
    const savedCards = localStorage.getItem("cards");
    if (savedCards) {
      setCards(JSON.parse(savedCards));
    }
  };

  const addCard = (text: string) => {
    const newCard = {
      id: uuidv4(),
      text: text,
    };
    setCards([...cards, newCard]);
  };

  const deleteCard = (id: string) => {
    console.log(`Deleting card: ${id}`);
    setCards(cards.filter((card) => card.id !== id));
    if (cards.length === 1) {
      localStorage.removeItem("cards");
    }
  };

  useEffect(() => {
    retrieveCards();
  }, []);

  useEffect(() => {
    if (cards.length > 0) {
      updateCards();
    }
  }, [cards]);

  return (
    <>
      <h1>Copy Board</h1>
      <Input saveCard={addCard} />
      <Board cards={cards} deleteCard={deleteCard} />
    </>
  );
}

export default App;
