"use client";

import { Dropdown, PayoutsTable, SectionTitle } from "@/components";
import { ITEMS_LIMIT } from "@/constants";
import { Page } from "@/styles";
import { PAYOUTS_SERVER_RESPONSE } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [payoutsData, setPayoutsData] =
    useState<PAYOUTS_SERVER_RESPONSE | null>(null);
  const [isLoadingPayouts, setIsLoadingPayouts] = useState(true);
  const [limit, setLimit] = useState(ITEMS_LIMIT[0]);

  useEffect(() => {
    setIsLoadingPayouts(true);

    (async () => {
      const response = await fetch(
        `https://theseus-staging.lithium.ventures/api/v1/analytics/tech-test/payouts?limit=${limit.value}`
      );
      const data = (await response.json()) as PAYOUTS_SERVER_RESPONSE;

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
        {canShowPayouts ? <PayoutsTable data={payoutsData} /> : <div>Temporary loader...</div>}
      </Page.Body>
    </Page.Container>
  );
}
