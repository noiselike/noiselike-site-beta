module.exports = function override(config, env) {
  config.resolve = {
    ...config.resolve,
    fallback: {
      ...config.resolve.fallback,
      "stream": require.resolve("stream-browserify"),
    },
  };

  return config;
};
