import { useState, useRef } from "react";
import { BoardContainer } from "./board.styles";
import { Card } from "../card/card.component";
import { EditModal } from "../editModal/editModal.component";
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

  return (
    <BoardContainer>
      {cards.length > 0 ? (
        cards.map((card) => (
          <Card
            key={card.id}
            content={card.text}
            id={card.id}
            deleteCard={deleteCard}
            editCard={() => editCard(card)}
          />
        ))
      ) : (
        <h1>Try adding some cards</h1>
      )}
      {isEditing && editingCard && (
        <EditModal endEditing={endEditing} card={editingCard} />
      )}
    </BoardContainer>
  );
};

export default Board;
