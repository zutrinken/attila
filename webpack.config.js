const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  entry: './src/assets/js/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/script.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: '/assets/font/'
            }
        }]
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/css/style.css'
    }),
    new CopyWebpackPlugin([{
      from: 'src/**/*.+(hbs|json)',
      transformPath(path) {
        return path.replace('src/', '');
      }
    }])
  ]
};

// Add zip for production builds
if (process.env.WEBPACK_MODE === 'production') {
  module.exports.plugins.push(
    new ZipPlugin({
      path: '..',
      pathPrefix: '.',
      filename: 'attila.zip',
      exclude: [
        /^node_modules\//,
        /^\.git\//,
        /^screenshot-/,
        'package.json',
        'README.md',
        'yarn.lock',
        '.gitignore'
      ]
    })
  );
}

// Add bundle analyzer if enabled
if (process.env.ANALYZE_BUNDLE) {
  module.exports.plugins.push(
    new BundleAnalyzerPlugin()
  );
}
