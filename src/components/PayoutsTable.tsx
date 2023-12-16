import { STATUS_LABELS, TABLE_AVATAR_SIZE } from "@/constants";
import { Table } from "@/styles";
import { PAYOUTS_SERVER_RESPONSE } from "@/types";
import { formatTime } from "@/utils";

type Props = { data: PAYOUTS_SERVER_RESPONSE };

export function PayoutsTable({ data }: Props) {
  const { metadata, data: payouts } = data;

  return (
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
          const key = username + dateAndTime;

          return (
            <tr key={key}>
              <Table.UsernameCell>
                <Table.Avatar
                  src={`https://loremflickr.com/${TABLE_AVATAR_SIZE}/${TABLE_AVATAR_SIZE}/face?random=${key}`}
                  width={TABLE_AVATAR_SIZE}
                  height={TABLE_AVATAR_SIZE}
                  alt={username}
                />
                <span>{username}</span>
              </Table.UsernameCell>
              <td>{formatTime(dateAndTime)}</td>
              <td>
                <Table.Status $status={status}>
                  {STATUS_LABELS[status] || status}
                </Table.Status>
              </td>
              <Table.ValueCell>{value}</Table.ValueCell>
            </tr>
          );
        })}
      </tbody>
    </Table.Container>
  );
}
