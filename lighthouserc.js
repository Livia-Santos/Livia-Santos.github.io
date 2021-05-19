module.exports = {
  ci: {
    collect: {
      staticDistDir: "./",
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 1 }],
        "categories:accessibility": ["error", { minScore: 1 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};