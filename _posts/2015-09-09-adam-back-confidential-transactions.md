---
layout: post
title: What are Confidential Transactions
author: Dr. Adam Back
authorurl: /dr-adam-back-/
published: true
---

<img src="/images/adam-back.png" alt="Dr. Adam Back" align="right">
<p><a href="/dr-adam-back/">Dr. Adam Back</a> has been involved in serious cryptography deployments for decades. In this interview, Dr. Back discusses Confidential Transactions.
<center></center>
<p><b>TRANSCRIPT</b> (<a href="http://www.satoshisdeposition.com/podcast/BTCK-167-2015-09-09.mp3">download mp3</a>)
<p><strong>Trace Mayer:</strong>  Welcome back to Bitcoin Knowledge Podcast.  This is Episode 3 in our week with Dr. Adam Back, Gandalf the White of the Bitcoin project.  Remember cited by Satoshi in the white paper?  Welcome back, Dr. Back.

<p>

<strong>Dr. Adam Back:</strong>  Hi.  Thank you.  Good to be here.

<p>

<strong>Trace Mayer:</strong>  So, you know, we've been, we have been talking about the importance of extensifying bitcoin in doing real hard computer science and then applying it.  Let's turn our attention to this concept of confidential transactions that you've come up with.  What exactly are these confidential transactions and why are they important?

<p>

<strong>Dr. Adam Back:</strong>  What confidential transactions provide is a way to protect the values that you are transacting such that they are only visible to the people involved in the transaction.  So, now the Bitcoin blockchain is very public and more public even than most online electronic transactions today.  So you can think of the Bitcoin blockchain as something like as if your credit card statement and bank statement were published online in a big global shared ledger with your name and address blanked off and as you can imagine that's a kind of concerting -- disconcerting thought for many people and there are actual security risks and privacy risks associated with that and so confidential transactions is a way to retain the assurances and trust advantages of the Bitcoin blockchain while protecting more privacy.

<p>

<strong>Trace Mayer:</strong>  Is there actually a need or a desire for this?  I mean, who is this coming from?

<p>

<strong>Dr. Adam Back:</strong>  Actually, you’d be surprised so it comes from a number of directions.  So let's start with the kind of business ecosystem and financial companies that more recently have started looking at blockchain for the advantages it can provide to the existing financial networks.  And certainly talking with folks from that sphere it’s very, you know, very frequent that they would say that one of their main concerns potentially with using block chain technology as it is, is that it's an open public ledger and so, you know, they would therefore be unable to protect the confidentiality of proprietary trading or dark pool transactions or just the transactions for clients of theirs.

<p>

And there are, you know, good business reasons for not pre-publishing all of your business intents.  It would, you know, undermine you or expose you to other companies competing with you based on your knowledge.  So, you know, you've done your analysis and you've decided a market strategy, you don't necessarily want to signal or communicate that to public at large.  And in the existing financial system there are actually quite large successful companies that specialize in acting as intermediaries to hide the identity of trading parties so that they don't signal to their competitors what moves they're making.

<p>

You know, if you have somebody who has a large position in something and have the name attached to it and they start selling people will see that as a signal and get ahead of them and they will then have difficulty selling their position at a reasonable price and so that's from the business side.  Now, on, you know, just on the user side you know if you have bitcoins there are people who are paid a salary by bitcoin companies in bitcoin and people who have invested in bitcoin or were early miners in bitcoin and have a particular positions so if you can think about the sort of credit card or bank statement case when you go into a coffee shop and you buy a cup of coffee you wouldn't normally expect the barista in the coffee shop to see your net worth, you know, flash point on the till kind of thing.  Right?

<p>

So bitcoin kind of provides that kind of risk and so firstly that's kind of invasion of privacy norms in today's society.  You know, I mean your bank or your broker or your financial advisor knows your financial position but everybody you interact with on day-to-day transactions doesn't know and frankly doesn't need to know.  And there's also a security dimension if you engage in a low value transaction sort of, you know, in a very public place and somebody can therefore see your net worth, you’re more likely to be mugged or you know if that's exposed on the Internet you know don’t forget that bitcoin transactions are broadcast on the network and often there's no particular attempt to hide the IP address of the originator of the transaction.

<p>

So on the bitcoin network today if you know somebody has, let's say, a hundred bitcoins which is quite a lot of money today and they sent a tenth of the bitcoin to buy a lunch subscription or something maybe they’ve released to the Internet that they made a transaction of one tenth of a bitcoin and sent 99.9 bitcoins back to a change address and that would expose the IP address to suggest that their all of bitcoins under management and you know there are geolocation services where you can basically cross-reference an IP address to an approximate street address and therefore there would be risk that perhaps their house would be burgled or they would be enhanced security risks.

<p>

