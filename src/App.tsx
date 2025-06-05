import { useState } from "react";
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
import { useHydrateCards } from "./hooks/useHydrateCards";
import { useCards, useIsAdding, useToggleIsAdding } from "./stores/cardStore";

function App() {
  useHydrateCards();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const cards = useCards();

  const updateSearch = (term: string) => {
    setSearchTerm(term.toLowerCase());
  };

  const renderCards = () => {
    if (searchTerm) {
      return cards.filter(
        (card) =>
          card.text.toLowerCase().includes(searchTerm) ||
          card.title.toLocaleLowerCase().includes(searchTerm)
      );
    }
    return cards;
  };

  return (
    <AppBody>
      <HeadingsContainer>
        <Title>CopyBoard</Title>
        <Subtitle>Quick access to your frequently used text</Subtitle>
      </HeadingsContainer>
      <ControlsContainer>
        <Search updateSearch={updateSearch} />
        <ControlsSpacer />
        <AddButton onClick={useToggleIsAdding()}>&#x002B; Add New</AddButton>
      </ControlsContainer>
      <Board cards={renderCards()} />
      {useIsAdding() && <AddCardModal />}
    </AppBody>
  );
}

export default App;
