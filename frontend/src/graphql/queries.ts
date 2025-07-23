import { gql } from '@apollo/client';

export const GET_CAMPAIGNS = gql`
  query GetCampaigns {
    campaigns { id name budget }
  }
`;

export const CREATE_CAMPAIGN = gql`
  mutation CreateCampaign($name: String!, $budget: Float!) {
    createCampaign(name: $name, budget: $budget) { id name budget }
  }
`;
