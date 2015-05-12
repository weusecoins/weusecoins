---
layout: post
title: What is Peercoin?
author: Trace Mayer, J.D.
authorurl: https://www.weusecoins.com/trace-mayer-bitcoin-expert/
published: true
---

<img src="/images/peercoin.png" alt="what is peercoin" align="right">
<p>Peercoin seeks to be the most secure cryptocoin at the lowest cost, by rewarding all users for strengthening the network.
<p>
<iframe width="700" height="394" src="https://www.youtube.com/embed/7tra0vmparI" frameborder="0" allowfullscreen></iframe>
<p>﻿Peercoin was launched in 2012, making it one of the oldest and most reliable cryptocoin networks in existence. ﻿Peercoin’s annual inflation rate has averaged below 5% during the year 2014, and continues to fall. See peerchain.net for detailed historic data. ﻿Peercoin is the first proof-of-stake coin, which means it doesn’t require massive computing power to secure the network. Get into the nitty-gritty with the Peercoin whitepaper. ﻿After Peercoins are held for 30 days, they are eligible to earn a 1% annualized reward.
<p>Proof of Work mining is used to spread the distribution of new coins, while the security of the network is maintained entirely by Proof of Stake minting. This means that Bitcoin mining vulnerabilities such as Selfish Mining do not impact Peercoin security. ﻿Peercoin uses the same mining algorithm as Bitcoin, known as SHA-256. Any hardware that works on the Bitcoin network can also be used to mine Peercoins. ﻿The reward for mining a block gradually declines as the computing power of the network grows. Over time, mining will have an ever-decreasing impact on the growth of the money supply.
<h2>Getting started with Peercoin</h2>
<p>It is very easy to start using Peercoin.
<p>
<ul><li>Step 1: Get A Peercoin Wallet.</li>
<li>Step 2: Get Some Peercoin at the <a href="https://www.kraken.com/">best Peercoin exchange</a>.</li>
<li>Step 3: Use Your Peercoin.</li>
<li>Step 4: Stay Up-to-Date.</li></ul>
<p>
<h2>What is Peercoin Mining?</h2>
<iframe width="700" height="394" src="https://www.youtube.com/embed/13Q9tg5axVc" frameborder="0" allowfullscreen></iframe>
<p>﻿Currently, in order to mint new coins, users must keep a wallet connected to the network, which is known as a hot wallet. Hot wallets are at a greater risk of malware stealing their coins, because they must remain connected to the internet during the minting process. In the next version of Peercoin, special minting keys will allow users to mint while keeping their spending keys entirely offline. ﻿Today, the network uses centralized checkpointing to protect against attacks. The need for this security decreases as the network grows, so the next version will make these checkpoints optional. A future version will turn off checkpoints by default.
<p>Transactions are processed almost immediately via Peercoin’s blockchain technology. A block explorer instantly verifies an incoming payment. ﻿Once a payment has been confirmed by the network, it is secured by world-class cryptography, making it impossible for the customer to reverse. ﻿To make a payment, each sender pays a fee of just 0.01 Peercoin. As a merchant, you pay absolutely nothing.
<h2>How to mine Peercoins</h2>
<p>If you have never mined Peercoins before then this could be a problem but you can follow these steps to test your hardware:
<p>If you want to mine Peercoins with your CPU, double click on the file "MineWithCPU.bat" from the folder "Mine Peercoins with CPU". If your hardware can handle it, your computer will begin mining Peercoins for a test worker I've set up at the mining pool Coinotron. It could take hours before you get a share though. Mining Peercoins with your CPU isn't effective, but you can experience how it works by executing this file.
<p>If you want to mine Peercoins with your GPU, double click on the file "MineWithGPU.bat" from the folder "Mine Peercoins with GPU". If your hardware can handle it, and the miner I've included recognizes correctly the graphical card you've got on your computer, it will begin mining Peercoins for another test worker I've set up at the mining pool Coinotron. It could take minutes before you get a share though. Mining Peercoins with your GPU is far more efficient than doing it with your CPU, but still not good enough in a world where ASICs made specifically to mine coins using a SHA-256 algorithm (and Peercoin qualifies) reign supreme. You can experience how GPU mining works by executing this file though.
<p>Now that you have tested your hardware and know you can mine Peercoins correctly, you may join a mining pool and change the name of my workers and the URL of Coinotron which you can see if you edit the files "MineWithCPU.bat" and "MineWithGPU.bat". Write instead the names of the workers you created on your pool of choice and its URL:port so as you can mine Peercoins for yourself (this URL:port information is given to you when you make an account on a mining pool).
<p>If you don't know how to join a mining pool then this may be a problem.
<p>If you want to mine Peercoins solo (which is not recommended, because it's almost impossible that you ever find a block on your own), follow these steps:
<p>Copy the file "ppcoin.conf" provided in this package to your Peercoin working directory (most likely "C:\Users\YOURNAME\AppData\Roaming\PPCoin"). Now navigate to the directory where you installed Peercoin (most likely "C:\Program Files (x86)\PPCoin\") and execute ppcoin-qt.exe. Wait until you are fully synchronized with the network.
<p>Execute the file "SoloMineWithCPU.bat" from the folder "Mine Peercoins with CPU", the file "SoloMineWithGPU.bat" from the folder "Mine Peercoins with GPU" or both of them. Your computer resources will begin mining Peercoins. It could take you a LOT of time before you find a full block. Or maybe you are extremely lucky and find one in one minute. It's impossible to know!
<p>Now let's have a look at that mysterious third folder...
<p>This cryptocoin is designed so as you can mint Peercoins through another method called Proof of Stake (PoS). I won't explain here how it works. I'll simply tell you that you can earn an interest of 1% per year on your current Peercoin balance by activating it (this means you must already have some coins in order to earn something!). Proceed as follows to take advantage of this option:
<p>Execute ppcoin-qt.exe (from "C:\Program Files (x86)\PPCoin\"). Wait until you are fully synchronized with the network. Encrypt your wallet through the Options menu. Choose a strong password, but not so much that you'll forget/lose it, because in that case you'll lose all your coins. Close the program.
<p>Copy the file "ppcoin.conf" placed inside the folder "Mint Peercoins with PoS" provided in this package to your Peercoin working directory ("C:\Users\YOURNAME\AppData\Roaming\PPCoin").
<p>Copy the file "MintWithProofOfStake.bat" placed inside the folder "Mint Peercoins with PoS" provided in this package to the directory ("C:\Program Files (x86)\PPCoin\daemon\").
<p>At this point you have your computer configured to mint Peercoins through PoS. Now every time you want to activate this method do the following:
<p>Execute ppcoin-qt.exe (from "C:\Program Files (x86)\PPCoin\"). Wait until you are fully synchronized with the network.
<p>Execute "MintWithProofOfStake.bat", which you put inside "C:\Program Files (x86)\PPCoin\daemon\" one moment ago. A cmd prompt will ask you for the password of your wallet. Write it there and press Enter. The cmd prompt will close.
<p>If you did everything correctly, there will be no warning at the bottom left corner of your ppcoin-qt program window and if you hover your mouse over the lock icon at the bottom right a message will appear stating that your "Wallet is encrypted and currently unlocked for block minting only" (give the program a minute for making these changes before you assume it's not working).
<p>Now all you have to do is leave the program open for as long as possible. On average, you'll get 1% of your current Peercoin balance each year the coins are sitting on your wallet, untouched.
<p>Note 1: the miner provided for CPU mining is Pooler's CPUminer 2.3.2 and the one for GPU mining is CGMiner 3.7.2. Other miners exist which might suit your hardware better and increase your mining speed.
<p>Note 2: some antivirus programs consider all cryptocoin miners malware. They are not! The problem is that some bad people included them inside other legit packages of software so as they would mine for them on other computers without their owner's knowledge. When they were found, antivirus companies labeled them as malicious software.
