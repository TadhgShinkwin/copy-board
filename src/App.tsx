import { useState, useEffect } from "react";
import "./App.css";
import {
  AddButton,
  AppBody,
  ControlsContainer,
  ControlsSpacer,
  HeadingsContainer,
  Subtitle,
  Title,
} from "./App.styles";
import { Board } from "./components/board/board.component";
import AddCardModal from "./components/addCardModal/addCardModal.component";
import Search from "./components/search/search.component";
import { CardType } from "./types/card";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [isAdding, setIsAdding] = useState<boolean>(false);

  const updateCards = () => {
    localStorage.setItem("cards", JSON.stringify(cards));
  };

  const retrieveCards = () => {
    const savedCards = localStorage.getItem("cards");
    if (savedCards) {
      setCards(JSON.parse(savedCards));
    }
  };

  const addCard = (text: string, title: string) => {
    const newCard = {
      id: uuidv4(),
      title: title,
      text: text,
    };
    setCards([...cards, newCard]);
    setIsAdding(false);
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

  const closeInput = () => {
    setIsAdding(false);
  };

  return (
    <AppBody>
      <HeadingsContainer>
        <Title>CopyBoard</Title>
        <Subtitle>Quick access to your frequently used text</Subtitle>
      </HeadingsContainer>
      <ControlsContainer>
        <Search />
        <ControlsSpacer />
        <AddButton onClick={() => setIsAdding(true)}>
          &#x002B; Add New
        </AddButton>
      </ControlsContainer>
      <Board cards={cards} deleteCard={deleteCard} />
      {isAdding && <AddCardModal saveCard={addCard} closeInput={closeInput} />}
    </AppBody>
  );
}

export default App;
