import { useState, useRef, useEffect } from "react";
import {
  CloseIcon,
  InputButtons,
  InputContainer,
  InputField,
  InputHeader,
  InputModal,
  InputTitle,
} from "./addCardModal.styles";
import { CardType } from "../../types/card";
// TODO: Add functionality for Enter key to submit form.
// TODO: Form Validation - Error toasts

type InputProps = {
  saveCard: (...args: string[]) => void;
  closeInput: () => void;
  card?: CardType;
};

const AddCardModal = ({
  saveCard: saveCard,
  closeInput,
  card, //card to be sent to modal if editing
}: InputProps) => {
  const [currentContent, setCurrentContent] = useState(card ? card.text : "");
  const [currentTitle, setCurrentTitle] = useState(card ? card.title : "");

  const inputRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentContent.trim() !== "") {
      if (card) {
        saveCard(currentContent, currentTitle, card.id);
      } else saveCard(currentContent, currentTitle);
      setCurrentContent("");
    }
  };

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        closeInput();
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [inputRef, closeInput]);

  return (
    <InputModal ref={inputRef}>
      <CloseIcon onClick={closeInput} />
      <InputHeader>
        <InputTitle>{card ? "Edit Card" : "Add New Card"}</InputTitle>
      </InputHeader>
      <InputContainer onSubmit={handleSubmit}>
        <InputField
          placeholder="add title..."
          value={currentTitle}
          onChange={(e) => setCurrentTitle(e.target.value)}
        />
        <InputField
          placeholder="add content..."
          value={currentContent}
          onChange={(e) => setCurrentContent(e.target.value)}
        />
        <InputButtons>
          <button onClick={() => closeInput()}>Cancel</button>
          <button type="submit">Submit</button>
        </InputButtons>
      </InputContainer>
    </InputModal>
  );
};

export default AddCardModal;
