---
layout: post
title: What is the Lightning Network
author: Dr. Adam Back
authorurl: /dr-adam-back-/
published: true
---

<img src="/images/adam-back.png" alt="Dr. Adam Back" align="right">
<p><a href="/dr-adam-back/">Dr. Adam Back</a> has been involved in serious cryptography deployments for decades. In this interview, Dr. Back discusses the Lightning Network.
<center></center>
<p>TRANSCRIPT (<a href="http://www.satoshisdeposition.com/podcast/BTCK-168-2015-09-10.mp3">download mp3</a>)
<p><strong>Trace Mayer:</strong>  Welcome back to the Bitcoin Knowledge Podcast.  This is episode four in A Week with Dr. Adam Back.  In this episode, we're going to be talking about the Lightning network.  Thanks for being with us, Dr. Back.  And what is the Lightning Network?

<p>

<strong>Dr. Adam Back:</strong>  So the simple fashion is it's a rights caching layer for bitcoin proposed by Joseph Poon and Thaddeus Dryja in a paper earlier this year.  The idea is this will be able to greatly increase the throughputs and number of transactions per second of the bitcoin technology and allow us to get closer to micropayment levels of use and very low value transactions that have a number of advantages in being more efficient in the use of network resources and providing instant final settlements to bitcoin transactions.

<p>

There are companies out there accepting unconfirmed transactions, but there's a significant risk that they can get overturned or bounced.  So by accepting those transactions people are taking risk and there is some possibility or ongoing risk that those unconfirmed transactions security level may degrade or slip as people start to attack things on the network.  There's not that much assurance.  And so for bitcoin to get high assurance of transaction final settlement, you typically wait one or two block confirmations, which are a ten-minute interval approximately.

<p>

So when you get into the investment grade amounts, if you try to make a deposit of bitcoin into a bitcoin exchange, typically they're going to want six confirmations which is about an hour.  So with the Lightning Network contrarily you can make a transaction of any value support it and the settlement is pretty much instant, you know, sub-second.  It’s down to the network latency and Lightning also makes much lighter use of network resources.  The packets involved in the transaction once it's set up just flow peer-to-peer through a routing network.

<p>

So it's much more like the internet at large, where you you go to a web page and you download a page or something like that.  And that information, the request and the response flows using TCP/IP routing through your device to your ISP to some upstream provider and eventually to the web service and backend.  So, you know, the round trip on those things is it depends on your network connectivity, but fifty milliseconds, a hundred milliseconds, two hundred stretching out as you're -- you get to countries with slower connectivity and speed of light limitations kick in, as well.

<p>

So Lightning brings that kind of instant, much more bandwidth efficient, sort of, behavior to bitcoin.  It also supports still the smart contracting features of bitcoin and the trustless nature of bitcoin, which is a kind of surprising result that hadn't really been foreseen in this way.  I mean, there were precursor technologies, so there's something called the Payment Channel that had been implemented by Matt Corallo with assistance from Mike Hearn as part of the bitcoin J implement -- Java bitcoin implementation.  And those are more limited in nature because they are sort of unidirectional on point to point.

<p>

<strong>Trace Mayer:</strong>  Is there a need with the Lightning Network to rely on centralized third parties?

<p>

<strong>Dr. Adam Back:</strong>  So the way it works is the caching layer, the right caching layer, the Lightning is it's actually some kind of peer-to-peer network where there are nodes in the network and your payments flow through these nodes.  Now the interesting thing is the nodes even though, you know, you send a payment to the node in the node forwards the payment to the recipient or to another node that routes on to the recipient is that even though they're handling the money you don't have to trust them.  There was no way for them to take your money or withhold your money.  The worst case that could happen is a node could go offline and then it might take a few days to get your money back.

<p>

So there's a kind of time preference or delay risk but, you know, people running nodes get small transaction fees and they have a profit motive to run the nodes.  So it's expected that users would connect to a multiple nodes so they would be some redundancy and reliability built-in, but no need for trust.

<p>

And the small contracting also works because actually every Lightning transaction is a full valid bitcoin transaction.  So at any point, either party in the transaction can send it to the blockchain and close down the participation in Lightning and reclaim the funds they're due.  So that's also the mechanism that's used if a node gets offline permanently that you can reclaim the money that was involved in that channel.

