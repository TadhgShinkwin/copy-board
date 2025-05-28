import {
  FaBriefcase,
  FaCode,
  FaPlus,
  FaRobot,
  FaShareAlt,
  FaTag,
  FaThLarge,
  FaUser,
} from "react-icons/fa";

export const selectIcon = (value: string): JSX.Element | undefined => {
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
    case "custom":
      return <FaPlus />;
    case "none":
      return;
    default:
      return <FaTag />; // TODO: Allow users to create custom tags
  }
};
