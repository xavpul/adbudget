import type { CodegenConfig } from '@graphql-codegen/cli';
const config: CodegenConfig = {
  schema: 'http://localhost:8000/graphql',
  documents: ['src/**/*.tsx'],
  generates: { './src/graphql/generated.ts': { plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'] } }
};
export default config;
