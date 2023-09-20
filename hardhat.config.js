/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.11",
   defaultNetwork: "sepolia",
   networks: {
      hardhat: {},
      sepolia: {
         url: "https://eth-sepolia.g.alchemy.com/v2/ILpSAeV0Mb9eHHTMg6YFRkpgxH_cMAo1",
         accounts: ['1e852a807c732a432ffb78b9426bcfb25d3bb34bff18faec58f4ce875e63e0f9'],
      }
   },
}