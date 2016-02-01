---
layout: post
title: The Cypherpunks and why Dr. Back so legendary
author: Dr. Adam Back
authorurl: /dr-adam-back-/
published: true
---

<img src="/images/adam-back.png" alt="Dr. Adam Back" align="right">
<p><a href="/dr-adam-back/">Dr. Adam Back</a> has been involved in serious cryptography deployments for decades. In this interview he talks about the history of applied cryptography.
<p>From Satoshi Nakamoto's <a href="/bitcoin.pdf">whitepaper on bitcoin</a> in Section four on proof-of-work "To implement a distributed timestamp server on a peer-to-peer basis, we will need to use a proof-of-work system similar to Adam Back's Hashcash".
<p><center><iframe width="700" height="394" src="https://www.youtube.com/embed/0VboMe_2fnc" frameborder="0" allowfullscreen></iframe></center>
<p><b>TRANSCRIPT</b> - (<a href="http://www.satoshisdeposition.com/podcast/BTCK-165-2015-09-07.mp3">download mp3</a>)
<p><strong>Trace Mayer:</strong>  Welcome back to the Bitcoin Knowledge Podcast.  We have a legendary interview this time around.  To start it off, I'd like to just read from Satoshi Nakamoto's whitepaper on bitcoin in Section four on proof-of-work "to implement a distributed timestamp server on a peer-to-peer basis we will need to use a proof-of-work system similar to Dr. Adam Back's hashcash."

<p>

With us today and for the rest of the week in five distinct episodes will be Dr. Adam Back.  Dr. Adam back, thanks for everything the you've done for bitcoin, for your legendary service in the virtual currency in private cash arena over decades.

<p>

Welcome to the podcast.

<p>

<strong>Dr. Adam Back:</strong>  Hi, good to be here.

<p>

<strong>Trace Mayer:</strong>  So how did you get it, like, what's some of your background?  Like, what's this PhD in distributed systems.  Let's talk some more your background in this virtual currency and private cash space.

<p>

<strong>Dr. Adam Back:</strong>  Yes, so I did a PhD in distributed systems which is about algorithms for consensus systems and I guess, many people heard about the Byzantine Generals Problem in the paper by Leslie Lamport for the first time, you know, via the references in the bitcoin whitepaper and the exposure and use of consensus systems.  They are also used in decentralized databases for sort of consistency models.

<p>

So I was researching in, sort of, parallelizing compilers and using technology from discrete event simulation which is of optimistic execution where you speculatively try execution and then if it goes wrong you prune it and roll back.  There are kind of a micro level components of that in CPUs these days, but at that time that was a kind of software level where you would basically take an existing sort of C++ software program and transform that into something that models the method calls and message passing model and as part of my PhD program I got to know a master student who was trying to optimize the RSA encryption algorithm on a parallel computer.

<p>

Because at that time, this is sort of back in 1995 -- so actually, sorry, 1991 to '93 I was doing this and he was trying to implement the RSA algorithm and find ways to parallelize it and that's the kind of research I was interested in terms of how to make best use of piece of parallel equipment with dozens and dozens of CPUs and high-speed message bus and try to get the result as quickly as possible and make full use of the CPUs or the cores and sort of balance the communication overhead with the CPU overhead to get the result in the lowest time.

<p>

So there's a whole area of distributed computing about algorithms to do, just sort of, parallel sorts and parallel ram and execution of different kinds of algorithms in that way.  So this guy was working on that.  And I took an interest in what he was doing and helping him figure out how to do this and through that became familiar with the RSA algorithm.  So then I got interested in that and shortly after that PGP came out the first version by Phil Zimmerman and was using the RSA algorithm so I kind of interested in that and then the sort of you know positive social implications for social change arising from cryptography and personal autonomy and rebalancing the sort of improving the balance of power between the individual and the state.  You know, we started to see sort of effects of that more recently.

<p>

<strong>Trace Mayer:</strong>  Yes, so I've been particularly interested in that part of bitcoin and asymmetric cryptography in general, because I think it's changed the economics of violence which is a tectonic shift and it's going to cause society to reorganize itself.  Because it's changed those particular economics, but looking at through the long corridors of history with man's struggle from the swamp to the stars we've had our brightest minds our brightest scientists ever Dr. well -- Nicolaus Copernicus with heliocentric theory.  He was persecuted for it.  Also wrote a treatise on interest.  Isaac Newton developed the gold standard in addition to Newtonian physics.