<p>

<strong>Trace Mayer:</strong>  So when we're looking at scaling the bitcoin blockchain itself, which is currently limited at one megabyte, there's a network limitation of what is it, ON squared?

<p>

<strong>Dr. Adam Back:</strong>  Right.

<p>

<strong>Trace Mayer:</strong>  Maybe you can explain that and how this Lightning Network can help bitcoin scale in a technically appropriate way.

<p>

<strong>Dr. Adam Back:</strong>  So in computer science, there's a terminology called the Big O Notation which talks about the complexity or so the way that resources are used as the number of users or the number transactions increased, and it's a kind of stylized mathematical representation of how much resources are going to be used in the network as a number of users grow.  And so there are different ways to look at the resources, is it per user, or is it per transaction, are you looking at the aggregate use of network?

<p>

But anyway, if you boil it down, there's something like an ON squared thing going on, which is a kind of heavy scaling thing which you wouldn't ideally want to get into because, basically, if you ramp up bitcoin and you put all of the world's current transactions on to bitcoin, all of the derivatives trades and, you know, there are companies doing millions of those a day.  All of the wire transfers, all the cash payments, all the share deals, share transactions, derivatives --

<p>

<strong>Trace Mayer:</strong>  All the high frequency trading.

<p>

<strong>Dr. Adam Back:</strong>  Yeah, the high frequency trading -- I mean --

<p>

<strong>Trace Mayer:</strong>  Yeah, I mean, it --

<p>

<strong>Dr. Adam Back:</strong>  -- the forex stuff.  It's an astronomical number of transactions that are invisible to most people.

<p>

<strong>Trace Mayer:</strong>  And these will be able to happen as we'll talk about in episode five on sidechains.  We'll be able to actually have limit orders on the blockchain.  So we're talking about having trillions of transactions per year moving on.

<p>

<strong>Dr. Adam Back:</strong>  Right.  Yeah.  I mean, I think there's a strong interest and utility to being able to do that kind of thing on the blockchain because of the new trust assurances it provides and the --

<p>

<strong>Trace Mayer:</strong>  In the atomic trading?

<p>

<strong>Dr. Adam Back:</strong>  Right.  The cost savings, reduction of trust and possibility to re-update or dis-intermediate some of the need for trust in financial relationships.  So to come back to the scaling question, if we were to take all those transactions today and put them on the blockchain we would probably be saturating the internet with transactions because --

<p>

<strong>Trace Mayer:</strong>  It would make BitTorrent look mild.

<p>

<strong>Dr. Adam Back:</strong>  Yeah.  So apparently, well, I know Bram Cohen for some years now.  He is also kind of a --

<p>

<strong>Trace Mayer:</strong>  The founder of BitTorrent?

<p>

<strong>Dr. Adam Back:</strong>  Yeah.  Yeah.  So, I mean, he has a background in distributed systems and --

<p>

<strong>Trace Mayer:</strong>  And the economic incentives that go into --

<p>

<strong>Dr. Adam Back:</strong>  Right, right, right.  So --

<p>

<strong>Trace Mayer:</strong>  -- different resources being consumed.

<p>

<strong>Dr. Adam Back:</strong>  Yes.  So there was a start-up called Mojo Nation.  It was founded by Jim McCoy and Bram Cohen worked there and also Zooko Wilcox.  And so both Zooko and Bram went on after Mojo Nation came to an end to do their own kind of follow-up projects.  And so Mojo Nation itself had this concept of Agoric computing.  So there were resources of storage and bandwidth and so on provided by the network.  And Agoric is a word for --

<p>

<strong>Trace Mayer:</strong>  Market.

<p>

<strong>Dr. Adam Back:</strong>  Yeah.  Money and markets, and so the idea that they would be micropayment zipping around inside these peer-to-peer fabric that would be paying for service.  And, yes, if there's a sudden increase in demand, the demand will be paid for by transaction fees to receive, you know, web content which would pay for more resources to be provided.  So --

<p>

<strong>Trace Mayer:</strong>  Uh-huh.

<p>

