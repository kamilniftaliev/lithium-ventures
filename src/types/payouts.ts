export type PAYOUTS = Array<{
  dateAndTime: string;
  status: "Pending" | "Completed";
  username: string;
  value: string;
}>;

export type PAYOUTS_SERVER_RESPONSE = {
  metadata: {
    page: number;
    limit: number;
    totalCount: number;
  };
  data: PAYOUTS
}

export type StatusValues = 'Completed' | 'Pending';

export type StatusLabels = {
  [key in StatusValues]: string
}