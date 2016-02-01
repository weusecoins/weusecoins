---
layout: post
title: Andy O'Fiesh - Bitcoin Security Expert
author: Andy O'Fiesh
authorurl: http://www.weusecoins.com/andy-ofiesh-bitcoin-security-expert/
description: Andy O'Fiesh on bitcoin multi-signature transactions.
published: true
---

<img src="/images/andy-ofiesh.png" alt="Andy Ofiesh" align="right">Andy was the second developer to join Alan at <a href="/armory/">Armory</a> working on developing advanced <a href="https://www.bitcoinarmory.com/">Armory Bitcoin wallet</a> features. He is a senior software developer with over 20 years of experience developing enterprise level software for companies such as Juniper Networks, Intel and Nortel.
<p>
<iframe width="700" height="394" src="https://www.youtube.com/embed/1vOCFYKvORo" frameborder="0" allowfullscreen></iframe>
<p>
Andy holds a degree in systems engineering and graduate degrees in computer science and computer systems engineering.
<p>

### PODCAST INTERVIEW TRANSCRIPT

<b>Trace Mayer</b>: Welcome back to the <a href="http://www.bitcoin.kn">Bitcoin Knowledge Podcast</a>. This is Episode 105 and you're in for a tremendous interview with senior Bitcoin Armory Wallet developer, <b>Andy O'Fiesh</b> at over at Armory Technologies. Welcome, Andy.

<b>Andy O'Fiesh</b>: Hi, Trace. Glad to be back.
<h2><b>Andy O'Fiesh</b> on bitcoin multi-signature</h2>
<b>Trace Mayer</b>: Yeah. So we're just going to dive right in. We're going to talk about bitcoin multi-signature and fragmented backups and how we can implement those two extremely powerful tools to create a good security plan for our Bitcoins or good succession plan, things like that. So let's start off, what exactly is a bitcoin multi-signature and how is it used?

<b>Andy O'Fiesh</b>: Bitcoin multi-signature is a very simply a feature of Bitcoin that allows to you protect your bitcoins with more than one address. So before bitcoin multi-signature, you would send bitcoins to a public address which corresponded with a public and private key pair. So the bitcoins would be at a particular address which represents a public key and to spend those bitcoins the owner of that public key would have to prove that they know the private key and then that process of proving is what's actually called signing. When they sign a transaction to send their bitcoins the signed transaction proves that they can provide the private key. So with bitcoin multi-signature the owner or owners of those bitcoins would have to gather some number of the signatures that control those bitcoins. So you might send bitcoins to a two of three bitcoin multi-signature address and then two out of the three private keys behind that address must sign in order to move those bitcoins again. So you might have a three-member Board of Directors or you might have a buyer, a seller and an escrow agent or you could have even you know a parental custodial account where two out of the three amongst two parents and a child would have to sign off on moving those bitcoins.

<b>Trace Mayer</b>: Yeah. So just to recap from episodes 100 and 101. We have this public key and that's where bitcoins are at and then we have a private key and the private key is really just a number like a really big number. And we have to have that particular number in order to move bitcoins. But with bitcoin multi-signature we actually have multiple numbers that are required in order to move the bitcoins.

<b>Andy O'Fiesh</b>: Right. The bitcoin program knows to check to just have a certain amount of those signatures on the transaction.

<b>Trace Mayer</b>: And that would be two of three in your example, but.

<b>Andy O'Fiesh</b>: Yeah.

<b>Trace Mayer</b>: I mean it could it could go all the way up to what?

<b>Andy O'Fiesh</b>: Well, with Bitcoin Armory we support seven of seven.

<b>Trace Mayer</b>: Wow! So we could really distribute out the signing authority for bitcoins.

<b>Andy O'Fiesh</b>: Right. So you could have like, you know, the obvious example would be a seven member board of directors.

<b>Trace Mayer</b>: Yeah, so like a hedge fund, for example, that wants to buy twenty million dollars worth of bitcoins if they put that in a single signature address in a way they're trusting their chief technology officer or whoever could get access to that one particular private key or that one number. They're trusting a single point of failure, right? But with how Armory implements these bitcoin multi-signatures is there a single point of failure?

