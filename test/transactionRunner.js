const Tx = require('../index.js')
const tape = require('tape')
const hucUtil = require('happyucjs-util')
const argv    = require('minimist')(process.argv.slice(2))
// const testing = require('happyucjs-testing')
const common = require('happyucjs-common/params.json')

// var txTests = testing.getTests('transaction', argv)

const bufferToHex  = hucUtil.bufferToHex
const addHexPrefix = hucUtil.addHexPrefix
const stripHexPrefix = hucUtil.stripHexPrefix
const setLength = hucUtil.setLength

function addPad (v) {
  if (v.length % 2 === 1) {
    v = '0' + v
  }
  return v
}

function normalizeZero (v) {
  if (!v || v === '0x') {
    return '0x00'
  } else {
    return v
  }
}

// tape('[FakeTransaction]: Basic functions', function (t) {
 
//     return ;
//     var tTx = txTests.transaction
//     try {
//       var rawTx = hucUtil.toBuffer(testData.rlp)
//       var tx = new Tx(rawTx)
//       if (testData.blocknumber !== String(common.homeSteadForkNumber.v)) {
//         tx._homestead = false
//       }
//     } catch (e) {
//       sst.equal(undefined, tTx, 'should not have any fields ')
//       cb()
//       return
//     }
  
//     if (tTx && tx.validate()) {
//       try {
//         sst.equal(bufferToHex(tx.data), addHexPrefix(addPad(stripHexPrefix(tTx.data))), 'data')
//         sst.equal(normalizeZero(bufferToHex(tx.gasLimit)), tTx.gasLimit, 'gasLimit')
//         sst.equal(normalizeZero(bufferToHex(tx.gasPrice)), tTx.gasPrice, 'gasPrice')
//         sst.equal(normalizeZero(bufferToHex(tx.nonce)), tTx.nonce, 'nonce')
//         sst.equal(normalizeZero(bufferToHex(setLength(tx.r, 32))), normalizeZero(bufferToHex(setLength(tTx.r, 32))), 'r')
//         sst.equal(normalizeZero(bufferToHex(tx.s)), normalizeZero(bufferToHex(tTx.s)), 's')
//         sst.equal(normalizeZero(bufferToHex(tx.v)), normalizeZero(bufferToHex(tTx.v)), 'v')
//         sst.equal(bufferToHex(tx.to), addHexPrefix(tTx.to), 'to')
//         sst.equal(normalizeZero(bufferToHex(tx.value)), tTx.value, 'value')
//         sst.equal(normalizeZero(bufferToHex(tx.getSenderAddress())), addHexPrefix(testData.sender), "sender's address")
//       } catch (e) {
//         sst.fail(e)
//       }
//     } else {
//       sst.equal(undefined, tTx, 'no tx params in test')
//     }
// })
