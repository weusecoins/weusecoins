---
layout: post
title: Andy O'Fiesh | Bitcoin Security Expert
author: Andy O'Fiesh
authorurl: http://www.weusecoins.com/andy-ofiesh-bitcoin-security-expert
description: Andy O'Fiesh on bitcoin cold storage, deterministic key generation, private key and bitcoin security.
published: true
---

<img src="/images/andy-ofiesh.png" alt="Andy Ofiesh" align="right">Andy was the second developer to join Alan at <a href="/armory/">Armory</a> working on developing advanced <a href="https://www.bitcoinarmory.com/">Armory Bitcoin wallet</a> features. He is a senior software developer with over 20 years of experience developing enterprise level software for companies such as Juniper Networks, Intel and Nortel.
<p>
<iframe width="700" height="394" src="https://www.youtube.com/embed/8EHwhe_mO8Y" frameborder="0" allowfullscreen></iframe>
<p>
Andy holds a degree in systems engineering and graduate degrees in computer science and computer systems engineering.
<p>

### PODCAST INTERVIEW TRANSCRIPT

<h2>Interview with Andy O'Fiesh on Bitcoin cold storage</h2>
Trace Mayer: BTCK, Episode 101. This is all about wallets, Class 201. We have with us Andy O'Fiesh. He is senior developer at Armory which is the developer of the Bitcoin Armory wallet. Welcome to the show, Andy.

<b>Andy O'Fiesh</b>: Thanks, Trace. Glad to talk to you.

<b>Trace Mayer</b>: So in the previous episode, episode 100, we had talked about <a href="/bitcoin-private-keys-entropy/">private keys</a>, public keys, a concept of entropy, bitcoin cold storage, hot storage, network security, wallet security. So we're going to go into some of these concepts a little bit more in-depth and I wanted to start out with the root seed. So in Armory, what is this concept of the root seed?

<b>Andy O'Fiesh</b>: Well, I call it the root key and it's a key that you use to generate other keys. So one of the ways in which Armory makes security easy is we've implemented a feature called a deterministic key generation. So given a root key, you can generate keys off of that that will always be the same.
<p>So we have a chain of keys called the key chain and it's not like a regular key chain that you keep your physical keys on. It's simply an enumerated list of keys that come from the root. So starting with the root key, we have a key at index 1 and 2 and 3 on up to however many keys that you need. And when you need more keys to -- because we suggest you do every transaction on its own key, not reuse keys for more than one transaction.
<p>Well, I should say more than two transactions because it's going to be one transaction coming in and then eventually one transaction going out. So using any key for more than two transactions will have an incremental negative impact on your privacy.

<b>Trace Mayer</b>: Now that when you say two transactions that would be one transaction where there's an input and that's where bitcoins come into the public key.

<b>Andy O'Fiesh</b>: Right.

<b>Trace Mayer</b>: But then also one transaction, where there's an output and that's where bitcoins go from one private public key to another public key, right?

<b>Andy O'Fiesh</b>: Well, from one to more than one. In general, your outputs aren't going to match what you want to spend. So in the same way that you would go to a convenience store and buy a candy bar, if you use a $20 bill you're going to get eighteen-something dollars back in change. And so that change also goes to a new key, so it's coming back to you. So what we do is we generate the next key in our chain to receive that change and then that change will be the one input and eventually that change will get spent on one output. So the key that we use for change then becomes a new key that has one input and one output just like every other key in our wallet.

<b>Trace Mayer</b>: One. And that's how Armory does it. Now, there are some other bitcoin wallets out there that send the change back to the same address that it sent it. So they're getting into privacy issues, right?

<b>Andy O'Fiesh</b>: Yeah, that's not as good for privacy. So it certainly is simpler and if you're actually just buying candy bars and you're playing around with bitcoin and no one cares about the amount of money that you're spending and you're just a regular person that's using bitcoin for walking around money then, well, no big deal, that's fine.

<b>Trace Mayer</b>: But there could also be a potential security problem when someone is reusing keys. I think it was one of the Android wallets where the private key could be deduced from one of the signed transactions because of a poor way that the private keys had been generated.

