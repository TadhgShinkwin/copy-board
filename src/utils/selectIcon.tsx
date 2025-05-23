import {
  FaBriefcase,
  FaUser,
  FaShareAlt,
  FaCode,
  FaRobot,
  FaThLarge,
  FaTag,
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
    case "none":
      return;
    default:
      return <FaTag />; // TODO: Allow users to create custom tags
  }
};
