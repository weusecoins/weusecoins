---
layout: post
title: Andy O'Fiesh - Bitcoin Security Expert
author: Andy O'Fiesh
authorurl: http://www.weusecoins.com/andy-ofiesh-bitcoin-security-expert
description: Interview with Andy O'Fiesh of the Bitcoin Armor Wallet about entopy, Bitcoin wallets, private keys, public keys and network security attack vectors.
published: true
---

<img src="/images/andy-ofiesh.png" alt="Andy Ofiesh" align="right">Andy was the second developer to join Alan at <a href="/armory/">Armory</a> working on developing advanced <a href="https://www.bitcoinarmory.com/">Armory Bitcoin wallet</a> features. He is a senior software developer with over 20 years of experience developing enterprise level software for companies such as Juniper Networks, Intel and Nortel.
<p>
<iframe width="700" height="394" src="https://www.youtube.com/embed/tI47MRD7sMQ" frameborder="0" allowfullscreen></iframe>
<p>
Andy holds a degree in systems engineering and graduate degrees in computer science and computer systems engineering.
<p>

### PODCAST INTERVIEW TRANSCRIPT

<b>Trace Mayer:  </b> This is your host, Trace Mayer, and we have with us Andy O'Fiesh.  He is a senior developer with Armory that develops the Bitcoin Armory wallet.  Welcome to the podcast, Andy Ofiesh.

<b>Andy Ofiesh:  </b> Thanks, Trace.  Good to talk to you.

<b>Trace:  </b> Yeah.  So our topic for this podcast is going to be all about wallets and this is 101, you know.  We're just starting off with the real basics.  So like what is a Bitcoin wallet?  How does it work?

<b>Andy Ofiesh:  </b> Well, a Bitcoin wallet is how you organize and protect your Bitcoin keys, that's your public key and <a href="/amazing-math-bitcoin-private-keys/">your private key</a>.  For those unfamiliar with Bitcoin, the keys are essentially the key to spending and receiving Bitcoins.  When somebody sends you a Bitcoin, they send it to your public key. So everybody knows your public key.  Hopefully, only you know your private key.  So there is a 1-1 relationship between public and private keys.  One of the effects of Bitcoin is now there is data in the world that is worth money directly.  In the past, a hacker would have to take over your computer and do something with it to make money, maybe access your other financial data and take advantage of that in some way but with Bitcoin, it is now a one step process.  Access your private key and take your money.  It actually has increased the amount of potential for hacking computers.  It has also caused a great deal of increase in the technology available to protect your data.  One of the manifestations of that is the Bitcoin Armory.  We are working on many different features and have already quite a few features that are designed specifically to protect your private keys for your Bitcoins that you own.

### Bitcoin Private Keys | Where the rubber meets the road

<b>Trace:  </b> Yeah, so I like how you get right into where the rubber meets the road.  It's all about the private key, right?

<b>Andy Ofiesh:  </b> Yeah.

<b>Trace:  </b> You have to respect the keys and at the end of the day, somebody is going to hold those keys, or somebodies.  Whether it is Coin Base or Circle or a bank or you as an individual, like somebody is going to hold that private key. Now when we say private key that is really just a string of numbers, right?

<b>Andy Ofiesh:  </b> Well, it really is a number, a very large number.  When we are talking about private keys, keep in mind, it's just a big number.  In technical terms, it is a 32 byte number. How big is 32 bytes?  32 bytes is enough to assign a number to every atom in the universe, that is about how big 32 bytes is.  So if you want to visualize what it means to have a private key, you can think of it as, "I'm thinking of an atom in the universe, can you guess the atom that I'm thinking of?"  Being able to guess that would be really hard.  That's the security at the very base level, it is having a number large enough to enumerate every atom in the universe and keeping that a secret.

<b>Trace:  </b> And when we are talking about just guessing one of those at random, like that's pretty much impossible. Given the current laws of mathematics and the current laws of computer science and thermodynamics etc, like you can't just guess this number, this private key, right?

