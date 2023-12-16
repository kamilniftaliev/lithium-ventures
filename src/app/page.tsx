"use client";

import { PayoutsTable, SectionTitle } from "@/components";
import { Page } from "@/styles";
import { PAYOUTS_SERVER_RESPONSE } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [payoutsData, setPayoutsData] =
    useState<PAYOUTS_SERVER_RESPONSE | null>(null);
  const [isLoadingPayouts, setIsLoadingPayouts] = useState(true);

  useEffect(() => {
    setIsLoadingPayouts(true);

    (async () => {
      const response = await fetch(
        "https://theseus-staging.lithium.ventures/api/v1/analytics/tech-test/payouts"
      );
      const data = (await response.json()) as PAYOUTS_SERVER_RESPONSE;

      setPayoutsData(data);
      setIsLoadingPayouts(false);
    })();
  }, []);

  const canShowPayouts = !isLoadingPayouts && payoutsData

  return (
    <Page.Container>
      <Page.Title>Payouts</Page.Title>
      <Page.Body>
        <SectionTitle>Payout History</SectionTitle>
        {canShowPayouts && <PayoutsTable data={payoutsData} />}
      </Page.Body>
    </Page.Container>
  );
}
