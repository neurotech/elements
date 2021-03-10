/* eslint-disable default-param-last */
module.exports = {
  components: "./src/index.ts",
  outputPath: "./dist/playroom",
  widths: [1024],
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: "ts-loader",
            },
          ],
          exclude: /node_modules/,
        },
      ],
    },
  }),
};