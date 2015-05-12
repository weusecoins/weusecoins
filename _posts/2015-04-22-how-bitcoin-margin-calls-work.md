---
layout: post
title: How Bitcoin Margin Calls Work
author: Arthur Hayes
authorurl: http://www.weusecoins.com/arthur-hayes
published: true
---

Many advancements have been made in the ways in which one can trade Bitcoin. Traders are graduating to leveraged trading using margin and futures trading platforms. However, there is intense confusion about how the margin call process works on various platforms. This post will explain the process on BitMEX, Bitfinex, and OKCoin.
<p>
The margin call process generally is initiated when a user’s equity falls below a minimum threshold set by the exchange. Equity refers the amount of Bitcoin or USD that you could withdraw from the exchange if all your positions were closed at the last traded price. It is a combination of deposited funds and profit or loss. Exchanges stipulate that a minimum Equity / Position Value ratio must be met at all times. Usually this is referred to as the maintenance margin.
<p>
A trader wishes to open a long leveraged position either using a margin trading platform or futures contracts equalling 100 Bitcoin. A long position profits when the Bitcoin / USD price rises. I will lay out how much USD or Bitcoin he will have to post using each platform, and what happens to his account and position in a margin call situation.
<p>
### BitMEX Initial Margin:
<p>
BitMEX requires that you deposit 30% in equity against the Bitcoin value of the position you wish to open. If you wish to open 100 Bitcoin worth of futures contracts, you must deposit 30 Bitcoin.
<p>
### Bitfinex Initial Margin:
<p>
Bitfinex requires that you deposit 30% in equity against the value of the position you wish to open. If 100 Bitcoin is worth $10,000, you need to deposit $3,000.
<p>
### OKCoin Initial Margin:
<p>
OKCoin requires that you deposit 5% in equity against the Bitcoin value of the position you wish to open. If you wish to open 100 Bitcoin worth of futures contracts, you must deposit 5 Bitcoin.
<p>
### BitMEX Margin Call Threshold:
<p>
BitMEX requires that you maintain an Equity / Position Value of at least 20%. As your account gets closer and closer to this threshold, emails will be sent to your registered address to inform you. When a margin call is issued, you will receive an email notifying you, and advising you to deposit additional Bitcoin to avert force liquidation of your position.
<p>
### Bitfinex Margin Call Threshold:
<p>
Bitfinex requires that you maintain an Equity / Position Value of at least 15%. Once breached, your account will be placed in margin call and force liquidation of your position will begin.
<p>
### OKCoin Margin Call Threshold:
<p>
OKCoin requires that you maintain an Equity / Position Value of at least 1%. Once breached, your account will be placed in margin call and force liquidation of your position will begin.
<p>
### BitMEX Force Liquidation Process:
<p>
BitMEX will compute the smallest amount of your position that needs to be liquidated at prevailing market prices to get your Equity / Position Value above the minimum threshold and execute that order as a limit price. The use of a limit price reduces the amount of volatility introduced to the market as a result of margin calls. The liquidation process will get more aggressive if your Equity / Position Value declines further due to adverse market moves. Once the minimum threshold has been met again, force liquidation will cease. During this process, you are free to close open positions to stop force liquidation. If a deposit is detected on the Blockchain, that amount will be credited against your shortfall and force liquidation will cease.
<p>
### Bitfinex Force Liquidation Process:
<p>
Bitfinex will place a market order for the entire size of your open position. There is no limit price used, which could cause significant slippage if the market is particularly illiquid or your position size is particularly large. The use of a market order introduces volatility to the market and sometimes causes flash crashes or spikes. After closing your position, any left over equity is yours again. If you can manage to quickly deposit additional USD to increase your equity, then the process will halt if Bitfinex hasn’t already liquidated your entire position.
<p>
### OKCoin Force Liquidation Process:
<p>
OKCoin will confiscate the 1% equity you have left, and you will be left with nothing. OKCoin will then submit an order at the bankruptcy price (0% equity price) into the orderbook. If the exchange manages to close your position at better than the bankruptcy price, the remaining equity is used to cover losses of other bankrupt traders and is not returned to you.
<p>
Out of the three leveraged trading platforms, BitMEX has the most comprehensive margin policy. Traders are notified as they get closer to the margin call level and when the margin call level is reached. Due to the incremental force liquidation process, traders have an opportunity to either reduce the position themselves or deposit additional funds to end a margin call. After the force liquidation process is finished, traders have a large portion of their original position remaining.
<p>
Bitfinex and OKCoin move quickly to force liquidation with scant notifications given to users. Users have little to no time to deposit additional funds or reduce their positions once their account falls into margin call. After the force liquidation process is finished, Bitfinex users are left with a smaller portion of their equity at possibly depressed prices due to the exchange submitting a market order. OKCoin users are left with nothing.
<p>
When using leverage to trade one of the world’s most volatile assets, it pays to take the time to fully investigate and understand an exchange’s margin policy. For more details about the BitMEX margin policy please read Margin Call / Liquidation. At BitMEX we strive to be completely transparent about our margin policy and welcome any feedback from the community.