import { useState, useRef } from "react";
import { BoardContainer } from "./board.styles";
import { Card } from "../card/card.component";
import { EditModal } from "../editModal/editModal.component";
import { CardType } from "../../types/card";

export const Board = ({
  cards,
  deleteNote,
}: {
  cards: CardType[];
  deleteNote: (id: string) => void;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingNote, setEditingNote] = useState<CardType | null>(null);

  const editNote = (note: CardType) => {
    setIsEditing(true);
    setEditingNote(note);
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
            deleteNote={deleteNote}
            editNote={() => editNote(card)}
          />
        ))
      ) : (
        <h1>Try adding some cards</h1>
      )}
      {isEditing && editingNote && (
        <EditModal endEditing={endEditing} note={editingNote} />
      )}
    </BoardContainer>
  );
};

export default Board;
