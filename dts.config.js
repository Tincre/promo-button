const postcss = require('rollup-plugin-postcss');
const css = require('rollup-plugin-import-css');
const autoprefixer = require('autoprefixer');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [autoprefixer()],
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        output: './dist/custom.css',
        inject: false,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
      })
    );
    config.plugins.push(css());
    return config;
  },
};
