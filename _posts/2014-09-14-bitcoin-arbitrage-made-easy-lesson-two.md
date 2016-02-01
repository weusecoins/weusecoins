---
layout: post
title: Bitcoin Arbitrage Made Easy - Lesson Two
author: Arthur Hayes
authorurl: http://www.weusecoins.com/arthur-hayes
published: true
---

The Arbitrage Made Easy lessons will present simple yet profitable arbitrage strategies that can be employed by traders using a combination of spot Bitcoin trading and BitMEX derivatives contracts. The Bitcoin/USD exchange rate will be referred to using the symbol XBTUSD; the USD/Bitcoin exchange rate will be referred to using the symbol USDXBT.
<p>
<a href="/bitcoin-arbitrage-made-easy-lesson-one/">Lesson One</a> focused on the arbitrage of price differentials between spot XBT exchanges.
<p>
Lesson Two will focus on the arbitrage of futures contracts trading at a premium or discount to spot XBT.
<p>
This lesson will assume that the trader’s home currency is USD. Therefore, the trader wants zero risk in USD terms. Traders will use a portfolio of USD and XBT to capture arbitrage opportunities.
<p>
To better understand the reason why a futures contract trades at a premium or discount to spot please read <a href="/bitcoin-and-interest-rates/">Bitcoin and Interest Rates</a>. The term contango will be used for a futures contract that trades at a premium to spot. The term backwardation will be used for a futures contract that trades at a discount to spot.
<p>
Two BitMEX futures chains will be described, the XBT and USD futures chain. The XBT futures chain’s underlying is XBTUSD, the multiplier is 0.00001 XBT, and it is quoted in USD. The USD futures chain’s underlying is USDXBt, the multiplier is 10 USD, and it is quoted in XBt. 1 XBt = 1 Satoshi = 10^-8 XBT. Both contracts pay out in XBT.
<p>
### Scenario 1: XBTU14 is in Contango
<p>
XBTU14 is the BitMEX Bitcoin / USD September 26, 2014 Futures Contract. Currently spot XBTUSD and XBTU14 are trading at $500 and $550 respectively. The future is trading at a premium to spot so a portfolio of long XBT spot and short XBTU14 futures contracts will be constructed.
<p>
The portfolio first must borrow USD with which to trade. $10,000 is borrowed at an interest rate of 1%, thank you Janet Yellen. Assume that XBT has no borrow value.
<p>
The below steps will be taken to arbitrage spot vs. future:
<p>
<ol><li>Sell $10,000 and Buy 20 XBT @ $500</li>
<li>Sell 4,000 XBTU14 contracts = 20 XBT / (0.00001 XBT * $500)</li>
<li>On September 26, 2014 the XBTU14 contract expires</li>
<li>Sell the 20 XBT and receive USD at the prevailing XBTUSD spot price</li>
<li>Repay the USD bank loan</li></ol>
The below table shows the profit of the strategy given different XBTUSD spot prices at expiry:
<p>
<img src="/images/bitcoin-arbitrage-table-1.png" alt="bitcoin arbitrage table" align="center">
<p>
This arbitrage strategy is not entirely riskless. Because the XBT futures chain is a quanto derivative, the USD value of the contract varies in a non-linear fashion with respect to XBTUSD. To keep the portfolio properly hedged, traders must dynamically buy and sell XBTU14 contracts to keep the USD value of the portfolio constant at $11,000.
<p>
### Scenario 2: USDU14 is in Backwardation
<p>
USDU14 is the BitMEX USD / Bitcoin September 26, 2014 Futures Contract. Currently spot USDXBt and USDU14 are trading at 200,000 XBt (1/$500 XBTUSD * 10^8) and 181,818 XBt (1/$550 XBTUSD * 10^8) respectively. The future is trading at a discount to spot so a portfolio of short USDXBt spot and long USDU14 contracts will be constructed.
<p>
The portfolio first must borrow USD with which to trade. $10,000 is borrowed at an interest rate of 1%. Assume that XBT has no borrow value.
<p>
### The below steps will be taken to arbitrage spot vs. future:
<p>
<ol><li>Sell $10,000 and Buy 20 XBT @ 200,000 XBt</li>
<li>Buy 1,000 USDU14 contracts = $10,000 / $10</li>
<li>On September 26, 2014 the USDU14 contract expires</li>
<li>Sell the 20 XBT and receive USD at the prevailing USDXBt spot price</li>
<li>Repay the USD bank loan</li></ol>
The below table shows the profit of the strategy given different <a href="/en/bitcoin-price/">USDXBt spot prices</a> at expiry:
<p>
<img src="/images/bitcoin-arbitrage-table-2.png" alt="bitcoin arbitrage table" align="center">
<p>
The arbitrage strategy produces profit; however, the trader must hedge the value of his profit in USD terms. Spot is 10% higher than the USDU14 price, 200,000 XBt vs. 181,818 XBt. Therefore the number of USDU14 contracts bought should be increased by 10% to 1,100. The below table shows the new profit of the strategy given different USDXBt spot prices at expiry:
<p>
<img src="/images/bitcoin-arbitrage-table-3.png" alt="bitcoin arbitrage table" align="center">