<b>Andy O'Fiesh</b>: Well, no. Not only that, but you can also take this to the next level and have a completely distributed board which maybe none of the members know each other. You can have an organization exists solely on the block chain such that the people involved with running this company aren't even -- don't even know who they are.

<b>Trace Mayer</b>: So like an example of how that would work is there would be an offline spending transaction created, but then the collection of the signatures could all happen in a very blind way as well.

<b>Andy O'Fiesh</b>: Well, yes. What happens with Armory is you can create whatever transaction you want. Imagine this imaginary seven-person board of a company that exists in the ether and nobody knows each other. You could have any member or anyone really create a transaction. You could have other people that don't have signing authority, but have the ability to create transactions too. So you might even have an administrator create transactions for the board members to sign and then that transaction gets sent via email, say, or text or whatever or a fax even.

<b>Trace Mayer</b>: Yeah. Because we're just talking about like a regular offline transaction that's unsigned so it's just a string of texts so.

<b>Andy O'Fiesh</b>: It is really.

<b>Trace Mayer</b>: Perhaps even use Bitmessage because that has no metadata associated with it like email does.

<b>Andy O'Fiesh</b>: Right. But you couldn't literally fax and type it at. I mean it would be a pain in the neck.

<b>Trace Mayer</b>: Right.

<b>Andy O'Fiesh</b>: That's what we're talking about. We're talking about character data. We're not talking about some, you know, binary file where everything in it is hidden. And if you really wanted to decode that fax you could bring up the source code because its open source and you could actually decode it yourself by hand.
<p>Now this is important because we're dealing with anonymous board members and everybody has to trust every one and normally you would, but with bitcoin that's not necessary. Because we could get into the source code and understand exactly what it is you're signing and looking at.

<b>Trace Mayer</b>: And at the end of the day, you just have to be able to prove that the bitcoin network that you've got that private key or the assigning authority and you don't necessarily have to prove it to the other people in your circle.

<b>Andy O'Fiesh</b>: Right. So I've gone off on a tangent. The important thing is you'd take this string of texts and you can sign it and when you sign it you get a different string of text and you can send that around. Now eventually one person will get the transaction with enough signatures and if they approve they'll sign it and they'll have enough signatures they can broadcast themselves. Any member of the board receiving this transaction with, say, four signatures if it was a four of seven. Once they see the four signatures, they're like, I got three board members who agree with me. This transaction should go out and then they can just send it.

<b>Trace Mayer</b>: Now, this is very important from a segregation of duties standpoint. Like in traditional auditing or accounting and process design, the person who has signing authority on the bank account or the cash account, for example, should also not be the one that's approving transactions or keeping track of the ledger, the general ledger for the company or things like that because it opens up a potential for embezzlement or other types of ways for the money in the company to disappear. So this is a very important tool for people to be able to hold lots of bitcoin, people or institutions, right mainly.

<b>Andy O'Fiesh</b>: Right. So basically you've replaced the hand shake, the well-established connections, you know, judging somebody's character. You've replaced all that with the bitcoin protocol which you cannot get around it.

<b>Trace Mayer</b>: Well, I guess you could get around it if you could get two out of the three signatures or five out of the seven right. But that would require collusion and it would require the signers to actual know the other people and be able to communicate with them and then talk them into engaging in the collusion.

<b>Andy O'Fiesh</b>: Well, here is the thing about the -- or trickery, you know, but at certain point if you got a majority of a group colluding, well then, they are the --

<b>Trace Mayer</b>: They are the board of directors, right.

<b>Andy O'Fiesh</b>: If you're not happy about being a part of this operation then geez, you're the odd one out. You should probably get out of that. I mean, here is the thing though. It's a lot harder to get a group like that together than to just do it yourself. So it really is quite a barrier and also when it comes to trickery because you know some of the biggest bitcoin heists have involved one person being tricked into sending their bitcoins to an attacker's address. So with bitcoin multi-signature the trickery and the access to the people who have the keys, it’s really like, you know, double authentication set-up, where you'd have to get at least two, you know, two people to sign off on a con.

<b>Trace Mayer</b>: And let's talk a little bit more about the actual details of that. So when we create a transaction we have the address where the bitcoins are currently at and then we have the address where the bitcoins are going to go.

<b>Andy O'Fiesh</b>: Right.

<b>Trace Mayer</b>: And so when Armory creates that un-sign transaction, is it possible when that's being circulated around to get signatures to just go and change the address where the bitcoins are going to go.