So that kind of information generally should be kept confidential because it's, you know, exposing people to risks.  It’s violating privacy norms and it's acting as a barriers for adoption in existing financial situations.  And the same kind of thing would apply to companies, you know, in the long term where people are thinking about adoption of block chain technology in the banking world, in a business to business transactions and shares and dividends and to the extent a conventional business, you know, if their financial information is available it provides insight into their business that the competitors might be able to use and, you know, may be a competitor can see what their profit margin is, who their supplier is, what they're paying for their supplies, how much their staff are getting paid, how profitable they are and all that kind of information is typically private.

<p>

And so, you know, there have been some cases where people have tried to analyze the existing bitcoin ecosystem companies on this basis and get an insight into, you know, what their transaction volume is and that kind of thing so it's therefore interesting to protect this information and that's where confidential transactions come in.

<p>

<strong>Trace Mayer:</strong>  So, you know, we've got legitimate business use cases, we've got regulatorily compliant needs in order for bitcoin to be adopted for companies to not be releasing this type of information maybe even with health care information that might end up being related to the blockchain, you know, I think under HIPAA in the U.S. you have to protect a lot of that transactional data.  Then we've got just general business intelligence you don’t want to be broadcasting all your margins of the business.  What about the regulators?  I mean everything that has two legs is a terrorist these days.  I attended the Silk Road trial they'd had extensive blockchain analysis going on in there.  Isn't this just a tool for the illicit actors to use bitcoin?  Is it going to make it more anonymous?

<p>

<strong>Dr. Adam Back:</strong>  Right.  So it's an interesting question say if we just take a kind of sidestep into what confidential transactions achieve and how they achieve it, so.

<p>

<strong>Trace Mayer:</strong>  Yeah.  Has it actually work from a technical point of view and then that will perhaps help us address like what the potential side effects of that implementation would be?

<p>

<strong>Dr. Adam Back:</strong>  Right, so as you know the blockchain provides a kind of real time audit functions so every time you receive a bitcoin transaction you are sure that the entire ledger, back to the genesis block basically, all the transactions added up every transaction is signed by the current owner of the coin before it's transferred and the input amounts add up to the output amounts miners’ fees.  So what confidential transactions do is they encrypt the values so it's a kind of there’s an old piece of cryptography which is related to homomorphic encryption.

<p>

So these values are not actually encrypted but they are private and not disclosed to third parties.  They are private between the people and the communication but because of the homomorphic commitment mechanism the blockchain can nevertheless gain assurance and receive a kind of zero knowledge proof that the values do in fact add up.  It’s just that the block chain doesn't know how much the values are so it’s a kind of counter-intuitive and strange effects but nevertheless it's using conservative cryptographic assumptions and it's using the same basic underlying technology is the DSA signatures that are used in bitcoin.

<p>

<strong>Trace Mayer:</strong>  And you came up with this whole concept of applying homomorphic encryption in this particular way to proof of work or to block chain technology.

<p>

<strong>Dr. Adam Back:</strong>  Yes, so in 2013 I had proposed this and tried to optimize the computational space and conception of the blockchain of protecting values in this way and that's now been implemented in the sidechain alpha that the company I cofounded Blockstream.  And so Greg Maxwell did a lot of the work and Pieter Wuille in implementing this technology in the cryptographic library and integrating that to the sidechain.  So the sidechain alpha that people can download and try now has direct support for confidential transactions.

<p>

Yes, so using this technology you can now, you know, do the kind of coffee shop thing or spending a tenth of a bitcoin to the coffee shop and all the coffee shop learns is they receive a tenth of a bitcoin, but they don't know that the input was a 100 bitcoins and they don't know that the change is 99.9 bitcoins but they do know the encrypted 100 plus encrypted 99.9 plus the tenth of a bitcoin they received balances so that they add up together miners’ small fee.

<p>

<strong>Trace Mayer:</strong>  And will the miners’ fee also be public or can you send the --

<p>

<strong>Mr. Adam Back:</strong>  Yes.

<p>

<strong>Trace Mayer:</strong>  -- encrypted miners’ fees?

<p>

<strong>Dr. Adam Back:</strong>  So I mean the miners’ fee so far is public because you don't know which miner will win the block.  You know, in principle, you could encrypt it and (inaudible 00:11:11) and, you know, maybe disclose it to a miner later, but there would be some kind of technical issue that the miner won the block and now you've got to automatically assure that they thereby receive the keys to be able to benefit from the fees and discover what the fees are.

<p>

So the fees at this point are public and actually that will stress another aspects of confidential transactions which is you can freely mix confidential values and publicly disclosed values so by default the fees are public, but, you know, if you're making a donation and you wanted it to be public or if you just you know didn't care about the confidentiality of the price for the cup of coffee you could reveal that value but not the rest of the values so you can mix and match effectively and they're compatible.

<p>

So, you know, now we can come back to your question about what does this do for privacy in terms of you know anonymity.  So so far we've talked about what it does is it protects your security and your kind of privacy in terms of how much money you have or what your income is from people you contract with and it obviously necessarily reveals the amount of a transaction directly to the person you're making a transaction to but not by default to anybody else.