<strong>Dr. Adam Back:</strong>  In today's world you could imagine paid with bitcoin micropayments and agent that's providing web service.  And there's a high demand so it goes and rents for itself more.  Amazon EC2 instance and the service grows to match the users and it all works very smoothly.  So there's much potential in Agoric computing and micropayments to manage resources.

<p>

<strong>Trace Mayer:</strong>  The novel Demon applied.

<p>

<strong>Dr. Adam Back:</strong>  Yeah.  Yeah.  So, I mean, the problem for Majo Nation is they didn't really have a micropayment system.  So they kind of simulated it best effort in the network and it wasn't real in some sense.  And so what Bram did to make it a little more real but work with what was available with BitTorrent is, like, a kind of tit-for-tat accounting.  So the people you're pairing with, you sort of account for, well, you know he sent me a hundred packets, so I'll prioritize and send him a hundred packets and as a peer-to-peer network, you could --

<p>

<strong>Trace Mayer:</strong>  Yeah.  That way you didn't get free ride (inaudible 00:09:56).

<p>

<strong>Dr. Adam Back:</strong>  Right.  So, I mean, that this --

<p>

<strong>Trace Mayer:</strong>  Well, not as may.

<p>

<strong>Dr. Adam Back:</strong>  Yeah, yeah.  So it helps relieve the free riding issue.

<p>

<strong>Trace Mayer:</strong>  And get -- yeah, and get people seeding.

<p>

<strong>Dr. Adam Back:</strong>  Right.  And so, you know, bitcoin micropayments with Lightning can potentially get back to the fuller picture of solving denial of service and scaling services on the internet. So to come back to the scaling topic there, on-chain bitcoin transaction is scaled ON squared and there has been discussion recently about changing the block size.  And, you know, whether we change the block size from one megabyte to eight megabytes or gigabyte or something, you know, that's firstly a gigabyte would presumably cause the network to fail if we tried that right now or only running a single node in a datacenter, somewhere a couple nodes like that.

<p>

So firstly, that's not practical; and secondly, it doesn't really change the picture.  You now, if you go from one megabyte to eight megabytes, you have eight times more transactions maybe, but as somebody on Reddit said model demand is infinite.  If you actually want to pile on all the while transactions, there is no plausible block size that you can choose that would make that possible.  So let's not play around.  Let's actually scale bitcoin algorithmically in a way that can make sense.

<p>

And so in some way, you know, moving from one megabyte to eight megabytes is a kind of a constant factor change.  It doesn't change the game and there's also confusion about what scaling means.

<p>

So scaling means how do the system resources change as you put more demands on it.  So, you know, this ON squared factor.  That's what scaling is about, the characteristics as it grows.  What people really mean when they talk about scale in a kind of colloquial sense is they mean what's the throughput of the system.

<p>

So changing the block size constant from one megabyte to eight megabytes -- okay, that changes the throughput, but it hasn't improved the scalability and, in fact, presumably the scalability went up by a factor sixty-four very loosely to get an eight times throughput increase, which is a very inefficient way to go about getting more scale and will sooner or later hit some just implied bottlenecks.

<p>

<strong>Trace Mayer:</strong>  What do you say that that type of proposal is just poor computer science applied?

<p>

<strong>Dr. Adam Back:</strong>  I mean, I think most people are understanding that, you know, to use their own terminology that it's kicking the can down the road, i.e. it's not solving anything.  It just creating a little bit of temporary reprieve while people work on some better technology.  So Lightning is a better technology.

<p>

<strong>Trace Mayer:</strong>  Yeah.

<p>

<strong>Dr. Adam Back:</strong>  So, I mean, to the extent that you might want to reprieve, I mean, I think it's reasonable, but you want to go at it carefully and use validated parameters and not push it too far, certainly not start to think that this is a long-term solution to anything because it's not and it won't pan out well for us if we think we're going to get to, you know, multi-gigabyte or terabyte blocks to actually fit stuff on because --

<p>

<strong>Trace Mayer:</strong>  And yeah, so I mean if you're dealing with some undergraduates and you're teaching them as Professor Back and you ask the question, is scalability the same as throughput?  True or false?

<p>

<strong>Dr. Adam Back:</strong>  False.

<p>

<strong>Trace Mayer:</strong>  False.

<p>

