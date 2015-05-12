---
layout: post
title: Counterparty Risk and Socialised Losses vs Central Clearing
author: Arthur Hayes
authorurl: http://www.weusecoins.com/arthur-hayes
published: true
---

### Counterparty Risk
<p>
When trading Bitcoin, aside from price volatility, counterparty risk is a trader’s next biggest risk. The spectacular implosion of MtGox and other cryptocurrency exchanges remind the community why it needs to stay vigilant. With the addition of leverage, traders on derivatives exchanges need take even greater care.
<p>
Derivatives exchanges offer products whose value depends on a third-party event. At settlement, losers must have enough funds to cover winners or else someone is shortchanged. To mitigate this risk, exchanges require traders to hold a minimum amount of equity vs. the total value of their outstanding positions. This is called margin. When a trader’s equity drops below a minimum margin level, a margin call is issued and the exchange force liquidates a trader’s positions. Problems arise if the exchange is unable to close a trader’s positions before their margin level drops below 0. Bitcoin derivatives exchanges have chosen two methods to handle this issue, socialised losses, and central clearing.
<p>
###Socialized Losses
<p>
Socialising losses involves charging the winners pro rata for any losses exchange faces when margin calling bankrupt traders. OKCoin, BitVC, and 796 futures exchanges socialise losses. When a trader’s margin balance reaches 0, these exchanges submit a market order at the bankruptcy price. If that market order does not get filled before the expiry of the contract, the exchange takes the total loss between the market order price and the settlement price and taxes the winners pro rata. If one had realised a profit of 10 Bitcoin, but the exchange faced a loss of 2 Bitcoin, one’s profit would be reduced by 2 Bitcoin.
<p>
Due to the socialising of losses, exchanges are able to offer greater leverage than is prudent without facing any risk. They have transformed a potential hedging product into a para-mutual gambling product. The exchange has no incentive to improve their margin policy or analyse trade data to determine a safe level of leverage. This is a classic example of moral hazard. In addition, realised gains may not be withdrawn from the exchange until settlement of the contract, which ensures the exchange can effectively tax the winners in the event of a loss.
<p>
### Central Clearing
<p>
BitMEX takes the complete opposite approach. BitMEX centrally clears all derivative products it offers. Instead of buyer facing seller, both buyer and seller face BitMEX as the central counterparty. In the event that either side has insufficient equity, BitMEX will guarantee that the winners receive the full amount they are contractually owed. As a result, BitMEX offers less leverage and employs a Chief Risk Officer to implement a sophisticated margin call process. The automatic margin calling algorithm allows BitMEX to surgically force liquidate traders to dampen volatility due to margin calls. BitMEX also pro-cyclically allocates a portion of revenue to a rainy day fund to cover future potential losses. BitMEX has not eliminated counterparty risk, but takes a prudent risk management approach to ensure that its contracts can be confidently used for hedging, arbitrage, and speculation.