<p>

<strong>Trace Mayer:</strong>  Now, the terms pseudo anonymous and anonymous those are terms of art in applied cryptography.  Perhaps you can help us understand the difference between the two.

<p>

<strong>Dr. Adam Back:</strong>  So pseudonymity is a kind of linkable anonymity.  So let's say, I guess, Satoshi is a good example, right.  So, you know, he came forth and he released the bitcoin source code in the whitepaper before that and then he made a series of posts over a few years and people could see or assume that this was the same person so they were linked together but people don’t know his true identity so that’s pseudonymous whereas and it’s linkable, so, but --

<p>

<strong>Trace Mayer:</strong>  And we can assume that the genesis block is Satoshi’s?

<p>

<strong>Dr. Adam Back:</strong>  Yes.  Now, for pure anonymity it might be more like, you know, you use paper cash and you buy something at a shop and then you go somewhere else and you use the change somewhere else and so forth and there's no particular linking in this, you know, so.

<p>

<strong>Trace Mayer:</strong>  Now, are we able to do that digitally through say, (inaudible 00:13:32) cash or some other wizardry.

<p>

<strong>Dr. Adam Back:</strong>  Yes, so actually there’s a kind of hierarchy.  So if you start off with an anonymous system where the individual payments are unlinkable, then you can always optionally add linkability on top.  So you just sign the messages and say this payment is mine and this payment is mine and that will link them together pseudonymously or with your real name as you choose, but the reverse is kind of difficult.  If you start with a pseudonymous system then it is difficult to create anonymity on top of that because it's all linked together by your pseudonym.

<p>

And bitcoin transactions are tending towards pseudonymous because they’re sort of linked together by the ledger and the need for the ledger to track ownership and so there are addresses which are kind of like transaction numbers or something but there is some kind of correlation, you know.  So in the coffee shop example let's say I had a 100 bitcoin in a wallet which is quite a lot of a bitcoin and I made a tenth of a bitcoin payment and the change address so there's a separate address to receive the change, that went back to me.

<p>

Now, an observer can see the connection that, you know, even when it’s encrypted with a confidential transaction that there is a link for it.  So in that ledger you can see that this amount you don't know how much it was but the encrypted 100 bitcoin was paid, was split in two parts and paid to these two parties.  Now, as an observer on the outside you don't really know whether I paid in particular 99.9 or whether I paid 0.1 and this is not necessarily who that's to unless the motion in question publishes their address or it’s link directly.

<p>

<strong>Trace Mayer:</strong>  Or it get subpoenaed or whatever.

<p>

<strong>Dr. Adam Back:</strong>  Yeah.  So there is some kind of linking and that's the analysis that people do when they look through the blockchain to see, you know, which transactions connect with each other and, you know, as with the Internet in general often there are some indirect linking you know because you do one transaction and you take the change and you do another transaction and some of the transactions have your name and address associated with them because you buy something on overstock or TigerDirect or something and they ship, you know, new graphics card or whatever it is you're buying to your home address.

<p>

And so there's always the possibility that just by the Internet it’s generally linked to your IP address, it is usually trackable to your cellphone provider or your D.S.L. provider and they keep logs generally of which IP address was leased to a given provider for this month or something like that.  So people are not generally very anonymous on the Internet and frankly you know, I mean many people are not strongly caring but they do care that it's not you know all publicly accessible and searchable.

<p>

So there is plenty of opportunity for investigators to connect the dots if there’s something they need to investigate and as you mentioned, that in fact will happen with the so quote analysis and so you know coming back to confidential transactions it doesn't actually change the analysis, but it just hides the amounts involved.

<p>

<strong>Trace Mayer:</strong>  Can the amount be zero?  Can there be plausible deniability introduced into this?

<p>

<strong>Dr. Adam Back:</strong>  Yes.  So that's an interesting effects.  Actually you can, you know, we were talking about tenth of a bitcoin but you can also pay somebody zero bitcoins and looking it from the outside you wouldn't be able to tell, sorry, that’s a zero bitcoin payment and that can have useful applications for let's say stock trades or something.  So if you want to not communicate, you know, if somebody can sort of generally get the idea that these trades are originating at a particular financial institution and let’s say the actual stock in question is not encrypted so there.  They're selling the IBM stock.

<p>

Now, it's an interesting signal for the market and their competitors to say, oh, you know, this financial institution has started selling IBM like what did they know that we don't know kind of thing.  And so one way to combat that is -- firstly that they don't try to associate the institution with a particular addresses, but that can tend to get linked, you know, you just -- you sell small amounts of IBM and you see that they, and you know who bought them so that would give you a hint that when you see that.

<p>

