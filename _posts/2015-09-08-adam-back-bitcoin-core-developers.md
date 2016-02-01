---
layout: post
title: The top Bitcoin Core Developers
author: Dr. Adam Back
authorurl: /dr-adam-back-/
published: true
---

<img src="/images/adam-back.png" alt="Dr. Adam Back" align="right">
<p><a href="/dr-adam-back/">Dr. Adam Back</a> has been involved in serious cryptography deployments for decades. In this interview he discusses who the top Bitcoin developers are and why.
<center><iframe width="700" height="394" src="https://www.youtube.com/embed/Zz8Q7XUd2QM" frameborder="0" allowfullscreen></iframe></center>
<p><b>TRANSCRIPT</b> (<a href="http://www.satoshisdeposition.com/podcast/BTCK-166-2015-09-08.mp3">download mp3</a>)
<p><strong>Trace Mayer:</strong>  Welcome back to the Bitcoin Knowledge Podcast.  In episode two of a week with Adam Back.  We're going to be talking about some of the other people who have been instrumental in making bitcoin a success.  As he talked about in episode one, you know, he built on top of a lot of other people's work.  And isn't that really how it happens in our science and technical fields?

<p>

So, Dr. Back, thank you for coming back on the podcast.  And when we're looking at some of the other people who have been instrumental in making bitcoin a success, who would you kind of start with, you know, besides Satoshi Nakamoto himself?

<p>

<strong>Dr. Adam Back:</strong>  Yeah.  So, I mean, once I really got interested in bitcoin in early 2013 and dove in like everybody else and read everything that was available.  And at some point in time, you kind of run out of information you can read and you still have many questions because some of the documentation is not that in depth or doesn't answer the questions to a full extent and so what people end up doing is searching out where the kind of brain trust and the gurus are hanging out.  And that turns out to be, as I found, the bitcoin was its IRC channel.

<p>

So I went on there and I started asking a bunch of questions and filled in the gaps in my understanding about the low-level protocol messages and some of the, sort of, implementation or design principles that are not otherwise documented.  And so I got to know all these people who are actually sort of moving bitcoin forward and improving it and streamlining and optimizing and adding a novel features to it to improve smart contracting and so forth.

<p>

And so I was qualified to say that because I started into this in 2013 there were some characters who I understand were actually involved earlier in bitcoin who I didn't necessarily get to know.  So I have, for example, Sirius did a lot of work and I'm sure there are many others.  It's just that they were not so active anymore by the time I got in there.  So I didn't interact with them and find out what parts of the system they designed or implemented and so forth.

<p>

So, I mean, in terms of people who I interacted within and later actually became colleagues with Dr. Pieter Wuille.  And so he --

<p>

<strong>Trace Mayer:</strong>  I mean, why is Dr. Wuille, Sipa, you know --

<p>

<strong>Dr. Adam Back:</strong>  Yeah.

<p>

<strong>Trace Mayer:</strong>  -- I mean, I've been really impressed with a lot of his work, too.  I mean, why would he be the first one you bring up?

<p>

<strong>Dr. Adam Back:</strong>  He has a very deep understanding of all the protocol details, but is also very focused on actually implementing and coding and making kind of, you know, implementing major features in the code and doing major refractors and so on.  So I think he's potentially been the most influential in terms of the actual hands-on code and doing re-architecting of the code base, you know.  And going back to the initial releases, some factors of bitcoin are now two orders of magnitude faster or more efficient than they were literally.

<p>

<strong>Trace Mayer:</strong>  Really?  Order -- orders of magnitude faster.

<p>

<strong>Dr. Adam Back:</strong>  Like, literally a hundred times.  Yeah.

<p>

<strong>Trace Mayer:</strong>  Wow.

<p>

<strong>Dr. Adam Back:</strong>  So, you know, the initial code was --

<p>

<strong>Trace Mayer:</strong>  And does that increase bitcoin's scalability?

<p>

<strong>Dr. Adam Back:</strong>  Yes, it does.  So it's not always understood the scalability is not just about bandwidth, but also about the CPU utilization, the memory utilization and the complexity of how those resources scale would use.  So, you know, we can say that the network utilization scales with order N squared.  But there are also, you know, CPU utilization in terms of validating the signatures and memory utilization in terms of data structures.  And some of those things also scale non-linearly.

<p>

So as the utilization level goes up, you know, the beginning of the blocks would have been quite empty because there were very few transactions initially.  The early bitcoin functioned just fine, but that was because it was lightly used.  If it had seen today's use back then, it probably would have, you know, various things would have gone wrong, more things would have crashed or more memory would have been used up, or it would have become bogged down, and taken longer, longer to process blocks or we would see -- so let's say higher often rates and so on.  So without, you know, going back in retrofitting the characteristics and doing the analysis I can't say exactly what had gone wrong but clearly that kind of difference in performance is huge and what would affect things.

<p>

<strong>Trace Mayer:</strong>  Yeah, because, I mean, we're adding a block every ten minutes and so --

<p>

<strong>Dr. Adam Back:</strong>  Right.

<p>

<strong>Trace Mayer:</strong>  -- it kind of, grows in this.

<p>

<strong>Dr. Adam Back:</strong>  Yeah.  I mean --

<p>

<strong>Trace Mayer:</strong>  Huge unmanageable blockchain.
<strong>Dr. Adam Back:</strong>  Right.  I mean, even today the latency that you were experiencing as a miner is quite important for your profitability.  And so the design of bitcoin, that's just what kind of one of the things you find by talking to people who understand the protocol details is, you know, the parameters are not random.  They are probably, you know, presumably quite carefully modeled by Satoshi in the sense that, you know, that ten-minute interval is balanced with the propagation delay of sending out the final mined block into the network.

<p>

