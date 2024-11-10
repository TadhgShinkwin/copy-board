import { CardContainer, IconContainer, CardText } from "./card.styles";
import { FaTrash, FaEdit } from "react-icons/fa";

type CardProps = {
  content: string;
  id: string;
  deleteNote: (id: string) => void;
  editNote: (id: string) => void;
};

export const Card = ({ content, id, deleteNote, editNote }: CardProps) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
  };

  const trashClick = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    deleteNote(id);
  };

  const editClick = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    editNote(id);
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
