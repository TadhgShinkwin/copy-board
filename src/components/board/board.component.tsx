import { useState } from "react";
import { BoardContainer, Placeholder } from "./board.styles";
import { Card } from "../card/card.component";
import AddCardModal from "../addCardModal/addCardModal.component";
import { CardType } from "../../types/card";

export const Board = ({
  cards,
  deleteCard: deleteCard,
}: {
  cards: CardType[];
  deleteCard: (id: string) => void;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingCard, setEditingCard] = useState<CardType | null>(null);

  const editCard = (card: CardType) => {
    setIsEditing(true);
    setEditingCard(card);
  };

  const endEditing = () => {
    setIsEditing(false);
  };

  const saveEdit = (text: string, title: string, id: string) => {
    console.log(`Editing card ${id} with title: ${title} and content: ${text}`);
    setIsEditing(false);
  };

  return (
    <BoardContainer>
      {cards.length > 0 ? (
        cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            deleteCard={deleteCard}
            editCard={() => editCard(card)}
          />
        ))
      ) : (
        <Placeholder>Try adding some cards</Placeholder>
      )}
      {isEditing && editingCard && (
        <AddCardModal
          saveCard={saveEdit}
          closeInput={endEditing}
          card={editingCard}
        />
      )}
    </BoardContainer>
  );
};

export default Board;
