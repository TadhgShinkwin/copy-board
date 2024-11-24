import { useState, useRef, useEffect } from "react";
import { CardType } from "../../types/card";
import {
  CloseIcon,
  EditModalContainer,
  EditModalInput,
  EditModalButton,
  Title,
} from "./editModal.styles";

export const EditModal = ({
  //TODO: bring styles inline with rest of app
  endEditing,
  card: card,
}: {
  endEditing: () => void;
  card: CardType;
}) => {
  const [currentContent, setCurrentContent] = useState(card.text);
  const editRef = useRef<HTMLDivElement>(null);

  const saveCard = () => {
    // TODO: Save card to local storage
    console.log(currentContent);
    endEditing();
  };

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (editRef.current && !editRef.current.contains(event.target as Node)) {
        endEditing();
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [editRef, endEditing]);

  return (
    <EditModalContainer ref={editRef}>
      <CloseIcon onClick={endEditing} />
      <Title>Edit Card</Title>
      <EditModalInput
        value={currentContent}
        onChange={(e) => setCurrentContent(e.target.value)}
      />
      <EditModalButton onClick={() => saveCard()}>Save</EditModalButton>
    </EditModalContainer>
  );
};

export default EditModal;