<b>Andy O'Fiesh</b>: Well, I'm not sure if that has anything to do with the reuse of the keys or just the poor entropy in the way the keys were generated.

<b>Trace Mayer</b>: Well, the reuse of the key -- so when the transaction would show up in the network, you could -- because it had a signature from the private key, you could deduce what that private key was only from the transaction in the network which is public and if you had sent the change back to that address then -- and somebody were able to deduce the key from that transaction, then they could in effect steal your change.

<b>Andy O'Fiesh</b>: Well, the way that the private key signing works is that you should not be able to ever work backwards. If there's poor entropy, then there's going to be a particular kind of attack that will attack the poor entropy. So those two kinds of attacks are separate and distinct, I don't know if that was the case in the Android weakness.

<b>Trace Mayer</b>: Yeah.

<b>Andy O'Fiesh</b>: But I could be misinformed about that and something that somebody else might have more knowledge about.

<b>Trace Mayer</b>: Well, and so that's one reason why it's good to always be using a new public key whenever your Bitcoins are coming back as change or whenever you're sending them to somebody is so that there's not that additional piece of information out there --

<b>Andy O'Fiesh</b>: Right.

<b>Trace Mayer</b>: -- that could potentially be used in some way. Now also when Bitcoin Core or Bitcoin-QT came out when you when you backed up your private keys, it would only back up 100 of them.

<b>Andy O'Fiesh</b>: Uh-huh.
<h2>Concept of Deterministic Key Generation</h2>
Trace Mayer: How is this root seed concept and how Armory has implemented it, how is that helpful so that you make sure that your Bitcoins are backed up?

<b>Andy O'Fiesh</b>: Well, the thing about having deterministic key generation is you only need to back up one key and then you can generate all of the keys that your wallet uses. So there is no concept of backing up a bunch of keys and then once you use those up, then you have to back up a bunch more keys. That's not a sustainable system. No one's got time for that. You know what I'm saying?
<p>So this allows you to simply back up one key and then that key is used to generate all of the other keys. Also, I want to put it here that we have a new version of this coming out soon where it's not a chain, it's actually a tree. So you have the potential to back up many wallets with one private key rather than having the keys indexed by a single energer or that counts up from one to whatever you have now a vector of energers such that you might have a key at index 1.1.1.
<p>And, geez, that sounds a little bit like IP addresses. So, yeah, that's about how these are indexed now. They look more like IP addresses. And you can actually have various organizations of your tree where one private key has a bunch of wallets or you can have it as one private key has a bunch of accounts. And each of those accounts has branches and each branch has various addresses on them. So we're taking this whole concept of deterministic key generation to a whole other level with the deterministic key tree.
<p>The details of this are actually described in a Bitcoin improvement proposal called BIP32 and you can read it and get in-depth with that. And other BIP32 key generation software is coming online, as well. So that's going to be really the standard going forward from now on.

<b>Trace Mayer</b>: And it should be noted that Alan Reiner, our CEO there at Armory, he was actually very instrumental in innovating this whole hierarchical deterministic space, right?

<b>Andy O'Fiesh</b>: Right. That's really the end point of deterministic key generation is the ability to back up an entire system with one private key so that you can have an exchange that you secure every private key involved in every user's account on your exchange with one super secure offline, bitcoin cold storage computer where you keep the keys to the whole operation.
<h2>Super Secure Bitcoin Cold Storage</h2>
<b>Trace Mayer</b>: And we'll talk a little bit more about that later because there are additional tech factors that come from like these parent-child key relationships. But you mentioned a phrase there super secure bitcoin cold storage. Like, what is this whole idea of bitcoin cold storage because that's another thing that Alan innovated, right?

