import { IconContainer, TagOuter, TagTitle } from "./tag.styles";
import { selectIcon } from "../../utils/selectIcon";

type TagProps = {
  title: string;
  value: string;
  handleClick: (tag: string) => void;
  isSelected: boolean;
};

const Tag = ({ title, value, handleClick, isSelected }: TagProps) => {
  return (
    <TagOuter onClick={() => handleClick(value)} $isSelected={isSelected}>
      <IconContainer>{selectIcon(value)}</IconContainer>
      <TagTitle>&nbsp;{title}</TagTitle>
    </TagOuter>
  );
};

export default Tag;
