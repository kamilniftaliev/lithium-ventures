import { StyledPagination } from "@/styles";
import { Dispatch, SetStateAction } from "react";

type Props = {
  currentPage: number;
  totalCount: number;
  limit: number;
  onSelect: Dispatch<SetStateAction<number>>;
};

export function Pagination({
  currentPage,
  limit,
  totalCount,
  onSelect,
}: Props) {
  const totalPages = Math.ceil(totalCount / limit);

  return (
    <StyledPagination.Container>
      <StyledPagination.Item onClick={() => onSelect(currentPage - 1)}>
        <StyledPagination.ArrowIcon
          src="/icons/arrow-down.svg"
          width={12}
          height={12}
          alt="Previous page"
          $isFlipped
        />
      </StyledPagination.Item>

      {`${currentPage} of ${totalPages}`}

      <StyledPagination.Item $isNextPageBtn onClick={() => onSelect(currentPage + 1)}>
        <StyledPagination.ArrowIcon
          src="/icons/arrow-down.svg"
          width={12}
          height={12}
          alt="Next page"
        />
      </StyledPagination.Item>
    </StyledPagination.Container>
  );
}