<strong>Dr. Adam Back:</strong>  False, yeah.

<p>

<strong>Trace Mayer:</strong>  And yet some people might get tricked up with the question like, which system has more scalability, the system with one megabyte or the system with eight megabytes?

<p>

<strong>Dr. Adam Back:</strong>  Well, they have the same scalability.  Because the scalability is ON squared factor, right?  So now, of course, there are things that can flip.

<p>

<strong>Trace Mayer:</strong>  They have the same scalability, but they don't have the same throughput.

<p>

<strong>Dr. Adam Back:</strong>  Correct, yes.

<p>

<strong>Trace Mayer:</strong>  So a lot of people who don't really have a solid understanding of the computer science might get that question wrong because they might think, "Oh, well, one is less than eight.  Therefore, eight has greater scalability."

<p>

<strong>Dr. Adam Back:</strong>  Right.

<p>

<strong>Trace Mayer:</strong>  When, really, the question is, no, it has greater throughput but not greater scalability necessarily?

<p>

<strong>Dr. Adam Back:</strong>  Right, yes.  And actually, there are costs and side effects.  So throughput in bitcoin, if we continue -- no, if we focus on just changing that size parameter, it's a sort of security throughput trade-off.  So by increasing the block size, you're inherently reducing the security of the system.  So security in the sense of, you know, bitcoin provides a number of interesting assurances.  Primarily, the main differentiation of bitcoin versus, let's say, PayPal or something, which obviously people are free to use and is a competing system.

<p>

So if you're not utilizing or following bitcoin for what it's providing, it's quite plausible to use PayPal or a centralized system and, in fact, you can build -- always build -- centralized systems on top of decentralized systems.  So there's no reason why somebody couldn't build a centralized system on top of bitcoin, and in fact, many companies are.  And there is a kind of implied layer, too, on top of bitcoin's blockchain layout one, which is the kind of netting that goes on inside.

<p>

<strong>Trace Mayer:</strong>  Exchanges?

<p>

<strong>Dr. Adam Back:</strong>  Yeah, exchanges.  I mean, even going back some years ago it was understood that the transaction volume inside Mt. Gox, which was for a while, sort of, eighty-five or so percent of the market of bitcoin exchange traffic that would saturate the bitcoin network multiple times over.  So I don't know if people have an exact number, but because some of these are dark pools and we don't know exactly.  The belief that the kind of layer two is accounting for something like ninety-nine percent of the bitcoin traffic.  So the current scaling -- sorry, the current throughput parameter is really just dictating how much has happened in layer two versus layer one and what Lightning provides is a layer two that can provide all the assurances of layer one.  So you will see people, which from the current layer two into a more trustless and secure layer two provided by Lightning.

<p>

The other thing to say about Lightning in regards to scale is that it's no longer an ON squared network.  It's a point-to-point network.  So there's some kind of more linear or scaling where basically the transaction throughput limits if I'm sending to somebody else is really down to how fast is my link and how fast is my network route to the person I am paying, how much bandwidth does it have and it's entirely plausible to do things like, you know, stream a video or pay for a video conference facility or something per second.  I mean, literally you could do that and that wouldn't be a particular problem for Lightning, whereas for bitcoin that would be kind of insane today.

<p>

And so that opens up the potential for many kind of micropayment use cases.  And there's -- I think there's a sort of if we have available micropayment system on a global scale, which is not tied to any particular fait currency, so it becomes a kind of lingua franca de facto internet currency for paying for service, low-value transactions to provide quality of service or to pay for content production that we could see some competition between that and the, sort of, advertisement model.

<p>

So one of the problems you run into with the advertisement model is there's kind of minimum fee that the existing payment rales can provide.  So you've got the credit cards and maybe there's a thirty to fifty cent minimum fee and some maybe you one half --

<p>

<strong>Trace Mayer:</strong>  And so we've had to have decentralization of advertising.  And, I mean --

<p>

<strong>Dr. Adam Back:</strong>  Yeah.

<p>

<strong>Trace Mayer:</strong>  -- are you getting towards like the 402 Payment method not specified error --

<p>

<strong>Dr. Adam Back:</strong>  Yeah.

<p>

<strong>Trace Mayer:</strong>  -- and the web browser and --

