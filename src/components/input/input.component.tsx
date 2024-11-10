import { useState } from "react";
import { InputComponent } from "./input.styles";

type InputProps = {
  saveNote: (text: string) => void;
};

export const Input = ({ saveNote }: InputProps) => {
  const [currentText, setCurrentText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentText.trim() !== "") {
      saveNote(currentText);
      setCurrentText("");
    }
  };

  return (
    <InputComponent onSubmit={handleSubmit}>
      <textarea
        value={currentText}
        onChange={(e) => setCurrentText(e.target.value)}
      ></textarea>
      <button type="submit">Submit</button>
    </InputComponent>
  );
};

export default Input;
