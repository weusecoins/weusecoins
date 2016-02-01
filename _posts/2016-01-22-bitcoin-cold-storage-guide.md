---
layout: post
title: Bitcoin Cold Storage Guide
author: Jordan Tuwiner
authorurl: /jordan-tuwiner/
description: Learn how to secure your bitcoins offline.  
published: true
seotitle: Secure Bitcoin Cold Storage with Paper, Hardware & Software Wallets
---
Bitcoin cold storage is achieved when Bitcoin private keys are created and stored in a secure offline environment. Cold storage is important for anyone with bitcoin holdings. Online computers are vulnerable to hackers and should not be used to store a significant amount of bitcoins. 

There are three ways to create secure Bitcoin cold storage: paper wallets, hardware wallets, and offline computers using software wallets. 

## Paper Wallets
Paper wallets were the most popular form of cold storage before hardware wallets and offline software wallets hit the market. 

Creating a 100% secure paper wallet requires some technical knowledge, an offline computer or bootable operating system, a USB flash drive, a printer, and some patience. Here is a basic guide for creating a secure paper wallet:

### 1. Security 

Not all paper wallets are created equally. There are paper wallets and there are secure paper wallets. If your goal is to secure bitcoins, you should follow each step and take all security precautions. Some printers, for example, store data and could leak your private keys. It is a good idea to use a dedicated printer or offline printer so that no data about your paper wallet can be leaked or hacked. 

Paper wallets by default are created using the random number generator on your computer. This requires trust in your computer to create a truly random number. To remove this need for trust, create the entropy for your paper wallet by using dice. We'll get into that later in this tutorial. 

### 2. Decide How to Create your Paper Wallet

