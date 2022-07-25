const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const svgr = require('@svgr/rollup');
const url = require('@rollup/plugin-url');

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
        output: './dist/bundle.css',
        inject: false,
        // write out CSS for all bundles
        extract: true,
      })
    )
    config.plugins.push(
      url()
    )
    config.plugins.push(
      svgr({icon: true})
    )

    return config;
  },
};
