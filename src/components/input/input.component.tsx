import { useState, useRef, useEffect } from "react";
import {
  InputContainer,
  InputField,
  InputHeader,
  InputModal,
  InputTitle,
  TitleAccent,
} from "./input.styles";
import { CloseIcon } from "../editModal/editModal.styles";

type InputProps = {
  saveCard: (text: string) => void;
  closeInput: () => void;
};

const Input = ({ saveCard: saveCard, closeInput }: InputProps) => {
  const [currentContent, setCurrentContent] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");

  const inputRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentContent.trim() !== "") {
      saveCard(currentContent);
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
        <TitleAccent />
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
        <button onClick={() => closeInput()}>Cancel</button>
        <button type="submit">Submit</button>
      </InputContainer>
    </InputModal>
  );
};

export default Input;
