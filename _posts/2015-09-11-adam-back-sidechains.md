---
layout: post
title: What are Sidechains?
author: Dr. Adam Back
authorurl: /dr-adam-back-/
published: true
---

<img src="/images/adam-back.png" alt="Dr. Adam Back" align="right">
<p><a href="/dr-adam-back/">Dr. Adam Back</a> has been involved in serious cryptography deployments for decades. In this interview, Dr. Back discusses Sidechains and their applicability for Bitcoin's scalability, extensibility and development.
<center></center>
<p>TRANSCRIPT (<a href="http://www.satoshisdeposition.com/podcast/BTCK-169-2015-09-11.mp3">download mp3</a>)
<p><strong>Trace Mayer:</strong>  Welcome back to Bitcoin Knowledge Podcast.  This is Episode 5 with the legendary Dr Adam Back.  We're going to be discussing his brain child, sidechains.  Welcome to the podcast, Dr. Back.

<p>

<strong>Dr. Adam Back:</strong>  All right.  Thank you for the illustrious introduction.

<p>

<strong>Trace Mayer:</strong>  Well, I don’t know who else would be more legendary than you, perhaps Satoshi, but maybe you are him.  But any ways, let's into sidechains.  What exactly are these sidechains and why are they going to be important for extensifying and developing out bitcoin?

<p>

<strong>Dr. Adam Back:</strong>  Right.  So once you start sort of digging into bitcoin and learning about how it works and the development process works, you realize that it’s, you know what, there is a quite rapid pace of development it's generally focus on security and core features that are needed to move forwards and there is a wider community of people who are interested to try out all kinds of additional extensions and fun ideas that they would want to, you know, put in front of users and see if they would gain adoption and --

<p>

<strong>Trace Mayer:</strong>  Everyone's got their pet project.

<p>

<strong>Dr. Adam Back:</strong>  Right, and, you know, even within bitcoin it start off as a kind of informal wish list and I think, Greg Maxwell has a page on a bitcoin wiki with dozens and dozens of very interesting and innovative ideas that could be potentially integrated into bitcoin, but, you know, there is only so much development bandwidth, there is only so much quality assurance bandwidth.  Bitcoin has a very strong focus on quality assurance in a vigorous way because of the amount of money involved and --

<p>

<strong>Trace Mayer:</strong>  Well, we got billions of dollars at stake and --

<p>

<strong>Dr. Adam Back:</strong>  Right.

<p>

<strong>Trace Mayer:</strong>  -- there isn't literally no margin for error.

<p>

<strong>Dr. Adam Back:</strong>  Exactly, yeah.

<p>

<strong>Trace Mayer:</strong>  Usually, when we're deploying crypto systems there is a margin for error you can build in additional safeguards in case one safeguard fails, but in bitcoin's case there is no margin for error.  Period.

<p>

<strong>Dr. Adam Back:</strong>  Right.  So it's one of the high assurance kind of software projects on the planet right now.  I mean, the closest analogy people like to talk about is upgrading the flight control system on a super jumbo. I'm sure everybody's heard that particular one.  And it’s kind of apt in unfortunately.

<p>

<strong>Trace Mayer:</strong>  Yeah, except we're not just upgrading the system on one super jumbo, we're upgrading it on all the super jumbos all while they're in the air.

<p>

<strong>Dr. Adam Back:</strong>  Yeah.

<p>

<strong>Trace Mayer:</strong>  And, I mean, you upgrade it the wrong way and we've got tens of thousands of people in the ocean or wherever.

<p>

<strong>Dr. Adam Back:</strong>  Or in bitcoin's case billions and billions of other people's money.

<p>

<strong>Trace Mayer:</strong>  Poof.

<p>

<strong>Dr. Adam Back:</strong>  Yes.

<p>

<strong>Trace Mayer:</strong>  Confidence's gone.

<p>

<strong>Dr. Adam Back:</strong>  So now --

<p>

<strong>Trace Mayer:</strong>  And we've seen it happened before.  Mike Hearn's very first commit to bitcoin hard forked the network and there was a drop in the price of 30 to 40% within an hour or two.  So I mean, it's very serious what we're talking about.

<p>