So things can be pieced together in that direction too.  So the way that they can prevent this kind of competitive analysis is they can on a daily basis sell zero units of IBM stock for zero dollars and just keep doing it every day. So when they actually do come to make a trade you won't be able to distinguish, okay, they've made a decision in the market that it's time to buy or sell a particular stock.

<p>

<strong>Trace Mayer:</strong>  Man, this has been a fascinating topic on confidential transactions.  You know, I'm just wondering you got a PhD in distributed systems.  You’ve been working on digital cash and these types of solutions for a couple of decades.  When we look at confidential transactions this new circle of magic what level of magic is it? I mean, is this stuff for undergrads to be playing around with? Is it stuff for graduate students to be playing around with? Is it PhDs or even post docs.  I mean how difficult, how complex is this type of -- is this type of work?

<p>

<strong>Dr. Adam Back:</strong>  It’s pretty difficult stuff.  I mean, you ideally, yes, as I mentioned earlier, it's actually using conservative cryptography so those concerned with cryptography that one shouldn't use really recent developments or algorithms that haven’t withstood the test of time because there are sometimes advances where a particular algorithm is demonstrated to be weak and it's also quite intricate that it's very easy to make small implementation or algorithm mistakes that would break the assurances it provides.

<p>

So you really need somebody with the experience of designing and breaking systems so actually a Bruce Schneier who is a famous academic and applied cryptographer has been attributed with this saying of which is called Schneier’s law which has been attributed to him which is something to say that it’s a common sort of trap that people fall into that they think they can design a cryptographic system and they are convinced that it should be secured because they can’t see how to break it themselves but usually that doesn't work out so well.  You know, even for people professionally relatively competent in this sphere that what the limits tests for something being secure is that it’s been published and peer reviewed by the academic experts.

<p>

So it's a kind of trap so, you know, usually people like to talk about sort of a meritocracy and that’s something quite common in programming in computer science but cryptography is something really where you want to know and this was Schneier’s point and he has this quote where he says, you know, if somebody comes to you and says I've designed a system and it's really secure and isn't it cool you should contrarily to the usual meritocracy rule you should say well, who are you and, you know, which systems have you designed and broken, which is just a sort of, yeah, that’s a quote from Schneier.

<p>

So it's just an indirect way of saying that what assures the security of the system is the experience and the amount of the people who designed and tried to break it and provide peer review of it.  So with this kind of cryptography you really want to go back to the academics who you know helped design it or with the world of experts in it and get them to review it and also to try and prove the correctness of it.  So in this case this is cryptographic algorithm.  I mean, the main kind of complicated component is a zero knowledge range proof.

<p>

So I'll take it we want to code but basically when you encrypt the values there are homomorphic encryption algorithms that allow you to add up the encrypted values and that decrypts it and get the value back.  So let’s say, you know, you have got encrypted three plus encrypted five and you arrive at encrypted eight and if you decrypt the addition of those two ciphertexts and then decrypt it you'll get back to eight.  Now, the problem -- so that part is you know more straightforward but the problem you have is that the addition is modular, a very large crime and there's a possibility for numbers to wrap around and that would present a security problem because if you could wrap the numbers around you could print a very large amount of money and then you’d be able to detect this fact.

<p>

So what you need to do is to prove that the values don't wrap so that they are less than something, you know, so they’re small enough that they couldn't wrap with a number of values being added together and that’s done with a range proof, you know, to prove that this number is between zero and a few billion or something you know whatever the range is.

<p>

And so this is a way to do that with a zero knowledge proof which is where it gets kind of hard to understand and so it relies on a range proof by an academic researcher Dr. (inaudible 00:22:46) I'm sorry about the pronunciation.  He is from the Netherlands and I am sure I didn’t do that just as but, yeah, he has a range of proof, I know them.  So the confidential transactions uses that as a building block and there are some additional optimization is that myself and Gregory Maxwell used to make it more compact because it uses blockchain space to provide the range of proofs.

<p>

<strong>Trace Mayer:</strong>  Well, it's, you know, a lot of bitcoin cannot just be summarized into 140 character tweets, you know, we just -- we can't, there’s still this most complicated subject that usually.  It’d be nice if we could, you know, most people don't even probably know what a modulus is but everybody can do clock arithmetic.  You know, we --

<p>

<strong>Dr. Adam Back:</strong>  Right.

<p>

<strong>Trace Mayer:</strong>  -- we know how to do clock arithmetic.  We have you know one o'clock, two o'clock you get to noon you're back to one o'clock.  You know, so --

<p>

<strong>Dr. Adam Back:</strong>  Right.

<p>

<strong>Trace Mayer:</strong>  -- it's not that, it's not that we don't have the capacity to understand it.  It's just that a lot of people haven't really studied this branch of mathematics at all, would you say?

<p>