<p>

<strong>Dr. Adam Back:</strong>  Yeah.  I mean, I think that's something very interesting and entirely possible once you get into this pace.

<p>

<strong>Trace Mayer:</strong>  Yes, I mean, we go all the way from the very small like internet of things.  I interviewed Mr. Jennings from Filament, where he is going to be deploying a bunch of sensors and you will be able to buy weather data from these sensors or -- the whole bunch of other type of internet of things applications.  So micropayments all the way from there through the web browser all the way up to massive stock trades because of the smart contracts they can still go through these Lightning networks?

<p>

<strong>Dr. Adam Back:</strong>  Yeah.  So, actually I mean the Lightning Network is it was proposed in the context of bitcoin but actually it also applies to sidechains which are an extension mechanism for bitcoins.  So --

<p>

<strong>Trace Mayer:</strong>  In which we talk about in episode five.

<p>

<strong>Dr. Adam Back:</strong>  Yeah.  So, I mean, you know, without going too far ahead but, I mean, with the sidechain you can add confidential transactions that we talked about in episode three, you can add extended small contracts to do represent financial products, the relative structured products and have smart contracts, enforce and you can track other kinds of assets.  So U.S. dollars and shares, bonds, depository notes and so forth, and write small contracts between them, but the right caching layer that Lightning proposes will also work on top of sidechains.  They will also be able to act equally as an acceleration layer for sidechains.

<p>

<strong>Trace Mayer:</strong>  So when we were talking about being able to both extensify Bitcoin adding new features and abilities to it and then increasing its scalability, there's been significant progress being made between confidential transactions, the Lightning Network and sidechains.

<p>

<strong>Dr. Adam Back:</strong>  Yeah.  Things move fast in bitcoin.  It's like faster than internet time, I guess.  Now it's only a couple of years ago that --

<p>

<strong>Trace Mayer:</strong>  Bitcoin was released.

<p>

<strong>Dr. Adam Back:</strong>  Yeah.  And, I mean, you know, sort of like -- so I guess in the public eye for maybe what four years or so there was sort of, you know, the media awareness was more.  So quite things going back some years, you know, maybe two years ago, it was kind of, you know, news likes to amplify controversy and so there was all that kind of discussion.  But even in the last year and a half or so, we've seen a lot of, sort of, brand-name large financial companies set-up.

<p>

<strong>Trace Mayer:</strong>  Serious players.

<p>

<strong>Dr. Adam Back:</strong>  Yeah, I mean, set-up, you know, like UBS has blockchain innovation lab, I think in London and --

<p>

<strong>Trace Mayer:</strong>  Same with Barclays.

<p>

<strong>Dr. Adam Back:</strong>  Yeah.  And, you know, so many of the companies you've -- you just go look through the backlog of bitcoin FinTech news there are a bunch of companies in the financial space and in the FinTech space, who are taking interest in blockchain and smart contracts and how this can improve their cost-effectiveness or reduce various types of, you know, audit reconciliation, trusts and insurance costs.

<p>

<strong>Trace Mayer:</strong>  You interact with a lot of these players that aren't necessarily technologically savvy or experienced especially with blockchain technology like you are, and they do raise lot of concerns or issues with you about bitcoin scalability, you know, just kind of a short answer about it, but are any of those concerns valid or do you think bitcoin has got a solid plan in place to get the scalability concerns resolved and implemented?

<p>

<strong>Dr. Adam Back:</strong>  Yeah.  I mean, I think there was some kind of a misconception that Lightning was sort of vaporware and it might take years to arise, but the Lightning development projects and I have a colleague Rusty Russell who's working on the Lighting Network and he just did a podcast I think on Let's Talk Bitcoin which was just out in the last week on Lightning and there are, you know, there is an GitHub with the source code, there are now three companies, Blocktream.  Rusty Russell is working for Blockstream on Lightning.

<p>

Obviously, the authors, Joseph Poon and Thaddeus Dryja are working on Lightning and participating on the development mailing list which is open and very recently like a couple of weeks ago there were two companies that came forward and one of them released source code for another implementation kind of pre-alpha stage implementation and another one announced that they'd also been working on it and would soon release their source code.

<p>

