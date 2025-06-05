import { useState } from "react";
import {
  CardContainer,
  CardText,
  CardTitle,
  CardHeader,
  CopyConfirm,
  IconButton,
  IconContainer,
  TagContainer,
} from "./card.styles";
import { selectIcon } from "../../utils/selectIcon";
import { CardType } from "../../types/card";
import { useDeleteCard } from "../../stores/cardStore";
//import { FaTrash, FaEdit } from "react-icons/fa"; undecided about currrent buttons or these icons

type CardProps = {
  card: CardType;
  editCard: (id: string) => void;
  tag: string;
};

interface Position {
  x: number;
  y: number;
}

export const Card = ({ card, editCard: editCard, tag }: CardProps) => {
  // TODO: Animation for copy confirmation and delete.
  const notificationDuration = 1000;
  const [notificationPosition, setNotificationPosition] = useState<Position>({
    x: 0,
    y: 0,
  });
  const [showCopyNotification, setShowCopyNotification] =
    useState<boolean>(false);

  const deleteThis = useDeleteCard();

  const copyToClipboard = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setNotificationPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    navigator.clipboard.writeText(card.text);

    setShowCopyNotification(true);

    setTimeout(() => {
      setShowCopyNotification(false);
    }, notificationDuration);
  };

  const trashClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    deleteThis(card.id);
  };

  const editClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    editCard(card.id);
  };

  return (
    <CardContainer onClick={copyToClipboard}>
      <CardHeader>
        <CardTitle>{card.title}</CardTitle>
        <IconContainer>
          <IconButton onClick={() => copyToClipboard}>📋</IconButton>
          <IconButton onClick={(e) => editClick(e)}>✏️</IconButton>
          <IconButton onClick={(e) => trashClick(e)}>❌</IconButton>
        </IconContainer>
      </CardHeader>
      <CardText>{card.text}</CardText>
      <TagContainer>{selectIcon(tag)}</TagContainer>
      {showCopyNotification && (
        <CopyConfirm
          x={notificationPosition.x}
          y={notificationPosition.y}
          duration={notificationDuration}
        >
          <span>✔ Text Copied!</span>
        </CopyConfirm>
      )}
    </CardContainer>
  );
};

export default Card;
