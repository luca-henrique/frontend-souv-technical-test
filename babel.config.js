module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
        importSource: "react",
      },
    ],
    "@babel/preset-typescript",
  ],
};
