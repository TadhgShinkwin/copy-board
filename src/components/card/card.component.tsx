import { useState } from "react";
import {
  CardContainer,
  CopyConfirm,
  IconButton,
  IconContainer,
  CardText,
} from "./card.styles";
//import { FaTrash, FaEdit } from "react-icons/fa"; undecided about currrent buttons or these icons

type CardProps = {
  content: string;
  id: string;
  deleteCard: (id: string) => void;
  editCard: (id: string) => void;
};

interface Position {
  x: number;
  y: number;
}

export const Card = ({
  content,
  id,
  deleteCard: deleteCard,
  editCard: editCard,
}: CardProps) => {
  // TODO: Animation for copy confirmation and delete.
  const notificationDuration = 1000;
  const [notificationPosition, setNotificationPosition] = useState<Position>({
    x: 0,
    y: 0,
  });
  const [showCopyNotification, setShowCopyNotification] =
    useState<boolean>(false);

  const copyToClipboard = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setNotificationPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    navigator.clipboard.writeText(content);

    setShowCopyNotification(true);

    setTimeout(() => {
      setShowCopyNotification(false);
    }, notificationDuration);
  };

  const trashClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    deleteCard(id);
  };

  const editClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    editCard(id);
  };

  return (
    <CardContainer onClick={copyToClipboard}>
      <IconContainer>
        <IconButton onClick={() => copyToClipboard}>📋</IconButton>
        <IconButton onClick={(e) => editClick(e)}>✏️</IconButton>
        <IconButton onClick={(e) => trashClick(e)}>❌</IconButton>
      </IconContainer>
      <CardText>{content}</CardText>
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