<strong>Dr. Adam Back:</strong>  Yeah, I mean, I think people like to qualify that in a sense that it wasn't foreseen that fork would arise from that and it toasts the kind of the security reviews.  So nobody foresaw that, and it's kind of a subtle problem.  So I won’t like to point a finger at Mike, but never the less it was a kind of scary moment for bitcoin and the technical community had to react very quickly and actually if you go look online there is an analysis done more recently by --

<p>

<strong>Trace Mayer:</strong>  Yeah, it's like a play by play.

<p>

<strong>Dr. Adam Back:</strong>  Yeah, it's quite fun.

<p>

<strong>Trace Mayer:</strong>  It's kind of fun.

<p>

<strong>Dr. Adam Back:</strong>  By this guy, Dr. Arvind Narayanan, and he's kind of analyzed how the community kind of debugged it and fixed the security very rapidly.  So it's kind of illustration that, you know, people like to think of bitcoin as anti-fragile.  Antinopolis  has coined this kind of phrases that applies to bitcoin, but the day to day reality of it is there are some extremely smart and very quick to react experts who are monitoring the system and fixing issues as they arrive and some of those fixes required careful analysis and security planning over extended periods of time as well that the public is generally not necessarily aware of until they're published.

<p>

So the recent BIB66 deployment actually had a quite big security defect that was fixed within its rollout that was subsequently released by Dr. Pieter Wuille and there's a CVE report now about the security defect there so people can see what was going on behind the scenes.

<p>

<strong>Trace Mayer:</strong>  And that was a security defect that could have affected every bitcoin user?

<p>

<strong>Dr. Adam Back:</strong>  Yeah.  So, I mean, it depends on like, you know, the exact details of how people are using it and that kind of thing, but it was a pretty serious defect that got fixed right there.  You know, if it was generally known about it could have been exploited in a kind of proactive way and the fact that, you know, we can see in the network that basically nobody else was aware of it.  Well, the people that we're aware of it didn't exploit it because you would see evidence of this in the blockchain.

<p>

<strong>Trace Mayer:</strong>  So you and Dr. Pieter Wuille, and Greg Maxwell kept your yap shut.

<p>

<strong>Dr. Adam Back:</strong>  In fact, beyond myself being kind of peripherally aware that they were -- the core developers were working on something.  I actually intentionally abstained from knowing the details because it's a kind of responsibility, right?  You don't like, you know, so it's having knowledge of very high value secrets.  So I didn't want to know.

<p>

<strong>Trace Mayer:</strong>  Intentionally ignored.

<p>

<strong>Dr. Adam Back:</strong>  Yeah, I know that there are other few people who took same approach actually.  So I know Peter Todd had mentioned same kind of thing, didn't know about the details beyond, okay, I trust you guys, you're working on, you'll be rigorous and fix it in the best way, but the information should stay closed until it's --

<p>

<strong>Trace Mayer:</strong>  So the bitcoin guardians, there are guardians there, they're trusted with the very foundational parts of bitcoin and in this case they could have abused that trust and they didn't.

<p>

<strong>Dr. Adam Back:</strong>  Right.

<p>

<strong>Trace Mayer:</strong>  You know.

<p>

<strong>Dr. Adam Back:</strong>  Yes, it's true.

<p>

<strong>Trace Mayer:</strong>  Yeah.  I mean, how would sidechains help alleviate some of this pressure that -- because I mean, think of the weight on the shoulders.  You're just waiting for BIB66 to finally get uptake by the networking get rolled out.  That's a very heavy weight on some of these individuals.  You yourself refused from knowing the exact details of the weight.  You didn't want to shoulder that burden.

<p>

<strong>Dr. Adam Back:</strong>  Right.

<p>

<strong>Trace Mayer:</strong>  How can sidechains help alleviate some of that weight, some of that burden on our core developers in the development process?

<p>

<strong>Dr. Adam Back:</strong>  So, as we were saying just a moment ago there are many features people would like to implement and if it was a free for all and everybody was checking in their features that risks would increase, so.

<p>

<strong>Trace Mayer:</strong>  There just wouldn't be adequate testing and review done.

<p>

<strong>Dr. Adam Back:</strong>  Yeah, and I mean, it's just software complexity.  I mean, bitcoin is very complex system, their kind of leading edge of human capacity to manage the complexity and security assurance of, and so what you normally want to do in software systems is to add modularity and to sort of have security [Inaudible 00:07:46] assurances between them.