<b>Andy O'Fiesh</b>: Well, see, if he did that, that would invalidate the previous signatures.

<b>Trace Mayer</b>: Ahh! So we aren't, like, that potential attack vector isn't even possible.

<b>Andy O'Fiesh</b>: Right, no. You couldn't change it. When you sign something you're signing the important aspects of the transaction. Now here is something else to know. I mean one of the ways in which people get tricked is there is different ways you can sign. There is different kinds of signatures. If you can sign something you can sign just the fact that you're sending your bitcoins out and you don't actually have to sign the output. There's a specific kind of signature where you don't. Now Armory doesn't allow that, but when other wallet was attacked people were inserting these sig hash types is what they are called, signature hash types and people are getting tricked into signing open ended -- basically the equivalent of a blank check.

<b>Trace Mayer</b>: Right. You didn't make out a pay to the order of.

<b>Andy O'Fiesh</b>: Right.

<b>Trace Mayer</b>: In the signature hash.

<b>Andy O'Fiesh</b>: So that's possible in the protocol. It's non-standard and people can get tricked into doing that. Actually, I don't know for sure if it's not standard, but --

<b>Trace Mayer</b>: But that's something that someone who is not even aware that there is a sig hash type and they're just trusting which ever wallet they are using might inadvertently get tricked into.

<b>Andy O'Fiesh</b>: Right, exactly.

<b>Trace Mayer</b>: Man, like, there really are a lot of potential pitfalls for people.

<b>Andy O'Fiesh</b>: Right.

<b>Trace Mayer</b>: In the security space. You know it's important I think for people just to be aware of like what is possible with the protocol.

<b>Andy O'Fiesh</b>: Yeah. So the thing about bitcoin that you have to be aware of is that bitcoin is a protocol that allows for a great deal of security. The actual security isn't built into bitcoin. I mean, there's some pretty basic things that bitcoin does in order to work, you know, with signing an all that, but it's not complete and that's one of the ways in which people have been losing their bitcoins is they overestimate the amount of security that comes with the protocol. What you need is software on top of that that adds the extra layers of security that are needed for business applications.

<b>Trace Mayer</b>: Well and this goes all the way back to the very genesis of Armory, right. Like, Alan saw -- well, you know, it was theoretically possible to do the whole concept of cold storage and Satoshi even recommend doing it, but the software haven't been built and so Alan was like, oh, I could built that and so built it right.

<b>Andy O'Fiesh</b>: Right. It's not like Alan had the vision. It's these people on the bitcoin forums who had the vision initially and they would go on and they would discuss. Oh, here's some things I would need to use this in my business or to use this to implement this business plan that I have in my head and they would discuss these things on the forums and Alan came along. It's like, oh, I know how to do that. Oh, yeah, I can do that and he just started doing it.

<b>Andy O'Fiesh</b>: Because it's fun for him.

<b>Trace Mayer</b>: And, yeah, it's fun, but this is actually like a very complicated problem to solve, right. Because you've got the math and the cryptography and the statistics that you have to be able to do, but then you have to be able to translate that into software code.

<b>Andy O'Fiesh</b>: Right.

<b>Trace Mayer</b>: And that's not necessarily the easiest problems to solve.

<b>Andy O'Fiesh</b>: Yeah.

<b>Trace Mayer</b>: Which, you know, unfortunately, we've seen lots of problems in the bitcoin space and then there is things like Mt. Gox. I mean everybody is like how do we not have a f$500 million lost in the space. Well, we could use bitcoin multi-signature like we have in Armory. We could use that.

<b>Andy O'Fiesh</b>: Right.

<b>Trace Mayer</b>: And then we won't have $500 million losses unless there was massive collusion.

<b>Andy O'Fiesh</b>: Right, but you know, if you're a megalomaniac with a company that is successful beyond anyone's imagination and you don't want to hand over the reigns to anyone. Well, it's not likely you're going to use bitcoin multi-signature anyway.

<b>Trace Mayer</b>: And that raises a very good point, right. Because with bitcoin you either have the private key or you don't and so you can distribute those private keys and then you can know that those private keys are then distributed.

<b>Andy O'Fiesh</b>: Uh-huh.

