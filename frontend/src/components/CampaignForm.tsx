import { useMutation } from '@apollo/client';
import { useForm } from '@mantine/form';
import { TextInput, NumberInput, Button, Group } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { CREATE_CAMPAIGN, GET_CAMPAIGNS } from '../graphql/queries';

export default function CampaignForm() {
  const form = useForm({ initialValues: { name: '', budget: 0 } });
  const [createCampaign, { loading }] = useMutation(CREATE_CAMPAIGN, {
    refetchQueries: [{ query: GET_CAMPAIGNS }],
  });

  const handleSubmit = form.onSubmit(async (values) => {
    try {
      await createCampaign({ variables: values });
      form.reset();
      notifications.show({ title: 'Success', message: 'Campaign created!' });
    } catch (e: any) {
      notifications.show({ color: 'red', title: 'Error', message: e.message });
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <TextInput label="Campaign Name" {...form.getInputProps('name')} required />
      <NumberInput label="Budget" {...form.getInputProps('budget')} required min={0} />
      <Group mt="md">
        <Button type="submit" loading={loading}>Create</Button>
      </Group>
    </form>
  );
}
