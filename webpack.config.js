const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'production',
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  module: {
    rules: [
    {
    test: /\.css$/,
    use: ["style-loader", "css-loader"],
    },
    {
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        type: 'asset/resource',
    },    
    {
        test: /\.(png|jpe?g|gif|svg)$/i, // Matches image file extensions
        type: 'asset/resource', // Treats images as separate assets and emits them to the output directory
        generator: {
          filename: 'images/[name].[hash][ext]', // Customizes output filename and directory
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
    })
  ],
};