<p>

Shakespeare would say kill all the lawyers even the lawyers like Johann von Goethe sixty to ninety thousand word working vocabulary, two to three times Shakespeare's working vocabulary, an absolute polymath in everything, huge developments in botany and optics, I.Q. of 215, two standard deviations higher than Isaac Newton's I.Q. estimated.  Copernicus's estimated I.Q. 185, but Goethe in Faust Part 2 his magnum opus published shortly before he died, he laid out all the negative consequences that happen to a society when the monetary unit gets corrupted.  The chief justice says well, you know it's not quite right but I'll make it right.  So it corrupts the law and the commander in chief in there says, you know, "a soldier asks not from whence it proceeds."

<p>

So ultimately when we corrupt the monetary unit it ultimately will lead to the political elites controlling the lives of the individuals in contrast to the individuals being able to control their own lives and financial destinies.  The founding fathers of the United States they firmly understood this because in Article 1 Section 10 clause 1 it states that no state shall make anything but gold and silver coin a tender in payment of debt.

<p>

We also have in the First Amendment, Congress shall make no law regarding the freedom of speech or of the press.

<p>

You mentioned Phil Zimmerman and your work back with PGP.  Can you perhaps go into this, you know, this intersection of cryptography, law and how you kind of played a role back then?

<p>

<strong>Dr. Adam Back:</strong>  Yeah, I mean, it's very interesting.  I mean one telling thing is back then there were various countries that tried to legally control or prohibit access to encryption for individual uses and every time --

<p>

<strong>Trace Mayer:</strong>  Which is very interesting because encryption is merely mathematics, right?

<p>

<strong>Dr. Adam Back:</strong>  Right.

<p>

<strong>Trace Mayer:</strong>  So they're wanting to control the access to numbers of individuals.

<p>

<strong>Dr. Adam Back:</strong>  Yeah, so it's fascinating.

<strong>Trace Mayer:</strong>  Is there anything that could be more despotic?  I mean what are we going to make it illegal, the zero?

<p>

<strong>Dr. Adam Back:</strong>  So even major western governments were in the game.  So at the time --

<p>

<strong>Trace Mayer:</strong>  Well, yeah.  The Munitions Act.

<p>

<strong>Dr. Adam Back:</strong>  Right, right.  So U.S. government had a regulation against exporting cryptographic software generally kind of blanket and is an interesting development because it was a kind of power struggle between the users rights to, you know -- it's interesting in a sense so you mentioned illegal rights.  So you know in [inaudible 00:08:45] most of the countries involved in this dispute.  Even Western countries, say, France had some kind of export controls.  The US had export controls and other countries had various variants of that.  And yet the illegal systems clearly states the rights to free speech and the rights of association, freedom of association, and yet in the Internet age where you're communicating with people remotely your actual rights to exercise those, you know, your ability to exercise as legal rights is very flimsy unless you have cryptographic means to assure that and so it's kind of curious that society -- you know, that the regulations in the government administrators we're basically trying to control technology to prevent you exercising your rights.

<p>

So it resolved itself after a while basically because I think, you know, it became widely used and it became difficult for governments, Western governments, to sort of handle the discord in what they were saying, right?  You have this right but you can have the technology to give you access to this right and eventually that kind of got swept away as indefensible.  But even today, you know, if you go down the sort of pecking order of countries ranks by sort of press freedoms and religious freedoms and general quality of life on a sort of freedom from persecution of various factors that the countries at the lower end of it still banning encryption or you know blocking access to the internet or filtering the Internet and actually, you know, buying technologies unfortunately still from Western countries and companies in western countries to sort of either filter the internet or compromise and break into people's, you know, social media and web mail accounts, and so forth.  And with quite drastic consequences.  You know, people will be imprisoned, tortured or killed as a result of these things.

<p>

<strong>Trace Mayer:</strong>  When the United Kingdom is a prime example of you refuse or are unable to provide a private key that they assume but can't prove that you have they can throw you in jail.

<p>

<strong>Dr. Adam Back:</strong>  Right.  It's kind of interesting in a sense also just from a basic logic that it's generally -- it's impossible to prove a negative and so how do I prove that I don't have the key.  I mean, you know, the joke at the time --

<p>

<strong>Trace Mayer:</strong>  Plausible deniability.

<p>