<b>Andy O'Fiesh</b>: Well, yes. The one way of doing bitcoin cold storage is you write your key down on a piece of paper and you hide it under a rock. That's your super bitcoin cold storage because no hacker is going to be able to find your piece of paper. If they do, then they're not a hacker, they're a burglar. That's different. So the problem with that kind of bitcoin cold storage is, well, whenever you want to access that private key and use it, then you've got to go find that piece of paper. And that's not very convenient.
<p>That's great if you have savings that you're not going to touch, or you're going to leave for your children. That's not necessarily useful for anyone that's going to have a lot of transactions with their Bitcoin. So what Bitcoin Armory has done is allowed you to have all the security of a piece of paper under a rock and still be able to use your private key. And that's where the concept of a offline bitcoin cold storage computer and an online watching only computer comes into play. So with Bitcoin Armory, we have our application such that it can be installed on both an online computer that has no private keys on it so it has only the public keys.
<p>And those public keys are used to organize your Bitcoins and to look up their balances and to find out exactly what you can spend and you can create transactions and you can broadcast transactions. So you can do all of these things, except sign those transactions. In order to sign one of those transactions, you need your offline computer, which also has Bitcoin Armory running on it. And this offline computer has hopefully never touched the internet and can be very scaled down low-tech computer.
<p>Perhaps, an old laptop or one that you have cleared out all of the peripherals, all the Wi-Fi, maybe even get rid of the hard drive because you can run this offline bitcoin cold storage computer off of a USB stick. And again, that should be a USB stick that you haven't used for anything else, should be acquired from a reputable source and you should only be using it for this one purpose because there are attack software that can be used to attack USB security. So you want to limit, like you said, the space of an attack and have a very -- the smallest window possible for anyone to attack your offline computer.
<p>So once you set up an online computer with access to the block chain and the internet, then you also have your offline computer which is completely separate. The way a transaction would work is you would create it on your online computer, which has what's called a Watching-Only wallet and use that Watching-Only wallet to create the transaction. You can put it on a USB key that's only used for this purpose.
<p>Take it over to your offline computer, sign the transaction because that's where your private keys are and then bring the USB stick with the signed transaction back to your online computer and then broadcast it. Now what happens is that private key signed the transaction, but the private key never ever touched the internet and that makes it much harder for an attacker to steal your private key.

<b>Trace Mayer</b>: Yes. So we get all the benefit of the network security from the Bitcoin Core or the Bitcoin-QT. But then we get to drastically shrink the attack surface and greatly increase the wallet security by using this offline bitcoin cold storage device. And so -- and like you said, it can be a cheap old laptop or I think one of my buddies, he got a $200 laptop and he's able to use that for his bitcoin cold storage device. And so that's, you know, that's a great way to make sure that your Bitcoins are super safe and secure.

<b>Andy O'Fiesh</b>: Yeah. Another thing you can do on top of that is to use Ubuntu Linux on that laptop. And Ubuntu is a very basic, easy to use, you know, barebones version of Linux that will, you know, doesn't have a lot of the bells and whistles of other versions of Linux. And it's very simple to install. In fact, you can have the Linux, the Ubuntu Linux and Armory software on a USB stick and nothing is actually residing on the offline computer except for your data.

<b>Trace Mayer</b>: Yes.

<b>Andy O'Fiesh</b>: So that can be super secure. So it's not just the fact that you have this computer offline, it's also more -- you can increase the level of security by running really basic operating system on it.

<b>Trace Mayer</b>: Exactly. Because then, you know, the less moving parts there are, the easier it is to secure those small number of remaining parts that are actually there.

<b>Andy O'Fiesh</b>: Yeah.

<b>Trace Mayer</b>: Right?

<b>Andy O'Fiesh</b>: I mean, again, you're constantly looking at ways to reduce the attack surface. You'll never get it down to zero. There's always a way. Especially when humans are involved, there's always a way.

<b>Trace Mayer</b>: Humans are very creative.

<b>Andy O'Fiesh</b>: Exactly. And we're very creative in how we have weaknesses, too. So we have very creative weaknesses. And so, you know, ideally, the only way somebody should be able to attack your Bitcoin is somehow to trick you into sending them to them. Because that, you know, even then you can reduce the attack surface for having somebody trick you into doing that. Because, you know, if you use a multi signature on top of this, then that would be having your Bitcoins secured with multiple keys. And that's going to be covered in the future podcast. But just briefly, when you do that then more people have to be tricked.