And so people have said rule of some things like maybe ten to fifteen seconds to broadcast a block through the network and if you balance that against the ten-minute block time you come out around.  So there's a possibility because it's -- you know, it's a distribute system.  So there's no kind of unified correct time, which is one of the concepts you see in distribute system.  You can't guarantee reliable synchronized time.  So there's a possibility for two miners to find a block at the same time before learning that somebody else's does not want.  They may not be exactly at the same time but, you know, if it was within ten seconds and you don't hear about the block for fifteen seconds then that's effectively the same time.  And then those two blocks would go into the network and only one can win.

<p>

And this is disambiguation protocol, but that block doesn't win, that's a loss of profitability for the miner who mined it.  They'll lose those fifty or twenty-five bitcoins and that's quite expensive and so that's called the orphan rates informally though Pieter Wuille tells me that this is actually an incorrect terminology in a technical level.  It's a kind of a misunderstanding of some other principle, but it's become the kind of de facto way to say these things.

<p>

And so that means the miners are quite focused on minimizing their orphan rate or wasted blocks.  So even today, you know, there are two delays involved.  One is to receive the block and the next one is to validate the block.  And even today, the work to validate the block is non-trivial and the characteristics of block validation are actually also non-linear.  So it depends on what kind of transactions were in the block and how they're structured and, you know.

<p>

So, for example, over the last few months there were some stress tests in the network where people were sending lots of teeny transactions around and somebody mined the block with many, many small dust-level payments in a single, like, almost one megabyte transaction.  And that transaction was pretty expensive to validate, like, it took tens of seconds to validate even, you know, on today's CPUs.  So that shows it can be a factor and, you know, so you have to consider also in security systems not the average case, but the worst case.

<p>

So, you know, if there's an advantage somebody can create for themselves economically or in attacking the system to create something that's an out layer like an optimally malicious block which would take everybody else a really long time to validate, but which they could validate instantly because they created it and they trust themselves.  You have to consider the worst case also.  So there's also a validation, you know, when you want to make the validation criteria for making an upgrade you have to go and figure out what the worse cases are and make sure they are safe.

<p>

So in terms of, you know, the performance through, I don't think that was exactly the CPU bottleneck but, you know, for example, Pieter Wuille again has been working with Gregory Maxwell over the last year or so on reimplementation, highly optimized implementation of the D.S.A. library.  So there's a library called Libsecp256k1, which is a reference to the new standard for elliptic-curve signatures.  And using a combination of sort of hand code assembly implementing existing academic papers for D.S.A. optimization, some of which I don't think had been implemented in deployed systems before.  And also Gregory Maxwell was able to find a brand-new algorithmic optimization.

<p>

So at this stage, the Libsecp library is six to eight times faster on a CPU than the previous OpenSSL library which is also hand-optimized and assembled, that's quite impressive.

<p>

<strong>Trace Mayer:</strong>  Wow.  So there is another major gain or improvement that Dr. Wuille's found for us.

<p>

<strong>Dr. Adam Back:</strong>  Right.  So, I mean, that was a result of, you know, many hundreds of hours of kind of painstaking testing.  So actually in the course of testing Libsecp, Gregory Maxwell and Pieter Wuille were able to find an actual bug in OpenSSL where OpenSSL float produced the wrong value in some kind of fringe case and they do this using a kind of semi-automate form of rigorous testing of implementations of anything in effect.  But in this case, cryptographic primitive and the idea is to sort of do some kind of fuzz testing but guided to focus on ranges where there could be problems.  So using that approach they were able to exhaustively test a very large such space which will be too expensive to fully test all permutations.  And through that they found a bug in OpenSSL which was actually submit to the OpenSSL repository and accepted as a fix.  But that was --

<p>

<strong>Trace Mayer:</strong>  So they fix another people's problems, too.

<p>

<strong>Dr. Adam Back:</strong>  Yes.  The focus was actually to have extremely high assurance of the correctness of this code because it mustn't just be fast, but it must be absolutely correct.  And I think right now he is doing an additional form of test to perform a kind of automated algorithmic proof that it's a full group using a library by Dr. Tanya Layne and Dr. Bernstein (ph), which provides a kind of a mathematical proof using the SAGE computer-aided algebra package to prove that the implementation is correct, correctly implementing, and doesn't have any kind of -- doesn't get trapped in a subgroup, I guess, is the main thing.

<p>

So he is doing that as an additional kind of validation.  And at this stage, it's fairly close to being deployed in the upcoming version of bitcoin and to give us thereby, you know, a big boost in block validation speed and that will also enable, you know, there's a discussion of improving bitcoins through by increasing the block size a little.  So that kind of, you know, quite major leap in validation, the CPU bottleneck validation will help them.

<p>

<strong>Trace Mayer:</strong>  Now, you mentioned Greg Maxwell.  Gosh, I mean, what has he not had his fingers in --

<p>

<strong>Dr. Adam Back:</strong>  Yeah.

<p>

<strong>Trace Mayer:</strong>  -- in bitcoin?

<p>

<strong>Dr. Adam Back:</strong>  So --

<p>

<strong>Trace Mayer:</strong>  I mean, tell me a little bit about this character.

<p>

<strong>Dr. Adam Back:</strong>  So he's a very smart guy and he's very inventive and he's very knowledgeable about cryptography and cryptography protocols and reads all kind of papers.  And so the experience that you have, you know, getting into bitcoin in 2013, at least, I have is I have an idea or like, "Oh, you could do this?"  And you could mention it on bitcoin wizards or you go search it and, you know, nine times out of ten, somebody has already invented it.  And, you know, seven times out of ten that somebody was Greg Maxwell.  So this is a kind of pattern that he is very inventive and he comes up with, you know, many of the interesting improvements or extensions or use cases.

<p>

<strong>Trace Mayer:</strong>  Well, what do you -- can you name a couple?

<p>

<strong>Dr. Adam Back:</strong>  So he came up with the coinjoin proposal.

<p>

<strong>Trace Mayer:</strong>  Okay.

<p>

