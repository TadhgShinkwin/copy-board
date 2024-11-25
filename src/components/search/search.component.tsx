import { SearchContainer, SearchIcon, SearchInput } from "./search.styles";

const Search = () => {
  return (
    <SearchContainer>
      <SearchIcon>🔍</SearchIcon>
      <SearchInput placeholder="Search cards..." />
    </SearchContainer>
  );
};

export default Search;
