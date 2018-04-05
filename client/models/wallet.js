import Web3 from 'web3';

const JOIN_ADDR = '0xad2870197485a3f0ecbfdbd9de54ab90905df2de';

class Wallet {
  constructor() {
    // eslint-disable-next-line
    this.web3 = new Web3(web3.currentProvider);
  }

  getAddr() {
    if (this.web3.eth.accounts && this.web3.eth.accounts.length > 0) {
      return this.web3.eth.accounts[0];
    }
  }

  hasAddr() {
    return !!this.getAddr();
  }

  send(amount) {
    let tx = {
      from: this.getAddr(),
      to: JOIN_ADDR,
      value: this.web3.toWei(amount)
    }

    if (this.hasAddr()) {
      this.web3.eth.sendTransaction(tx,
        function (err, transactionHash) {
          if (!err) {
            console.log('join done', transactionHash);
          }
        }
      );
    }
  }
}

const wallet = new Wallet();

export default wallet;
