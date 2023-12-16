import { STATUS_LABELS, TABLE_AVATAR_SIZE } from "@/constants";
import { Skeleton, Table } from "@/styles";
import { PayoutsServerResponse } from "@/types";
import { formatTime } from "@/utils";

type Props = {
  isLoading: boolean;
  data: PayoutsServerResponse;
};

export function PayoutsTable({ isLoading, data: { data: payouts } }: Props) {
  const noResults = !payouts.length

  return noResults ? (
    <Table.NoResults>No results</Table.NoResults>
  ) : (
    <Table.Container>
      <thead>
        <tr>
          <th>User</th>
          <th>Date & Time</th>
          <th>Status</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {payouts.map(({ status, value, username, dateAndTime }) => {
          const key = value + username + dateAndTime;

          return (
            <tr key={key}>
              <Table.UsernameCell>
                {isLoading ? (
                  <>
                    <Skeleton $circle />
                    <Skeleton />
                  </>
                ) : (
                  <>
                    <Table.Avatar
                      src={`https://loremflickr.com/${TABLE_AVATAR_SIZE}/${TABLE_AVATAR_SIZE}/face?random=${key}`}
                      width={TABLE_AVATAR_SIZE}
                      height={TABLE_AVATAR_SIZE}
                      alt={username}
                    />
                    <span>{username}</span>
                  </>
                )}
              </Table.UsernameCell>
              <Table.TimeCell>
                {isLoading ? <Skeleton /> : formatTime(dateAndTime)}
              </Table.TimeCell>
              <Table.StatusCell>
                {isLoading ? (
                  <Skeleton />
                ) : (
                  <>
                    <Table.Status $status={status}>
                      {STATUS_LABELS[status] || status}
                    </Table.Status>
                  </>
                )}
              </Table.StatusCell>
              <Table.ValueCell>
                {isLoading ? <Skeleton /> : <>{value}</>}
              </Table.ValueCell>
            </tr>
          );
        })}
      </tbody>
    </Table.Container>
  );
}