<b>Trace Mayer</b>: And so, yeah, I think because I think a lot of especially in financial services a lot of the banks or the investment cons or whatever they really, really like holding people's privates keys to their assets. They like holding the share certificate with the DTCC. They like being able to hypothecate or re-hypothecate those share certificates. I mean, we saw things like Madoff and John Corzine with MF Global where they're actually -- they were entrusted to hold the private keys to these customers' segregated assets and then they went and did unconscionable things with that trust. But with bitcoin we're able to know exactly who is in charge of holding those private keys.

<b>Andy O'Fiesh</b>: Well, here is the thing. You say they went and did unconscionable things when actually what they did is normal things that humans do to each other in the course of history.

<b>Trace Mayer</b>: Well, I mean, I guess unconscionable because like people are supposed to go to prison like stealing lots of people's retirement accounts.

<b>Andy O'Fiesh</b>: Exactly.

<b>Trace Mayer</b>: And loss of people's assets, right.

<b>Andy O'Fiesh</b>: And your assets are basically being protected with the threat of prison time. You really have to trust that the person controlling your assets is afraid of the threat of prison.

<b>Trace Mayer</b>: Well, yeah. So you could say that there is a proof of violence that is protecting assets when we have decentralized ways of distributing the property rights, but with bitcoin where we have this decentralized distributed way of protecting assets we're able to protect the assets based on proof of trust or the proof of math. So we're relying not on this government threat to people who steal other people's money, but instead we're relying on the math and the cryptography.

<b>Andy O'Fiesh</b>: Right. And with all the stuff that's been on the news lately about regulatory capture. You know, we're finding out that we can no longer trust the government to keep an eye on these large financial institutions.

<b>Trace Mayer</b>: Yeah, well, that's definitely an issue.

<b>Andy O'Fiesh</b>: So you need math.

<b>Trace Mayer</b>: Yeah.

<b>Andy O'Fiesh</b>: That's what bitcoin has.

<b>Trace Mayer</b>: Well, just from a logical point of view why trust this centralized institution that could be potentially influenced when instead you could just trust math? Like it's not like the math is going to change. I mean that's very incorruptible. So if you want to have your accounting books and you want to have your cash balances and you want to have your assets all distributed up, you can do it and you can prove to yourself that it’s been done and then you don't have to worry about anything happening, fraud. You're in effect able to eliminate that political risk uncertainty.

<b>Andy O'Fiesh</b>: Right.

<b>Trace Mayer</b>: You know, you don't have to worry about like Argentina changing something because they can't change the math rules in the protocol.

<b>Trace Mayer</b>: Right.

<b>Andy O'Fiesh</b>: That's why bitcoin -- that's why people are excited about it. They think that this is going to change the way we do business in the future.

<b>Trace Mayer</b>: Yeah and we also have the triple entry book-keeping. So we have the debit, the credit and we have the confirmation in the bitcoin network. So we know the transactions happened. So we're able to have much greater transparency on our financial statements in addition to this much greater security.

<b>Andy O'Fiesh</b>: Uh-huh.

<b>Trace Mayer</b>: Let's see. So we talked about multi signature, the fragmented backups. That's where we're able to split up the wallet seed so that we need, say, two of three pieces in order to constitute that particular wallet and then we might need two of three private keys to send the bitcoin transaction. So with fragmented backups where we're able to further distribute the signing authority or at least the backup authority of the wallets.

<b>Andy O'Fiesh</b>: Well, you know, with the combination each signing authority in the bitcoin multi-signature will have no single point of failure. So you basically have a double layer of no single point of failure.

<b>Trace Mayer</b>: And that means what? Much more security, much more, like, why is that valuable to people who are using?

<b>Andy O'Fiesh</b>: Well, here is what it is. I think what bitcoin multi-signature gives you is protection against dishonest party within your board or within the signing authority, whoever is able to sign.

<b>Trace Mayer</b>: Yeah. Because I might be a trust company, it might be an insurance company.

<b>Andy O'Fiesh</b>: Might be a family.

<b>Trace Mayer</b>: Might be a family member, yeah.

<b>Andy O'Fiesh</b>: Might be that dad has a gambling problem who knows. Dipping into the kid's savings, you know, which would be even more devastating than say a dirty board member. The thing is though, right, you're protected against that level of dishonesty. You're also protected against any one member of the signing group being conned and then once you add in the fragmented backups, you're also protected against a member being incompetent and losing their private key. In fact two members, right, if it's two or three. Two out of the three members would have to lose two out of three of their fragmented backups. I mean, the odds against are tremendous.

