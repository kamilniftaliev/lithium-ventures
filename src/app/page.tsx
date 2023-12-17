"use client";

import {
  Dropdown,
  Pagination,
  PayoutsTable,
  Search,
  SectionTitle,
  ThemeToggler,
} from "@/components";
import { ITEMS_LIMIT, PLACEHOLDER_PAYOUTS } from "@/constants";
import { useQuery } from "@/hooks";
import { GlobalStyles, Page, darkTheme, lightTheme } from "@/styles";
import { useState } from "react";
import { ThemeProvider } from "styled-components";

export default function Home() {
  const [isDarkTheme, setDarkTheme] = useState(window.localStorage.getItem('theme') === 'dark')
  const {
    payoutsData,
    isLoading,
    limit,
    page,
    errorMessage,
    setPage,
    query,
    onLimitSelect,
  } = useQuery();

  const { totalCount = 0 } = payoutsData?.metadata || {}
  const canShowPayouts = !isLoading && !!payoutsData;
  const canShowPagination =
    canShowPayouts &&
    // If showing less than total count of items
    payoutsData.metadata.limit < totalCount;

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Page.Container>
        <ThemeToggler isDark={isDarkTheme} toggle={setDarkTheme} />
        <Page.Title>Payouts</Page.Title>
        <Page.Body>
          <SectionTitle>
            <span>Payout History {!!totalCount && `(Total: ${totalCount})`}</span>
            <Dropdown
              items={ITEMS_LIMIT}
              selectedItem={limit}
              onSelect={onLimitSelect}
            />
          </SectionTitle>
          <Search onSearch={query} />
          {errorMessage ? (
            <Page.ErrorMessage>{errorMessage}</Page.ErrorMessage>
          ) : (
            <>
              <PayoutsTable
                isLoading={isLoading}
                data={canShowPayouts ? payoutsData : PLACEHOLDER_PAYOUTS}
              />

              {canShowPagination && (
                <Pagination
                  currentPage={page}
                  {...payoutsData?.metadata}
                  onSelect={setPage}
                />
              )}
            </>
          )}
        </Page.Body>
      </Page.Container>
    </ThemeProvider>
  );
}
