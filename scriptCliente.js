const contrato = ;
const URL_INFURA = 'XXXXXXX';
const PRIVATE_KEY = '0x000000000000000000000000000000000';
const myOwnAcc = '0x000000000000000000000000000000000';

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
  console.log(1);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider(`https://${URL_INFURA}`));
  please()
}

async function please() {
  let c = await web3.eth.accounts.wallet.add(PRIVATE_KEY);
  console.log(c);
  const usersContract = await new web3.eth.Contract(contrato['abi']).deploy({data: contrato['bytecode']}).send({from: myOwnAcc, gas: '600000'});
  // en .send() hay mas opciones, como poner el precio del gas https://web3js.readthedocs.io/en/v1.2.0/web3-eth-contract.html

  //EXAMPLE:
  //await usersContract.methods.join("Javo", "SSK").send({from:myOwnAcc, gas: '1000000'});
  //let user = await usersContract.methods.getUser(myOwnAcc).call(); Readonly method use call()

  //web3.eth.accounts.signTransaction({
//     to: '0xF0109fC8DF283027b6285cc889F5aA624EaC1F55',
//     value: web3.utils.toHex(web3.utils.toWei("0.001", "ether")),
//     gas: 2000000
// }, '0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318')
// .then(console.log);
//  https://web3js.readthedocs.io/en/v1.2.0/web3-eth-accounts.html#signtransaction
}
