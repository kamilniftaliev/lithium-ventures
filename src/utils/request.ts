import { BASE_PAYOUTS_URL } from "@/constants";
import { PayoutsServerResponse } from "@/types";

type Params = {
  limit?: number;
  page?: number;
  searchTerm?: string;
};

export async function request({ limit, page, searchTerm }: Params) {
  const URL_TAIL = searchTerm
    ? `search?query=${searchTerm}`
    : `payouts?limit=${limit}&page=${page}`;

  const response = await fetch(`${BASE_PAYOUTS_URL}${URL_TAIL}`);

  const data = (await response.json()) as
    | PayoutsServerResponse
    | PayoutsServerResponse["data"];

  if ((data as PayoutsServerResponse).metadata) {
    return data as PayoutsServerResponse;
  }

  const payouts = data as PayoutsServerResponse["data"];

  return {
    data: payouts,
    metadata: {
      page: 1,
      limit: payouts.length,
      totalCount: payouts.length,
    },
  };
}
