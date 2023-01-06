import { ethers } from 'ethers'

const numOfDup = 1

main()

function main() {
  let done = false
  let iterator = 0
  do {
    if (++iterator % 1000 === 0) {
      console.log('iterator: ', iterator)
    }

    const wallet = ethers.Wallet.createRandom()
    if (isDup(wallet.address, numOfDup)) {
      done = true
      console.log('wallet.address: ', wallet.address)
      console.log('wallet.mnemonic.phrase: ', wallet.mnemonic.phrase)
      console.log('wallet.privateKey: ', wallet.privateKey)
    }

  } while (!done)
}

function isDup(address, numOfDup) {
  const lastChar = address.at(-1)
  const expectedSubstring = lastChar.padStart(numOfDup, lastChar)
  return address.endsWith(expectedSubstring)
}

