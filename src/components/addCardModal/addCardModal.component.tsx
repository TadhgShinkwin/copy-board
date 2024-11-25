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
// TODO: Pull out generic modal styles and import to avoid repetition
// TODO: Add functionality for Enter key to submit form.
// TODO: Form Validation - Error toasts

type InputProps = {
  saveCard: (text: string, title: string) => void;
  closeInput: () => void;
};

const AddCardModal = ({ saveCard: saveCard, closeInput }: InputProps) => {
  //TO-DO: fix styling for input modal. Don't include dropdown yet
  const [currentContent, setCurrentContent] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");

  const inputRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentContent.trim() !== "") {
      saveCard(currentContent, currentTitle);
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
        <InputTitle>Add New Card</InputTitle>
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
