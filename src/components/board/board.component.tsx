import { useEffect, useState } from "react";
import { BoardContainer, Placeholder } from "./board.styles";
import { TagContainer } from "../addCardModal/addCardModal.styles";
import { Card } from "../card/card.component";
import AddCardModal from "../addCardModal/addCardModal.component";
import Tag from "../tag/tag.component";
import { CardType } from "../../types/card";
import { CARD_TAGS } from "../../constants/tags";

export const Board = ({ cards }: { cards: CardType[] }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingCard, setEditingCard] = useState<CardType | null>(null);
  const [tagFilter, setTagFilter] = useState<string>("");
  const [renderedCards, setRenderedCards] = useState<CardType[]>(cards);

  const editCard = (card: CardType) => {
    setIsEditing(true);
    setEditingCard(card);
  };

  useEffect(() => {
    if (tagFilter) {
      setRenderedCards(cards.filter((card) => card.tag === tagFilter));
    } else setRenderedCards(cards);
  }, [tagFilter, cards]);

  const handleClick = (tag: string) => {
    setTagFilter(tag === tagFilter ? "" : tag);
  };

  return (
    <>
      <TagContainer>
        {Object.entries(CARD_TAGS).map(([key, { title, value }]) => (
          <Tag
            key={key}
            title={title}
            value={value}
            handleClick={handleClick}
            isSelected={value === tagFilter}
          />
        ))}
      </TagContainer>
      <BoardContainer>
        {renderedCards.length > 0 ? (
          renderedCards.map((card) => (
            <Card
              key={card.id}
              card={card}
              editCard={() => editCard(card)}
              tag={card.tag}
            />
          ))
        ) : (
          <Placeholder>Try adding some cards</Placeholder>
        )}
        {isEditing && editingCard && <AddCardModal card={editingCard} />}
      </BoardContainer>
    </>
  );
};

export default Board;
