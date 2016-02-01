---
layout: post
title: What Can You Buy with Bitcoin?
author: Jordan Tuwiner
authorurl: /jordan-tuwiner/
description: What can you buy with bitcoin? Just about anything.  
published: true
---
![what can you buy with bitcoin](/images/bitpremier-compressor.png)

Bitcoin’s volatility created a nightmare for most merchants. A 10% rise or drop in price in a single day was and is still common. For a merchant, this could lead to a $100 loss on a $1,000 sale. 

BitPay, Coinbase, and other Bitcoin payment processors have helped merchants by taking on the volatility risk in accepting Bitcoin payments. Merchants can integrate with a Bitcoin payment processor and accept payments through these third party services. Payment processors receive bitcoin and send the merchant local currency at the end of each day or week. Merchants may also choose to keep any percent of payments as Bitcoin. 

Bitcoin payment processors charge 1% per transaction, while credit card companies take 2-3% per transaction. Bitcoin helps businesses with low margins cut costs. If a merchant feels comfortable accepting Bitcoin without a payment processor, it’s free to accept Bitcoin with an address or wallet. 

In addition to cutting costs, price increases have been the main driver of merchant adoption. As Bitcoin’s price rises, the hype makes more businesses view Bitcoin as legitimate and something that can help improve profits. 

Bitcoin’s 2013 run up to $1,100 brought a huge wave of merchant adoption and is responsible for bringing on many of the billion dollar companies listed below.

This post will show you how to buy just about anything with Bitcoin. A number of the stores below offer a wide range of products that cover almost every category. If you don’t see what you need under a specific category, come back to the top and check under the “General” category. 

## General 

![gyft](/images/gyft-compressor.png)

{% for item in site.data.buy-with-bitcoin %}
{% if item.category == 'general' %}
{% include buy_with_bitcoin.html %}
{% endif %}
{% endfor %} 

## Travel 
 
{% for item in site.data.buy-with-bitcoin %}
{% if item.category == 'travel' %}
{% include buy_with_bitcoin.html %}
{% endif %}
{% endfor %}  

## Computers and Electronics

{% for item in site.data.buy-with-bitcoin %}
{% if item.category == 'electronics' %}
{% include buy_with_bitcoin.html %}
{% endif %}
{% endfor %} 

## Domains and Hosting 

![namecheap](/images/namecheap-compressor.png)

{% for item in site.data.buy-with-bitcoin %}
{% if item.category == 'domainshosting' %}
{% include buy_with_bitcoin.html %}
{% endif %}
{% endfor %} 

## Decentralized MarketPlaces

{% for item in site.data.buy-with-bitcoin %}
{% if item.category == 'decentralized' %}
{% include buy_with_bitcoin.html %}
{% endif %}
{% endfor %} 

## Food & Groceries

{% for item in site.data.buy-with-bitcoin %}
{% if item.category == 'food' %}
{% include buy_with_bitcoin.html %}
{% endif %}
{% endfor %} 

## Hire Freelancers

{% for item in site.data.buy-with-bitcoin %}
{% if item.category == 'freelancers' %}
{% include buy_with_bitcoin.html %}
{% endif %}
{% endfor %} 

## Luxury Items

{% for item in site.data.buy-with-bitcoin %}
{% if item.category == 'luxury' %}
{% include buy_with_bitcoin.html %}
{% endif %}
{% endfor %}

## Physical Locations

![coinmap](/images/coinmap-compressor.png)

Most companies accepting Bitcoin are online retailers. Bitcoin acceptance in brick and mortar stores, however, is growing at a slower pace. Although the options are somewhat limited, merchant directories like <a href="https://coinmap.org">Coinmap.org</a> and <a href="https://airbitz.co/search?term=&location=Current+Location">AirBitz’s Directory</a> will help you find local restrauraunts and stores that accept Bitcoin. 
