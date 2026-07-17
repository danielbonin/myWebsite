---
layout: blog-post.njk
title: "DNS Sinkhole"
subtitle: "Configuring and testing a DNS sinkhole on my home network using a Raspberry Pi"
date: 2026-07-17
topic: "DNS Sinkhole"
tags:
  - posts
  - DNS Sinkhole
  - piHole
  - Linux
  - Router setup
image: "/images/pihole.png"
---

### Introduction
I previously purchased a raspberry Pi Zero 2 W that was used for another project (<a href="../audio_guestbook">Audio Guestbook</a>). Since then I was able to take the information from it and store it, freeing up this device for more projects! The one I was the most interested in was setting up a DNS sinkhole on my home network to avoid watching advertisements. Little did I know there were going to be a few hurdles in the way.

### The ISP...
Spectrum routers don't actually let you use your own DNS server if it can't find the site your device is looking for. What that means is that when I set the primary and secondary IP for DNS to point to the pihole device, the connection request will go to pihole's DNS server, say no site found, but spectrum router will still send it through their DNS server to find the appropriate site. This just acts as a throughpoint for your traffic instead of the dead end that we want to achieve. The next step is to get our own router.

### New router setup
Initial setup as 192.168.1.1 for router internet IP. JAIL. Completely blocked devices from communicating with router. Patched in using laptop to set dynamic ip.
New problem, DHCP config is set to be on subnet 192.168.0.1/24 making all devices that were previously on network as 192.168.1.1/24 set statically stop functioning. Configuration ensued, needed for CI/CD pipeline settings, updated Firewall rules from my PC and pfSense gateway.

### The way ads are served
After all that