<p>

So what sidechains do is they give away to extent bitcoin.  So to add new features to bitcoin, but do it in a modular way.  So there is a separate chain.  [Inaudible 00:07:58] the bitcoin main chain and you set up a sidechain.  So with the company I co-founded with Gregory Maxwell and Pieter Wuille and some other bitcoin contributors and developers, we released the first version of the sidechain, it's called sidechain alpha, some months ago and the way that works is there's this alpha sidechain and there is the main bitcoin chain and there's a kind of very rigid security boundary between them.

<p>

So you can move bitcoins from the main chain into the sidechain and you can move the bitcoins back out again, but if a security defect were to arise in the alpha sidechain there is basically no way that that could affect ownership within the main bitcoin chain.

<p>

So that gives a very strong security boundary to build some new software through various stages of development.  So it can start at an alpha stage, go on to beta and then go into a kind of 1.0 robust stage of deployment and so you can try some quite novel things as we did.

<p>

I mean, we released this confidential transaction feature that we talked about in previous episode and that would have been very challenging to do in bitcoin directly and it was actually the interest to be able to deploy features like that.  That was proposed back in 2013 and I found that the appetite to include such advanced features directly in bitcoin was hesitant because of the security sort of balance that we just discussed.  So that was kind of what led me to go and focus on how one could more modularly extend bitcoin and so the sidechain idea was kind of combination of ideas by myself and Gregory Maxwell and, you know, once we came up with the idea that you should be able to extend bitcoin.

<p>

It's an open framework for extending bitcoin.  Although individuals or companies can, you know, make their own sidechains with completely novel insights.  There's an API or boundary for how you move bitcoins in and out of it, but once you're inside it you could essentially rewrite it in a completely novel architecture.  You could have a sidechain with zero cash in it which has a much different ledger structure where, you know, there are all kinds of zero knowledge proofs governing ownership and not a visible ledger.  You can change your smart contracting language.

<p>

<strong>Trace Mayer:</strong>  You could have a proof of stake.

<p>

<strong>Dr. Adam Back:</strong>  Yes.

<p>

<strong>Trace Mayer:</strong>  You can make it a permission blockchain.

<p>

<strong>Dr. Adam Back:</strong>  Right.  I mean, potentially you could do proof of stake.  You might need a bridging mechanism to do that, but that also is possible.  So it really opens a scope.  It's quite free form.  You can do basically whatever you want inside there and, you know, people's trust of your particular sidechain should come down to, you know, well, how competent are you, who has reviewed, what kind of a quality assurance bar is there.

<p>

So people who put money into it, put bitcoins in to it or do financial transactions in it with other kinds of assets that are now supported in it, they should pay attention to the assurances and competence of the people who are developing it, but at least it opens up.  So we can see potentially a much more rapid Internet pace development of new adventurous features and some very interesting things may come out of that.

<p>

<strong>Trace Mayer:</strong>  So how does the sidechain actually work?  Are we putting something into the [off return 00:11:07] on bitcoin, are we creating a smart contract?  I mean, how does it actually work or function?

<p>

<strong>Dr. Adam Back:</strong>  So let's start with a simple version.  So what you do basically you take some bitcoins on the main bitcoin chain and you suspend them by sending them to a special smart contract which handles suspending bitcoins and in order to do -- so [Inaudible 00:11:36]

<p>

<strong>Trace Mayer:</strong>  And which features in bitcoin will be used to do that?

<p>

<strong>Dr. Adam Back:</strong>  Okay.  So to do that with a bitcoin smart contracting languages are general programming language, but some of the operation codes were disabled historically for security reasons and there are some limits and it appears to be not know quite possible or not efficient to implement the suspend feature directly in the bitcoin script.  So there's a need to add a feature to enable that which is soft forkable which you can upgrade -- you can add it in a backwards compatible way and there's discussion of how that might -- the mechanism, how that might happen.

<p>

And so, once you suspended the bitcoins, you present the proof of suspension to the sidechain and the sidechain grants you the equivalent number of bitcoins on the sidechain.  So the effect is as if you've moved the bitcoins from one chain to another, and then you use them in the sidechain and maybe the sidechain has, you know, different smart contracting language or support for, as the alpha sidechain has, confidential transactions.  So you can hide the values or native tracking of shares and bonds and fiat currency, whatever assets people want to move.

