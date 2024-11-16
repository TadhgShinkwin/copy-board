import { useState } from "react";
import { InputComponent } from "./input.styles";

type InputProps = {
  saveCard: (text: string) => void;
};

export const Input = ({ saveCard: saveCard }: InputProps) => {
  const [currentText, setCurrentText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentText.trim() !== "") {
      saveCard(currentText);
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
