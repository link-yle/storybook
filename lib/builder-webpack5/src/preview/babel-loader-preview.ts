import { getProjectRoot } from '@storybook/core-common';

/**
 * Returns true if the framework can use the base TS config.
 * @param {string} framework
 */
export const useBaseTsSupport = (framework: string) => {
  // These packages both have their own TS implementation.
  return !['vue', 'angular'].includes(framework);
};

export const createBabelLoader = (options: any, framework: string) => ({
  test: useBaseTsSupport(framework) ? /\.(cjs|mjs|tsx?|jsx?)$/ : /\.(cjs|mjs|jsx?)$/,
  use: [
    {
      loader: require.resolve('babel-loader'),
      options,
    },
  ],
  include: [getProjectRoot()],
  exclude: /node_modules/,
});