<p>

<strong>Trace Mayer:</strong>  And eventually, could we see sidechains that are specialized and perhaps have limited programming ability where one might be focused on rewards programs, you know, for frequent flyer miles or rental car systems and then we might have another sidechain that's focused for high frequency trading or another one for bonds and stock assurances?

<p>

<strong>Dr. Adam Back:</strong>  Sure, yeah.  Certainly that's the idea that you would have sidechains that fulfill specific purposes.  I mean, generally speaking for --

<p>

<strong>Trace Mayer:</strong>  Are they going to be interoperable?

<p>

<strong>Dr. Adam Back:</strong>  Yes.

<p>

<strong>Trace Mayer:</strong>  Will it be possible to trade your Delta frequent flyer miles that are on the Delta sidechain, that's a sidechain to the credit card or the rewards points chain be able to trade those frequent flyer miles or use in this collateral against an insurance contract for example --

<p>

<strong>Dr. Adam Back:</strong>  Yes, so --

<p>

<strong>Trace Mayer:</strong>  -- or to pay for shares of stock that are on a different sidechain?

<p>

<strong>Dr. Adam Back:</strong>  So that's the idea basically.  So sidechains and so we talk about how you can move bitcoins from the main chain into the sidechain and you can move them back by doing something called a proof of burn and you provide the proof of burn back to the bitcoin chain and that allows it's to un-suspend and let your coins move around within the bitcoin chain again.  So that kind of completes the loop there, but that same mechanism can work between sidechains

<p>

So a given sidechain may be tracking U.S. dollars or rewards points and allow trading of those things or writing of smart contracts to create financial instruments like derivatives and structure products, but those -- even the assets issued on a sidechain can be moved to another sidechain and even the smart contract constructive products can be moved between sidechains.

<p>

And so you could write a smart contract on one chain that involves bitcoin in U.S. dollars and some kind of derivative, move it to another sidechain and then use that instrument as a building block to build a structure product or some other kind of product.  So the sidechain is really, you know, sort of internetworking mechanism between chains.

<p>

So it's a way for people to interoperate and, you know, the financial system is very interconnected and the blockchain technology is all about automating real-time audit and reducing trust -- removing trust from the issuer of a financial products to the product itself in a kind of covered product sense.

<p>

So for that to make sense, you know, if different institutions are using different chains or sharing chains, you need to be able to transfer the trust between chains.  And so, you know, if you have systems which are using incompatible blockchains it will start to become a problem because you will lose the trust assurances every time you move between chains. You really need to kind of standardize trust transferring internetworking model and that's what sidechains provide.

<p>

<strong>Trace Mayer:</strong>  Which would be an ideal reason for Barclays or Citi or any, you know, Delta, anybody who's looking at applying blockchain technology they're most likely going to want to apply it in a sidechain so that they can be interoperable with bitcoin.

<p>

Because I've heard it described bitcoin as the worldwide ledger and so anywhere we have a ledger and I like to call it a triple entry bookkeeping system.  So anywhere we have a ledger and we need to do bookkeeping or accounting whether that's the title to a house or a car or a yacht or a shares of stock or how many frequent flyer points we have or royalties for music, like, whatever it is that we need a ledger we can build sidechains that are then interoperable for all of these different applications of ledgers, is what you see happening with this.

<p>

<strong>Dr. Adam Back:</strong>  Right.  So, I mean, I think there's every reason to do that, you know.  So I mean, right now many financial institutions and FinTech players are looking at blockchain technology.  They're largely at the starting point of trying out the technology to understand it or doing trial runs or trying it out with specific markets, but the financial network is very interconnected as I mentioned.

<p>

So once it's running and other people are running the same technology stack, they will want to be able to transfer their products and sell them to other institutions that are going to resell them or package them --

<p>

<strong>Trace Mayer:</strong>  Or used them as collateral --

<p>

<strong>Dr. Adam Back:</strong>  Exactly.

<p>

<strong>Trace Mayer:</strong>  -- want to suspend them and pay them out as an annuity or I mean, you get all of these different potential uses.

<p>

