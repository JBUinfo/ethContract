const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = 'XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX';
const URL_INFURA = 'XXXXXXX';
const ID_NET = X; //SEE THE ID OF THE NET https://ethereum.stackexchange.com/questions/17051/how-to-select-a-network-id-or-is-there-a-list-of-network-ids
module.exports = {
  networks: {
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://${URL_INFURA}`),
      network_id: ID_NET
    }
  },
  compilers: {
    solc: {
      version: "0.6.2"    // https://solidity.readthedocs.io/en/v0.6.2/ abajo a la izquierda puedes ver todas las versiones que hay
    }
  }
}
