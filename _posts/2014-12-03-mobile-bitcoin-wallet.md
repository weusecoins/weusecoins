---
layout: post
title: Aaron Voisine - Bitcoin Security Expert
author: Aaron Voisine
authorurl: http://www.weusecoins.com/aaron-voisine-bitcoin-security-expert
description: Aaron Voisine, founder and CEO of BreadWallet talks about mobile bitcoin wallet, GitHub and bitcoin security.
published: true
---

<img src="/images/aaron-voisine.png" alt="Aaron Voisine" align="right">Aaron is the CEO and Founder of <a href="/breadwallet/">Breadwallet</a>. He was a senior iOS consultant at Banjo, Co-Founder of Lightt and iOS development lead at Yammer. He is very familiar with Objective-C, Python, software development, C++, Linux and iOS. He holds a degree in computer science from Purdue University.
<p>
<iframe width="700" height="394" src="https://www.youtube.com/embed/B0GLZOM6V4c" frameborder="0" allowfullscreen></iframe>
<p>
<b>Trace Mayer</b>: So before we get straight into the interview just a quick disclaimer. I actually hadn't used Breadwallet (the mobile bitcoin wallet) before. There are tons of mobile bitcoin wallets out there. I just hadn’t had time to and I actually after the interview downloaded a copy of Breadwallet, a mobile bitcoin wallet; began to use it and I really like it. It's super simple. It's probably going to replace my blockchain.info. Nick Cary, CEO of blockchain.info, is in our next interview. I love that mobile bitcoin wallet too. It's just they have different uses and functions. One thing I don't necessarily like in Breadwallet (the mobile bitcoin wallet), there's no coin control, but I can take care of that on Blockchain.info or Armory so. Anyways, on to the interview.

Welcome back to the <a href="http://www.bitcoin.kn">Bitcoin Knowledge Podcast</a>. We have <b>Aaron Voisine</b>, founder and CEO. of Breadwallet (the mobile bitcoin wallet). Welcome to podcast.

<b>Aaron Voisine</b>: Thank you, Trace.
<h2>Breadwallet - The Mobile Bitcoin Wallet</h2>
<b>Trace Mayer</b>: So Breadwallet (the mobile bitcoin wallet)'s the first hierarchical deterministic SPV wallet, right?

<b>Aaron Voisine</b>: Yeah.

<b>Trace Mayer</b>: Can you explain a little bit to our audience, like, what does that even mean. It's all Iike Dolphin-speak to me.

<b>Aaron Voisine</b>: All right. Yes, so we had the first one to have, but BitcoinJ which is a java bitcoin wallet, they have it now too as well. But we had it first. What hierarchical deterministic means is that all your bitcoin addresses are generated from a single seed value. So if you just back up that one seed value you can encode it in an English phrase, like, twelve words and then you can generate all your bitcoin addresses from that one phrase and you get to use a new bitcoin address for every single transaction which helps protect your privacy.

<b>Trace Mayer</b>: And that's important because you're able to do a backup once and you'll be able to restore from that no matter how many addresses you used. In the earlier bitcoin implementation it only backed up one hundred keys at a time which you could go through pretty quickly considering change and all that stuff.

<b>Aaron Voisine</b>: And then S.P.V. means that actually it connects to the bitcoin network directly instead of trusting a server. So yeah, it connects and downloads some filtered version of the block chain. Obviously, you can't put the whole block chain on your phone. But you get a filtered version of the block chain and then you can prove that the bitcoin network believes that a particular transaction is valid from a filtered version of the block chain.
<h2>S.P.V.:  Simplified Payment Verification</h2>
<b>Trace Mayer</b>: Yeah, because I think it's section 7 of the whitepaper where it talks about these S.P.V. What's that acronym even stands for?

<b>Aaron Voisine</b>: It stands for simplified payment verification.

<b>Trace Mayer</b>: Okay. So S.P.V. is simplified payment verification.

<b>Aaron Voisine</b>: Yes.
<b>Trace Mayer</b>: And that's the way that we can, what, check the balances of our addresses without using quite as much of the resources or the whole block chain.

