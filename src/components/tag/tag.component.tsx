import { IconContainer, TagOuter, TagTitle } from "./tag.styles";
import {
  FaBriefcase,
  FaCode,
  FaRobot,
  FaShareAlt,
  FaThLarge,
  FaUser,
  FaTag,
} from "react-icons/fa";

type TagProps = {
  title: string;
  value: string;
  handleClick: (tag: string) => void;
  isSelected: boolean;
};

export const selectIcon = (value: string) => {
  // TODO: Move to utilities??
  switch (value) {
    case "work":
      return <FaBriefcase />;
    case "personal":
      return <FaUser />;
    case "social":
      return <FaShareAlt />;
    case "coding":
      return <FaCode />;
    case "aiPrompts":
      return <FaRobot />;
    case "misc":
      return <FaThLarge />;
    case "none":
      return;
    default:
      return <FaTag />; // TODO: Allow users to create custom tags
  }
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