<strong>Dr. Adam Back:</strong>  Right.  I mean, the joke at the time this was coming out, you know, somebody on the UK cryptography discussion list said," Well, okay, I'm going to send a big file of random numbers to the minister."  He proposed this and reported him, you know, and see how he fares, like, proving that he doesn't have the key because you can't generally do that, right?  I mean, not in a purely logical sense though.  It's then really down to the court's discretion of whether they believe your claim that you don't have the key or not.

<p>

<strong>Trace Mayer:</strong>   I mean, isn't this a major problem that inferior minds have always wanted to persecute the world's brightest geniuses.  Copernicus didn't want to publish about heliocentric theory.  House arrest for Galileo.  You could look in the freaking telescope and see that something was there.

<p>

<strong>Dr. Adam Back:</strong>  Yeah.

<p>

<strong>Trace Mayer:</strong>   And yet hundreds of years later we're a pro-Copernicus society.

<p>

<strong>Dr. Adam Back:</strong>  Right.

<p>

<strong>Trace Mayer:</strong>   We're a pro-Newtonian physics society.  Why would we want to be a pro-Cryptography society and was there -- is there a group or kind of an ethos that carries this banner being a pro-Cryptography society?

<p>

<strong>Dr. Adam Back:</strong>  Yeah.  So there's the Cypherpunks list and various other people interested in sort of the social applications of cryptography and technology and Internet communications and I think one of the things that people were thinking about with respect to cryptography and advancing the social norms and bringing the rights that we enjoy in the offline world into the online world is that you could go about this through the legal and political system and it might be quite slow because generally what tends to happen, if you look back in history, is that society overcomes its prejudices overtime and a number of people get persecuted and become test cases that end up overtime [inaudible 00:13:04] but it lags like 50 or 100 years.  It's quite painful and slow.

<p>

<strong>Trace Mayer:</strong>   And even as we saw in the Imitation Game, they even persecuted the very people that saved their lives.  I mean, Alan Turing to save an estimated 14 million Allied lives and what did he get?  He got castrated for it.  Literally, by the U.K. government.

<p>

<strong>Dr. Adam Back:</strong>  Right.  That's horrendous and actually the U.K. government I think earlier this year or last year issued a formal an apology.

<p>

<strong>Trace Mayer:</strong>   Thanks, like, post-mortem.

<p>

<strong>Dr. Adam Back:</strong>  Right, exactly.

<p>

<strong>Trace Mayer:</strong>  But he uses his brilliant mind and applies it to cryptography to save 14 million lives and those 14 million people decided they're going to have him chemically castrated.  I mean it's just really kind of crazy.

<p>

<strong>Dr. Adam Back:</strong>   Yeah.  So the kind of philosophy that the Cypherpunks looked at the situation was we could try to lobby politicians and try to promote this in the press and go to charities that are trying to fight for human rights or expand or improve rights within their own country, but it will be a slow and uphill battle.  So maybe the way to change society is to just deploy the technology and so in some way the tipping point --

<p>

<strong>Trace Mayer:</strong>  You mean just put the Gutenberg printing press out there and start printing books.

<p>

<strong>Dr. Adam Back:</strong>   Right.  So it's a kind of digital analog of that in a sense.  So you know people were quite excited about PGP and interested to then -- so if you have the right to free speech, well, let's provide anonymity technology or pseudonymity technology.  So actually Hal Finney who is somebody that was involved in bitcoin quite early coincidentally --

<p>

<strong>Trace Mayer:   </strong>Yes.  Satoshi sent him the first transaction.

<p>

<strong>Dr. Adam Back:</strong>   That's right.  He received the first bitcoin transaction ever.  I think it was like 50 bitcoins, if I remember what I read correctly.  Presumably it had no nominal value at the time, but now that's, you know, $1,000 or more or what have you.  And so it was the same guy, Hal Finney, who implemented the first remailer saying he just wrote it in Poland.  It’s a way for you to have privacy or anonymity via email.  So it's a simple piece of technology, but they have this kind of mantra Cypherpunks write code which is to say, you know, you can go lobby all you want but what ultimately changes the game is deployment of technology.  And the idea encapsulate in that is that you know, if society if everybody is using a technology and sees no moral problem with it and thinks that's their moral right and this is the correct balance eventually it gets to such a stage that it's difficult for society to punish those people because it creates a political outcry.

<p>

So the idea is they deploy the technology, help people do what they consider to be their legal right anyway and then the legal system and the regulations in the governments will change more quickly and it's probably the case if you look at it historically that things were changed via this kind of approach.  It's society what --