<b>Aaron Voisine</b>: Exactly. Correct. So what you can do is instead of having the whole block chain, you just get a filtered version that includes all the transactions for your addresses plus a bunch of extra ones so that the node that you're connecting to doesn't know exactly which ones are yours. So it's not great privacy, but it's better than nothing. You can improve that by connecting through Tor and other things that are coming up.

<b>Trace Mayer</b>: Oh, really? Like, Tor integration right into the Breadwallet (the mobile bitcoin wallet)?

<b>Aaron Voisine</b>: Correct. So then that's not added yet, but that's something that I want to add. So that even the nodes that you connect to on the bitcoin network don't know your IP address or where you come from.

<b>Trace Mayer</b>: Don't know the address as you're checking balances for.

<b>Aaron Voisine</b>: Exactly.

<b>Trace Mayer</b>: Oh, someone just checked this balance for the eighteenth time from this IP address in Las Vegas and that address has 10,000 bitcoins in it. Like, let's figure out who this person is. Now when we're looking at these S.P.V. we've done another interview with Adam Ludwin from Chain.com and the Chain's building an API to interact with the bitcoin network. How does something like this Chain API differ from this S.P.V. implementation? Can you help some of our people kind of understand the technical guts of that?

<b>Aaron Voisine</b>: Right. If you have a wallet that doesn't connect to the bitcoin network, but uses one of these APIs you're relying on those APIs. to give you accurate data. Those servers could get hacked or they could go down.

<b>Trace Mayer</b>: Or just provide fake data.

<b>Aaron Voisine</b>: Or provide fake data if it was a malicious operator. Hopefully, they're not malicious.

<b>Trace Mayer</b>: Or they'd been compromised.

<b>Aaron Voisine</b>: Exactly, yeah. If they get hacked. This actually does cryptographic verification of the data coming off the bitcoin network just like a Fullnode would. It can't verify the entire chain of transactions all the way back to when the coins in question were created, because it doesn't have the whole block chain, but it can prove that this transaction was included in this block and that this block is included in the longest chain.

<b>Trace Mayer</b>: Okay. So you're going with the most recent transaction for a particular address and looking at the inputs?

<b>Aaron Voisine</b>: It does actually get all the transactionals for all the addresses in your wallet. Just not all addresses and all of bitcoin.

<b>Trace Mayer</b>: Okay. Does that show down the wallet at all? I mean because we're dealing with so much data or is it still a very fast process for the end user?

<b>Aaron Voisine</b>: It's very quick. When you launch the app and start a new wallet it doesn't have to look back very far because it knows that you just created the wallet so you're not going to have to search a large part of the chain to find all the transactions. So it just gets to the very end of the block chain and it sinks in a few seconds when you start a new wallet. Now if you restore a wallet from back up and that back up is fairly old, like let's say a year or two old, it can take a couple of minutes, but it's much faster than downloading the whole block chain. Can do it in a few minutes so.

<b>Trace Mayer</b>: Okay. So let me see if I understand this correctly. If you create a new wallet it doesn't necessarily go and download very much of the block chain at all.

<b>Aaron Voisine</b>: Right. It just grabs the last block.

<b>Trace Mayer</b>: 2000 blocks or something. But if you're restoring from a backup then it might go and get like the last 20,000 blocks or 200, 000 blocks.

<b>Aaron Voisine</b>: Yeah. Or, from whenever the wallet was created, it has to start from that point and then scan the block chain from that point forward.

<b>Trace Mayer</b>: How would it know when the wallet's created if you're restoring it from a back up? If you're just using likely these 12 phrases that are the seed from the hierarchical deterministic format?

<b>Aaron Voisine</b>: That's true. It would do that like let's say if you deleted the app and reinstalled it and then it still has the creation date stored. If you're restoring on a new device it actually does have to go back to when the backup phrase format was created.

<b>Trace Mayer</b>: Is the Breadwallet (the mobile bitcoin wallet) format interoperable with any of our other wallets out there? Like Electrum or Blockchain.info or Armory. Are we able to restore from seeds that are from those particular types of wallets?

