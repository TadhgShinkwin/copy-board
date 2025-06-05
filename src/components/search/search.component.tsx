import { SearchContainer, SearchIcon, SearchInput } from "./search.styles";
import { useState, useEffect } from "react";
import { useDebouncedValue } from "../../hooks/useDebouncedValue";

// TODO: Consider adding search functionality to Card Store and render cards from there
const Search = ({ updateSearch }: { updateSearch: (term: string) => void }) => {
  const [searchContent, setSearchContent] = useState<string>("");
  const debouncedSearchTerm = useDebouncedValue(searchContent, 200);

  useEffect(() => {
    updateSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

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