<p>

<strong>Trace Mayer:   </strong>Nobody asked for permission to --

<p>

<strong>Dr. Adam Back:</strong>  Right.

<p>

<strong>Trace Mayer:</strong>  -- for gunpowder or the Gutenberg Press.

<p>

<strong>Dr. Adam Back:</strong>  Right.

<p>

<strong>Trace Mayer:</strong>  And it was after the fact.  You know, you had to have a copyright from the King in order to print a book, but that didn't stop the revolution of ideas that happened in Europe.

<p>

<strong>Dr. Adam Back:</strong>  Yeah.  So actually I ran a remailer for a while when I was a student and that was a kind of contributed to the privacy network a kind of email connected peer to peer network that would decrypt messages in a kind of a new route and so after that I got interested in electronic cash which was the other hot topic back then with Dr. David Chaum's blind signature.

<p>

While I was supposed to be researching distributed systems I kind of took a couple of years sidetracking into all kinds of advanced cryptography and so I read all the excellent papers I could get my hands on and implemented a number of things.  So David Chaum's blind signature was a start of this kind of the you know originator of the electronic cash concept with blind signatures and cryptographically assured fungibility.

<p>

The interesting thing there is that you know you could withdraw a coin from electronic bank and you could spend it at a merchant and the merchant could deposit it and the bank even with collusion with the merchant wouldn't be able to correlate that you were the person that bought this.  And that kind of concept would be you know if you're buying an electronic book, a PDF or something there shouldn't be a kind of dossier of reading habits.  I mean this is generally frowned upon in western countries.

<p>

<strong>Trace Mayer:</strong>  We saw what happened when in Germany --

<p>

<strong>Dr. Adam Back:</strong>  Yeah.

<p>

<strong>Trace Mayer:</strong>  You know based on what peoples' reading habits were.

<p>

<strong>Dr. Adam Back:</strong>  Yeah.  So it's a general problem that actually society usually fails to recognize the danger inherent in collecting information or that governments collect information ostensibly for one reason and then there's a kind of mission creep where they end up using it for increasingly unrelated things that you know if if they had asked in a vote for permission to do it would have been rejected and actually often the things they are using it for illegal but not discovered until after the fact and you saw a bunch of this with the Snowden disclosures which were really eye-opening a kind of reset the game in terms of people's perception of privacy in a digital age,

<p>

<strong>Trace Mayer:  </strong>And we're assuming the integrity of the voting.

<p>

<strong>Dr. Adam Back:</strong>  Yeah.

<p>

<strong>Trace Mayer: </strong> If voting made a difference it would be illegal.

<p>

<strong>Dr. Adam Back:</strong>  Yeah.

<p>

<strong>Trace Mayer: </strong> And I think it was -- was it Stalin? "It doesn't matter who votes.  It matters who counts the votes."

<p>

<strong>Dr. Adam Back:</strong>  Well, that's certainly true in today's world. I mean that's why they're all of this kind of non-profit organizations that try to ensure votes in countries where there's political turmoil.

<p>

<strong>Trace Mayer: </strong> So out of this ethos of wanting, you know -- Cypherpunks write code. When I was on The Colbert Report the way they introduced it was the Dwarves they dug too deep to find mithril and really what they did was they released Durin's Bane.  They released the Balrag. Is that what you guys have finally done?  Have the Cypherpunks finally released Durin's Bane with bitcoin?

<p>

<strong>Dr. Adam Back:</strong>  Maybe, I mean --

<p>

<strong>Trace Mayer: </strong> The ability to transfer value over a communications channel.

<p>

<strong>Dr. Adam Back:</strong>  It's certainly a [inaudible 00:19:28] for Cypherpunks.  I think people who were involved in the Cypherpunks are extremely happy that bitcoin has materialized and spent a lot of time -- back in the sort of late '90s trying to understand how to deploy ecash and that was always viewed as a kind of Holy Grail of this sort of privacy technology.

<p>

If you had the ability to communicate anonymously you should also have the ability to transact and honestly and so it was in that context that Nick Szabo proposed smart contracts.  And so he has I think a law degree and a computer science degree and sort of put those two things together and looking at electronic cash thought of the idea of having a computer mediated contracting that could preserve anonymity or pseudonymity or privacy, or at least keep the information disclosed to be point to point between the contracting parties.

<p>