<b>Andy Ofiesh:  </b> Right, you can't because that's another thing people concern themselves with is what if I have the same private key as somebody else.  Really, that is equivalent to saying well what if I have thought of the same particular atom in the universe that somebody else thought of.  You could try all your life and never have a collision of two atoms in the universe.

<b>Trace:  </b> But, okay, so we're going to get back to this, like, how those numbers are generated because we could get a "collision" and a collision is where two people have come up with the same number, right?

<b>Andy Ofiesh:  </b> Yeah, but that can't happen because of the size.

<b>Andy Ofiesh:  </b> Well, it could happen if, well, we'll get to it a little bit later but it could happen is somebody chose to focus on the same atom for example.

<b>Andy Ofiesh:  </b> Oh, well, yes, if you have poor entropy yes then that could definitely happen and that's the key behind entropy. While you do have the numbers involved in your private key are large enough, right, to enumerate every atom in the universe, is your method of generating that number going to expand that space.  I mean is it going to expand to fill that space.  So if you say pick a random number, well, certainly somebody else could use the same method that you've used to pick the random number and say do it as many times to get all the possible random number there are and then they could put that in a database and try them all and they'll have a collision with you if you did the same thing they did.

<b>Trace:  </b> So let's take an example of this.  There is a site called brainwallet.org and you can actually download the source code and run it on your own computer, so that is good, but what Brain Wallet really kind of touts is that you can create one these pass phrases and that gets converted into a private key and so it's very easy to remember.  For example, we could use the word "cat", c-a-t, and that would actually generate a specific number, right?  Like a specific private key?

<b>Andy Ofiesh:  </b> Yeah, well imagine if you went about say get a bunch of people that you know, right, who want to work for minimum wage and just put them on that website and have them generate bunches and bunches of Brain Wallets and then you store each one in a database and then after you do that maybe with a few dozen people and they spend say a week doing that, you might have a couple of hundred thousand Brain Wallets in your database and now you've got a couple hundred thousand lottery tickets and you keep checking those against BlockChain.info to see if any of these Brain Wallets have a balance because one of your worker bees might have chosen the same Brain Wallet as somebody else and if you did, you get their Bitcoins.

<b>Trace:  </b> Okay, so like, before we were talking about this before the show and you had an analogy that like stealing Bitcoins in kind of like playing the game Capture the Flag and so the flag is the private key but now it appears that we've got two different ways that we can steal that flag.  We can steal that flag with a physical attack.  That's where somebody might like compromise your computer, steal your computer or steal your iPhone and be able to get the private keys that way but there could also be a purely mental attack vector, right?  That's where somebody is able to steal your Bitcoins because of this entropy attack.

<b>Andy Ofiesh:  </b> Well, right, that entropy attack basically means I'm going to steal anybodies Bitcoins who might want to use the same method of generating their private key that I'm going to try.

<b>Trace:  </b> Yeah, let's give an example of this. So I was reading the Armory forums on Bitcoin Talk and somebody had suggested to include this Brain Wallet feature into Armory.  This specific Brain Wallet feature and he provided his own software code.  Of course it was open source, like we could read it and everything but the first thing I thought of was, I wonder if this is an attack vector on the entropy because if he can convince people to generate their Armory wallets using bad entropy, then there could be a potential attack vector there and so maybe you can talk a little bit about how we spotted that and didn't include it in Armory, how it could have been a potential risk and how we actually do generate entropy in the Bitcoin Armory Wallet.

<b>Andy Ofiesh:  </b> Well, first of all, anyone can create their own Brain Wallet in Armory.  We just don't expose it in the user interface. Basically, people are free to do whatever they want with open source code and they can very easily find the correct function call to generate a Brain Wallet and use it on a command line and do it that way. But we trust anyone that is savvy enough to do that is also savvy enough to understand the risks and to do it correctly. For instance, I use that same feature to generate my private key but I didn't come up with a bunch of words, instead I took a deck of cards and I went through the first 40 cards in the deck and I just wrote down the initials of the name of the card.  King of clubs would be KC.  So I go through 40 cards and I've got about 80 characters and I enter that on the command line and I generate my private key. That has plenty of entropy to cover the entire space of atoms in the universe.  So that is a decent technique.  Coming up with some words, not so good because somebody else might come up with the same words and steal your Bitcoin.  Those people are out there and they are trying to do exactly that.  So we hide that feature and this gentleman came along and he wanted to expose, he wanted people to know about the beauties of the Brain Wallet and you very cleverly spotted that I bet he wants to run that attack on people that use that feature.  So really we discourage that by hiding it from the user interface and also any time you've heard the founder of Armory talk, Alan Reiner, if he is talking about private keys and entropy, he is going to warn whoever he is talking to about the dangers of Brain Wallets and the importance of entropy.

