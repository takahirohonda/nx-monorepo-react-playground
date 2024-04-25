import { getJestProjects } from '@nx/jest';

export default {
  projects: getJestProjects(),
};

// jest doesn't run... https://nx.dev/nx-api/jest
// import { getJestProjectsAsync } from '@nx/jest';

// export default async () => ({
//   projects: [
//     ...(await getJestProjectsAsync()),
//     '<rootDir>/path/to/jest.config.ts',
//   ],
// });