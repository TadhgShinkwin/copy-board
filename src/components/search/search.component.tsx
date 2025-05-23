import { SearchContainer, SearchIcon, SearchInput } from "./search.styles";
import { useState, useEffect } from "react";

const Search = ({ updateSearch }: { updateSearch: (term: string) => void }) => {
  const [searchContent, setSearchContent] = useState<string>("");
  // TODO: debounce search
  useEffect(() => {
    updateSearch(searchContent);
  }, [searchContent]);

  return (
    <SearchContainer>
      <SearchIcon>🔍</SearchIcon>
      <SearchInput
        onChange={(e) => setSearchContent(e.target.value)}
        placeholder="Search cards..."
      />
    </SearchContainer>
  );
};

export default Search;
