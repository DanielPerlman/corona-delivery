const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withMDX = require("@zeit/next-mdx")();
const path = require('path');

// https://spectrum.chat/thread/ba3668b1-f0b1-42a6-9c71-d7d9d3b67f04
if (typeof require !== "undefined") {
  require.extensions[".less"] = () => {};
  require.extensions[".css"] = file => {};
}

const _cfg = (cfg, extra) => Object.assign(cfg || {}, extra);

const _css = cfg => withCSS(_cfg(cfg, {}));
const _sass = cfg => withSass(_cfg(cfg));
const _mdx = cfg =>
  withMDX(
    _cfg(cfg, {
      webpack: (config, options) => {
        config.resolve.alias['~'] = path.resolve(__dirname);
        config.module.rules.push({
          test: /\.ya?ml$/,
          use: "js-yaml-loader"
        });
        return config;
      }
    })
  );

// combine uses reduce, so left to right fns are inner to outer wrapping
const _combine = fns => fns.reduce((result, fn) => fn(result), {});

module.exports = _combine([_mdx, _sass, _css]);