So the concept of smart contracts dates, I think, way back somewhere in the 1995 timeframe and so in operating remailers, you know, one of the problems you have with that is sort of denial of service where people would send spam and junk through the remailer and the suspicion was they might have been doing that to try and discredit remailers because they didn't remailers.

<p>

Anyway there was no kind of control and so you know, us operating this remailers and obviously this kind of thing happens and I was researching some functionality and properties about cryptographic hash functions and I could see that there was a way to -- there's an opportunity to find a solution.  If you could find a birthday collision to at the time it was an empty five hash, it would be an insane amount of work, but when you finished anybody could verify it instantly.

<p>

I was thinking okay, there's a very large amount of work and that's something they could do with a denial of service protection maybe we could scale the work down so that you could make different sized amounts of work.  So then I designed hash cash using that building block and simplified it in a few ways.  And so that that then became kind of digital postage stamp.

<p>

The original idea was to use that for remailers so that you could -- so there'll be a small cost sending a mail so that people wouldn't just flood junk through it kind of thing and it was also used for a number of other things.  For paying for pseudonyms and using sort of some e-mail systems and I think it's used in SFS file system.  Microsoft ended up using it in their kind of mail ecosystem, Hotmail and so the Hotmail system, the Outlook mail client, the Exchange mail server.  So they have a variant of hashcash and there's an open specification for that.  And hashcash itself as a kind of [inaudible 00:22:15]. So the stamp is supported by various kind of mail filtering systems like a spam assessing uses that.  If you have a hashcash stamp on your mail it reduces the chance of being falsely categorized as spam.  So improves your liability generally.

<p>

So after that I went to work for Zero Knowledge Systems which is a Canadian start up that was trying to build Tor.

<p>

<strong>Trace Mayer: </strong> And what is Tor exactly?

<p>

<strong>Dr. Adam Back:</strong>  So Tor is privacy technology for browsing the web.  So the remailers were for email and Tor is kind of technology but for browsing the web so that you can maybe present Web site that's about a medical issue that you don't want the world to know about or just --

<p>

<strong>Trace Mayer: </strong> Or a journalist could submit information.

<p>

<strong>Dr. Adam Back:</strong>  And actually also, you know, intelligence agencies also used Tor.

<p>

<strong>Trace Mayer: </strong> They use it a lot.

<p>

<strong>Dr. Adam Back:</strong>  Right.  And Tor itself was some of the contributions and people researching and working on Tor actually the U.S. Navy, I think, the Navy Research Lab.  So anyway at Zero Knowledge Systems this was pre-Tor and we built a network that was Tor-like an intent and developed a bunch of the technology and actually Tor uses some of the things that I invented at that time.  I think I'm cited in Tor whitepaper I noticed a little while ago.

<p>

<strong>Trace Mayer: </strong> Good gracious!  Cited in the Tor whitepaper, the bitcoin whitepaper.

<p>

<strong>Dr. Adam Back:</strong>  I had no idea.  I guess I must have exchanged an e-mail with somebody and kind of forgot about it, but you know it was -- in developing the network at Zero Knowledge Systems which we called the Freedom Network, for obvious reasons, we made some observations and discoveries and protocol innovations to provide robust privacy for real-time communications.  And there's a paper that I published with some colleagues as well about kind of security and reliability and privacy trade-offs.

<p>

So it was kind of triangle between those three things where you can only really robustly provide to and as it's kind of interesting observation.  So I mean the Freedom Network doesn't really exist anymore.  The source code got released, but you know several of the key designs and observations in it live on in Tor.  So that's cool.

<p>

<strong>Trace Mayer:</strong>  So why would such a legendary intellectual giant like yourself shift his time and his attention and his focus to bitcoin, to this magic internet money?

<p>

<strong>Dr. Adam Back:</strong>  So the legendary is kind of a --

<p>

<strong>Trace Mayer:</strong>  Oh, come on.  Bitcoin has changed the world by opening up people's ability to send value over communications channel and having immutable persistence and Tor has changed the world.  And you're cited in the Tor whitepaper also.  So I mean, like those are two legendary pieces of groundbreaking technology that has changed the world.  WikiLeaks, how did they receive most of their leaked documents?  It was through Tor.  You have definitely had an impact on millions and millions of lives, if not billions.  So I mean, maybe you're being too humble about your contributions to the cryptography space and the distributed systems space, like, I don't think you are.

<p>