<b>Trace:  </b> So for a new user to Armory that is running it in the standard mode, so not even in advanced or expert, how is Armory generating the entropy for them and how do we know that that is safe? That Armory is not going to steal their flag?

<b>Andy Ofiesh:  </b> Well, one way you know its safe is you can look at the source code but I understand that for most people, looking at the source code is not an option.  There are experts out there who have looked at the source code and they are independent and they have made comments and if you, you know, read up on forums or go to the Github where the source code is stored, you can read other people's comments and read enough to trust it.  We use the computer randomizer on the computers that the software runs but we also go through and do the research to make sure that the random numbers generated on the various platforms that Armory runs on provides enough entropy.  We also add a couple of extra layers just in case, so I won't go into the details of it but even if a particular platform has poor entropy, then just in case, we compensate that for adding a couple extra layers on top of that.

<b>Trace:  </b> And so that's a protection against this potentially only mental attack and in a lot of cases people don't have any idea how the wallet software is generating the entropy or whether the developer even took very good precautions to make sure the entropy is being generated in this completely random type of way.

<b>Andy Ofiesh:  </b> Yeah, well you know about a year ago, I think it was sometime last year, there was a well known weakness in the Android, particularly Android phone, and there was an attack against that weakness wherein the attacker used the particular phone to generate millions of Bitcoin private keys, put them in the database and then tried all those private keys and he was able to steal Bitcoins from quite a number of Android users who had used the Android, the particular kind of phone to generate their private key because that phone did not have enough entropy that it was a successful attack.  This attacker's database of private keys matched some Android users private keys and those users lost their Bitcoins and that is what happens when you have poor entropy.

<b>Trace:  </b> Man, that's a scary prospect isn't it?  Like not only could a wallet developer just be negligent or just kind of not fully understand the ramification of the cryptography and the math but a really clever wallet developer could actually be malicious and release a really cool wallet out there that's got features etcetera but there could be a small little way for them to attack all those private keys through the entropy for example.

<b>Andy Ofiesh:  </b> Right.

<b>Trace:  </b> And so it's very important for people to keep their Bitcoins in a very safe, trusted, peer reviewed, open sourced wallet.

<b>Andy Ofiesh:  </b> Right. So here's the thing, that feature that we don't want to expose to people because they might misuse it, that feature is actually the key to making the most secure wallet.  Now certainly, you know, you run our wallet on any decent computer that we support then your fine but if you really want to prove it to yourself that Bitcoin Armory is not out to steal your Bitcoins because maybe you don't even trust us, the way to do it is what I did which is to generate your own entropy.  You can use a deck of cards.  You can roll dice.  If you're really careful, you're going to do the math yourself and figure out how many dice rolls or how many cards you have to draw to generate enough entropy so nobody is going to have the same private key as you.

<b>Trace:  </b> Now this is really kind of fun.  I actually remember when a friend of mine had just learned about Bitcoin and he was at our Meetup group and this was the first time I met him and he was like, you know, I generate my private keys offline with dice and he's like I really wish there was a program that did that and I was like, well, haven't you heard of Armory and he was like well no what does that do. So I told him about Armory and this was even after I had funded Armory and the next time I saw him, he had written a python script where he could input his own dice rolls as the entropy and you know fast forward a little bit and he is actually a developer now over with the Airbitz Wallet, the mobile wallet for iOS and he has also contributed some to the Bitcoin core but I think it's very very helpful for people to know that you know with Armory, the feature has been abstracted away so that the new user doesn't have to kind of deal with this much more technical part but if people want to they can dig in and generate their own entropy and make sure that their Bitcoins are absolutely safe from that particular attack vector, right?