<b>Trace Mayer</b>: Yeah.

<b>Andy O'Fiesh</b>: Right?

<b>Trace Mayer</b>: Or more offline bitcoin cold storage devices have to be compromised.

<b>Andy O'Fiesh</b>: Exactly.

<b>Trace Mayer</b>: Yeah.

<b>Andy O'Fiesh</b>: Further reducing the attack surface.

<b>Trace Mayer</b>: Yeah. So, actually this might be a good place for a joke that I've got. So I've got a really funny -- it's a combination of a physics and a cryptography joke, and just to give our listeners some incentive to like figure out the joke. You know, because like it isn't funny if nobody gets it, right? So on the podcast main site, so <a href="http://www.bitcoin.kn>www.bitcoin.kn</a> there's a little orange button where you can start a recording.
<p>And so anybody who can explain the joke, we can feature it on a podcast. And so this might be a great opportunity for one of our listeners to, you know, explain the joke and talk about their business or something like that, I don't know, or maybe I can send some Bitcoins or buy a T-shirt or something.  But anyways, so here's the joke: the colder the storage, the lower the entropy. And so if anybody can explain that joke, like, you know, just go to bitcoin.kn, click on the orange button and record the explanation there.
<p>So while we're talking about this bitcoin cold storage concept, you'd mentioned a USB stick and then you'd mention it, oh, the USB stick could potentially be compromised also. And I know that we've talked about using different channels like using an audio channel, for example, to transfer the signed and the unsigned transaction instead of a USB stick or using QR codes. So there are lots of different ways that we could potentially transfer that data from the online computer to the offline computer to get the signature, right?

<b>Andy O'Fiesh</b>: Somebody even had the idea of taking out and using old school modem technology. If you remember the kind of modems where you would have to take the receiver of an old style phone, you know, like a rotary phone even.

<b>Trace Mayer</b>: Uh-huh.

<b>Andy O'Fiesh</b>: Or what is it, touch-tone. It had to be a touch-tone phone, right? And you would take the handle that you would hold up to your ear and your mouths. Remember that, if anyone here's over 30? And you put that on to this modem, which you would actually like to have these two like suction cups-style things and you would actually put the receiver on the modem and then it was all audio and it was like really low bandwidth.
<p>I mean, certainly you would not send any kind of image content, much less video content over this modem. You would literally watch text come in on this thing. But people have suggested using that kind of old technology to transfer transactions to and from an offline bitcoin cold storage because certainly there isn't any malware written to travel over such a old school modem.

<b>Trace Mayer</b>: Yeah. And it's what, 200 bods or something? I mean, we --

<b>Andy O'Fiesh</b>: Something, yeah.

<b>Trace Mayer</b>: We couldn't even play Duke Nukem or Wolfenstein 3-D on that, right?

<b>Andy O'Fiesh</b>: I think that's prior to 2400 bod. I think it would have been, like, lower than that even, right?

<b>Trace Mayer</b>: But I think that raises a very good point that we can use these older technologies in a very security efficient way to greatly increase the protection that we have for our private keys so that nobody captures our flag, right?

<b>Andy O'Fiesh</b>: Right.

<b>Trace Mayer</b>: And because the USB sticks, they could potentially be compromised; there's been a lot in the news about that. How about printers? Like, nobody thinks of their printer as being the device that somebody could use to, like, steal your flag. But we actually have a feature in Armory called Secure Print. So, like, why does Secure Print matter at all?
<h2>Secure Print</h2>
<b>Andy O'Fiesh</b>: Well, if you think about it, Secure Print uses the oldest technology, which would be a pen and paper. And the way Secure Print works is you go ahead and you printout your backup, but it's not really your backup. There is a Secure Print code that comes with it. And that Secure Print code is used to convert the backup you print out to your actual backup.
<p>And the idea is you print your Secure Print back up, which if somebody acquired your printer or there was a security weakness in your printer, they could look at that backup and never get to your Bitcoins. Because what you then do is you take the printer, paper, the paper that got printed -- I'm sorry, the printout, and you write your secure code on it with the pen and the secure code is displayed on the screen.
<p>So as long as nobody's looking your shoulder, no one will know your security code and your security code will be written on the paper so you can't forget it. And then that piece of paper that you have, which is half printout and half your writing, can be used to recover your private key, too.