<strong>Dr. Adam Back:</strong>  Right.  Yes.  I mean it's cryptography is interesting in the sense that there are some areas where you can provide cryptographic proofs you know sort of mathematically prove the correctness or security with respect to some assumptions so the common one would be the random oracle model, but the, you know, even to combine the primitives is risky so you know you have building blocks like elliptic curve cryptography, elliptic curve <strong>version</strong> of discrete logarithms or <strong>ASO</strong> hash functions but even -- and those building blocks have known properties, but to combine them into a cryptographic protocol is itself through with risk because there are all kinds of glitches and mistakes in the way that you can combine them.

<p>

So it's unfortunately often the case that deployed protocols in the field have design flaws, the field is littered with design flaws so I mean an early version of PGP had a design flaw, SSH had a design flaw, SSL had numerous design flaws that’s kind of depressing sequence of SSL protocol, but it was being discovered and people who are trying to design protocols you know the way to go about acquire that knowledge is to study all of the previous breaks and understand and internalize what went wrong and draw lessons and inferences from them in terms of protocol design and how to categorically avoid that class of mistakes and so there's a kind of accumulated knowledge about what was going wrong and designing to avoid those mistakes and also to understand the combination rules for the building blocks.

<p>

What makes this worse is that you’re operating in an adversarial environment particularly in a network protocol or PHP protocol at bitcoin because it's not that you know the transaction is happening in a private network between two largely trusted computers.  It's out there on the Internet and the other side of the cryptographic protocol, you know, if you’re sending messages backwards and forwards is should be considered to be you know adaptive and malicious so he won’t follow the rules of your protocol.  So it's a common kind of misconception or failing an adversarial thinking to assume that because I designed and implement this protocol in this particular way that the adversarial would run the same code and follow the protocol.  The adversarial will do whatever he can think to do and he's very intelligent and adaptive, so.

<p>

<strong>Trace Mayer:</strong>  That's part of, you know, when we're getting into the game theory you know I mean there's cryptography and then there's cryptanalysis, right?

<p>

<strong>Dr. Adam Back:</strong>  Right.

<strong> </strong>

<strong>Trace Mayer:</strong>  And by cryptanalysis, how can we break this stuff and we won't try to think of everything that whoever designed it couldn't think of.

<p>

<strong>Dr. Adam Back:</strong>  Yeah.  I mean, so there are some loose analogies to chase or some think that, you know, you -- if you just take the first move and you have in mind that the opponent will do something else and you don't think what the opponent will do.  Then you can get in a pleasant surprise, I'd say.

<p>

<strong>Trace Mayer:</strong>  Checkmate.

<p>

<strong>Dr. Adam back:</strong>  Yeah.

<p>

<strong>Trace Mayer:</strong>  There go your bitcoins.

<p>

<strong>Dr. Adam back:</strong>  Right.  So it's kind of similar with protocol design that you've, you know, there are some -- a number of surprising things.  Here's an example from SSL say this, researcher called Daniel Blankenbaker can apologize for mispronunciation of the name.  He found a way to trick SSL into decrypting a message for you.  So you would go to a web server and there would be some kind of encryption handshake say to set up the keys and then start exchanging symmetrically encrypted messages and there was a padding bytes in the symmetric encryption.  And what he observed is that there's an error message sent back by the server so that there are two possibilities if this gobbling of the message.

<p>

The checks on -- sorry, the padding byte could be incorrect or not and so unfortunately the web servers who are implemented including the open SSL library to give you just a little bit too much information to say whether the padding byte was correct or not and then it would go along to fail later.  And using this he found a way to incrementally trick the server into decrypting the message for you just by sending it lots of encrypted, you know, establishing a connection, gobbling a little bit having the server try to decrypt it and tell you which way it failed.  It failed in the checksum or it failed in the padding bytes and by being adaptive and malicious over the course of something like a million interactions which is an abnormally low hide under things but --

<p>

<strong>Trace Mayer:</strong>  Almost straight out of the imitation game.

<p>

<strong>Dr. Adam back:</strong>   Yeah.  So, you know, you could just hit the server up, get it to tell you error messages which way it failed and then adapt what you're asking for in the next message to, you know, gain another bit of information and across a million kind of interactions with a server which is all automated.  You could trick the server into decrypting the message that is supposed to be protecting.  And so it's a kind of example of the way that, you know, if you think about it just like well, okay, you know, the server is going to run this code, but no, there's somebody in the middle and they're doing something adaptive and they can trick the server into doing something that was outside of your expectation.

<p>

So you really need to think about edge cases and ways that somebody malicious can attack the system and yeah, so these kind of things are a recurring thence in fact for most cryptographic protocols, particularly in a peer-to-peer system.

<p>

<strong>Trace Mayer:</strong>  Yeah.  So to kind of bring this discussion on confidential transactions full circle.  It's really been amazing that the bitcoin protocol has not lost any bitcoins at the protocol level.  And is there anything particularly novel about your implementation of confidential transactions that eluded Satoshi when he originally designed bitcoin or could he have designed confidential transactions into it back then.