So things are moving very quickly and, you know, it seems like there's some months of implementation work that's going in.  Rusty Russell comes from actually a networking background so he's quite well-known in Linux Kernel development as somebody who worked closely with Linus Torvalds and other Linux Kernel developers and specializing particularly in the network stack in Linux.  So he's really kind of network guru kind of personality.  So we're very excited to see what he can do with Lightning routing and peer-to-peer network to really make that very efficient and fast settlement layer which allows, you know, users to route efficiently because you've got to achieve some kind of efficient routing and the routing involves not just network routing, but also fee routing because the nodes in the network are charging fees and you want to find like a low cost in terms of fees charged route as well.  So it is kind of two dimensional routing problem.

<p>

So there seems to be quite fast pace of innovation in there and there's a kind of timing thing where people are wondering about bitcoin throughput, so we're going back to the block size think briefly.  Blocks are maybe a third or to forty percent full on average and actually Rusty as well had done some analysis of bitcoin transaction data to show that, I think, it's forty-five percent of the transactions that are in that thirty to forty percent are under a dollar value.

<p>

So that's not to say that, you know, everybody should be able to enjoy bitcoin at any value when we certainly want to see adoption very widely and in emerging markets and so forth, but there are also services that are providing layer two low-value transaction.  They're optimized for low-value transactions today.  So if push comes to shove there is like maybe six to eight times head room within bitcoin's existing throughput limits, but the way to really get to high throughput is more with the technology like Lightning and so, you know, when people talk about the block size they assume that if a change is made it might take effect immediately, but actually the previous soft forks.  So for example BIP66 was -- which was a soft fork to fix a security defect actually discovered by Dr. Pieter Wuille, and a fix, you know, to benefit all bitcoin users, that as a quite serious security defect that was fixed there.  That kind of soft forks upgrade actually took six months to deploy in the network.

<p>

So as the block size increases all the previous protocol changes of bitcoin have been backwards compatible protocol changes so-called soft forks and I mean there were unplanned things, but all the planned ones were soft forks.  So now changing the blocks size is, generally speaking, a non-backwards compatible change. So it's hard fork and so if anything it's more risky and intricate.

<p>

So, you know, a six-month time frame would be quite optimistic to achieve an upgrade.  So, you know, I think there's a kind of timing issue that if we had Lightning already deployed we would be making different decisions about how to change a throughput and which features to prioritize.  For example, it might be more interesting to prioritize a simple small increase in the block size and the relative check log time kind of advanced feature that really helps Lightning be that much more efficient.

<p>

So, there's a timing issue that maybe the blocks will start to get more demand before Lighting is ready, but it's quite a close call because, you know, Lightning is well under way and there's good hope of within, say, six months seeing an Alpha kind of, you know, don't put money in yet, but try it out kind of Alpha Lightning implementation for people to tinker with on the development side of things rolling in towards kind of production version in a year's time.

<p>

So I think for the kind of block size throughput discussion it's better to focus on kind of the short-term rather than the long-term.  I mean, some of the proposals being put forward stretch twenty years out into the future or even further and, you know, the bitcoin world would look quite different once we have Lightning running, let's say within a year or two.  For example, if we were to make a sort of interim plan for the block size to increase throughput modestly.  So I suggest it for example, a compromise between the different positions of starting with two megabytes as soon as that can be deployed, growing smoothly to four megabyte over two years into eight megabytes.

<p>

So the four years and eight megabytes is a kind of round number that has seen some validation in terms of network testing, though not very thorough and also has been -- the Chinese miners as I understand it really viewed eight megabytes as the maximum they felt comfortable with right now given the sort of network characteristics they're working with.  So, you know, to avoid creating problems for them and respect their wishes I think eight megabytes within four years would be something they might be able to work with, but certainly within four years the world will look quite different.  I mean, four years is essentially an eternity in the bitcoin space, right.

<p>

<strong>Trace Mayer:</strong>  Yeah, and especially if we have six to eight x headroom with the current throughput, doesn't it make sense to see what optimizations we can make under the current constraints?  Because there's a lot that can be done to increase the efficiency of how we actually use the block size that is there, but if there's no additional cost then, you know, we have every reason to be sloppy and otherwise do things that cost more in terms of space when it doesn't cost anything in terms of money to use up that space.