<strong>Dr. Adam Back:</strong>  And he also invented something using SNARKs to make a form of sidechain but using SNARKs.  And so when I started exploring how you could implement sidechains, I proposed a kind of one-way peg sidechain and, you know, in talking through with him he was able to combine that at some point with the realization that the two-way component of the SNARK.  He called the SNARK thing, something about a witness, I forgot his name right now.  And he was able to extract that separately from the SNARK.  So you could get a two-way peg without SNARKs.  So he had a big part to play in making this sidechain technology work.

<p>

<strong>Trace Mayer:</strong>  Which you consider one of the greatest innovations --

<p>

<strong>Dr. Adam Back:</strong>  Yeah, I think that's --

<p>

<strong>Trace Mayer:</strong>  --in this financial technology and blockchain technology.

<p>

<strong>Dr. Adam Back:</strong>  I think that's a big deal because it allows you to introduce modularity and reduce complexity.  And so, therefore, you know, if you can make a separate subsystem with the security firewall from bitcoin, people can go and implement interesting things on it.  So I'd come up with and proposed these confidential transactions concept and posted it on the BitcoinTalk Forum going back earlier in 2013.  And so in terms of actually implementing that, that was sort of a joint work between Pieter Wuille on the library side and Gregory Maxwell to design the protocol and as part of designing the protocol he made an extension to sort of extend the concept of hash-based ring signature.  So this is an existing academic paper on the ring signatures that are half the size of other elliptic curve based ring signatures used as a clever trick involving a ring of hashes.  And so --

<p>

<strong>Trace Mayer:</strong>  Really?

<p>

<strong>Dr. Adam Back:</strong>  Anyway, so Gregory managed to sort of combine that and make a sort of net.  So ring signature is basically one out of a range of signers could have signed and you can't tell which ones.  So it's a kind of or in the, you know, A or B or C signed.  And he was able to generalize that -- generalize that into a network of ands and ors.  So you could have A or B or C and then an and and D or E or F and then another and.

<p>

<strong>Trace Mayer:</strong>  Uh-huh.

<p>

<strong>Dr. Adam Back:</strong>  And so that structure he called it a Borromean signature because if you look at it, if you look up a Borromean thing it's a kind of interlocking, it's a graphic with an interlocking ring of circles.  So just graphically that's where the name came from.  And that is particularly used as part of the range proof, which is part of the confidential transactions which we're going to be talking about at a later episode.

<p>

<strong>Trace Mayer:</strong>  Right, in episode three.

<p>

<strong>Dr. Adam Back:</strong>  So that enables us to shrink the confidential transaction and make it that bit most space-efficient and computationally efficient.  He also made the observation actually with a confidential transactions that you could -- the range proof could also encode a message.  So you could kind of reuse the space as an application message transport and he went and implemented that as well, and wrote a kind of paper with PhD candidate Andrew Poelstra describing the ring signature mechanism and confidential transactions.

<p>

<strong>Trace Mayer:</strong>  Now, we're herding all these cats.  Somebody is going to keep the cats herded.  Satoshi handed off the project to Gavin Andresen.  Well, so he handed it off to Gavin and then Gavin later handed it off to Dr. Wladimir van der Laan, I think.

<p>

<strong>Dr. Adam Back:</strong>  Yes, that's right.

<p>

<strong>Trace Mayer:</strong>  And let's see we actually have a quote from a CoinDesk from Dr. -- oh, from -- yeah, from Dr. Wladimir, "I had noticed that Gavin had been much less active in the GitHub project lately, but I did not expect him to step down as lead developer. But it makes sense, there is a lot more theoretical work with regard to bitcoin and cryptocurrency in general making it a full-time job just to keep up with that and giving talks, travelling, and such. On the other hand, I have been effectively the maintainer of the code for quite a while. In practice nothing changes."  So that was from April of 2014.

<p>

So how about Gavin and Dr. Van der lier -- I mean, Dr. Van der Laan.  What if they really been doing as the lead developers of these kind of maintainers?

<p>

<strong>Dr. Adam Back:</strong>  Yes.  So this concept in the bitcoin people talked about Core Developer.  And there were two potential interpretations.  So one of them is -- the most strict one is to commit access.  So there's a Github repository and people have authorization to check in code.  And that's a kind of, you know, housekeeping role.  And originally there was only Satoshi.  And as he was preparing to step out of the project he handed over the commit access to Gavin who then opened up and handed off commit access also to other developers.  And I think there are five right now, including Jeff Garzik, Wladimir, Gregory and Gavin.

<p>

<strong>Trace Mayer:</strong>  And Dr. Wuille?

<p>

<strong>Dr. Adam Back:</strong>  Yes.  And --

<p>

<strong>Trace Mayer:</strong>  He's also --

<p>

<strong>Dr. Adam Back:</strong>  -- and Dr. Wuille, Sipa as his handle, is also.  That rounds it out.  So that's the five.  So that's the kind of technical definition but another kind of looser definition is people who have made significant code or protocol contributions to bitcoin in a kind of looser term so.

<p>

<strong>Trace Mayer:</strong>  To the core protocol of bitcoin?

<p>

<strong>Dr. Adam Back:</strong>  Yeah.  So, I mean, there are many companies that build projects and prototypes and algorithms on top of bitcoin.  But in terms of actually checking in code, particularly consensus code which is quite fragile but also just major changes or many lines of codes that are, you know, contributing, performance enhancements or refactoring of stability to the bitcoin.

<p>

<strong>Trace Mayer:</strong>  Right.  Because like with Armory, we run bitcoin core and then Armory on top of it.

<p>

<strong>Dr. Adam Back:</strong>  Right.

<p>

<strong>Trace Mayer:</strong>  And so everything that has to do with the network consensus with the Armory goes through bitcoin core.

<p>

