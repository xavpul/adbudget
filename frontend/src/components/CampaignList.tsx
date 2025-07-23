import { useQuery } from '@apollo/client';
import { Table, Loader, Text } from '@mantine/core';
import { GET_CAMPAIGNS } from '../graphql/queries';

export default function CampaignList() {
  const { data, loading, error } = useQuery(GET_CAMPAIGNS);

  if (loading) return <Loader />;
  if (error) return <Text c="red">{error.message}</Text>;

  return (
    <Table>
      <thead>
        <tr><th>ID</th><th>Name</th><th>Budget</th></tr>
      </thead>
      <tbody>
        {data.campaigns.map((c: any) => (
          <tr key={c.id}>
            <td>{c.id}</td>
            <td>{c.name}</td>
            <td>${c.budget.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
