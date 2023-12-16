export type PAYOUTS = Array<{
  dateAndTime: string;
  status: StatusValues;
  username: string;
  value: string;
}>;

export type PayoutsServerResponse = {
  metadata: {
    page: number;
    limit: number;
    totalCount: number;
  };
  data: PAYOUTS
}

export enum StatusValues {
  Completed = 'Completed',
  Pending = 'Pending',
}

export type StatusLabels = {
  [key in StatusValues]: string
}