<strong>Dr. Adam Back:</strong>  So I mentioned earlier that I was interested in electronic cash systems.  So I'd actually implemented the electronic cash and credential system by Dr. Stefan Brands who is actually the PhD student of David Chaum.  And at some point during his thesis, he kind of fell out with David Chaum and actually David Chaum declared, this is in a footnote at the back the -- about his thesis which is a book that you can get online.  And you can look it up and download the PDF.  But he thanks David Chaum for declaring that it was impossible to blend electronic cash with discrete logarithms which he went on to do and showed to be more flexible than the R.S.A. baseline signature that David Chaum had invented.

<p>

So, anyway the credential system that Stefan Brands created is very interesting.  It has very many interesting properties and so I implemented a cryptography library that implements that and David Chaum's too and spent a number of years also.  You know after the hashcash protocol I released on the cryptography and cypherpunks lists there was some quite immediate sort of observations that this was somehow like electronic gold or something and people were then trying to figure out how to combine that in a decentralized system to build an ecash systems.  So Wei Dai who had proposed B-Money.  The way he put is that he wanted to build an electronic cash system without banking interface because the banking interface was viewed as the weak point.

<p>

So, you know, with the DigiCash experience, this was David Chaum's company.  They had set up a demo system but to actually, you know, buy the tokens you would need to interact.  You know, you would need to work with a bank to provide this service.  You know, it's good.  Banking relationship also helps the bank operate directly.  And there was a lot of excitement and there was a potential of contracts with banks in the offing at that time with DigiCash.  But they ran out of money and went bankrupt.  All the people who have the demo coin lost them.  And so the realization was that centralization is bad we need decentralization.

<p>

And so hashcash was viewed as a way to, you know, avoid needing to interact directly with the fiat system so it would be more of a market system.  And so the B-Money proposal proposed to use hashcash to mine coins.  And so it was kind of outline of a system, vague in some regards and not well-defined enough to be implemented and actually Nick Szabo the same guy invented smart contracts made a related proposal quite similar to B-Money called bitgold and that talks more about ledgers and Byzantine Generals.  Like, you know, that's if you're a computer scientist you would realize then is a distributed system you need some way to arrive eventual consistency.  So he'd explored that possibility but bitgold also kind of missed a number of features.  He had a kind of indirect market mechanism to arrive at price discovery and inflation control whereas bitcoin is able to do that algorithmically without human traders to do that.

<p>

So both of those systems were proposed in 1998, the year after the hashcash paper and following various discussions.  And so it was a kind of ongoing discussion, I spent quite a number of years in my spare time trying to figure out how to make these kind of things concrete and see them implemented.  I think if people had figured out, you know, specifically how to control inflation and to make these designs concrete, they would have rushed off and implemented them because that was the cypherpunks thing, right?  Something like, Hal Finney would have rushed off and implemented it or myself, you know.

<p>

<strong>Trace Mayer:</strong>  You would have wrote code and released it.

<p>

<strong>Dr. Adam Back:</strong>  Yes.  Yes.  That was the thinking, you know, that the only way to effect social change is to write code and have people use it, basically.  There are people who kind of given up on the political system as too slow, unlikely to affect change on a meaningful timeframe.  And so then there was a lot of, you know, research in how to do this and I spent a lot of time trying to figure out how to do this. And, you know, I tried to re-extend just Stefan Brands' electronic cash system so that it would be offline transferable.

<p>

So the David Chaum's system and Stefan Brands' system also called online ecash protocols which means when you deposit a coin you really needs to take it to the bank and deposit.  If you if you accept it offline without talking to the bank, it could get double spent.  So the bank had to double spend it basically.  So trying to find a way to make the offline re-spendable and actually find a way to do that and discussed it was Stefan Brands.  And actually as it happens frequently in these kind of things, it turns out somebody else has already invented that specific method, but at least I discovered something kind of novel that just a timing [inaudible 00:30:23] .

<p>

But still it had some linkability in its offline use, but the linkability is actually quite similar to bitcoins linkability.  And I think I might have contributed.  So they were a number of people in the cypherpunks list who were talking about designs and some of them were anonymous because it's cypherpunks and they developed the remailers so they were kind of practicing their own technology.  So there was some kind of jovial or joking comments from anonymous people that are actually insightful, technical, cryptographic protocol comments from anonymous people.  And, of course, we don't know who they were.  Potentially some of them Satoshi, right?

<p>

<strong>Trace Mayer:</strong>  Probably, some teenager tinkering around on his computer.

<p>

