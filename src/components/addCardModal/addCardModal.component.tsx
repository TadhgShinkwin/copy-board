import { useState, useRef, useEffect } from "react";
import {
  CloseIcon,
  InputButtons,
  InputContainer,
  InputField,
  InputHeader,
  InputModal,
  InputTitle,
  TagContainer,
} from "./addCardModal.styles";
import { CardType } from "../../types/card";
import { CARD_TAGS } from "../../constants/tags";
import Tag from "../tag/tag.component";
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
  const [currentContent, setCurrentContent] = useState<string>(
    card ? card.text : ""
  );
  const [currentTitle, setCurrentTitle] = useState<string>(
    card ? card.title : ""
  );
  const [currentTag, setCurrentTag] = useState<string>(
    card ? card.tag : "none"
  );
  // const [isAddingCustomTag, setIsAddingCustomTag] = useState<boolean>(false);

  const inputRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitContent();
  };

  const handleClick = (tag: string) => {
    setCurrentTag(tag === currentTag ? "none" : tag);
  };

  const addCustom = (tag: string) => {
    console.log(`setIsAddingCustomTag(true) -> ${tag}`);
  };

  const submitContent = () => {
    if (currentContent.trim() !== "") {
      if (card) {
        saveCard(currentContent, currentTitle, currentTag, card.id);
      } else saveCard(currentContent, currentTitle, currentTag);
      setCurrentContent("");
    }
  };

  document.addEventListener("keypress", function (e) {
    if (e.code === "Enter") {
      submitContent();
    }
  });

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
      <TagContainer>
        {Object.entries(CARD_TAGS).map(([key, { title, value }]) => (
          <Tag
            key={key}
            title={title}
            value={value}
            handleClick={handleClick}
            isSelected={value === currentTag}
          />
        ))}
        <Tag
          title="Make Your Own"
          value="custom"
          handleClick={addCustom}
          isSelected={false}
        />
      </TagContainer>
      <InputContainer onSubmit={handleSubmit}>
        <InputField
          placeholder="add title..."
          value={currentTitle}
          onChange={(e) => setCurrentTitle(e.target.value)}
        />
        <InputField
          as="textarea"
          placeholder="add content..."
          value={currentContent}
          onChange={(e) => setCurrentContent(e.target.value)}
          style={{
            height: "100px",
            paddingTop: "10px",
            resize: "none",
            lineHeight: "1.4",
            verticalAlign: "top", // optional
          }}
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
