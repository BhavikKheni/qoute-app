const webpack = require('webpack');
const production = process.env.NODE_ENV === "production";
const autoprefixer = require('autoprefixer');
const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const loaders = [
  {
    test: /\.js$/,
    exclude: /(node_modules|bower_components|public\/)/,
    loader: "babel-loader"
  },
];
loaders.push({
	test: /\.css$/,
	exclude: /[\/\\](node_modules|bower_components|public\/)[\/\\]/,
	loaders: 'style-loader!css-loader'
});

const config = {

  entry: {
    'app': './client/index.js'
  },

  devtool: production ? null : "source-map",

  output: {
    path: "./dist",
    filename: "bundle.js"
  },
 module: {
    loaders,
  },
  plugins: [
     new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        autoprefixer({
          browsers: [
            'last 3 version',
            'ie >= 10',
          ],
        }),
      ],
      context: path.join(__dirname, './client'),
    },
  }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })

  ],
};


module.exports = config;