<strong>Dr. Adam Back:</strong>  Right.  Actually, that's precisely the right way to do it because we've seen -- there have been a couple of projects that have to go with re-implementing the consensus code and it's actually quite a risky thing to do because it's more important for consensus code to be consistent than correct.  Because, you know, if there's a small bug in it but it's not causing any problems it's more important all of the implementations and all of the platforms do exactly that.  Because, for example, you know, if on one operating system or let's say on that thirty-two bit system, it did one thing.  On another sixty-four bit system it did something else.  You know, not in a general case but in a particular and malicious well-crafted, sort of, packet to trigger each case that could cause a fork in the ledger and lead to ledger corruption and that would need to be an emergency fix or something like that were to happen.

<p>

So it's very important to be consistent and basically the specification for bitcoin is what the consensus code does.  So there are moves afoot right now to pull out the consensus critical paths into a separate library Libconsensus and then encourage people who are writing independent, you know, additional bitcoin daemon replacements or full note replacements to link to and use the consensus library.  And in that way, we can much more robustly guarantee consistency.  There's certainly a number of companies that have tripped up over having a library in another language that has consensus code in it.  And they frequently got flipped off a network or had to go fix that library.

<p>

And there are people who will kind of make a sport of, you know, very adversarial thinkers who think about protocol details in the edge cases who will occasionally send an interesting end quotes transaction to bitcoin network to see which services drop off the network.

<p>

<strong>Trace Mayer:</strong>  Oh, what will happen?

<p>

<strong>Dr. Adam Back:</strong>  Yeah.  And so that's kind of --

<p>

<strong>Trace Mayer:</strong>  But that's a useful -- that's a useful contributor in their --

<p>

<strong>Dr. Adam Back:</strong>  Oh, definitely.

<p>

<strong>Trace Mayer:</strong>  -- own way.

<p>

<strong>Dr. Adam Back:</strong>    Definitely, yeah.

<p>

<strong>Trace Mayer:</strong>  You know, someone's going to be providing these types of tests.

<p>

<strong>Dr. Adam Back:</strong>  So Peter Todd has been involved in bitcoin for quite a long time and he kind of takes delight in exploring the edges or sort of game theory and doing a very sort of adversarial protocol analysis kind of work which is very helpful for bitcoin.  And he actually also contributed and worked closely with Greg Maxwell in some of the early thinking about off-chain things that are towards the direction of lightning with assurance bonds and things like that.

<p>

And just to sort of, you know, set up the economic incentive so that something can happen off the chain without needing to go on the chain because if somebody would invalidate that they would be punished economically.  So set up the economic incentives so they can operate off-chain and then you can get high scale.  So he worked through some of that stuff.  And in saying the adversarial, that's actually a complement.  I mean, I think it's actually quite difficult to teach somebody adversarial thinking.  It's something -- it seems too big.

<p>

<strong>Trace Mayer:</strong>  It's counterintuitive unless it's intuitive.

<p>

<strong>Dr. Adam Back:</strong>  Yeah.  I mean, I think a lot of people in software in general or, you know, you see in testing they are sort of functionally testing something which is to say, you know, they test out --

<strong> </strong>

<strong>Trace Mayer:</strong>  Oh, is it working?  Yeah.

<p>

<strong>Dr. Adam Back:</strong>  Yeah.  I mean, they test out the common use cases and they're not thinking, you know, now how would a hacker trick the system into doing something it's not supposed to do, which is a whole different ballgame of thinking.  And, you know, some people are quite skilled at that.  And so their mind just works like that they walk through life and they, you know, they through an airport and they think, "Well, look at that.  That door is unlocked.  And look at that.  That guy is not looking at the screen."  Or, "Oh, the x-ray machine, it doesn't work properly," or something so they have this --

<p>

<strong>Trace Mayer:</strong>  And we hope they use that talent for a productive uses.

<p>

<strong>Dr. Adam Back:</strong>  So right, right.  But, I mean, the people that have that, you know, you can describe a system to them and they just instinctively spot the weak point and hone in on it and ferret out what's wrong with it, right?  So it's actually a skill and Pieter Todd is one of the people.  He's quite good at that.  And Greg Maxwell is also very good at that.  And, I mean, Gavin was the lead developer for a period of time and --

<p>

<strong>Trace Mayer:</strong>  Well, because Satoshi handed it right off to him.

<p>

<strong>Dr. Adam Back:</strong>  Right.

<p>

<strong>Trace Mayer:</strong>  Yeah.

<p>

<strong>Dr. Adam Back:</strong>  Right.  And I think Gavin actually has written quite a lot of lines of code up to the point where Wladimir described that he started to be less active and eventually handed over leads developer and couldn't that just --

<p>

<strong>Trace Mayer:</strong>  Well, probably just kind of did too much work.  I mean, you're herding all these cats.  I mean, as Wladimir said, like, making -- in general, making it a full time job just to keep up with that.

<p>

<strong>Dr. Adam Back:</strong>  Yeah.

<p>

<strong>Trace Mayer:</strong>  Plus, you know, you become a lightning rod of attention.  So, you know, you have to do interviews and travel and speak at conferences and all this type of stuff.

<p>

<strong>Dr. Adam Back:</strong>  Right.  I mean, because --

<p>

<strong>Trace Mayer:</strong>  So, I mean it becomes a lot of work to, like, manage an open source project.

<p>

<strong>Dr. Adam Back:</strong>  Yeah.  I mean, I have been to, like, maybe four bitcoin conferences, five, something like that.  But they were all literally, you know, and I bumped into you a couple of them.  And we had some interesting conversations.  These days there are literally, you know, there's a conference every week on some place on the world.

<p>

<strong>Trace Mayer:</strong>  Yeah.

<p>

<strong>Dr. Adam Back:</strong>  And now you come into people and they have like flown from the previous conference.

<p>

<strong>Trace Mayer:</strong>  Yeah.

<p>

