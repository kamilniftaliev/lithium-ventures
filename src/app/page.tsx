"use client";

import { Dropdown, PayoutsTable, SectionTitle } from "@/components";
import { ITEMS_LIMIT, PLACEHOLDER_PAYOUTS } from "@/constants";
import { Page } from "@/styles";
import { PayoutsServerResponse } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [payoutsData, setPayoutsData] =
    useState<PayoutsServerResponse | null>(null);
  const [isLoadingPayouts, setIsLoadingPayouts] = useState(true);
  const [limit, setLimit] = useState(ITEMS_LIMIT[0]);

  useEffect(() => {
    setIsLoadingPayouts(true);

    (async () => {
      const response = await fetch(
        `https://theseus-staging.lithium.ventures/api/v1/analytics/tech-test/payouts?limit=${limit.value}`
      );
      const data = (await response.json()) as PayoutsServerResponse;

      setPayoutsData(data);
      setIsLoadingPayouts(false);
    })();
  }, [limit]);

  const canShowPayouts = !isLoadingPayouts && payoutsData;

  return (
    <Page.Container>
      <Page.Title>Payouts</Page.Title>
      <Page.Body>
        <SectionTitle>
          <span>Payout History</span>
          <Dropdown
            items={ITEMS_LIMIT}
            selectedItem={limit}
            onSelect={setLimit}
          />
        </SectionTitle>
        <PayoutsTable
          isLoading={isLoadingPayouts}
          data={canShowPayouts ? payoutsData : PLACEHOLDER_PAYOUTS}
        />
      </Page.Body>
    </Page.Container>
  );
}
