"use client";

import {
  Dropdown,
  Pagination,
  PayoutsTable,
  Search,
  SectionTitle,
} from "@/components";
import { ITEMS_LIMIT, PLACEHOLDER_PAYOUTS } from "@/constants";
import { useQuery } from "@/hooks";
import { Page } from "@/styles";

export default function Home() {
  const {
    payoutsData,
    isLoading,
    limit,
    page,
    errorMessage,
    setPage,
    query,
    onLimitSelect,
  } = useQuery()

  const canShowPayouts = !isLoading && !!payoutsData;
  const canShowPagination =
    canShowPayouts &&
    // If showing less than total count of items
    payoutsData.metadata.limit < payoutsData.metadata.totalCount;

  return (
    <Page.Container>
      <Page.Title>Payouts</Page.Title>
      <Page.Body>
        <SectionTitle>
          <span>Payout History</span>
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
  );
}