<b>Trace Mayer</b>: Yes. So in effect we're like with this piece of software as it currently is we've got protections against negligence, gross negligence, maliciousness or intentional willful malicious behavior were it be embezzlement or something.

<b>Andy O'Fiesh</b>: Yeah.

<b>Trace Mayer</b>: It's just it really helps make bitcoin a lot more useable for larger amounts of capital.

<b>Andy O'Fiesh</b>: Yeah. And the thing is you're protecting yourself against all the usual ways in which corporate entities lose their funds. The thing is when you bring in bitcoin, just bringing in bitcoins adds additional way. You can lose the key. It’s a piece of data and you're trying to protect it and in protecting it you can lose it. So I don't know if everyone is aware that just by using bitcoin you're adding this extra risk. And then by using fragmented backup you're mitigating the extra risk that comes into play when you use bitcoin.

<b>Trace Mayer</b>: And then by using the bitcoin multi-signature because if we're using only single keys like with Mt. Gox for example, there is no way to prove whether he inadvertently lost the bitcoins, whether he was hacked and somebody else stole the bitcoins or whether he embezzled and stole the coins himself.

<b>Andy O'Fiesh</b>: Right.

<b>Trace Mayer</b>: Like there is no way to prove one way or the other right.

<b>Andy O'Fiesh</b>: Well, yeah. And also with bitcoin there's often no way to prove that either. You know, one of the things you can do is see when bitcoins move, but you can't always tell where they are moving to.

<b>Trace Mayer</b>: Right.

<b>Andy O'Fiesh</b>: It's possible you can. I mean, it's there. It's in the public record, but it would take some detective work and inferences and you would have to have other knowledge about the addresses involved. So it's a very complex problem to solve, but it's not unsolvable.

<b>Trace Mayer</b>: Yeah, but like let's say that Mark Karpeles instead of getting hacked like he said or he just embezzled the bitcoins and he moves them to an address and then he just doesn't touch them until after the bankruptcy proceedings are done and the statute of limitations is old.

<b>Andy O'Fiesh</b>: Right. Here is the thing though. One screw up, you know, one -- at some point he might trip up and then he's going to get caught because it's all going to be on the public record.

<b>Trace Mayer</b>: Right. And we just -- so it's very difficult. We don't know whether people have embezzled the bitcoins or whether people actually did get hacked, you know, and there is no way to prove either way or whether they're just negligent and they send the bitcoins into an address so they're not able to get them out of.

<b>Andy O'Fiesh</b>: Right.

<b>Trace Mayer</b>: Because maybe you screw up and leave one of the letters off on a public key or something when you go to send it and your wallet software didn't check for that.

<b>Andy O'Fiesh</b>: Well, I don't know if that's a possibility.

<b>Trace Mayer</b>: Well, yeah, that's true. Maybe you copy and paste it.

<b>Andy O'Fiesh</b>: It won't go through. That's one of the things about the bitcoin if you make a single mistake in creating a transaction the transaction won't work. It's impossible to really send a transaction accidently to the wrong place. The only time you send it to the wrong address is when somebody is tricking you into sending it to their address.

<b>Trace Mayer</b>: Right. Like, you copy and paste it, but when you go to paste it maybe the computer virus on your computer changed the pasted address.

<b>Andy O'Fiesh</b>: Yeah, exactly. I mean nine hundred ninety nine thousand ninety nine whatever times out of a gazillion you're going to run into an error and not actually send it someplace.

<b>Trace Mayer</b>: So just to recap, because I actually don't think we talked about this in the other two episodes. A lot of people that come to use bitcoin you see these really long public key addresses. So what you're saying is if you inadvertently mistype one of the characters or something like that the bitcoin network is not going to see that as a valid transaction.

<b>Andy O'Fiesh</b>: Right. So the odds against making a mistake and ending up with a different valid transaction than the one you wanted are astronomical.

<b>Trace Mayer</b>: Okay. Well, that should help people sleep a little bit better at night knowing that they don't have to, well, they should still be triple checking their address.

