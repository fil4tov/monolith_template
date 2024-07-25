module.exports = {
  extends: '@cloud-ru/eslint-config/monorepo',
  overrides: [
    {
      files: ['apps/**/src/pages/index.tsx'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ]
};
