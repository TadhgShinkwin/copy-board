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
  endEditing,
  note,
}: {
  endEditing: () => void;
  note: CardType;
}) => {
  const [currentContent, setCurrentContent] = useState(note.text);
  const editRef = useRef<HTMLDivElement>(null);

  const saveNote = () => {
    // TODO: Save note to local storage
    console.log(currentContent);
    endEditing();
  };

  const detectOutsideClick = () => {
    useEffect(() => {
      function handleOutsideClick(event: any) {
        if (editRef.current && !editRef.current.contains(event.target)) {
          endEditing();
        }
      }
      document.addEventListener("mousedown", handleOutsideClick);
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }, [editRef]);
  };
  detectOutsideClick();
  return (
    <EditModalContainer ref={editRef}>
      <CloseIcon onClick={endEditing} />
      <Title>Edit Card</Title>
      <EditModalInput
        value={currentContent}
        onChange={(e) => setCurrentContent(e.target.value)}
      />
      <EditModalButton onClick={() => saveNote()}>Save</EditModalButton>
    </EditModalContainer>
  );
};

export default EditModal;
