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
  WarningText,
} from "./addCardModal.styles";
import { CardType } from "../../types/card";
import { CARD_TAGS } from "../../constants/tags";
import Tag from "../tag/tag.component";
import {
  useAddCard,
  useToggleIsAdding,
  useUpdateCard,
} from "../../stores/cardStore";

type InputProps = {
  card?: CardType;
};

const AddCardModal = ({
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
  const [isinvalidContent, setIsInvalidContent] = useState<boolean>(false);

  const toggleIsAdding = useToggleIsAdding();
  const updateCard = useUpdateCard();
  const addNewCard = useAddCard();

  const inputRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("handleSubmit called");
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
    if (currentContent.trim() === "") {
      setIsInvalidContent(true);
      return;
    }
    if (card) {
      const updatedCard = {
        text: currentContent,
        title: currentTitle,
        tag: currentTag,
      };
      updateCard(card.id, updatedCard);
    } else {
      const newCard = {
        text: currentContent,
        title: currentTitle,
        tag: currentTag,
      };
      addNewCard(newCard);
    }
    setCurrentContent("");
    toggleIsAdding();
  };

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        toggleIsAdding();
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [inputRef, toggleIsAdding]);

  return (
    <InputModal ref={inputRef}>
      <CloseIcon onClick={() => toggleIsAdding()} />
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
      <InputContainer
        onSubmit={handleSubmit}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            console.log("Enter key pressed, submitting form");
            const fakeSubmitEvent = {
              preventDefault: () => {},
            } as unknown as React.FormEvent<HTMLFormElement>;
            handleSubmit(fakeSubmitEvent);
          }
        }}
      >
        <InputField
          placeholder="add title..."
          value={currentTitle}
          onChange={(e) => setCurrentTitle(e.target.value)}
        />
        {isinvalidContent && (
          <WarningText>You cannot submit an empty card...</WarningText>
        )}
        <InputField
          $isInvalid={isinvalidContent}
          as="textarea"
          placeholder="add content..."
          value={currentContent}
          onChange={(e) => {
            if (isinvalidContent) {
              setIsInvalidContent(false);
            }
            setCurrentContent(e.target.value);
          }}
          style={{
            height: "100px",
            paddingTop: "10px",
            resize: "none",
            lineHeight: "1.4",
            verticalAlign: "top",
          }}
        />
        <InputButtons>
          <button onClick={() => toggleIsAdding()}>Cancel</button>
          <button type="submit">Submit</button>
        </InputButtons>
      </InputContainer>
    </InputModal>
  );
};

export default AddCardModal;
