import { StyledSearch } from "@/styles";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

type Props = {
  onSearch: (searchTerm: string) => void;
};

export function Search({ onSearch }: Props) {
  const [searchTerm, setSearchTerm] = useState("");

  const onChange = useCallback((event: ChangeEvent) => {
    setSearchTerm((event.target as HTMLInputElement).value);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(searchTerm.trim());
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [onSearch, searchTerm]);

  const clearSearch = () => {
    setSearchTerm("");
  };

  const canShowClearIcon = !!searchTerm.length;

  return (
    <StyledSearch.Container>
      <StyledSearch.SearchIcon
        src="/icons/search.svg"
        width={18}
        height={18}
        alt="Search"
      />
      <StyledSearch.Input
        value={searchTerm}
        onChange={onChange}
        placeholder="Search for a user ..."
      />
      {canShowClearIcon && (
        <StyledSearch.ClearIcon
          src="/icons/x.svg"
          width={12}
          height={12}
          alt="Clear"
          onClick={clearSearch}
        />
      )}
    </StyledSearch.Container>
  );
}
