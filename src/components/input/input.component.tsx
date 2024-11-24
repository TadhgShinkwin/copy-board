import { useState, useRef, useEffect } from "react";
import {
  InputComponent,
  InputHeader,
  InputModal,
  InputTitle,
  TitleAccent,
} from "./input.styles";

type InputProps = {
  saveCard: (text: string) => void;
  closeInput: () => void;
};

const Input = ({ saveCard: saveCard, closeInput }: InputProps) => {
  const [currentText, setCurrentText] = useState("");
  const inputRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentText.trim() !== "") {
      saveCard(currentText);
      setCurrentText("");
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
      <InputHeader>
        <TitleAccent />
        <InputTitle>Add New Card</InputTitle>
      </InputHeader>
      <InputComponent onSubmit={handleSubmit}>
        <textarea
          value={currentText}
          onChange={(e) => setCurrentText(e.target.value)}
        />
        <button onClick={() => closeInput()}>Cancel</button>
        <button type="submit">Submit</button>
      </InputComponent>
    </InputModal>
  );
};

export default Input;
