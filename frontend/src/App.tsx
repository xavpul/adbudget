import { Container, Title, Space } from '@mantine/core';
import CampaignForm from './components/CampaignForm';
import CampaignList from './components/CampaignList';

export default function App() {
  return (
    <Container size="sm">
      <Title order={1} ta="center">AdBudget</Title>
      <Space h="md" />
      <CampaignForm />
      <Space h="md" />
      <CampaignList />
    </Container>
  );
}