<strong>Dr. Adam Back:</strong>  You could just live on the bitcoins conferences circuit.  And, you know, Gavin obviously is not travelling that much.  But it's certainly, you know, can use a lot of your time presenting and flying to conferences and, you know, talking to the media and so forth.  And I think there are some other people who talk.

<p>

<strong>Trace Mayer:</strong>  Less talk, more code.

<p>

<strong>Dr. Adam Back:</strong>  Yeah.  Yeah.  I mean, that's good.  Well, it's a Cypherpunks thing write codes, what counts.  But, I mean, there are also some other interesting people who, you know, popularize and talk about bitcoin in a less technical way or in a semi technical way or write books, explaining details, you know.  There are a number of people in the space --

<p>

<strong>Trace Mayer:</strong>  Yeah.

<p>

<strong>Dr. Adam Back:</strong>  -- who specialized in that kind of thing.  But certainly, you know, Gavin did some of that stuff for a period of time.  I guess, still does.  Yes, so Wladimir is, sort of, heads down made the code changes.  And I think people in the development community who are actually being very happy with the way he's progressed the project and kept it agile in moving forward.

<p>

<strong>Trace Mayer:</strong>  Yeah.  It makes me wonder, I think, his PhD was in graphics cards of some type.  Makes me wonder if was mining at all in his research.

<p>

<strong>Dr. Adam Back:</strong>  I don't actually know.  Maybe that's his entrance to it, right?

<p>

<strong>Trace Mayer:</strong>  I have to ask him when I corner him one of these days.

<p>

<strong>Dr. Adam Back:</strong>  Right.  Right.  Because, I mean, actually there was a good period of time though where you could make good money mining with graphics cards.

<p>

<strong>Trace Mayer:</strong>  Oh, yeah.  I mean, I know quite a few people.  They were working on their physics PhDs or in a biotechnology lab or something.  And they were using their computer resources to --

<p>

<strong>Dr. Adam Back:</strong>  Yeah.

<p>

<strong>Trace Mayer:</strong>  -- mine a bunch of bitcoins.

<p>

<strong>Dr. Adam Back:</strong>  I had a go myself.  But unfortunately, like, early 2013, when I had a go and it was a kind of tail end of profitability on money.

<p>

<strong>Trace Mayer:</strong>  All on the GPUs.

<p>

<strong>Dr. Adam Back:</strong>  Yeah, because the ASICs will start to pile in.

<p>

<strong>Trace Mayer:</strong>  Yeah.

<p>

<strong>Dr. Adam Back:</strong>  And it wasn't long before the GPUs were like electrically inefficient.  So --

<p>

<strong>Trace Mayer:</strong>  Uh-huh.

<p>

<strong>Dr. Adam Back:</strong>  I only got a couple of months in.

<p>

<strong>Trace Mayer:</strong>  So, you know, who else do we have that you kind of mention?  I mean, what about bitcoin scalability?  Is there anybody working, like, done really good work in that area?

<p>

<strong>Dr. Adam Back:</strong>  Yes.  So, I mean, we could start with Matt Corallo who worked with --

<p>

<strong>Trace Mayer:</strong>  But I thought he was like twelve.

<p>

<strong>Dr. Adam Back:</strong>  No, he finished his bachelor's degree.  And I think he compressed it from four years to three years so that he could get into bitcoin earlier and actually as I understand it he wrote a whole bunch of code while he was doing his degree.

<p>

<strong>Trace Mayer:</strong>  Oh, really?  Wow.

<p>

<strong>Dr. Adam Back:</strong>  So like lots of code.

<p>

<strong>Trace Mayer:</strong>  That's how he was so prolific at such a young age.

<p>

<strong>Dr. Adam Back:</strong>  Yeah.  So -- and actually there was somebody younger than Matt.  Forrest Voight who implemented the P2Pool protocol, which is a kind of clever way to have a peer-to-peer pool behavior so that, you know, when you have a bitcoin mining pool there's some element of trust and you're using this kind of centralized infrastructure.  So there's an element of centralization and centralization tends to weaken bitcoins' security assurances and so Forrest Voight had worked on making a peer-to-peer version.

<p>

So it has a kind of mini-mining thing going on where you send through proofs of work though smaller than the target for bitcoin by some degree.  And it counts for work on that basis and so it's a quite clever interplay between a sort of sub-problem with smaller proofs of work.  And then when somebody eventually finds a full proof of work, it pays out the contributors of the smaller proofs which are called shares directly in a way that, you know, there's no central point needed.  So when you mine on the pool, the pool collects the bitcoins and then --

<p>

<strong>Trace Mayer:</strong>  The block reward and then, yeah.

<p>

<strong>Dr. Adam Back:</strong>  And then it pays them out later in.  So P2Pool was able to do that in a, you know, in a relatively secure sort of incentive compatible way and a peer-to-peer network.  It was quite a clever feat.  And for whatever reason, it doesn't see that much active use.  I think the highest rate one is like maybe one percent or something.  But it could certainly see wider use and I don't know how old he is exactly but he must have been like 16, 17, when he was doing some of the stuff.  So it's pretty impressive.  And I think he is in university now.  And I don't know (inaudible 00:27:13).

<p>

<strong>Trace Mayer:</strong>  Yeah, unbelievable.

<p>

<strong>Dr. Adam Back:</strong>  So, I mean, it shows the bitcoin is really, you know, a meritocracy.  It's really about, you know, can you contribute, can you understand this kind of bleeding edge cryptography and game theory and networking, consensus logic and develop really useful codes that improves bitcoin or adds new features to bitcoin.  And so it's not about the age or about would they have a PhD or not.  Though it certainly seems to be a --

<p>

<strong>Trace Mayer:</strong>  A common theme.

<p>

<strong>Dr. Adam Back:</strong>  I didn't actually realize Wladimir had a PhD and somebody mentioned to me quite recently.  I was like I looked it up and say, "Oh, okay.  He has PhD, too."

<p>

