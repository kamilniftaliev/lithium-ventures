"use client";

import { ITEMS_LIMIT } from "@/constants";
import { DropdownItem, PayoutsServerResponse } from "@/types";
import { request } from "@/utils";
import { useCallback, useState } from "react";

export function useQuery() {
  const [payoutsData, setPayoutsData] = useState<PayoutsServerResponse | null>(
    null
  );
  const [isLoading, setIsLoadingPayouts] = useState(true);
  const [limit, setLimit] = useState(ITEMS_LIMIT[0]);
  const [page, setPage] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");

  const query = useCallback(
    (searchTerm?: string) => {
      setIsLoadingPayouts(true);

      request({
        limit: +limit.value,
        page,
        searchTerm,
      })
        .then((data) => {
          setPayoutsData(data);
          setErrorMessage('')
        })
        .catch((error: Error) => {
          setErrorMessage(error.message);
        })
        .finally(() => {
          setIsLoadingPayouts(false);
        });
    },
    [limit.value, page]
  );

  const onLimitSelect = useCallback((limit: DropdownItem) => {
    setLimit(limit);
    setPage(1);
    query()
  }, [query]);

  return {
    payoutsData,
    isLoading,
    limit,
    page,
    errorMessage,
    
    query,
    setPage,
    onLimitSelect,
  };
}