<b>Trace Mayer</b>: Yeah. I think I'd seen a Reddit thread, somebody was printing out their backups at Kinko's. And if people aren't aware, like, Kinko's actually keep a record of every single thing that's ever printed on their copy machines. And like our printers actually have hard drives on them, right? And so --

<b>Andy O'Fiesh</b>: Right.

<b>Trace Mayer</b>: -- like and a lot of printers are Wi-Fi connected. So --

<b>Andy O'Fiesh</b>: Right. So you want to make sure your printer is offline. If you're going to print it or you secure your print, because that Kinko's employee that discovers, hey, there's actual --

<b>Trace Mayer</b>: Money.

<b>Andy O'Fiesh</b>: -- Bitcoin -- there's money in our logs here. Let me go get that money after hours. Well, he's going to run into a print out that says Secure Print on it. And he's like, "Oh, I don't have the Secure Print code, damn it." And he's not going to able steal your money.

<b>Trace Mayer</b>: And this applies to all the different wallets that you could be backing up your Bitcoins with, like, whether it's a brainwallet or bitaddress.org, or you're using these "paper wallets," like, these attack vectors apply to all of these, right?

<b>Andy O'Fiesh</b>: Right. So, you know, using a non-secure printer, a printer that's online, is definitely an increase to your attack surface.

<b>Trace Mayer</b>: Yeah. Actually, my printer I made sure that the Wi-Fi is broken on it.

<b>Andy O'Fiesh</b>: Uh-huh.

<b>Trace Mayer</b>: So it can't phone home anymore to somebody.

<b>Andy O'Fiesh</b>: Well, also your printer's in your private home. So in that scenario, and it's not on the internet, then you don't need to bother with Secure Print. Because, you know, something else happens with Secure Print is sometimes people have poor penmanship.

<b>Trace Mayer</b>: Exactly.

<b>Andy O'Fiesh</b>: They don't even know what they wrote down. So with Secure Print and with any backup, we recommend that before you actually put any Bitcoins into your wallet that you test that backup and make sure, I say, prove to yourself that you'll never have a problem restoring from the backup. And then once you're convinced, then go ahead and use the wallet.

<b>Trace Mayer</b>: Yeah. That's a great point. Because, you know, we're probably more of a security risk to ourselves than somebody else trying to hack our Bitcoins.

<b>Andy O'Fiesh</b>: Yeah. I don't know how you would figure this out, but I would bet that the amount of Bitcoins lost that are completely unspendable is quite a bit more than the amount of Bitcoins that have been stolen.

<b>Trace Mayer</b>: Yeah, that would not surprise me because it's very, very easy for people to just screw up.

<b>Andy O'Fiesh</b>: Yeah.

<b>Trace Mayer</b>: And send their Bitcoins somewhere where they can't get them out again.

<b>Andy O'Fiesh</b>: Yeah.
<h2><strong>Shamir's Secret Sharing</strong></h2>
<b>Trace Mayer</b>: Let's talk about another feature, Shamir's Secret Sharing. So what's actually going on with this Shamir's Secret Sharing?

<b>Andy O'Fiesh</b>: Well, the Shamir's Secret Sharing is the cute little math trick that sits behind fragmented backups and what's great about Shamir's Secret Sharing is that it's an obscure concept but, boy, is it simple. It's not that hard to understand if you have -- if you take high school algebra and you ever wondered, "Well, geez, I'm never going to need this." Well, this is the day.

<b>Trace Mayer</b>: This is the day.