<p>

<strong>Dr. Adam back:</strong>  That's --

<p>

<strong>Trace Mayer:</strong>  I mean, is --

<p>

<strong>Dr. Adam back:</strong>  -- an interesting --

<p>

<strong>Trace Mayer:</strong>  -- is some of the research, you know, some of the research needed or?

<p>

<strong>Dr. Adam back:</strong>  That's an interesting question.  So there are some observations about the cryptography used in bitcoin so one thing to say is it's using -- bitcoin is a very inventive and clever advancement of the state of the art and electronic cash systems.  The main difference it being that it's distributed and so like kind of helped it, get the bootstrap effects where previous more cryptographically a short systems like DigiCash by Dr. David Chaum or the private credentials technology by Dr. Stephen Branch (ph) who is a former colleague and a friend of mine.  Those systems had much higher kind of cryptographic security assurances, but they will operate on the central server and so --

<p>

<strong>Trace Mayer:</strong>  So not censorship resistant?

<p>

<strong>Dr. Adam back:</strong>  Right, so --

<p>

<strong>Trace Mayer:</strong>  More potentially.

<p>

<strong>Dr. Adam back:</strong>  -- so they would tend to get, you know, like DigiCash in particular was funded by a company.  They -- even in the sort of demo stages before that was really actual, you know, exchangeability for dollars or Dutch Guilders or what have you available for if they run into problems with the Dutch regulator and the story goes and, and also DigiCash run off money and so everybody who -- you could go and obtain some of their demo coins that were called Beta bucks and people started to play with them like, you know, sell, leave all your items on the internet for them just to see if they could bootstrap a value and there was an assumption of scarcity because DigiCash, the company had assured people that they would only issue up to a million dollars' worth of these things or not million dollars, but a million units of Beta Bucks.  So there was some, you know, there were some thousands of transactions made.  I think I might have even heard a few of these coins, but --

<p>

<strong>Trace Mayer:</strong>  Kind of hard you may or may not have a bitcoin or two.

<p>

<strong>Dr. Adam back:</strong>  Yeah, yeah.  So the interesting thing was that DigiCash went bankrupt and those central eCash systems, the ledger was maintained by the server and that's the kind of record, the ledger of record as it were and they went bankrupt and ledger disappeared like the sever went away and so people had worthless coins because you couldn't tell which was spent and which were not spent.  So everybody lost all their money basically and, you know, there was -- obviously there would be --

<p>

<strong>Trace Mayer:</strong>  They had a double spent problem?

<p>

<strong>Dr. Adam back:</strong>  Right, I mean, so they were then in the water at that point and I think that maybe influenced some thinking of people who are exploring, you know, they apply cryptography of electronic cash system, okay, I guess you need a more decentralized system so that kind of refers back to what we we're talking about in the first episode about the kind of early research in electronic cash systems building on Hash cash worth, you know, wait days, the money and nicks all those big old ideas which are more decentralized.

<p>

<strong>Trace Mayer:</strong>  Well, I guess I'll let you dodge the question.

<p>

<strong>Dr. Adam back:</strong>  No, no.  So, I mean, no offend.  I'd --

<p>

<strong>Trace Mayer:</strong>  Oh, no.  Oh, you're going to answer it.

<p>

<strong>Dr. Adam back:</strong>   -- I did have an answer so they're just kind of a slight track there, but yes, I mean, so particularly the cryptography used in bitcoin is actually very very simple.  It uses very very few constructs so it uses elliptic curve, digital signatures, it uses hash functions and then, you know, actually in the securing of the private keys, which is not really relevant for the network protocol.  There's also an encryption and, you know, password management, that kind of thing.

<p>

And it uses another construct code, Merkle hash tree and there were some small hints in some of the minor mistakes made in that that suggest that Satoshi wasn't, you know, an applied to a professional cryptographer.  Note, the components would put together very carefully and robustly, but there were a few minor mistake say for example, the Merkle tree serialization had a mistake that was fixed at some point and so the particular things, you know, the confidential transactions are more connected and rooted in the advance electronic cash protocols by Dr. Stephen Brown and (inaudible 00:34:08) range proof and so on.

<p>

And those protocols provide very high levels of anonymity in a way so the interesting reason for anonymity in an electronic cash system is to guarantee fungibility so -- and that's just generally for people who are not familiar with that term, the idea that one cash unit is the same as another.  So if you walk into a shop and you buy something and you receive a note and it turns out, you know, a week later that that note had been shuffled around as people spent it, but had been stolen from an ATM or from a, you know, hold up or something.

<p>

You know, your $10 note in your pocket doesn't suddenly become invalid or, you know, seized as a result of criminal proceeds because if that what's happen it would undermine the fungibility or tradability, usability confidence in the cash in the currency.

<p>