There are a number of tools that make it easy to create a paper wallet. The most popular of which is [bitaddress.org](https://www.bitaddress.org/), which we'll use this in this example. BitAddress is [open source](https://github.com/pointbiz/bitaddress.org). 

First, open bitaddress.org in your browser. Save the page as an HTML file to your desktop and move it to a USB drive. From the USB we can move bitaddress to your offline computer or bootable operating system. 

bitaddress can be used online, but since we want to create secure cold storage we need to download the source file and run it on an offline computer. Using a bootable operating system also provides the same benefits as an offline computer. If you wanted to make paper wallets to give to your friends, printing directly from bitaddress.org on an online computer would be fine for small amounts. But not for secure storage. 

### 3. Opening BitAddress

Bitaddress can automatically create paper wallets using your computer's random number generator. Just navigate to the "paper wallets" tab and you’ll be able to create paper wallets in bulk. The default paper wallet looks like this:

![paper wallet](/images/default-paper-compressor.png)

If you want to trust your computer’s random number generator, go ahead and print the wallets generated on this page But since we want to create the most secure form of storage possible, we’re going to show you how generate the RNG yourself. 

### 4. Generating RNG

To generate your own entropy you’ll need five 6-sided dice, preferably high quality casino dice for true random numbers. 

Roll the five dice and arrange in any order to create one 5-digit number. Use [this dice number list](http://world.std.com/~reinhold/dicewarewordlist.pdf) to obtain a word for the roll. If, for example, you rolled *11121*, your word would be *aaron*. Repeat this 24 times, since you'll need 24 words for a secure seed. 

Write down each word on one piece of paper like this. This will create the seed that will be used as the random entropy for your paper wallets. 

Create multiple copies of the word list and store in multiple locations. Laminate each copy and store in a fireproof safe if possible. 

### 5. Brain Wallet

Now we need to input our high entropy seed into bitaddress. Navigate to the “Brain Wallet” tab on bitaddress. In the “Enter passphrase” and “Confirm Passphrase” fields, enter the 24-word seed you just created. 

![brain wallet](/images/brainwallet-compressor.png)

Once you enter your 24-word seed two times you should get a Bitcoin address and private key like this:

![brain wallet](/images/brainwallet2-compressor.png)

*Your seed should be much longer than what's shown above.*

To create multiple wallets paper wallets with the same seed, add a number to the end of the seed for each new wallet. For example, if your seed was *closet blanket water … shoes*, you could create multiple wallets using: 

- *closet blanket water …. shoes1*

- *closet blanket water …. shoes2*

This makes it easy to create many secure wallets using the same seed and entropy. You’ll only have to backup the one 24-word seed and not each individual wallet, as long as you can remember that each additional wallet is just *seed1*, *seed2* and so on.

It is recommended that you create multiple paper wallets so you don’t have to reuse Bitcoin addresses. This can take a lot of time but is worth it if you value privacy. 

### 6. Printing 

Don't store any digital copies or screenshots of your paper wallets on a USB or computer. Since your funds must be safe from hackers, keep only physical copies of your paper wallet and not digital copies. Now print each paper wallet you created in step 5. If you believe your printer may store data, use a dedicated printer or make sure the printer is offline at the time.

## BIP 38

To protect your paper wallet against physical theft, it’s possible to encrypt the paper wallet private key [using BIP38](https://github.com/bitcoin/bips/blob/master/bip-0038.mediawiki ).

Using the method outlined in the tutorial above (steps 1-6), if someone were to physically discover your paper wallet they could swipe the funds. BIP38 adds additional protection by also requiring a password to access funds. At this time, there isn't a tool that lets you use BIP 38 AND generate your own RNG. If you want to use BIP 38 you'll have to trust your computer's RNG and use [Bitcoin Paper Wallet](https://bitcoinpaperwallet.com/bitcoinpaperwallet/generate-wallet.html). 

DISCLAIMER: With both BitcoinPaperWallet.com and bitaddress.org, it’s your responsibility to verify you’re running the correct software.  

## Keeping your Paper Wallet Safe
Additional steps must be taken to keep your paper wallet(s) safe even after it has been created. 

Keep your paper wallet in a private and secure place. Hide if possible. Stick it in a safe, or even in a bank vault if you feel uncomfortable leaving it around your house. 

Keep multiple copies. No less than two copies of your paper wallet(s) should be created. More copies are better, but only when the additional copies are stored in different physical locations. 

Water damage or fires could damage or destroy your paper wallet(s) and result in permanent loss of funds. Use a fireproof safe and laminate your paper wallet to add even more protection. 

## Hardware Wallets
Hardware wallets have become popular because they make it easy for anyone to create offline storage. No technical knowledge is required, and the setup process is more simple than that of paper wallets. 

A [Bitcoin hardware wallet](https://www.coldhardware.com/) is just a small offline computer or smart card that generates private keys offline. When funds are spent, a hardware wallet signs the transactions in its secure environment and sends the signed transaction to your computer and on to the Bitcoin network. 

Hardware wallets are backed up using HD seeds and also written on paper. Hardware wallet backups should also be protected from physical theft and damage and multiple copies kept.
 
Some wallets like TREZOR allow users to add an additional custom word to the HD seed that will prevent someone who finds your seed from stealing your funds. The downside is that the passphrase must be memorized. In the case that it's forgotten the passphrase cannot be recovered. It's a passphrase and not a password. 

The three most popular hardware wallets on the market are the Ledger Nano, KeepKey, and TREZOR. 

**Ledger Nano:** [Ledger Nano](https://www.ledgerwallet.com/products/1-ledger-nano) is Ledger's flagship hardware wallet. It's a smartcard wallet in USB form factor, meaning it can be plugged in directly to any computer's USB port. The downside to the Nano is that it lacks a screen and must be initialized on a secure computer or operating system. Ledger offers its own Ledger Starter which will let you boot from a secure OS and initialize your device if you don’t have a dedicated offline computer. 

**TREZOR:** [TREZOR](http://www.bitcointrezor.com/) was the first hardware wallet to offer a screen. Users can confirm transactions on the TREZOR itself, meaning TREZOR can be used with confidence even on malware infected computers. 

**KeepKey:** [KeepKey](https://www.keepkey.com/) is a fork of TREZOR's code, with the slight differences being its digital screen vs TREZOR's analog display. KeepKey's larger screen also makes the recovery process slightly more secure. 

## Software Wallets using Offline Computers

Offline software wallets are very similar to hardware wallets. A dedicated offline computer is used to run a [Bitcoin wallet](/en/find-the-best-bitcoin-wallet/) like [Armory](https://bitcoinarmory.com/) or [Electrum](https://electrum.org/#home). 
 
A wallet is created on the offline computer. Using the public HD seed from the offline computer a watch only version of the wallet can be imported to an everyday computer. This allows payments to be received online, but all funds and private keys are still secured and stored on the offline computer. 

The process of setting up and signing transactions with this method can be complex for less technical users, which is another reason hardware wallets have become the way most new users store bitcoins. 

### Armory

Armory is considered the most secure offline software wallet. No external server is used for data because Armory maintains a full copy of the Bitcoin blockchain. No information is leaked which also makes Armory one of the most [private Bitcoin wallets](https://github.com/OpenBitcoinPrivacyProject/wallet-ratings/blob/master/2015-1/wallets/armory.md).

There are two helpful guides that will show you how to create cold storage with Armory: [one from Armory’s official website](https://bitcoinarmory.com/tutorials/armory-advanced-features/offline-wallets/), and one at [falkvinge.net](http://falkvinge.net/2014/02/10/placing-your-crypto-wealth-in-cold-storage-installing-armory-on-ubuntu/).

This 27-minute video guide will take you through the entire process: 

<iframe width="740" height="416" src="https://www.youtube.com/embed/w9TGkUgekLY" frameborder="0" allowfullscreen></iframe>

### Electrum

Electrum differs from Armory in that it pulls data from external servers in order to verify transaction data. While Electrum may be just as secure as Armory, it is less private. Electrum provides an offline storage [tutorial on its website](http://docs.electrum.org/en/latest/coldstorage.html).