---
layout: post
title: What is Litecoin?
author: Trace Mayer, J.D.
authorurl: https://www.weusecoins.com/trace-mayer-bitcoin-expert/
published: true
toc: 
  gs: Getting Started
  lm: Litecoin Mining
---

<img src="/images/litecoin.png" alt="what is litecoin" align="right">
<p>
Litecoin is a peer-to-peer Internet currency that enables instant, near-zero cost payments to anyone in the world. Litecoin is an open source, global payment network that is fully decentralized without any central authorities. Mathematics secures the network and empowers individuals to control their own finances. Litecoin features faster transaction confirmation times and improved storage efficiency than the leading math-based currency. With substantial industry support, trade volume and liquidity, Litecoin is a proven medium of commerce complementary to Bitcoin.
<p>
<iframe width="700" height="394" src="https://www.youtube.com/embed/q7B7S88RtV8" frameborder="0" allowfullscreen></iframe>
<p>

{% include page-toc.html %}

The Litecoin blockchain is capable of handling higher transaction volume than its counterpart - Bitcoin. Due to more frequent block generation, the network supports more transactions without a need to modify the software in the future. As a result, merchants get faster confirmation times, while still having ability to wait for more confirmations when selling bigger ticket items.
<p>
Miners are currently awarded with 50 new litecoins per block, an amount which gets halved roughly every 4 years (every 840,000 blocks). The Litecoin network is therefore scheduled to produce 84 million litecoins, which is 4 times as many currency units as Bitcoin.
<p>
Wallet encryption allows you to secure your wallet, so that you can view transactions and your account balance, but are required to enter your password before spending litecoins. This provides protection from wallet-stealing viruses and trojans as well as a sanity check before sending payments.
<p>
Litecoin is an open source software project released under the MIT/X11 license which gives you the power to run, modify, and copy the software and to distribute, at your option, modified copies of the software. The software is released in a transparent process that allows for independent verification of binaries and their corresponding source code.
<h2 id="gs">Getting started with Litecoin</h2>
It is very easy to start using Litecoin.
<p>
<ul><li>Step 1: Get A Litecoin Wallet.</li>
<li>Step 2: Get Some Litecoin at <a href="https://www.kraken.com/">Kraken</a> or <a href="/how-to-buy-litecoins/">another exchange</a>.</li>
<li>Step 3: Use Your Litecoin.</li>
<li>Step 4: Stay Up-to-Date.</li></ul>
<h2 id="lm">What is Litecoin mining?</h2>
If you have never <a href="http://www.bitcoinmining.com/what-is-litecoin-mining/">mined Litecoins</a> before then you can follow these steps to test your hardware:
<p>If you want to mine Litecoins with your CPU, double click on the file "MineWithCPU.bat" from the folder "Mine Litecoins with CPU". If your hardware can handle it, your computer will begin mining Litecoins for a test worker I've set up at the mining pool POOL-X. It could take several minutes before you get a share though. Mining Litecoins with your CPU isn't very effective, but you can experience how it works by executing this file.
<p>If you want to mine Litecoins with your GPU, double click on the file "MineWithAMDGPU.bat" from the folder "Mine Litecoins with GPU/AMD" if your graphic card has been manufactured by AMD (Ati). If your card has been made by Nvidia, double click on the file "MineWithNvidiaGPU.bat" from the folder "Mine Litecoins with GPU/Nvidia". If your hardware can handle it, and the miner I've included recognizes correctly the graphical card you've got on your computer, it will begin mining Litecoins for another test worker I've set up at the mining pool POOL-X. It could take minutes before you get a share though. Mining Litecoins with your GPU is the way to go nowadays. There are people who have several graphic cards set up to mine Litecoins at the same time, so it might take you several days to get an entire Litecoin with a single GPU. You can experience how GPU mining works on your card by executing the corresponding file though.
<p>Now that you have tested your hardware and know you can mine Litecoins correctly, you may join a mining pool and change the name of my workers and the URL of POOL-X which you can see if you edit the files "MineWithCPU.bat" and "MineWith(AMD/Nvidia)GPU.bat". Write instead the names of the workers you created on your pool of choice and its URL:port so as you can mine Litecoins for yourself (this URL:port information is given to you when you make an account on a mining pool).
<p>If you don't know how to join a mining pool then this may be a problem.
<p>
If you want to mine Litecoins solo (it's a possibility if you have VERY good hardware), follow these steps:
<p>
Copy the file "litecoin.conf" provided in this package to your Litecoin working directory (most likely "C:\Users\YOURNAME\AppData\Roaming\Litecoin"). Now navigate to the directory where Litecoin was installed (most likely "C:\Program Files (x86)\Litecoin\") and execute litecoin-qt.exe. Wait until you are fully synchronized with the network.
<p>
Execute the file "SoloMineWithCPU.bat" from the folder "Mine Litecoins with CPU", the file "SoloMineWith(AMD/Nvidia)GPU.bat" from the folder "Mine Litecoins with GPU/(AMD/Nvidia)" or both of them. Your computer resources will begin mining Litecoins. It could take you a LOT of time before you find a full block. Or maybe you are extremely lucky and find one in one minute. It's impossible to know!
<p>Note 1: the miner provided for CPU mining is Pooler's CPUminer 2.3.2, the one for AMD GPU mining is CGMiner 3.7.2 and the one for Nvidia GPU mining is CudaMiner-2013-11-15. Other miners exist which might suit your hardware better and increase your mining speed.
<p>
Note 2: some antivirus programs consider all cryptocoin miners malware. They are not! The problem is that some bad people included them inside other legit packages of software so as they would mine for them on other computers without their owner's knowledge. When they were found, antivirus companies labeled them as malicious software.
