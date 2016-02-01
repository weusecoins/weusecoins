---
layout: post
title: "Segregated Witness: Exchanges, Wallets, Miners, and Companies Planning Integration"
author: Jordan Tuwiner
authorurl: /jordan-tuwiner/
description: Learn about Segregated Witness and how it helps Bitcoin. 
published: true
---
Segregated Witness is a proposal by Bitcoin Core developer Pieter Wuille. It uses a new data type to decrease the amount of data stored for each Bitcoin transaction. As a result, more transactions will fit into each block. Wuille’s Segregated Witness (or SegWit) allows for a practical increase in block space without the need for a hardfork. 

In addition to scalability improvements, Segregated Witness helps with transaction malleability and decreases the cost to run a full node since less data needs to be stored. For more details, [listen to this interview](http://www.bitcoin.kn/2016/01/ciphrex-ceo-eric-lombrozo-discusses-the-live-segregated-witness-test-net/) with Eric Lombrozo, or [read this explainer](https://bitcoinmagazine.com/articles/segregated-witness-part-how-a-clever-hack-could-significantly-increase-bitcoin-s-potential-1450553618). 

The following list tracks wallets, exchanges, miners, and other Bitcoin companies that plan to implement Segregated Witness.

### Initial Announcement

Eric Lombrozo, a Bitcoin Core dev and contributor to SegWit, [announced on the bitcoin-dev mailing list](http://lists.linuxfoundation.org/pipermail/bitcoin-dev/2016-January/012195.html) that a number of wallets have already expressed support for SegWit: mSIGNA, GreenAddress, GreenBits, Blocktrail, and NBitcoin.

### Ledger

Nicolas Bacca (btchip), an employee of Bitcoin security company Ledger, [announced support](https://www.reddit.com/r/Bitcoin/comments/40bcf8/which_wallets_are_working_on_compatibility_with/cysx0mx) for SegWit on reddit:

“We (Ledger) will be working on it soon - the changes to support SegWit are quite limited so I expect every hardware wallet to be compatible with it quickly.”
 
### breadwallet

Aaron Voisine is the CEO and founder of breadwallet, perhaps the most popular Bitcoin wallet for iPhone. In an [interview with Bitcoin Magazine](https://bitcoinmagazine.com/articles/breadwallet-ceo-aaron-voisine-we-support-core-s-scalability-road-map-but-bitcoin-does-need-a-hard-fork-1452545148), Voisine stated that breadwallet will support SegWit.

### Full List

<table class="segwit-table">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Planned</th>
      <th>Ready</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td><a href="https://bitcoinj.github.io/">BitcoinJ</a></td>
      <td>yes</td>
      <td>no</td>
      <td>library</td>
    </tr>
    <tr>
      <td>2</td>
      <td><a href="http://bitcoinjs.org/">Bitcoinjs</a></td>
      <td>yes</td>
      <td>no</td>
      <td>library</td>
    </tr>
    <tr>
      <td>3</td>
      <td><a href="https://www.bitgo.com/">BitGo</a></td>
      <td>yes</td>
      <td>no</td>
      <td>wallet</td>
    </tr>
    <tr>
      <td>4</td>
      <td><a href="https://www.blocktrail.com/">Blocktrail</a></td>
      <td>yes</td>
      <td>no</td>
      <td>wallet, block explorer</td>
    </tr>
    <tr>
      <td>5</td>
      <td><a href="http://breadwallet.com/">BreadWallet</a></td>
      <td>yes</td>
      <td>no</td>
      <td>wallet</td>
    </tr>
    <tr>
      <td>6</td>
      <td><a href="https://www.coinfloor.co.uk/">Coinfloor</a></td>
      <td>yes</td>
      <td>no</td>
      <td>exchange</td>
    </tr>
    <tr>
      <td>6</td>
      <td><a href="https://coinkite.com/">Coinkite</a></td>
      <td>yes</td>
      <td>no</td>
      <td>wallet, hardware wallet</td>
    </tr>
    <tr>
      <td>7</td>
      <td><a href="https://coinomi.com/">Coinomi</a></td>
      <td>yes</td>
      <td>no</td>
      <td>wallet</td>
    </tr>
    <tr>
      <td>8</td>
      <td><a href="https://digitalbitbox.com/">Digitalbitbox</a></td>
      <td>yes</td>
      <td>no</td>
      <td>hardware wallet</td>
    </tr>
    <tr>
      <td>9</td>
      <td><a href="http://ei8.ht/">EI8HT</a></td>
      <td>yes</td>
      <td>no</td>
      <td>wallet</td>
    </tr>
    <tr>
      <td>10</td>
      <td><a href="https://electrum.org/">Electrum</a></td>
      <td>yes</td>
      <td>no</td>
      <td>wallet</td>
    </tr>
    <tr>
      <td>11</td>
      <td><a href="https://greenaddress.it/">GreenAddress</a></td>
      <td>yes</td>
      <td>no</td>
      <td>wallet</td>
    </tr>
    <tr>
      <td>12</td>
      <td><a href="https://www.greenbits.com/">GreenBits</a></td>
      <td>yes</td>
      <td>no</td>
      <td>wallet</td>
    </tr>
    <tr>
      <td>13</td>
      <td><a href="https://www.ledgerwallet.com/">Ledger</a></td>
      <td>yes</td>
      <td>no</td>
      <td>hardware wallet</td>
    </tr>
    <tr>
      <td>14</td>
      <td><a href="https://github.com/libbtc">libbtc</a></td>
      <td>yes</td>
      <td>no</td>
      <td>library</td>
    </tr>
    <tr>
      <td>15</td>
      <td><a href="http://libbitcoin.dyne.org/">libbitcoin</a></td>
      <td>yes</td>
      <td>no</td>
      <td>library</td>
    </tr>
    <tr>
      <td>16</td>
      <td><a href="https://ciphrex.com/">mSIGNA</a></td>
      <td>yes</td>
      <td>yes</td>
      <td>wallet</td>
    </tr>
    <tr>
      <td>17</td>
      <td><a href="https://mycelium.com/">Mycelium</a></td>
      <td>yes</td>
      <td>no</td>
      <td>wallet</td>
    </tr>
    <tr>
      <td>18</td>
      <td>NBitcoin</td>
      <td>yes</td>
      <td>no</td>
      <td>library</td>
    </tr>
    <tr>
      <td>19</td>
      <td><a href="https://github.com/OmniLayer/omnicore">OmniCore</a></td>
      <td>yes</td>
      <td>no</td>
      <td>wallet</td>
    </tr>
    <tr>
      <td>20</td>
      <td><a href="https://github.com/petertodd/python-bitcoinlib">python-bitcoinlib</a></td>
      <td>yes</td>
      <td>no</td>
      <td>library</td>
    </tr>
    <tr>
      <td>21</td>
      <td><a href="https://github.com/richardkiss/pycoin">pycoin</a></td>
      <td>yes</td>
      <td>no</td>
      <td>library</td>
    </tr>
    <tr>
      <td>22</td>
      <td><a href="http://samouraiwallet.com/">Samourai Wallet</a></td>
      <td>yes</td>
      <td>no</td>
      <td>wallet</td>
    </tr>
    <tr>
      <td>23</td>
      <td><a href="http://satoshilabs.com/trezor/">Trezor</a></td>
      <td>yes</td>
      <td>no</td>
      <td>hardware wallet</td>
    </tr>
  </tbody>
</table>


### What is Segregated Witness?

This inforgraph from [Holy Transaction](https://holytransaction.com/page/what-is-segregated-witness) breaks down SegWit: 

![segregated witness](https://holytransaction.com/images/infographics/what-is-segregated-witness.png "Logo Title Text 1")