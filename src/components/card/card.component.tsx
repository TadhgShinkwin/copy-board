import { CardContainer, IconContainer, CardText } from "./card.styles";
import { FaTrash, FaEdit } from "react-icons/fa";

type CardProps = {
  content: string;
  id: string;
  deleteCard: (id: string) => void;
  editCard: (id: string) => void;
};

export const Card = ({
  content,
  id,
  deleteCard: deleteCard,
  editCard: editCard,
}: CardProps) => {
  // TODO: Animation for copy confirmation and delete.
  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
  };

  const trashClick = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    deleteCard(id);
  };

  const editClick = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    editCard(id);
  };

  return (
    <CardContainer onClick={copyToClipboard}>
      <IconContainer>
        <FaTrash size="0.8em" onClick={(e) => trashClick(e)} />
        <FaEdit size="0.8em" onClick={(e) => editClick(e)} />
      </IconContainer>
      <CardText>{content}</CardText>
    </CardContainer>
  );
};

export default Card;
