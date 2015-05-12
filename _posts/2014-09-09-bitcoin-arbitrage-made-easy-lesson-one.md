---
layout: post
title: Bitcoin Arbitrage Made Easy | Lesson One
author: Arthur Hayes
authorurl: http://www.weusecoins.com/arthur-hayes
published: true
---

The Arbitrage Made Easy lessons will present simple yet profitable arbitrage strategies that can be employed by traders using a combination of spot Bitcoin trading and BitMEX derivatives contracts. The Bitcoin/USD exchange rate will be referred to using the symbol XBTUSD.
<p>
Lesson One will focus on the arbitrage of price differentials between spot XBT exchanges.
<p>
<a href="/bitcoin-arbitrage-made-easy-lesson-two/">Lesson Two</a> will focus on the arbitrage of futures contracts trading at a premium or discount to spot XBT.
<p>
After spending some time trading XBT, traders will notice that sometimes there are large differences between exchanges. Savvy traders can capture these price differentials in a riskless manner. This lesson will assume that the trader’s home currency is USD. Therefore, the trader wants zero risk in USD terms. Traders will use a portfolio of USD and XBT to capture arbitrage opportunities risklessly.
<p>
During this lesson we will refer to the “cheap exchange” as exchange A, and the “expensive exchange” as exchange B. The goal as with any trade is to buy low on exchange A, and sell high on exchange B.
<p>
### Step 1: Construct a Portfolio of Half USD and Half XBT (Bitcoin)
<p>
The arbitraging of spot exchange requires traders to buy XBT cheaply on exchange A, and sell XBT expensive on exchange B simultaneously. If a trader started with just USD the following steps would have to be taken to conduct the arbitrage:
<p>
<ol><li>Wire USD to exchange A/li>
<li>Sell USD buy XBT/li>
<li>Transfer XBT to exchange B, wait for 1-6 confirmations/li>
<li>Sell XBT for USD on exchange B/li>
<li>Remit USD from exchange B to home bank account/li>
<li>Repeat</li></ol>
There are several problems with that trade flow. Wiring USD can take upwards of 5 business days depending on the bank and country. By the time the funds reach exchange A, the arbitrage opportunity could have disappeared. In step 3, the price of XBT could move against the trader before he is able to sell on exchange B.
<p>
The optimal structure would be to have a portfolio of USD and XBT spread out across the relevant exchanges. When an opportunity presents itself, traders can act immediately and capture the arbitrage before it evaporates.
<p>
Going forward a XBT spot price of $500 will be assumed. A portfolio of $5,000 and 10 XBT has been constructed. The total portfolio value is $10,000 = $5,000 + 10 XBT * $500.
<p>
### Step 2: Sell XBT Futures Contracts to Eliminate Price Risk
<p>
The home currency is USD, traders do not want to have any exposure to XBT exchange rate fluctuations. Trading BitMEX futures contracts is the best way to eliminate currency risk. BitMEX offers a futures contract that locks in the future USD value of Bitcoin, called the XBU series.
<p>
### Step 2a: Selling XBUU14 Futures Contracts
<p>
Each XBUU14 (BitMEX USD / Bitcoin September 26, 2014) is worth $100 of Bitcoin. The underlying is the XBTUSD spot price. For this lesson, the current XBTUSD price is $500. The current price of the XBUU14 contract is $500. To determine the proper amount of contracts to sell, the trader should consider the USD value of XBT that he wishes to hedge. The current USD value of the 10 XBT held is $5,000 = $500 * 10 XBT. The portfolio needs to sell 50 contracts = $5,000 / $100.
<p>
Now the sample portfolio looks as follows:
<p>
$5,000 cash
<p>
10 physical Bitcoin
<p>
Short 50 XBUU14 contracts
<p>
The below table shows the USD value of the portfolio as spot XBTUSD changes:
<p>
<img src="/images/bitcoin-arbitrage-table.png" alt="bitcoin arbitrage table" align="center">
<p>
Because of the XBUU14 hedge, the portfolio value stays constant at $10,000 no matter the XBTUSD price. Now the Bitcoin price volatility will not affect the returns from this arbitrage strategy.
<p>
### Step 3a: Full Circle Bitcoin Arbitrage Between Bitcoin Exchanges A and B
<p>
Now that the portfolio has been constructed and hedged to eliminate currency risk, it is time to capture riskless profits. Exchange A trades at $480, while exchange B trades at $500. The below steps describe how to arbitrage the two exchanges.
<p>
<ol><li>Deposit $5,000 onto exchange A; deposit 7 XBT onto exchange B</li>
<li>Buy 7 XBT on exchange A for a cost of $3,360 = 7 XBT * $480</li>
<li>Simultaneously sell 7 XBT on exchange B and receive $3,500</li>
<li>Withdraw $3,500 from exchange B, then wire $3,500 to exchange A</li>
<li>Transfer 7 XBT from exchange A to B</li>
<li>Repeat</li></ol>
The above trade generated $140 in gross profit. USD deposit and withdrawal fees as well as exchange trading fees must be deducted. The result will be the net profit from this arbitrage trade. The amount of times the portfolio can be churned is limited by the speed of USD wire transfers and the size of price gap between exchange A and B.
<p>
Notice that only 7 XBT could be used as working capital for the arbitrage opportunity. This is because BitMEX requires margin to be posted against the short 50 XBUU14 contracts. BitMEX requires an initial margin of 30%, given short 50 XBUU14 contracts are worth 10 XBT (1/$500 * $100 * 50 Contracts), 3 XBT must be deposited as margin with BitMEX leaving 7 XBT for arbitrage purposes.
<p>
### Step 3b: Bitcoin Exchange A and B Spread Trading
<p>
Instead of withdrawing USD from exchange B and transferring again back to exchange A, a trader can play the spread between the two exchanges. Exchange A trades at $480, while exchange B trades at $500. The below steps describe how to spread trade.
<p>
<ol><li>Deposit $5,000 onto exchange A; deposit 7 XBT onto exchange B</li>
<li>Buy 7 XBT on exchange A for a cost of $3,360 = 7 XBT * $480</li>
<li>Simultaneously sell 7 XBT on exchange B and receive $3,500</li>
<li>Prices on exchange A and B equalise at $500</li>
<li>Buy 7 XBT on exchange B for a cost of $3,500</li>
<li>Simultaneously sell 7 XBT on exchange A and receive $3,500</li>
<li>Exchange A now contains $5,140</li>
<li>Exchange B now contains 7 XBT</li>
<li>Wait for the spread between A and B to widen again and repeat</li></ol>
<p>
The above trade has generated $140 in gross profit. USD deposit and exchange trading fees must be deducted. The result will be the net profit from this arbitrage trade. Spread trading does not require the withdrawal of USD from exchange B and subsequent deposit onto exchange A which reduces fees paid. However, traders must wait for the spread to collapse before the portfolio can be rebalanced.