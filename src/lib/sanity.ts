import { createClient } from '@sanity/client';

export const sanity = createClient({
  projectId: '67as9679',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
});