<b>Andy O'Fiesh</b>: Well, that's the thing. It's important to forget that fact. When it comes to checking things you want to double check as if that wasn't true.

<b>Trace Mayer</b>: Yeah. But maybe it's that you're sending five dollars for the coffee or something and it's nice to know that if you didn't -- if your Q.R. code reader and maybe you accidentally deleted one of the letters on it or something like you're not going to lose your five bucks.

<b>Andy O'Fiesh</b>: Yeah.

<b>Trace Mayer</b>: So what?

<b>Andy O'Fiesh</b>: You got a fiver and you're going to pay the guy at the counter you're not going to really look at the badge or the name tag and like, you don't work at 7-Eleven. I'm not giving you this five dollars.

<b>Trace Mayer</b>: Right. The people are begging for that are actually going to get billed.

<b>Andy O'Fiesh</b>: Well, the big one is our implementation of what's known as BIP32 which is a fancier version of the deterministic keys.

<b>Trace Mayer</b>: So this BIP32 this is what's called a hierarchical deterministic wallets and this is another brainchild of Alan's, right.

<b>Andy O'Fiesh</b>: Well, yeah, he's involved --

<b>Trace Mayer</b>: Alan and I think, Shiba Peter.

<b>Andy O'Fiesh</b>: Yeah. He was involved with the creation of BIP32, but the basic gist of it is just rather than just having one chain of addresses you have a tree, many chains coming off.

<b>Trace Mayer</b>: Okay.

<b>Andy O'Fiesh</b>: And then as you generate addresses each address will have rather than just one number a single number index it will have several numbers indexing it.

<b>Trace Mayer</b>: And this is why -- and this is currently implemented -- well, not BIP32 but these chains are currently implemented in Armory so that we only need the one paper backup, right?

<b>Andy O'Fiesh</b>: Right.

<b>Trace Mayer</b>: But this is going to be implementing it with the actual bitcoin improvement protocol.

<b>Andy O'Fiesh</b>: Right.

<b>Trace Mayer</b>: 32, right?

<b>Andy O'Fiesh</b>: Yeah. Because they're all numbered and this is the 32nd one. So what the end user will experience is they can have many wallets and they could have their whole operation, you know, if you have like an exchange, for instance, running off from Armory. You could have all of that backed up with one key. So you could have several wallets with one root key backing it up.

<b>Trace Mayer</b>: Well, that will be nice.

<b>Andy O'Fiesh</b>: And this along with other changes is what's making Armory scalable. So that our users, our new users, can come in and they can provide services to people through a website or if you run your own exchange off of this or your own business and the whole idea is that we have scaled up Armory. We've made it much more scalable.

<b>Trace Mayer</b>: Right. So the core infrastructure for the bitcoin community, Armory is really going to be able to handle a lot larger businesses, services, stuff like that.

<b>Andy O'Fiesh</b>: Right.

<b>Trace Mayer</b>: Like an exchange or a merchant, they can use Armory and commerce on a much larger scale.

<b>Andy O'Fiesh</b>: Yeah.

<b>Trace Mayer</b>: So but we're also going to need some performance improvements, right? So like, can you talk a little bit about those?

<b>Andy O'Fiesh</b>: Well, that's coming. Yeah, we've added a new database, LMDB and we've re-factored a lot of the backend with a lot of optimizations. A couple of our guys, super talented Farhat and Charles have been working away at this for the last few months and it is very exciting. I mean a lot of the times for loading the block chain are down, the number of transactions that can be handled are automated, automated transaction processing. All this is going to be possible with the next version of Armory.

<b>Trace Mayer</b>: Now when you say like Charles and Farhat. How many full time developers are there on the Armory Bitcoin Wallet?

<b>Andy O'Fiesh</b>: We have five of us now.

<b>Trace Mayer</b>: Five full time.

<b>Andy O'Fiesh</b>: Yeah.

<b>Trace Mayer</b>: Wow. So we got Alan and he's got what a masters in statistics and some computer programming.

<b>Andy O'Fiesh</b>: Yeah.

<b>Trace Mayer</b>: Like we got a couple other people with masters in cryptography also are work on it.

<b>Andy O'Fiesh</b>: And we have Farhat who is predominately self-trained, but he came to this with his connection with Alan on the boards. So when people were paying Alan bounties to get certain projects done. If Alan needed something in an area of, say, low level Windows type-thing had to be done Farhat was like I know how to do that and then he'd come in and help him out so that's how we end up with Farhat.