<p>

<strong>Dr. Adam Back:</strong>  Yeah, certainly.  I mean, I've heard some of the people who propose sort of very aggressive rapid block size increase actually expressing it as a kind of Keynesian subsidy to get free transaction fees almost or extremely low ones because there is a supply and demand dynamic that people who actually care about and want the characteristics and trustless properties of bitcoin they’re willing to pay a small fee to get that service.

<p>

So if the blocks size is plus and minus effectively unbounded there is an excess of supply and so the fees will basically become free and miners are in a competitive environment.  So it's difficult for them to say well, I won’t take that fee it’s too low because another miner will take it so unless there's some kind of bounding and --

<p>

So Lightning provides another dimensions to it.  So I think Lightning can potentially even increase the profitability for miners paradoxically because, you know, if you can see a thousand or ten thousand times fold utilization of bitcoin with micropayments lower values, instant confirming transactions for very low fees those still connect into the blockchain.  So there is a channel set up blockchain transaction that goes into Lightning so called anchor transaction and when nodes go offline there is a need to reclaim the transactions on the chain and to establish new ones.  So there is demand for the blockchain, but if there are many thousands of transactions connected to each anchor transaction there is a possibility to pay a larger fee because it's supporting a much higher economic use.

<p>

And so I don't think that really curtails anybody's use of bitcoin because you should think -- I think you really should think of Lightning as a integrated right caching layer for bitcoin itself.  So this is just kind of the next step.  I mean, in the early days of the internet the TCP/IP and IP address routing and then add DNS and we had webs http and other kind of service protocols in additional layers and people don't begrudge, you know, that they are not given direct access to IP or the IP is expensive or something like that.

<p>

It’s really, you know, at the user level you look at can you make a payment, is it cheap, is it fast, is it secure, can you still get the smart contracting on it, so I think the answer is, you know, basically everybody wins.  Uses, miners, bitcoin ecosystem, companies, investors if we get kind of two-layer scaling solution using bitcoin for the anchor transactions and Lightning for kind of high volume transactions.

<p>

<strong>Trace Mayer:</strong>  You know, ultimately, we have to have some pricing mechanism in order to perform the economic calculation to determine how much value the bitcoin network adds to society and miners' fees, transaction fees or you know, that's an actual economic hard cost to use the network that goes to a random miner.  So that's pretty much our only metric that we have to see what the market's willing to pay to use bitcoin.

<p>

<strong>Dr. Adam Back:</strong>  Yeah, that's right.  So I mean, in some ways as the subsidy or amount of bitcoins left to mine decreases actually there is an assumption stated in the --



<strong>Trace Mayer:</strong>  The white paper.

<p>

<strong>Dr. Adam Back:</strong>  -- the white paper that transaction fees would grow to provide, you know, to fund security.  So in some sense the users via transaction fees other than the subsidy are paying for security of the network that they're enjoying and so if we see frameworks where transaction fees are zero we may risk the security of the network just in the sense that nobody is willing to pay for and it becomes a tragedy of the commons.

<p>

<strong>Trace Mayer:</strong>  So I mean, there just are a lot of different variables and factors to take into account when we're considering the scalability of bitcoin, and also the technical differences between scalability and throughput and it is not good computer science to not understand that distinction.  We can make very, very poor choices thinking we need to increase the throughput of bitcoin thinking that we're increasing the scalability of bitcoin when were in fact only increasing the throughput.

<p>

<strong>Dr. Adam Back:</strong>  Right.  I think, many of the more technical people involved in bitcoin understand that is just increasing throughput technology kicking the can down the road, but the real scalability and high throughput comes from algorithmic improvements that reduce network resource utilization and add other advantages.

<p>

<strong>Trace Mayer:</strong>  Well, this has been episode four of A Week with Dr. Adam Back.  We've been discussing the Lightning Network which focuses in on increasing bitcoin's scalability and hopefully bitcoin's throughput.  Thanks for being with us, Dr. Back and we look forward to the next episode.  Episode five, where we will be discussing his brainchild, sidechains.

<strong> </strong>

<strong>Dr. Adam Back:</strong>  Thank you.