<strong>Trace Mayer:</strong>  Once.  And so many people who have left their PhD programs to work on bitcoin like Ryan X. Charles left his physics PhD.

<p>

<strong>Dr. Adam Back:</strong>  Right.

<p>

<strong>Trace Mayer:</strong>  I've ran into a lot, a lot of people, you know, pitching in different business side, plans or ideas to me that are, you know --

<p>

<strong>Dr. Adam Back:</strong>  Yup.

<p>

<strong>Trace Mayer:</strong>  -- just very, very commercial.

<p>

<strong>Dr. Adam Back:</strong>  Well, I think that's the thing.  I mean, people are looking at bitcoin and thinking this is, you know, extremely exciting moment of technical innovation in the world and it's a kind of one-off event.  So they tend to sort of drop what they're doing to catch the timing of it.

<p>

<strong>Trace Mayer:</strong>  Oh, I call this a fun.

<p>

<strong>Dr. Adam Back:</strong>  And, yeah, so we also could talk about the lightning network which was by Joseph Poon.

<p>

<strong>Trace Mayer:</strong>  Oh, yeah.  Oh.  Yeah, Joseph, I have only ran into him once and I just watched one of his presentations.

<p>

<strong>Dr. Adam Back:</strong>  Uh-huh.

<p>

<strong>Trace Mayer:</strong>  But -- man, I was like "Need to come out on this one."

<p>

<strong>Dr. Adam Back:</strong>  Yeah.  Actually, I was --

<p>

<strong>Trace Mayer:</strong>  I mean, why is that?  Why did -- it's interesting you would have a similar kind of opinion on him.  I mean, why?

<p>

<strong>Dr. Adam Back:</strong>  Oh, yeah.  So actually I should step back to Matt Corallo.  So Matt Corallo together with Mike Hearn implemented payment channels, using the job of bitcoin library that Mike Hearn had developed it.  So, again, a starting point and micropayment channels are quite interesting but they're point to point and unidirectional.  So you tend to exhaust them and they're mostly useful for sort of recurring streaming payments or something like that.  So it produce streaming service or something.

<p>

Now, there were ideas about creating a Payment Hub so that you could route payments through a Hub and possibly do it in way where you wouldn't have to trust the Hub with your money, but it's still kind of limited because it's unidirectional.  So every time you run out of funds on a channel, you had to get back to the blockchain and start another channel.  And so it doesn't, you know, it kind of keeps using blockchain transaction space.

<p>

And so the kind of thing that came out Left Field and surprise people when Joseph Poon and Thaddeus Dryja released the Lightning white paper is that they found a way to significantly move that forward on like two or three fronts, so.

<p>

<strong>Trace Mayer:</strong>  Oh, wow.

<p>

<strong>Dr. Adam Back:</strong>  The first thing is that the channels are reversible.  Okay?  And actually, yeah, so I'll come back to that in a minute.  And secondly, that they found a way to -- so they proposed the idea that you could rebalance channels so if each user maintains multiple channels to the network to different nodes and a node in the network that is providing service runs our funds on one channel, it could pay another node or a user negative fees to sort of do a contra trade where, you know, they pay themselves.  So they pay the node money back and they receive corresponding funds on another channel.  And that would enable the node that's trying to provide service to regain access to funds to continue providing service.

<p>

So they are willing to pay somebody to rebalance because then they can onwards sell that payment routing to a paying customer kind of thing.  And that, in fact, kind of adds the possibility of, sort of, high velocity longer lived movement of funds within the network without having to hit the chain.  Because even though the channels are now reversible, if there's a net flow in one direction you could still run dry.  You know, if users keep --

<p>

<strong>Trace Mayer:</strong>  Right.

<p>

<strong>Dr. Adam Back:</strong>  -- buying things and you can't refill them.  But it opens up the possibility for sort of three-way trade, you know.  So if I'm a user and I keep going to Starbucks, like, put 100 bucks in there and I keep buying coffee and I kind of run out, right?  So what does Starbucks do with the money?  Well, they're paying people in your stalls.  They probably sell the coins.  And so when they sell the coins they sell it to an exchange.  And what does the exchange do?  Well --

<p>

<strong>Trace Mayer:</strong>  They sell to you to go buy more coffee.

<p>

<strong>Dr. Adam Back:</strong>  So they sell it to me and I go, "I need to buy some more bitcoin so I could buy it."  So that kind of triangular trade, that doesn't have to hit the blockchain, that can re-circulate in Lightning, right?  So if you figure out a way to kind of put that all together, you can make that work and so there's somebody else working on -- sorry, we should just finish with the Lightning.  So Joseph Poon and Thaddeus Dryja proposed this.  And Thaddeus, you were talking about PhDs or somebody else.  I saw on his C.V. that, I don't know him that well but he was partway through a PhD and you have to wonder if that was another kind of --

<p>

<strong>Trace Mayer:</strong>  Distract, diverted.

<p>

<strong>Dr. Adam Back:</strong>  -- oh, bitcoin is too exciting.  I have to put this on hold kind of thing.

<p>

<strong>Trace Mayer:</strong>  Oh.

<p>

<strong>Dr. Adam Back:</strong>  And so about Lighting briefly.  So I mentioned the reversible payment channel.  So it turns out there's a guy called Christian Decker who was a PhD student at ETZH, which is a kind of prestigious technical university in Zurich, Switzerland.  And he invented something called a Duplex channel which is a component of Lightning.  And actually, he kind of invented almost the same thing as Lightning, possibly slightly before lighting but because he put it through the peer review academic publishing channels, lightning came out, and reach public awareness before his publication date.  So I think he was, kind of, (inaudible 00:32:29) that, you know, like they stole the limelight and he had a similar idea.  And say --

<p>

<strong>Trace Mayer:</strong>  Early bird catches the worm.

<p>