<b>Aaron Voisine</b>: I've heard that Hive is using the same structure as far as the hierarchical deterministic structure as Breadwallet (the mobile bitcoin wallet) is using. I haven't actually tried it myself, but I've been told that you can use your Breadwallet (the mobile bitcoin wallet) backup phrase in Hive and it'll work as well. I actually co-authored BIP39 with the guys working on Trezor. BIP39 is the backup phrase format that a lot of the new wallets are using.

<b>Trace Mayer</b>: And so just so the audience kind of understands. BIP means bitcoin --

<b>Aaron Voisine</b>: Improvement proposal.

<b>Trace Mayer</b>: 39 would be like we have 32 or 33 or 34. We have 39 and that's on phrase backups?

<b>Aaron Voisine</b>: Yeah, to send them on -- we call a mnemonic for encoding your wallets seed in twelve English words.

<b>Trace Mayer</b>: And that can actually then be converted into other formats, right? Like Base58 or Basehacks right?

<b>Aaron Voisine</b>: Yeah, yeah.

<b>Trace Mayer</b>: This is really interesting. Can you perhaps explain a little bit how this BIP39 actually works.

<b>Aaron Voisine</b>: So there is --

<b>Trace Mayer</b>: Because we are turning wars in to a number which we then send through an algorithm. It generates a bunch of our addresses, right?

<b>Aaron Voisine</b>: Right.

<b>Trace Mayer</b>: So how does this bunch of words get turned into this number?

<b>Aaron Voisine</b>: So there's 2048 words. So each word represents 11 bits of data. You have 12 words. You end up with 132 bits. Take the number that word is in the word list and then that's part of the number for this seed phrase or just binary string.

<b>Trace Mayer</b>: Okay. So we're looking at generating entropy which is the randomness. And the word might be like apple and that then corresponds with a particular number.

<b>Aaron Voisine</b>: Correct. Yeah.

<b>Trace Mayer</b>: So really like even though it's a whole word like apple, it's really just a variable like A, B, C, D, or whatever.

<b>Aaron Voisine</b>: Exactly.

<b>Trace Mayer</b>: Right. Okay.

<b>Aaron Voisine</b>: And then it's using some fancy elliptic curve math to go from that seed to generate new addresses. So you can generate a chain of addresses from a seed and it can be as many as you need.

<b>Trace Mayer</b>: Is this use of the elliptic curve, do you think that was done intentionally by Satoshi?

<b>Aaron Voisine</b>: He reason he used to look at curve is just because it's a very compact way of doing digital signatures. So you need to sign your transactions to prove that they're yours.

<b>Trace Mayer</b>: Yeah, because it's a elliptical curve digital signature authority, right. E.C.D.S.A.

<b>Aaron Voisine</b>: E.C.D.S.A., yeah.

<b>Trace Mayer</b>: Yeah, E.C.D.S.A.

<b>Aaron Voisine</b>: Yeah. Digital signature algorithm right.

<b>Trace Mayer</b>: Yeah.

<b>Aaron Voisine</b>: Yeah, it's a --

<b>Trace Mayer</b>: I'm sorry it's been a long day. I'm tired.

<b>Aaron Voisine</b>: It's Vegas.

<b>Trace Mayer</b>: Yeah, it's Vegas.

<b>Aaron Voisine</b>: The reason that he chose that is because it's very compact which helps with the block chain bloat or to avoid block chain bloat.

<b>Trace Mayer</b>: To avoid that. Keep the transaction sizes small that way we can have more in a block or whatever

<b>Aaron Voisine</b>: Exactly. You want them to be as small as possible. Right.

<b>Trace Mayer</b>: Keep the block small. It’s already what? 20 gigabytes compressed?

<b>Aaron Voisine</b>: It's getting close to 30 gig.

<b>Trace Mayer</b>: 30 gigs, now? Good gracious. Let's see. What's your vision with Breadwallet (the mobile bitcoin wallet)? Like what are you hoping to accomplish with it?

<b>Aaron Voisine</b>: So really I started the project with the goal of creating a really beautiful simple, intuitive mobile bitcoin wallet that was safe for anybody to use. People who don't have the first clue about computer security. That's why I went with the iOS platform, the iPhone platform, to start with because all the devices are hardware encrypted by default, all the apps are sandboxed. That means that none of the other apps can read other apps' data and it only runs code that's signed by Apple. So it's basically hardened against malware and it's probably the best protected against malware of the popular computing platforms out there.