<strong>Dr. Adam Back:</strong>  And so another thing to say is that potentially, you know, a sidechain can be -- you can make a private sidechain between a group of trading parties or you can also have a public sidechain and within the public sidechain you can have a sort of virtual private sidechain.  In the sense that much of the data in there, you know, the blockchain is only about proving the integrity of the financial transactions and it doesn't necessarily reveal the terms of the smart contracts, the values exchanged, what shares have changed hands even it's just providing a kind of cryptographic trust assurance between ledgers.

<p>

So people shouldn't feel too concerned that this technology is going to kind of dump all their information out on to the main blockchain.  And a bitcoin has some of those properties, but new technologies are coming online with confidential transactions that provide a more of a kind of virtual private chain model and so in that model it's also interesting that you can have different issuers.

<p>

So you mentioned the rewards program, you know, so there is new inherent reason that the rewards program issuer can't be an issuer of their rewards points on to the sidechain and another hotel chain or airlines can issue points on the same chain.  The chain supports user defined assets and users can be, you know, different hotel chains or airlines or loyalty points or shares.  So basically many things can fit on the chain.

<p>

And the only real, sort of, technology push to start a new chain is generally to add a new feature that specialized in a particular type of market.  If there is something that's about high frequency trade maybe it makes some tradeoffs and is focused on that type of application, but things within the same kind of -- that can work with the same smart contracting and latency and so forth characteristics can just as easily exist on the same sidechain or if people prefer they can make an isolated sidechain and it can still connect and the assets can be transferred between sidechains.

<p>

The reason to have things on the same sidechain is you can directly write smart contract between them, whereas if you want to write a smart contract with an assets that's on a different chain you have to bring it to the same chain.  So the contracts are expressed within assets on a chain and you can move things there.

<p>

So anyway, it provides a kind of standardized interoperability layer.  It doesn't really constrain people because they can potentially pick up a sidechain implementation from a different company or they can write one themselves or they can extend one or pay somebody to extend one for them.  So there's not really that much constraints in what they're doing.  It's just a internetworking interoperable layer.

<p>

If you go back to the Internet analogy, if every Internet service provider and every big business was using a different network stack and you couldn't connect to them the world would be a much poorer place.  So I want to see that kind of interoperability and it's really essential that the trust mechanism is transferable, otherwise we lose the kind of big value of the blockchain.

<p>

<strong>Trace Mayer:</strong>  Yes, kind of like the lamp stack.  Everybody uses Linux and Apache and so it's when we're dealing with the actual development of the core bitcoin protocol how did these sidechains help with that?  We can roll out a new feature instead of doing a hard fork.  We can banal test it and if it doesn't have any critical flaws what do we do just merge it back into the core protocol?

<p>

<strong>Dr. Adam Back:</strong>  Yeah.  I mean, on the Alpha sidechain we implement a number of elements and some of those are candidates for merging back into bitcoin because they are soft forkable.  It's generally more complicated to package a change as a soft fork change for bitcoin because there's a kind of, you know, the backwards compatibility mechanism has its own complexities and takes this period of time to apply, but nevertheless some of those features have now been proven, for example, Schnorr signatures which make more efficient use of blockchain space and Dr. Pieter Wuille was able to construct a more efficient multisig.  He called it tree sig that he presented it at the San Francisco Bitcoin Conference last week and so we can basically enable much more complicated bank mandates multi signature scenarios and make much more efficient use of blockchain space using those and so that kind of thing could actually be merged with bitcoin.

<p>

<strong>Trace Mayer:</strong>  And so does that help increase bitcoin's scalability or throughput or both?

<p>

<strong>Dr. Adam Back:</strong>  It does increase its throughput a little potentially because, you know, we're seeing more widespread adoption of multisig now and the bitcoin form of multisig.  It does make every transaction size maybe two or three times larger and so to the extent that the Schnorr multisig, you know, a three of three Schnorr multisig is the same size as a single bitcoin signature transaction and some of the other variants are also -- basically all variants of multisig are more compact using this technology.  So it reclaims some of the throughput.

<p>

<strong>Trace Mayer:</strong>  Are there any increase privacy benefits associated with the multisig?

<p>

<strong>Dr. Adam Back:</strong>  Yes.  So it's maybe not so well understood, but the smart contracting feature of bitcoin, you can engage in a private smart contract.  So you can encode with smart contract as a P2HS where the chain only sees the hash of the contract and if you struck to your overall contract two parties to the contracts so you know, if I, Adam, engage in a smart contract with Trace, which is, you know, some kind of derivative and based on the market conditions let's say Trace is the beneficiary because, you know, it worked out in his favor.

