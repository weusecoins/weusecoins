---
layout: post
title: What is Dogecoin?
author: Trace Mayer, J.D.
authorurl: https://www.weusecoins.com/trace-mayer-bitcoin-expert/
published: true
toc: 
  gs: Getting Started
  dm: Dogecoin Mining
  how: How to Mine Dogecoins
---

<img src="/images/dogecoin.png" alt="what is dogecoin" align="right">Dogecoin is a fun, new and rapidly growing form of digital currency. This form of digital currency is called "cryptocurrency"; a type of digital currency. Cryptocurrency is completely anonymous, decentralized, and extremely secure.
<p>
<iframe width="700" height="394" src="https://www.youtube.com/embed/_KVZmS_UO5I" frameborder="0" allowfullscreen></iframe>

{% include page-toc.html %}


<p>
Dogecoin is used with a wallet on your computer, your smartphone, or a website.
You can use it to buy goods and services, or trade it for other currencies (both other cryptocurrencies or traditional currency like US dollars).
<p>
One of the most popular uses for Dogecoin is "tipping" fellow internet-goers who create or share great content. Think of it as a more meaningful "like" or upvote, with real value that can be used all across the internet.
<p>
<h2 id="gs">Getting started with Dogecoin</h2>
It is very easy to start using Dogecoin.
<p>
<ul><li>Step 1: Get A Dogecoin Wallet.</li>
<li>Step 2: Get Some Dogecoin at the <a href="https://www.kraken.com/">best Dogecoin exchange</a>.</li>
<li>Step 3: Use Your Dogecoin.</li>
<li>Step 4: Stay Up-to-Date.</li></ul>
<h2 id="dm">What is Dogecoin mining?</h2>
If you've never <a href="http://www.bitcoinmining.com/what-is-dogecoin-mining/">mined Dogecoins</a> before then you can follow these steps to test your hardware:
<p>If you want to mine Dogecoins with your CPU, double click on the file "MineWithCPU.bat" from the folder "Mine Dogecoins with CPU". If your hardware can handle it, your computer will begin mining Dogecoins for a test worker I've set up at the mining pool Doge Scryptpool. It could take several minutes before you get a share though. Mining Dogecoins with your CPU isn't very effective, but you can experience how it works by executing this file.
<p>If you want to mine Dogecoins with your GPU, double click on the file "MineWithAMDGPU.bat" from the folder "Mine Dogecoins with GPU/AMD" if your graphic card has been manufactured by AMD (Ati). If your card has been made by Nvidia, double click on the file "MineWithNvidiaGPU.bat" from the folder "Mine Dogecoins with GPU/Nvidia". If your hardware can handle it, and the miner I've included recognizes correctly the graphical card you've got on your computer, it will begin mining Dogecoins for another test worker I've set up at the mining pool Doge Scryptpool. It could take minutes before you get a share though. Mining Dogecoins with your GPU is the way to go nowadays. There are people who have several graphic cards set up to mine Dogecoins at the same time, so it might take you several days to get a considerable amount of Dogecoins with a single GPU. You can experience how GPU mining works on your card by executing the corresponding file though.
<p>Now that you have tested your hardware and know you can mine Dogecoins correctly, you may join a mining pool and change the name of my workers and the URL of Scryptpools which you can see if you edit the files "MineWithCPU.bat" and "MineWith(AMD/Nvidia)GPU.bat". Write instead the names of the workers you created on your pool of choice and its URL:port so as you can mine Dogecoins for yourself (this URL:port information is given to you when you make an account on a mining pool).
<h2 id="how">How to mine Dogecoins</h2>
If you do not know how to join a mining pool then this may be a problem.
<p>If you want to mine Dogecoins solo (it's a possibility if you have VERY good hardware), follow these steps:
<p>Copy the file "dogecoin.conf" provided in this package to your Dogecoin working directory (most likely "C:\Users\YOURNAME\AppData\Roaming\Dogecoin"). Now navigate to the directory where you unzipped Dogecoin (most likely "C:\Program Files (x86)\Dogecoin\") and execute dogecoin-qt.exe. Wait until you are fully synchronized with the network.
<p>Execute the file "SoloMineWithCPU.bat" from the folder "Mine Dogecoins with CPU", the file "SoloMineWith(AMD/Nvidia)GPU.bat" from the folder "Mine Dogecoins with GPU/(AMD/Nvidia)" or both of them. Your computer resources will begin mining Dogecoins. It could take you a LOT of time before you find a full block. Or maybe you are extremely lucky and find one in one minute. It's impossible to know!
<p>Note 1: the miner provided for CPU mining is Pooler's CPUminer 2.3.2, the one for AMD GPU mining is CGMiner 3.7.2 and the one for Nvidia GPU mining is CudaMiner-2013-11-15. Other miners exist which might suit your hardware better and increase your mining speed.
<p>Note 2: some antivirus programs consider all cryptocoin miners malware. They are not! The problem is that some bad people included them inside other legit packages of software so as they would mine for them on other computers without their owner's knowledge. When they were found, antivirus companies labeled them as malicious software.