<b>Trace Mayer</b>: Right. Because I mean mobile devices are notoriously insecure in a lot of ways.
<h2>Everybody is trying to Steal Bitcoins</h2>
<b>Aaron Voisine</b>: Yeah, I think iOS has a really good security story and I wanted it to be safe. I think that malware is going to be a huge problem for the whole bitcoin industry in the next couple of years. Already something like 20 or 30% of all the malware out there being discovered today is bitcoin stealing malware.

<b>Trace Mayer</b>: Really? Everybody is trying to steal bitcoins?

<b>Aaron Voisine</b>: And bitcoin is tiny. Imagine bitcoin is like a major global currency that millions of people are using every day. It's going to be a real problem.

<b>Trace Mayer</b>: Because I mean the data itself is the money.

<b>Aaron Voisine</b>: Yes.

<b>Trace Mayer</b>: And you steal it like this is great to steal.

<b>Aaron Voisine</b>: It's digital cash. And it's a very lucrative target for hackers. It's way more lucrative than turning people's computers into spam bots or even stealing credit card numbers. So this is going to be a serious problem for the whole industry and I wanted something that grandma can use. You know she uses money even though she will click on any e-mail attachment she gets sent and you know, her computer is probably infected with all kinds of malware. So she can't use a web wallet because she'll get robbed. How is grandma going to use money if the bitcoin becomes the currency that everybody is using? How do you make it safe and simple enough for regular people to use who don't understand computer security?

<b>Trace Mayer</b>: Right and it's open source, of course.

<b>Aaron Voisine</b>: Yes, it's open source. The source code's on GitHub accepting pull requests.
<h2>GitHub -- The Source Code Management</h2>
<b>Trace Mayer</b>: I don't think a lot of people in the audience understand what Git is and this is fairly off topic. But can we explain a little bit about what this Git protocol is and how it helps software developers really build very robust code.

<b>Aaron Voisine</b>: Yeah, It's called S.C.M. or software control or software --

<b>Trace Mayer</b>: Version control system

<b>Aaron Voisine</b>: Version control system. So it just makes it easy so that when I'm writing code on my computer I can do what's called a commit and push my changes to this repository and then other people who are working on the project can see my changes and they can pull my changes down to their computer and then it'll, you know, merge it if we both make changes to the same file, it will merge the changes and it's a tool to help software developers collaborate and work together on the same piece of code without stepping on each other's toes.

<b>Trace Mayer</b>: That's really the big, big deal is that you're able to have cooperation without coordination.

<b>Aaron Voisine</b>: Yes.

<b>Trace Mayer</b>: Because everybody has access to all of the source code all of the time. One, you can review it for any security holes, anybody can.

<b>Aaron Voisine</b>: Exactly.

<b>Trace Mayer</b>: But two, is that a person in India and a person in the U.S. can make changes independently and yet submit them using the Git protocol and they get merged and you still have one canonical version, the control system, of the finishes version. So I mean this is a really, really big deal when it comes to open source code management, right?

<b>Aaron Voisine</b>: Yeah, it's super handy and even gets more complex than that like with say, I don't want to merge this person's change because I don't like it but maybe other people like it so they can do a fork and then there's multiple versions and but any point I can change my mind and merge the changes back in. Just a tool to make that doable.

<b>Trace Mayer</b>: And every change is linked mathematically to whoever's making the change.

<b>Aaron Voisine</b>: Yeah, changes its with a hash.

<b>Trace Mayer</b>: It has its unique hash. You know exactly where the changes are, when they're proposed, what those changes are because there's diff. Like what's a diff?

<b>Aaron Voisine</b>: It's just where you look at the difference between one version and another version. If you make an edit then the diff is just the differences, the changes that you make.

<b>Trace Mayer</b>: Yeah, so if we have a sentence like, the cat was blue and then we wanted to change it and it said the cat was red. Then the word blue would now be in red and then the other word would be green, right? And so the red is what's being subtracted and the green's what's being added. This is very important from our security standpoint because the N.S.A. actually got R.S.A. to compromise some of the cryptographic protocols, right?