<p>

Now the smart contract gives the exact details, but the blockchain doesn't really need to see that.  As long as myself and Trace signed the multisig.  So it will say, you now, Adam and Trace signed or whatever the smart contract decrees.  Now, we can see which way the small contract goes and so there's no reason for us to present the proof an arbitrate them on the blockchain because we know the outcome.  So we just as well sign the multisig and that preserves the privacy of the contract details and it saves blockchain space because to present the smart contract to the blockchain takes space.

<p>

You have to actually present the program, where the hash of the program is much small.  So I could well imagine that many smart contracts would operate in that way where there's actually no need to present the terms of a smart contract.  That's just the kind of arbitration and there's no need to test the terms of the arbitration because it is perfectly predictable.  We know upfront which way this contract played out.  So there is no incentive for us to contest it on the blockchain.

<p>

<strong>Trace Mayer:</strong>  What about being able to prove or disprove who the actual signers were in one of these multisig transactions?  Is there any way to have optionality with that?

<p>

<strong>Dr. Adam Back:</strong>  Yeah, so that's one of the properties of a multisig whether you have an audit trail to see which, you know, if there is a two or three to see which two signed and that's an optional feature. The tree sig multisig that sort of complex that Pieter Wuille presented preserves that property.  So you can still see who signed.  You can just represent that more compactly.

<p>

<strong>Trace Mayer:</strong>  And it's optional?  So you can't see or you can choose not to be able to see?

<p>

<strong>Dr. Adam Back:</strong>  Right.  So particularly if you go for the sort of three of three -- well, let me see.  There are also models where you can make something even more compact and not necessarily be able to see who signed, but generally there is authorization information and another detail is that that is kind of considered to be an audit log and the outcome of the transaction is what's important which is, okay, was it authorized and who received the money, but the information about the actual signature serialization and who signed can be considered a separate audit trail and so another thing we observed in the sidechain alpha is that you can do, we call it segregate witness, which is the witness is a cryptographic term meaning the proof and so we noticed that you can separate it and actually this is a kind of robust fix for transaction malleability is related to this which is another factor that bitcoin is still working on fixing.

<p>

If you applied this on the blockchain about two-thirds of the blockchain traffic are related to audit information and about one-third related to the outcome.  So now if you applied this and then you want to sync up a new note you don't actually need all the audit information.  So you could sync up a note about three times faster with current blockchain characteristics.  So that's something the sync time to cache [inaudible 00:25:59] is another kind of usability characteristic of blockchain to improve its performance generally.

<p>

<strong>Trace Mayer:</strong>  And it's very interesting.  I'm just thinking of this in context of in episode three where we're talking about the confidential transactions and we got a little distracted into ring signatures and coinjoin and, you know, some of these applications with multisig to provide increased plausible deniability and other features that could help make a company's security profile less obvious to any observers of the blockchain, for example.

<p>

But yeah, to get back on point, with sidechains you consider this one of the major innovations that's going to be happening in this blockchain technology stage?

<p>

<strong>Dr. Adam Back:</strong>  Before I -- you know, when I started in bitcoin I was interested in confidential transactions and just generally improving fungibility and bitcoin and adding, extending it in interesting ways.  And then I ran into the problem about extensibility.  And so once Greg Maxwell and I had found a way to do it with sidechains, we became pretty convinced that this is actually the most important thing to work on and that became our focus from that point.  Because we thought that was the most important thing to advance bitcoin and to enable bitcoin to innovate and grow in the use cases that the technology can provide and so that's why we founded Blockstream to develop that technology,

<p>

<strong>Trace Mayer:</strong>  Well, thank you so much for taking this great amount of time.  We've done five packed episodes.  This has been episode 5 where we discussed your brainchild on sidechains, one of the most fundamentally innovative parts of bitcoin that will enable its extensibility.  For the series we've had Dr. Adam Back, the legendary and thanks so much for everything you've done with bitcoin and for the tremendous intellectual leadership you've provided in this field with us.  So thanks for been on the podcast with us, Dr. Back.

<p>

<strong>Dr. Adam Back:</strong>  Thank you.