<strong>Dr. Adam Back:</strong>  Well, I mean, some of them, like, there was some that could have been Satoshi.  They were like related concepts of this discussion.

<p>

<strong>Trace Mayer:</strong>  Unless you are Satoshi.

<p>

<strong>Dr. Adam Back:</strong>  No comment on that.  Don't like to speculate on who Satoshi might be.  I think it's probably a good thing that Satoshi is anonymous because you know there's a lot of political pressure that could --

<p>

<strong>Trace Mayer</strong>:  Yeah.  Exactly.

<p>

<strong>Dr. Adam Back:</strong>  -- land on somebody who is seen to somehow have control and all sorts of thing.

<p>

<strong>Trace Mayer:</strong>  And Satoshi said you know this cryptography will not solve our political problems.

<p>

<strong>Dr. Adam Back:</strong>   Yeah.

<p>

<strong>Trace Mayer:</strong>  It's something we -- our morality and ethics would need to advance to the state of our scientific understanding, really.

<p>

<strong>Dr. Adam Back:</strong>   Yeah.  So, I mean, when I saw bitcoin -- well, actually I received an email from Satoshi, I think, in August 2008 to ask about the citation and hashcash and I actually pointed him at the reference for Wei Dai's B-Money.  And as I think that is where the citation in the paper for B-Money came from because I didn't think at the time to also cite Nick Szabo's bit gold and that wasn't cited, but B-Money was. So I think if I hadn't had that interaction, it might -- B-Money not might have been cited the way -- the way [inaudible 00:32:18].

<p>

<strong>Trace Mayer:</strong>  So your teaching Satoshi about bitcoin before he publishes it.

<p>

<strong>Dr. Adam Back:</strong>  Well, I mean, I don't know but, I mean, at least he seemed to be unaware of B-Money and so he had some commentary about how it relates to bitcoin and also conversed after that with Wei Dai about B-Money.  So you kind of, you know, B-Money had that kind of idea of decentralized mining and just haven't figured out the inflation control and, you know, both Nick Szabo's bit gold and Wei Dai's B-Money had some kind of more fuzzy inflation control involving humans and voting and some form of, you know, not exactly centralization, but people that would balance factors and do things whereas the the trick with bitcoin, and I kind of kick myself afterwards when I saw because I tried -- like I really tried to figure out how to do inflation control and had this kind of mental blockage and failed to make the leap that Satoshi did where I was aiming for kind of zero dollar adjusted inflation and that's very difficult to do, maybe impossible.

<p>

<strong>Trace Mayer:</strong>  Yeah.

<p>

<strong>Dr. Adam Back:</strong>  Whereas what bitcoin and Satoshi did is to, you know, fixe the supply functions, so.  And then let the market decide on the price.  So Bitcoin actually doesn't fix inflation. What it does, it has supply side inflation and then an adoption curve.  And at times when the adoption curve is higher than the supply side inflation you get a kind of deflationary price effect.  So the price goes up and so that varies and the rate of supply side inflation of course is tapering because of the supply curve and the bitcoin production.  So you know, my reaction on seeing bitcoin was like first kicking --

<p>

<strong>Trace Mayer:</strong>  Oh!

<p>

<strong>Dr. Adam Back:</strong>  -- kicking myself for not making that leap and you know there's a couple of -- so the inflation control was one kind of leap that bitcoin made and the other one is to sort of tie things together.  It's a very interconnected design where the mining is doing multiple things.  You know, it's providing incentive, it's releasing the coins.  So releasing the coins was already there in B-Money and bit gold and also Hal Finney made another system called RPOW, reusable proof of work that would -- and it was implemented using the T.P.M.  So a piece of hardware that would sort of hard to tamper with and provide a sort of signature assurance that the hardware is doing the right thing.

<p>

So, yeah, I mean, bitcoin made a couple of leaps and put it together and so I was kind of kicking myself for not seeing the inflation control thing which might have got there sooner.  And also the second reaction was, you know, that the fungibility assurances in bitcoin are kind of weak.  You know, this degree of linkability and the lack of cryptographic fungibility was a concern to me.  Once I got more actively interested in it, I started to try to apply the cryptographic mechanisms that had been used in previous electronic cash systems.

<p>

So, for example, there was a 1999 paper by Sander and Ta-Shma, two Israeli mathematicians, which used the Zero Knowledge set membership proof.  It's called auditable electronic cash paper.  And actually I immediately recognized that this paper would allow bitcoin to provide cryptographic fungibility in the same way that the electronic cash systems did.  And so, in fact, the zerocoin paper cites that paper and is an optimization of it.