<b>Aaron Voisine</b>: Yeah.

<b>Trace Mayer</b>: Could you, perhaps, go into a little bit of depth on that and how it's important for us to have these diffs so that everybody has access to all the source code all the time and knows exactly what the changes are and when they're made unlike how that helps in reviewing the security of these open source wallets out there?

<b>Aaron Voisine</b>: If it's open source and you can see all the changes, you know, it makes it easy to review the code and then if somebody adds something you can just look at the changes that were made. So it makes it quicker to review. Specifically what the N.S.A. is rumored to have done is, there is a random number generator algorithm that uses elliptic curves, but not the same curve that Satoshi used thankfully, but the way that that curve was generated there was some question as to whether or not it was done in such a way that the N.S.A. could predict what numbers would be generated from the random number generator which would allow them to compromise the security of any encryption that that use that random number generator.

<b>Trace Mayer</b>: Yes, so that would be a purely mental attack. I like to distinguish there's physical attack where someone actually steals your phone or computer and are able to compromise your private keys that way, but this would be a purely mental attack where the entropy is being attacked.

<b>Aaron Voisine</b>: Right.

<b>Trace Mayer</b>: Basically. So if somebody were to try and push a change to one of their wallet software, but it's all reviewable then it will be much easier to track down whether these types of attacks are tempted or not.

<b>Aaron Voisine</b>: Yeah and for that specific case there are really two different types of attacks. One is attacking the random data that gets generated. So all the wallets need a random seed to start with and all the code can be great and you can review it and it looks good, but if you have a bad random number to generate a wallet from, then you're in trouble. That's another security issue, but I don't think it's quite related to reviewing the code itself unless you could review the code of the random number generator.

<b>Trace Mayer</b>: Yeah, random number generators have been compromised also. You know, so sometimes you want to be able to generate your own entropy by rolling dice or with a deck of cards or something of that nature. Just to kind of close off the interview. What's the thing you're most excited about in the bitcoin community and what's the thing that you're most concerned about?

<b>Aaron Voisine</b>: Well, I'm really excited about the user growth that it seems to be catching on with more and more people. I'm excited about giving people an alternative to Fiat currencies in places like Argentina, in Zimbabwe where they have horribly mismanaged currencies and they're giving people a way out to get around capital controls, to be able to transfer a million dollars to China in seconds for six cents. I think that's just amazing. So that's what excites me most about Bitcoin. That's what gets me up in the morning and I want to give everybody the ability to participate in that and that's why I want to build a really well-designed wallet that was safe. So that they could hold on to their own bitcoins instead of trusting somebody else and do it in a way that's safe and easy for everyone. That's why I started this project. That's why I'm passionate about it.

<b>Trace Mayer</b>: That's awesome. Any concerns you have?

<b>Aaron Voisine</b>: Just what I mentioned before. I think the biggest problem we're going to see in the year or two ahead is bitcoin stealing malware. I think it's going become a serious problem and all wallet developers out there really need to take this problem seriously. Security is going to be a big problem for Bitcoin and tests information security a lot more than anything that's come before by giving such a huge financial incentive to break these systems. We need to really work hard on figuring out how to keep people from getting robbed.

<b>Trace Mayer</b>: Well, I completely agree with that sentiment. The security is the foundation of this entire industry and ecosystem and you're building those solutions. Where can people find you?

<b>Aaron Voisine</b>: In the App Store, if you just search for Breadwallet (the mobile bitcoin wallet). Also you can get at Breadwallet.com and you get a link to source code on GitHub if you're technically minded or get just a link to download the app and try it. Give it a try. It's super easy and I think people will like. You can give it to people who are just learning bitcoin and it even gives them like a little tutorial that explains how to use the wallet when you launch it. Oh, bitcoin is actually a currency and it has an exchange rate that changes. That's why your balance changes sometimes, that kind of thing.

<b>Trace Mayer</b>: Oh, wonderful. Well, there we've had it. <b>Aaron Voisine</b> building solutions to some of the greatest problems in the bitcoin space. Founder and C.E.O. of Breadwallet (the mobile bitcoin wallet). Thanks for being with us.

<b>Aaron Voisine</b>: Thank you.
