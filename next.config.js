require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

console.log(`ASSET_PREFIX => "${process.env.ASSET_PREFIX}"`);

module.exports = {
  assetPrefix: process.env.ASSET_PREFIX
};
