---
layout: post
title: How To Use Multisig Armory Lockboxes with Coinkite
author: WeUseCoins
authorurl: /
published: true
---

<p>Follow these eight steps to learn how to use the <a href="/armory/">Armory</a> multi-sig lockboxes with <a href="/coinkite/">Coinkite</a>.
<p><b>First</b>, create a new Multisig Vault. I will be using a 2-of-3 Vault for this tutorial.
<p><b>Second</b>, generate the three keys. When generating the keys, record the HD Wallet string to a safe location. Do this for each key generated.
<p><b>Third</b>, once the Multisig Vault is created, go to BIP32.org and click on the BIP32 Key button where you should enter the first HD Wallet string you copied into the extended Key Box.
<p><b>Fourth</b>, scroll down and change the Derivation Path to simple.
<p><b>Fifth</b>, then copy the Public Key (Hex) to a safe location and repeat for the remaining keys.
<p><b>Sixth</b>, open Armory and create a new Lockbox and make sure the M-of-N is the same as Coinkite's.
<p><b>Seventh</b>, enter the public key (hex) that was copied earlier in the same order that their HD wallet strings were entered and generated into Coinkite.
<p><b>Finally</b>, as you can see, the multisig addresses match. CONGRATS! You have imported your Coinkite Multisig Vault into a Bitcoin Armory Multisig Lockbox.
<center><iframe width="700" height="394" src="https://www.youtube.com/embed/t56TNtlRPj8" frameborder="0" allowfullscreen></iframe></center>
<p><h2>Creating an Armory Multi-sig Lockbox</h2>
<center><iframe width="700" height="394" src="https://www.youtube.com/embed/B5E3WQjSB6w" frameborder="0" allowfullscreen></iframe></center>
<p><h2>TRANSCRIPT: Creating an Armory Multi-sig Lockbox</h2>
<p>There are many situations where lockboxes are very useful for managing funds within a family, to managing them within a large corporation.  In this tutorial we are going to the scenario of a small non-profit consisting of Alice, Bob, Carol and Dave.  If you want to view other scenarios, check the links to information in the resources section at the top of the screen.
Our small non-profit wants to manage some funds, but has a requirement that there must be majority agreement to spend funds.  So there must be agreement between three of the four members.  So Alice is going to create a lockbox for their funds and this is Alice’s Armory screen.
<p>To create a lockbox you must be in expert mode.  Under the user menu, select expert and then you will have to restart Armory.  Once you do, you’ll have this extra button available.  Click on lockboxes.  Here is the screen from which we can manage our multi signature lockboxes.  As Alice is the organizer she just needs to click on the create lockbox.  Lockboxes allow us to have multiple signatories and can also control how many we need out of the total.  Alice has a total of four signatories, but only three need to sign to spend funds so she will set this to three out of four.  Note that we can have many variations from one through seven.
<p>The first thing is to give this a name.  Alice choice ABCD funds.  Now what Alice needs is the public keys for each of the four.  The first one is herself, so she can click on the address book.  What is shown are the wallets that she has access to in various transaction information.  She can just select her own wallet and click on select wallet.  To add information to this key click on edit.  Alice decides to put her own contact information here and clicks okay.
<p>Now to enter Bob’s key.  Bob and Alice are very close so Bob has already sent Alice a watching-only copy of his wallet.  Alice can use this.  Click on the address book for this one.  And now Alice just needs to choose Bob’s watching only wallet and click on select wallet.  She can also add information to this key as she did on her own.  Let’s just stick with the contact info for now. 
<p>Now the third public key needs to come from Carol.  Carol however didn’t want to send over a watching-only wallet.  So she choice to bring a file with her public key information.
Let’s just scoot over the Carol’s Armory for a moment to see how she did this.  Carol needs to be in expert mode and click on the lockboxes button.  Instead of creating a lockbox, she clicks on the select public key button.  Then she can select her wallet from the list.
<p>She can also very nice and add her contact information, carol@abcd.com.  Now she clicks on continue and from this window, can save the public key information to a file by clicking on safe to file.  Now she can bring this file over on a USB drive or send it as an attachment to an email.
<p>Let’s go back to Alice and see how she uses the file.  For the third key Alice clicks on import and then on load from file.  She chooses the file that Carol provided and then clicks done.  Now we have Carol’s key and the contact information she provided.
<p>On to the final public key which is Dave.  Let’s go to Dave’s Armory and see how he is going to send the information to Alice.  Dave also needs to be in expert mode and then click on lockboxes and then clicks on the select public key and choose from the address book his own wallet.
<p>He can enter in the contact details, dave@abcd.com and then click on continue.  His choice now is to copy this text to the clipboard and include it in an email that he is sending to Alice.  The text is this information highlighted and now he is done.  So it is back to Alice again.
<p>Alice clicks on import and then goes to the email which she received from Dave.  She just copies the entire text and pastes this back to the screen.  And then saves the lockbox.  Now Alice can export this lockbox to send to everyone by clicking on export.  She can send it as an email, copy the text or save it as a file.  After she has done this, it is just a matter for each of the others to import it.
<p>Let’s finally jump over to Bob to see how he does this.  As with the others, he needs to be in expert mode.  He just clicks on lockboxes and then clicks on the import lockbox.  Now he can copy the text that Alice included in an email, and paste that here and click done.  It’s that easy.  And don’t worry even though it looks like this can be modified if anything significant is changed like the number of signatories, for example, Armory will not change the lockbox but create a brand new one.  That is it for creating a lockbox.