<strong>Dr. Adam Back:</strong>  Yes.  So Christian Decker is another interesting story, which is, he was involved in bitcoin quite early and he managed to -- you know, he was in university and he managed to persuade the distributed computing research group at ETZH to allow him to do a bitcoin focused PhD.  So he is finishing his degree.

<p>

<strong>Trace Mayer:</strong>  Wow.

<p>

<strong>Dr. Adam Back:</strong>  I think in a few months.

<p>

<strong>Trace Mayer:</strong>  He will probably be the first bitcoin PhD.

<p>

<strong>Dr. Adam Back:</strong>  He will be -- exactly, I believe that will be the case.

<p>

<strong>Trace Mayer:</strong>  Isn't that cool?

<p>

<strong>Dr. Adam Back:</strong>  And I think, I mean, I don't know too much about the research group there, but I think it's, you know, people talk about bitcoin and there being a patient zero, you know, like so somebody who introduced many people to bitcoin and then people get excited and they introduced other people.  So I think he was -- Christian Decker was kind of the star of that distributed computing group having more people researching bitcoin and getting interested in bitcoin because, you know, in the early days of it, it's very, very early days -- and it was kind of, you know, kind of left field thing to persuade an academic distributor system guy that, you know, I want to add PhD on this topic because it sounds like some kind of open source project and maybe not --

<p>

<strong>Trace Mayer:</strong>  Yeah.

<p>

<strong>Dr. Adam Back:</strong>  -- in line with the usual things they would research.

<p>

<strong>Trace Mayer:</strong>  You know, I mean, not to hijack it, but how about Dr. Timo Hanke.  I think he is PhD in cryptography and he had done some very innovative stuff when it came to the actual cryptography in the mining.  Maybe you had some comments on that.

<p>

<strong>Dr. Adam Back:</strong>  Yes.  So I talked with him a few times.  I met him at the financial crypto conference and I think also at one of the bitcoin conferences.  And as you say, he was actually a professor of computer science at German University with a specialization in cryptography and he took a hold on his career to do bitcoin.

<p>

<strong>Trace Mayer:</strong>  Yeah.

<p>

<strong>Dr. Adam Back:</strong>  Yeah.  So, you know, this --

<p>

<strong>Trace Mayer:</strong>  Yeah, I remember because he was asking me about it, like, I believe.

<p>

<strong>Dr. Adam Back:</strong>  -- this extends not just to students but, you know, actually a tenured professors the bitcoin has to draw.  So he worked for CoinTerra, I believe.  And actually, I think he relocated from Germany to the U.S. and I'm not sure, they are in the U.S. somewhere or they were particularly to help with optimizing the proof of work in silicon. So actually the mining equipment, it's aiming for electrical efficiency.  And as we've gone through, you know, as we came off to tail end of graphics cards and going to ASICs, they kind of -- Bitcoin ASIC industry blew through like decades of chip advancement going from 113 nm to 65, 40, 28.  Now, there are a couple of companies at 22 --

<p>

<strong>Trace Mayer:</strong>  Fourteen and sixteen, yeah.

<p>

<strong>Dr. Adam Back:</strong>  -- and somebody trying to do 14 as well.  So part of the -- you know, it's really fierce competition because bitcoin mining is a kind of mirror, sort of, commodity mining economics where it sort of, you know, it's a race for efficiency and the most efficient player wins.  And so it's not just a matter of moving to the next process but I know some of the manufacturers are on their sort of third generation or more on the same process.  So even on 28 nm there have been moves that have gone, you know, within like a factor of four in electrical efficiency improvements just by sort of micro-optimizing the cryptography trimming off unneeded outputs on the beginning and the end of the SHA-256 loop unrolling and just optimizing the circuit and re-arranging things to minimize electrical use and also, sort of, hand layouts.

<p>

So people don't know about hardware, maybe.  But there are sort of a high level definition languages.  So the easy route is to use a high level definition language, use the library provided by T.S.M.C. or the chip -- the process provider and compile the thing test it in a simulator and hand it off.  And that gets you a certain way, but in the same way that on a CPU you can usually get quite a bit more performance by hand optimizing the assembler.  There's an analog in the chip load where you can cause to increasing levels of, sort of, manual expert layout on it.  Some extremely clever people in the electronics and chip manufacturer side of this business who are really kind of pushing the envelope with the electrical efficiency.  So, all kinds of interesting innovations that have bitcoin has, kind of, helped motivates.

<p>

<strong>Trace Mayer:</strong>  Help start.  Well, I suppose we could go on forever just, you know, there's Sergio De Lerner, Manuel Araoz, Jeff Garzik over BitPay, gosh, who might be some others that have made some good contributions not that we need to go into too much depth of what they've done?

<p>

<strong>Dr. Adam Back:</strong>  Yeah.  I mean, that is, you know, I mean, all those people you mentioned, Sergio actually, I think, oh, maybe there's another bitcoin PhD.  He did his PhD in some kind of smart contracting and cryptography to play fair games, like to do cryptographic --

<p>

<strong>Trace Mayer:</strong>  Sergio did?

<p>

<strong>Dr. Adam Back:</strong>  Yeah.

<p>

<strong>Trace Mayer:</strong>  Oh, interesting.

<p>

<strong>Dr. Adam Back:</strong>  His PhD is, I think, Appcoin or something.  So he has a whole protocol for playing different games, including (inaudible 00:37:15)

<p>

<strong>Trace Mayer:</strong>  Yeah.

<p>

<strong>Dr. Adam Back:</strong>  And doing it in a way there's no hash edge and there's no -- you don't have to trust anybody and it's all enforced by the network.

<p>

<strong>Trace Mayer:</strong>  Yeah.  I think they're --

<strong> </strong>

<strong>Dr. Adam Back:</strong>  And --

<p>

<strong>Trace Mayer:</strong>  -- yeah, and there's Dr. Gronager.  He had been over at Kraken and has a PhD in quantum physics.

<p>

<strong>Dr. Adam Back:</strong>  Oh, yeah.  So --