<p>

And so the other kind of advance in sort of fungibility technology since then is the SNARK concept which is very recent and in a couple of years ago from Eli Ben-Sasson, Technion and the team there and working together with the original authors of the zerocoin paper they put out a zero cash proposal which uses this SNARK concept, which is a very exciting, you know, kind of new computer science concept which is the kind of digital signature analog of homomorphic encryption, which is the kind of software only analog of what TPMs [inaudible 00:36:10], so --

<p>

<strong>Trace Mayer:</strong>  And we're actually going to talk about that in-depth in episode three where we talk about your -- one of your brainchilds confidential transactions.

<p>

<strong>Dr. Adam Back:</strong>   Right.  Yeah, so that was a kind of fruition -- one of the fruitions of spending quite a bit of time over the last few years, trying to figure out how to improve bitcoin fungibility and use them of the cryptographic things, you know, from the previous electronic cash systems and cryptographic literature to improve bitcoin and fix the fungibility.

<p>

<strong>Trace Mayer:</strong>  And reestablish where you're at, right?

<p>

<strong>Dr. Adam Back:</strong>   Yeah.  Yeah.  Well, I felt kind of bad, yeah.  So I was resolving to you know, correct some small problem.

<p>

<strong>Trace Mayer:</strong>  Right.  We are going to push this innovation even further ahead.

<p>

<strong>Dr. Adam Back:</strong>   Well, I mean, so you say the thing that the bitcoin has, you know, so I talked also with Stefan Brands about bitcoin and he had the same kind of reaction.  You know, people who are familiar with [inaudible 00:37:06] literature and of course, he's the kind of inventor of one of the most innovative electronic cash systems of the central server for I.T.  You know, to say that the fungibility in bitcoin is extremely weak compared to these guarantees.  But, you know, and maybe you can use the technology to improve that.  And the SNARK system -- I mean, the zerocoin system does work but it's, you know, the message size is quite big.  And there is also a trap door.

<p>

So there's a kind of central trusted party that must create a private key and then promise to delete it.  And if you kept it, it could forge a limited amount of coins.  You'd be perfectly private, but you'd be able to forge a limited amount of coins and that's the problem.  So that's kind of trust sort of set of problem.  And the SNARK proposal tends -- you know, they are different SNARK varieties but, you know, the more efficient one has also the trap door problem.

<p>

Plus, the additional problem that the SNARK cryptographic primitive is extremely new.  And so, you know, bitcoin is using quite conservative cryptography that's been established for decades and is generally viewed as a bad idea to use bleeding-edge crypto even from top cryptographers because the only way to really assure the security of these things is to have many experts analyze it and --

<p>

<strong>Trace Mayer:</strong>  I think try to break it.

<p>

<strong>Dr. Adam Back:</strong>  Try to break it for a long period of time.  So unfortunately, you know, to directly use the SNARK mechanism for zerocash runs the risk that, you know, if there is a cryptography break, somebody might end up with a bottomless wallet and there would be huge amount of inflation creeping in before anybody realized that it was being exploited or something like that, so.  But the SNARK construct is very interesting and I think there are some kind of short term things you could use it for which are additive.

<p>

So, you know, if you have an existing secure system, you can add an additional security assurance, say, for example, you know, if the SNARK fulfills its promise, we'd be able to upgrade the so-called S.P.V. or smartphone wallets to the same security assurance level as [inaudible 00:39:03] wallets through the magic of SNARKs.  So it's a whole lot of topic.

<p>

<strong>Trace Mayer:</strong>  SNARKs, yeah.  I'm kind of like catching snakes.  Is this fun?

<p>

<strong>Dr. Adam Back:</strong>   Extremely.

<p>

<strong>Trace Mayer:</strong>  Extremely.  We've had a wonderful introduction to the absolutely legendary Dr. Adam Back.  Cited in Satoshi's whitepaper as we've talked about.  We're going to be having a full week with him on the podcast discussing confidential transaction, <a href="/what-are-sidechains/">sidechains</a> and the lightning network along with some of his other innovations and thoughts on bitcoin and where it's going.  So we'd just like to take the time to thank the legendary Dr. Back for being with us.

<p>

<strong>Dr. Adam Back:</strong>  You honor me too much.  Thank you.
