import { StatusLabels, StatusValues } from "@/types";

export const TABLE_AVATAR_SIZE = 25;

export const STATUS_LABELS = {
  Completed: "Paid",
  Pending: "Pending",
} as StatusLabels;

export const PLACEHOLDER_PAYOUTS = {
  metadata: {
    page: 1,
    limit: 1,
    totalCount: 1,
  },
  data: Array(10)
    .fill(null)
    .map(() => ({
      status: StatusValues.Pending,
      username: "",
      dateAndTime: "",
      value: Math.floor(Math.random() * 10000) + "",
    })),
};
