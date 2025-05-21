import { CardTag } from "../../types/card";
import { TagIcon, TagOuter, TagTitle } from "./tag.styles";

const Tag = ({ title, value, icon }: CardTag) => {
  return (
    <TagOuter onClick={() => console.log(value)}>
      <TagIcon>{icon}</TagIcon>
      <TagTitle>&nbsp;{title}</TagTitle>
    </TagOuter>
  );
};

export default Tag;