<strong>Trace Mayer:</strong>  Yeah, and even under the uniform commercial code, as we talked about with Attorney Miles Cohen(ph).  Legal tender has special characteristics in bankruptcy which might not applied to the bitcoin tokens which could have interesting implications.

<p>

<strong>Dr. Adam back:</strong>  Yeah, so, I mean --

<p>

<strong>Trace Mayer:</strong>  But not to get too distracted.

<p>

<strong>Dr. Adam back:</strong>  Yeah, so I mean, if you look at bitcoin I mean compared to David Chaum or Stephen Brown electronic cash systems, they had -- they use a variants of blind signatures so David Chaum was actually advancer blind signatures and found the application of using that's build in electronic cash system and that provides basically cryptographic, a short fungibility and the way that works is basically, you know, the reason that the bank or, you know, the eCash server which is centralized in those systems is not able to discriminate between currency and it's not able to correlate them.  So if you, you know, deposit funds in a bank that's using the Chaum electronic cash protocol and you get back your unit of electronic cash and you go spend it and a merchant deposits it.

<p>

The bank even in collision with the merchant can't link the payment together so that would prevent it from, you know, sort of breaking fungibility and claiming that a given transaction had to be undone or frozen or blocked or, you know, traded at below value or something.  And so bitcoin has a much much weaker and fungibility assurances and it's concern, you know, some of the analysis you talked about could potentially lead to some currency units which you might receive for no fault of your own being somewhat tainted or frowned upon or, you know, so things are generally okay at the moment and the fact of it's been treated as fungible, but there is a slight risk that could degrade at some point.

<p>

<strong>Trace Mayer:</strong>  And so confidential transaction is a way to greatly increase the fungibility of bitcoins.

<p>

<strong>Dr. Adam back:</strong>  I mean, it increases indirectly so it doesn't directly -- I mean, so what bitcoin does have is a way to improve fungibility somewhat is the idea that the addresses are not reused.  So, you know, when you make a payment and it split into a payment and change address the some ambiguity as to which was the payment and which was the change.  And as that flows through the system and, you know, there are thousands of transactions in a big graphic it becomes increasingly not ambiguous as to, you know, it was --

<p>

<strong>Trace Mayer:</strong>  Right, and which was --

<p>

<strong>Dr. Adam back:</strong>  -- who is still the owner.

<p>

<strong>Trace Mayer:</strong>  And was one of the big innovations of armory with the hierarchical deterministic wallets and being able to have the backup of all these addresses.

<p>

<strong>Dr. Adam back:</strong>  Right, the HD wallet is very cool in the sense that you have a kind of upfront back up.  So, you know, it creates enormous infinite set of sub keys that you can use while being assured that you can rebuild and reclaim all those coin ownerships with a single compact back up and there and also --

<p>

<strong>Trace Mayer:</strong>  And also child and seeds also within the trays?

<p>

<strong>Dr. Adam Back:</strong>  Right.

<p>

<strong>Trace Mayer:</strong> -- You know, just we add a lot of potential applications of segregation duties and --

<p>

<strong>Dr. Adam back:</strong>  Yes, it's sub-divisible too.  So, for example, a division in the company or -- and sort of control and so forth.  And the confidential transactions help only insomuch that because the values are not visible.  It's now less clear which is the change address and which is the payment.  So, you know, if you're going into a shop and you pay 9.99 for something and you receive, you know, 337 back in changes, pretty obvious that that was -- the 999 was probably the payment, it's probably 337 belongs to the same guy that started out with, you know, the 1336 and you can change that he paid in.

<p>

And so it helps in that regard and there are also some kind of protocols used in the network to improve fungibility so one of those is protocol coin called CoinJoin that Gregory Maxwell developed and actually confidential transactions improve the effectiveness of that.  So what CoinJoin does is simply combine payments for multiple people into a unified transaction that pays all of people they would have paid and if you're not careful when you don't choose the amounts and the right range some of the ambiguity can be lost, potentially all of it.  And so with confidential transactions actually it's in some sense perfect because there is complete ambiguity that, you know, any of those inputs could correspond to any output.

<p>

<strong>Trace Mayer:</strong>  Which increases possible deniability and therefore fungibility.

<p>

<strong>Dr. Adam back:</strong>  Right.  And so another thing to say about fungibility is there's a distinction between fungibility and anonymity.  So fungibility is a necessary property for an electronic cash system and everybody should want that, you know, merchants and users and society at large because it's a basic property for an effective payment system.

<p>

<strong>Trace Mayer:</strong>  Which is the opposite of my current argument with regards to red listing or blacklisting --

<p>

<strong>Dr. Adam back:</strong>  Yeah, so --

<p>

<strong>Trace Mayer:</strong>  -- of different bitcoins Satoshi said, he wants a direct strike at the fungibility of the underlying unit in the protocol.

<p>