<b>Andy O'Fiesh</b>: If you had paid attention in high school algebra, you can use that knowledge to understand Shamir's Secret Sharing. If you could imagine you have this private key, which is a number, and that number is -- that's your secret. If anyone gets that secret, then it's all over, right? So that's a lot for one number. It probably would be better if you had, say, three numbers and you only needed -- you needed two of those three numbers.
<p>Now, certainly you could take a number like that and break it up into three pieces, but then you need all three. And I've got three ways to lose a number that will prevent you from ever spending your Bitcoins. But if you had two of three -- two of three fragmented backup of your secret number, that would be -- you only need two out of the three pieces, not one. Because if you only needed one, somebody could very easily steal it and you've tripled the size of your attack surface, right? Because there's three different numbers somebody could steal if you only needed one. That would be like copying your private key into three pieces of paper, right?
<p>You just tripled the attack surface. And if you needed all three, then you've increased the amount of ways you could lose all your Bitcoins. Ideally, it would be two of three because then, right, if somebody finds one of your pieces of paper then they can't steal your Bitcoins, right? And if you lose one, you don't lose your Bitcoins. So to me that that's, like, ideal for just three pieces of paper.
<p>Now, the way it works with Shamir's Secret Sharing is if you imagine your private key is a point on a line, right? You can break that number up into three pieces and you only need two. And what you do is you make those three other numbers other points on the same line, right? And then if you have any two of those points, you can extend the line out to find your private key. And that's exactly how it works.

<b>Trace Mayer</b>: So <a href="http://www.bombino.org">Kevin Bombino</a>, who also invested in Armory, it was so funny because we were talking -- it was before we had funded it, and he was like, you know what, when I was at Harvard -- and Kevin went to Harvard for a computer science. He's like, "When I was at Harvard, you know, I was in one of my computer science classes and the professor was explaining this concept of Shamir's Secret Sharing and I remember thinking to myself, when is this ever going to be used. This is the most worthless piece of junk that I'm having to learn." And he was like, "But it is implemented so elegantly in Armory and it's so useful that like it's just awesome." So, you know, I was --

<b>Andy O'Fiesh</b>: What's amazing about it is if you see you how it's implemented, then any computer science student, you know, in their first year could -- this could be a homework assignment. It's not that hard to do.

<b>Trace Mayer</b>: Right. And here's a real-life example of how this could have been used. I was reading a thread on Reddit and there was a kid. His dad was an early Bitcoin adopter, but I think the kid is -- the son was the one who secured all the Bitcoins. And he had done it with paper wallets, right?

<b>Andy O'Fiesh</b>: Hmm.

<b>Trace Mayer</b>: And so he had the same paper wallet in the safe and another copy in the safety deposit box and I think those were the two backups. Well, guess what happened? Somebody broke into his dad's house and loaded the safe up, like, pulled it out of the ground and drove off with it in a truck.

<b>Andy O'Fiesh</b>: Uh-huh.

<b>Trace Mayer</b>: And the bank didn't open for another nine hours.

<b>Andy O'Fiesh</b>: I heard the story, yeah.

<b>Trace Mayer</b>: And so if he -- and he didn't use this fragmented backups solution in Armory. So he's just waiting on pins and needles hoping that they can't drill into the safe.

<b>Andy O'Fiesh</b>: Right.

<b>Trace Mayer</b>: And take those Bitcoins because he can't get into a safety deposit box for another nine hours. But if these --

<b>Andy O'Fiesh</b>: And hopefully, the thieves don't even know they're in a race.

<b>Trace Mayer</b>: Right, right. Yeah, well --

<b>Andy O'Fiesh</b>: When the bank opens.

<b>Trace Mayer</b>: And from what I understand he actually did get the backup from the safety deposit box and got the Bitcoins moved before they got compromised. But this would have been a perfect example of where this concept of the fragmented backups in Armory could have been very, very helpful, right?

<b>Andy O'Fiesh</b>: Right.

<b>Trace Mayer</b>: Because they could have stolen the safe, but it would have only had one of two. Well, there might have been three fragments in the backup and you need any two of them.

<b>Andy O'Fiesh</b>: Right.

<b>Trace Mayer</b>: But only one of them would have been in the safe, right?

<b>Andy O'Fiesh</b>: Right.