<b>Andy Ofiesh:  </b> Exactly.

<b>Trace:  </b> Now we just, you know, I just hit on another topic which is this difference between cold storage and hot storage but I don't want to get into that in this episode.  I just want people to be aware of those terms.  We also have another term called Coin Control and this has to do with like the exact Bitcoins that you are sending in a transaction because some of the wallets really kind of jumble that which can be an attack on your privacy for example.  So we are going to talk about that in a later podcast too but like I wanted to wrap up this particular podcast by just getting into, just scratching the surface on a couple of security implications, one, what is network security and two, what is wallet security and can you talk a little bit about how Bitcoin Core of the Bitcoin QT client focuses on that network security while the Armory wallet focuses on the wallet security?

<b>Andy Ofiesh:  </b> Well, as far as the network security, I guess what we are talking about is your ability to access the block chain.  How secure is your access to the block chain?  We rely on Bitcoin Core for that.  So when you use Armory, you're actually accessing the block chain through Bitcoin Core.  So we get to take advantage of the Bitcoin Core security features and something that we don't have to deal with because that happens through software that already exists. We don't want to reinvent the wheel. What Armory has innovated in, is securing your wallet, securing your access to your keys.  So we let Bitcoin Core secure access to the block chain information and Bitcoin Armory secures your access to your private keys.

<b>Trace:  </b> So a good way to kind of analogize this would be Capture the Flag, your flag is the private key. That's the secret that you don't want anybody to know.

<b>Andy Ofiesh:  </b> Right.

<b>Trace:  </b> But then the block chain, that is completely public so everybody has got access to that but it is still important for you to make sure that you've got a correct copy of the block chain, a block chain that the distributed network has come to consensus on because there could be potential attack vectors there also, right?

<b>Andy Ofiesh:  </b> Right. So one of the way in which people have lost their Bitcoins is that they have been tricked into sending Bitcoins to the wrong address.  So that's where the network security comes into play.  So rather than trying to steal your private keys, these attackers will feed you bad information about whose got what address and they'll try to substitute their address for somebody that you are legitimately trying to pay and that's what attacking your network security can do for you.  It's basically a man in the middle attack that prevents you from getting accurate information about the state of the Bitcoin network.

<b>Trace:  </b> Yeah, and you know, we're probably going to have to have another podcast with probably Jeff Garzik over at BitPay where we talk a little bit more about all this network security aspects.  So there we go, I think we've got a good overview of what wallets are.  We've got public keys. We've got private keys.  We understand that private keys are just a number and that's a number that we have to keep secret, right?

<b>Andy Ofiesh:  </b> Mmhmm.

<b>Andy Ofiesh:  </b> When we generate that private key, we have this concept of entropy which is the randomness that we generate that with.  Then we have coin control, so we need to be able to control which particular Bitcoins we are sending around. We'll talk about that later.  Then cold storage versus hot storage because we can run Armory and generate all of these private keys, we can do that on a  computer that we build with software that we download and verify but on a computer that has never touched the internet, right?

<b>Andy Ofiesh:  </b> That's correct.

<b>Trace:  </b> And that's a big deal.

<b>Andy Ofiesh:  </b> Yeah.

<b>Trace:  </b> That's a really big deal because that really makes the attack surface a lot smaller.  Then, we've got the security implications with the network security and the wallet security. So there we go.  There's an overview about wallets, the really important part of the wallet which is the private key and that's is where our Bitcoins are at and at the end of the day, somebody has to hold those private keys and what Armory does is it makes holding and generating and securing those private keys hopefully as easy as possible and as safe as possible.

So there we go, that's Episode 100 and thank you very much, Andy Ofiesh, for being on the Bitcoin Knowledge Podcast, a senior developer at Armory Technologies which is developing the Bitcoin Armory Wallet.  We're going to be right back on with another Episode going a little bit more in depth into some of these areas.  So thanks, Andy Ofiesh.

<b>Andy Ofiesh:  </b> Thank you, Trace.

### End of Transcript