<strong>Dr. Adam back:</strong>  Yeah.  I mean, the way I understand it red list it was some kind of concern to have a way to warn users that a coin they received was involved in some theft further back in history, but I think the issue with that is it's -- it encourages degradation in fungibility.  So we really don't want to get into a situation where there's a run on fungible where, you know, if people are left with a coin that, you know, maybe there's some company operating the red list and there'd been a couple of companies that started to do related things.  I think one of them stopped for lack of interest or complaints from the businesses and uses in the bitcoin ecosystem that this would damage fungibility so they could not put it on hold but there are a couple of those, couple of people have tried things like that.

<p>

<strong>Trace Mayer:</strong>  Or at least any public talking about it.

<p>

<strong>Dr. Adam back:</strong>  Yes.  I mean I've had -- that can be another outcome that people carry on and talk about it less, but that the risk is then that, you know, you receive a coin which is kind of red listed or blacklisted or what have you and now you -- it's less spendable, right.  So now you're sort of -- if the reason it's less spendable is because you know maybe some of the merchants subscribes to the red list provider and won't accept it and so then you know you've got to maybe jump through a bunch of hoops to prove that you have nothing to do with it so if you know let say --

<p>

<strong>Trace Mayer:</strong>  Which was Hearn's suggestion?

<p>

<strong>Dr. Adam back:</strong>  Right.  That was the red list suggestion and the blacklist would be a kind of more hardline thing that it's not spendable period or something.  I think, so one kind of humorous side is the -- when -- after Silk Road trial in the U.S. government auction off the coins that they were able to seize from --

<p>

<strong>Trace Mayer:</strong>  They removed the red list or blacklist --

<p>

<strong>Dr. Adam back:</strong>  Right, I mean they --

<p>

<strong>Trace Mayer:</strong>  -- tainting on them.

<p>

<strong>Dr. Adam back:</strong>  -- they auctioned them off so I guess that was a good move for -- a good assurance for bitcoin fungibility they have now been blessed by the U.S. government.  So that was a goods kind of the factor indication for fungibility and --

<p>

<strong>Trace Mayer:</strong>  Yeah, I mean they don't sell cocaine or other illegal substances that they seized.

<p>

<strong>Dr. Adam back:</strong>  Right, exactly.

<p>

<strong>Trace Mayer:</strong>  And yet they sell bitcoins so --

<p>

<strong>Dr. Adam Back:</strong>  Right.

<p>

<strong>Trace Mayer:</strong>  -- it is a stamp like this are illegal to buy and sell and trade just like they sell cars or houses or boats that they seized from the drug dealers.

<p>

<strong>Dr. Adam back:</strong>  Yes.  So to come back to the distinction between fungibility and anonymity or identity and investigations.  So I did a presentation at the Israeli bitcoin sort of -- was in a conference but I just gave a talk, the regular kind of monthly meeting or something, on privacy identity and fungibility you can find it on the Internet, on YouTube.  And in that presentation I talk about how different people would interact with a fungible system.  So, you know, there are technologies available that kind of notion right now and the cryptography used is probably a bit too new to rely on, but there have been at least two proposals to sort of bring the blind signature level for cryptographic assurance of formal systems into bitcoin.  And those are ZeroCash and ZeroCoin.  So ZeroCoin came first.

<p>

And actually ZeroCoin is an optimization of 1999 paper by Sander &amp; Ta-Shma that provides users as their knowledge set membership proof and so those kinds of technologies and the ZeroCash one uses some very new cryptography by Eli Ben-Sasson and research group of the Technion which has only been out for a couple of years.  And that fact can potentially provide, you know, compact efficient to verify cryptographic fungibility assurances to bitcoin related technology.

<p>

So unfortunately, it's sort of very leading edge technology.  So it's a little risky to use it right now, but, you know, to the extent that the idealized cryptographic electronic cash system should provide cryptographic fungibility and then it can add identity as needed at the payment protocol layer which is a separate higher layer that is point to point between the parties.  And so my argument in that longer presentation which listeners can get a look at was that, you know, most businesses are required anyway by law to keep business records, most users keep kind of, you know, just transaction logs in their wallets for their own inconvenience to know where they are spending that money and keep that receipts when they buy things online, electronic receipts.

<p>

So basically, there's an opportunity for investigator, as a law enforcement to do as they already do and, you know, issue businesses with subpoenas and put together information about, you know, the rental car that was bought when somebody, you know, robbed a bank and drive away in a rental car or whatever, you know, connect the dots, the hotels, their flights, the rental cars, that coffee shops and you can collect it altogether and put it together.  So that's the kind of mirrors of the existing societal fabric of the kind of balance between, you know, social norms for privacy by default, but the powers for, you know, law enforcement to investigate and keep society safe.

<p>

<strong>Trace Mayer:</strong>  Yeah.  So this has episode three in, "A Week With Dr. Adam Back."  We've been talking about confidential transaction.  Thanks for being with us, Dr. Back.

<p>

<strong>Dr. Adam back:</strong>  Thank you.