<b>Trace Mayer</b>: So he could have, you know, the safe could have got ripped up out of the cement, dragged out of his garage and yet he could sleep without even any worry at all because they wouldn't have been able to compromise the Bitcoins had to use this fragmented backup feature, right? Yeah, so this is, you know, it's -- and we should also distinguish this fragmented backups is completely different from multi-signature.

<b>Andy O'Fiesh</b>: Right. A lot of people hear two of three, and they think, "Oh, that's like multisig." Well, I mean, on the surface it sounds a little bit like multisig. But it's actually quite different. And there's one key difference between Shamir's Secret Sharing and fragment of backups and multisig. And that is there is a single point of failure. That is when you get your private keys -- when you get your fragments together to recover your private key.
<p>Well, now you've got one single point of failure. With multisig, you're actually signing transactions with multiple signatures and all of those signatures are never required to be in the same place. I mean, all those private keys they can each sign, whereas multisig is much better for having secure transactions that require multiple signatures because those private keys each necessary component to sign a transaction can stay separate and that is much more useful actually for day-to-day use.

<b>Trace Mayer</b>: Yeah. Because one could be your smart phone, one could be your online computer, one could be your offline computer, and it could require two of three on the multi-signature.

<b>Andy O'Fiesh</b>: Right.

<b>Trace Mayer</b>: And then two devices would have to be compromised. So --

<b>Andy O'Fiesh</b>: Right.

<b>Trace Mayer</b>: Yes, so there we go, we've talked about root seeds, bitcoin cold storage, watching-only wallets, secure print, Samir's Secret Sharing, how we can use these fragmented backups. Oh, one last feature we should probably talk about, like, what's the difference between a private key import and a private key sweep when we're bringing bitcoins into Armory?

<b>Andy O'Fiesh</b>: Well, when you would do an import, you're actually taking the private key with the bitcoins that are associated with it in -- you're actually bringing that private key in to your wallet. Now that private key is not recoverable through your root key. It's separate. But it can be considered part of your wallet. And when you import private keys, you do need to back those up either separately or create a new backup, which includes your root key and all of your private keys including the new ones. So it's really not the most convenient way, not the easiest way to bring external bitcoins into your wallet.

<b>Trace Mayer</b>: And --

<b>Andy O'Fiesh</b>: A much better ways to -- yes --

<b>Trace Mayer</b>: And if you use the import, you also have all of the security risks that those private keys had before they even came in to Armory, right?

<b>Andy O'Fiesh</b>: Right. While you're expanding your attack surface to whatever those private keys were on before. So wherever your private keys have been. I always say, you know, if you get one of our promo wallets, don't use it. If you don't know where those keys have been.

<b>Trace Mayer</b>: But they've been at least with Armory Technologies.

<b>Andy O'Fiesh</b>: Right, exactly. So, you know, when you get one of our promo wallets, that's a perfect example. You don't import those keys, you should sweep them. And what that means is you just take whatever Bitcoins are in those private keys and send them into a private key. Well, send them to a public key for which you have the private key in your wallet and you know the security level of that private key.

<b>Trace Mayer</b>: And that's a new private key that's been generated by that specific instance of Armory that you're running.

<b>Andy O'Fiesh</b>: Right. So --

<b>Trace Mayer</b>: So, it's brand new. It's clean. It doesn't have any history associated with it, much more secure than a private key import?

<b>Andy O'Fiesh</b>: Right. But you know, there are purposes for which you really want to import a key. Perhaps, you have a vanity address which, you know, has the name of your company in it and you use that to collect donations or receive payments from people. And you don't want to give that up, but you also want to have it in your wallet so you can track it and use the funds that are in it.
<p>So certainly, you would import such a private key. Now the whole point of this is to say, "Look, we have this import feature, but the only -- you need to know exactly why you're importing it rather than sweeping it." And if you have a good reason to import it then, go ahead, it's fine. Just understand that, generally, it's not as good as sweeping.

<b>Trace Mayer</b>: Yeah. Okay, well, wonderful. That should be just about it for episode 101. We've had Andy from Armory Technologies, developer of the Armory Wallet and we've been talking all about wallets in this episode. And so thank you very much, Andy.

<b>Andy O'Fiesh</b>: Thank you, Trace.