<b>Trace Mayer</b>: Well, I remember like he was finding all these bugs just like super efficiently and he's been a great addition to the team. In fact, he's really sharp. I remember we were at one of the conferences and someone came up and they're like talking about our wallet and they said, they asked a question, you know, why should I use the Armory Wallet and Farhat, he responded because whoever steals your bitcoin will. So --

<b>Andy O'Fiesh</b>: Your bitcoins are going to be protected by Armory.

<b>Trace Mayer</b>: So I thought that was like, that was a very insightful quip just off the cuff. You have to respect the private keys. You know, you don't respect the keys somebody else is going to get those keys and they're going to respect them.

<b>Andy O'Fiesh</b>: Right. Because what's happened with bitcoin is we now have a situation where data has absolute value to it.

<b>Trace Mayer</b>: Yeah. I mean you steal that math -- you steal that number you can do the math. You can get the purchasing power. Let's see what else is very important for this performance improvement. We got the supernode coming, right, to help scale the databases and the merchants.

<b>Andy O'Fiesh</b>: That will allow people to put thin clients on a supernode where you basically set up a server that is running the supernode and then you can have ten clients working off of at that server.

<b>Trace Mayer</b>: So this will be a supernode that Armory Technologies is running or supernode that anybody who gets --

<b>Andy O'Fiesh</b>: Anyone can run it.

<b>Trace Mayer</b>: -- the Armory -- oh, any?

<b>Andy O'Fiesh</b>: We'll probably have our own, you know. We'll probably have our own service set up and you know, that will come with our support options. I think that's where it will end up eventually. But with what we're releasing, the software behind that type of service will be available for people to use.

<b>Trace Mayer</b>: For anyone to use.

<b>Andy O'Fiesh</b>: Yeah.

Trace Mayer: Now this is really important because, like, when you're using electrum or blockchain.info's supernode you're potentially leaking a lot of information to them, right?

<b>Andy O'Fiesh</b>: Yeah. That's just as it. You could be the person that's having information leaked to you with that software.

<b>Trace Mayer</b>: Which it could be used in what type of a way?

<b>Andy O'Fiesh</b>: Marketing. Who knows?

<b>Trace Mayer</b>: Well, you could use it for marketing. You could see IP addresses of people who are checking particular wallet balances, know which computers to attempt to target or infiltrate. I mean, like using somebody else's supernode for your thin client in order to have the added convenience also comes with potential risks, right?

<b>Andy O'Fiesh</b>: Yeah. And so get your own. Do your own thing and that's what our software allows.

<b>Trace Mayer</b>: But there's not really any other software out there that allows you to do that besides the Bitcoin-QT, right?

<b>Andy O'Fiesh</b>: Right.

<b>Trace Mayer</b>: But that's not even really a supernode.

<b>Andy O'Fiesh</b>: Right. So basically I see Armory as an intermediate between having a service where you have to trust other people or having a bitcoin core code where you have to do all the work. We've done a lot of the really difficult work so that you can be your own banker.

<b>Trace Mayer</b>: Oh, man. And that's just great because you can hold your own private keys, you can secure them to the level that you want them secured and you don't have to trust anybody.

<b>Andy O'Fiesh</b>: Yeah.

<b>Trace Mayer</b>: And its open source software so you can you can review all the code and all the math and your money and your assets are safe there.

<b>Andy O'Fiesh</b>: Uh-huh.

<b>Trace Mayer</b>: Yeah. And it has to be done the right way too. Because there are a lot of pitfalls as we've seen. Not just with other services out there, but with other software, etc. So it's really important to do, like, the supernode, the BIP32, like implementing thin clients all this has to be done properly. Otherwise you're opening or exposing yourself to a lot of security vulnerabilities.

<b>Andy O'Fiesh</b>: Right.

<b>Trace Mayer</b>: Right. Well, there we go. That should round up this episode. Thank you so much for taking the time to discuss this bitcoin multi-signature, how it can be implemented in a personal plan for security backups all that and also some of the development that's on the horizon for Armory. So thanks for being with us, Andy.

<b>Andy O'Fiesh</b>: Thanks very much, Trace, it was great talking to you.