<p>

<strong>Trace Mayer:</strong>  And quantum mechanics and then --

<p>

<strong>Dr. Adam Back:</strong>  -- I think he implemented one of the libraries -- I mean, an alternative implementation or refactoring this bitcoin and done some other work.  Now, -- so, you know, somebody else who's done a bunch of stuff is Rusty Russell, who is a Linux kernel developer.  He wrote much of the sort of significant -- I mean, I'm not from a Linux kernel background but as I understand it he wrote significant parts of the Linux Networking Stack.  And he's been working with Linux kernel stuff for something like 18 years or something.

<p>

<strong>Trace Mayer:</strong>  Oh, wow.

<p>

<strong>Dr. Adam Back:</strong>  And he got interested in bitcoin sometime last year, I think, and took a sabbatical from IBM and where he was working with Linux kernel stuff and, you know, implemented a sort of sharding high scalability approach that possibly could be applicable for bitcoin.  So he is now working on the Lighting network and the, sort of, routing of payments.  And routing is not just about shortest path or best latency path and reliability characteristics, but also about the cheapest path in terms of the fees that the nodes you would route through are advertising.  So he is working on that.  And it's a great thing for bitcoin that he is because probably few people in the world that can touch him in terms of network, low-level network and routing expertise at the implementation level.

<p>

<strong>Trace Mayer:</strong>  You know, and it just goes to show just how much of a community effort bitcoin is and just how many really talented and gifted computer scientists.  And just across the whole spectrum in bitcoin.

<p>

<strong>Dr. Adam Back:</strong>  Yeah.

<p>

<strong>Trace Mayer:</strong>  I mean, we've got ourselves $1 billion a year industry.  We've got a lot of people making their livelihoods in this field.  And a lot of people driving forward the very cutting edge of computer science and networking and monetary theory, all of these things.  There's so much fun and a lot of camaraderie too.

<p>

<strong>Dr. Adam Back:</strong>  Yeah.  I mean, it's lot of impressive work being done over the last few years on really improving the performance characteristics and re-factoring, re-architecting the CPU memory footprint and the algorithmic complexity of the codes and, sort of, major new protocol upgrades.  So Gregory --

<p>

<strong>Trace Mayer:</strong>  Because, I mean, it needed a lot of work.

<p>

<strong>Dr. Adam Back:</strong>  Yeah.

<p>

<strong>Trace Mayer:</strong>  You knew, I mean, Satoshi had released it but even Gavin, I mean, he was pretty much all by himself when you look at the GitHub commit history.

<p>

<strong>Dr. Adam Back:</strong>  Yup.

<p>

<strong>Trace Mayer:</strong>  It just -- it needed a lot of work, you know, over the last two, three years that a lot of networks been done.

<p>

<strong>Dr. Adam Back:</strong>  Yeah.  So Greg had mentioned to me recently this fact that the -- so when you join a new node to the network, it has -- it catches up with the entire transaction history.  And so he mentioned to me that there had been four times, I think it was, through the history of bitcoin, where the transaction had to catch a new node up on the network had taken about a day.  And so he'd done a bunch of optimization and got it down to an hour.  And then now as more transactions are piled on and more users so the blocks were fuller, it kind of bulk down and go back to a day again.

<p>

And so Pieter Wuille did the most recent one with a headers first, a much faster, kind of, major refractor of the, kind of, block catch up algorithm which was an extensive piece of work and it took a long piece of -- a period of time.  And that's been now a very effective rolled out relatively recently and allows a full nodes to again catch up and something like an hour or two depending on your network and CPU, so on.

<p>

But I think the interesting thing there is that we may be at the end of the line almost because, you know, at the beginning there was a huge wish-list of things of varying complexity that it could be done to optimize this particular part of the protocol.  And I think it's almost at the end of the line that there's really not that much more that you can optimize about that.

<p>

So at this stage, you know, it comes into the sort of throughput and scale discussion that from hereforth the kind of block catch-up will get slower and there won't be that much more we can do about it other than the sort of bandwidth increases and there may be a couple of minor things, but nothing major left.

<p>

<strong>Trace Mayer:</strong>  Well, I'm sure that as a community, you know, as Nick Szabo said, you know, we need good, solid hard work in the computer science to really solve a --

<p>

<strong>Dr. Adam Back:</strong>  Right.

<p>

<strong>Trace Mayer:</strong>  -- lot of these problems because we've got a production system, billions of dollars of value at stake, a lot of people building on top of it and -- yeah.

<p>

<strong>Dr. Adam Back:</strong>  Yeah.  So, I mean, you mentioned Nick there.  So he is obviously somebody, you know, quite central to this whole picture, Nick Szabo.  So as we mentioned in the previous episodes, he invented a number of, kind of contributing things to bitcoin including smart contracts back in 1995 and bit gold, kind of, bitcoin precursor that was an outline design with some kind of human market elements as its inflation control.

<p>

And he's been quite active in bitcoin trying to add, kind of -- he's a computer scientist and trying to add a more formal dimension that, you know, it's a system at this point with a very large amount of money dependant on it and, you know, changes that we made should come with, you know, security proofs and empirical data and analysis and so forth.

<p>

<strong>Trace Mayer:</strong>  And testing, and simulations.

<p>

<strong>Dr. Adam Back:</strong>  Right.

<p>

<strong>Trace Mayer:</strong>  We -- like, we're not just playing Kitty Ball anymore.  We've got to have real solid computer science and testing and professionalism done with anything we want to do as we extensify it.

<p>

Thanks so much for going over some of these, going over some of our major contributors here in bitcoin and for taking the time to do this week with Dr. Adam Back.  I think a lot of people will find it very helpful and insightful in where bitcoin has come from and where bitcoin is going to go.  So thanks for being with us, Dr. Back.

<p>

<strong>Dr. Adam Back:</strong>  All right.  Thanks.
