---
layout: blog-post.njk
title: "Homelab journey: Proxmox, pfSense, and Cloudflare Tunnels"
subtitle: "My journey converting an old laptop into a segmented web hosting environment."
date: 2026-07-16
topic: "Homelab Architecture"
tags:
  - posts
  - networking
  - security
resources:
  Proxmox VE: "https://www.proxmox.com"
  pfSense: "https://www.pfsense.org"
  Cloudflare Tunnel: "https://www.cloudflare.com/products/tunnel/"
  Caddy: "https://caddyserver.com"
---

I wanted a safe way to self-host my portfolio and learn enterprise tooling without exposing my personal network. I built a layered environment using a bare-metal hypervisor, a virtualized firewall, secure tunneling, and automated deployments.

### Proxmox Virtual Environment (Hypervisor)

Instead of running services on one OS, I installed Proxmox on an old laptop. Proxmox lets me run isolated virtual machines and lightweight containers to host apps. I created virtual network bridges so that the lab network is logically and physically separated from my home Wi‑Fi.

### pfSense (Firewall)

I deployed pfSense as a VM to enforce strict, stateful firewall rules. Web-facing services are placed in an isolated subnet; if a container is compromised, the attacker cannot reach my management interfaces or personal devices.

### Cloudflare Tunnels (Reverse Proxy and Secure Tunneling)

To avoid opening inbound ports on my home router, I run `cloudflared` in a dedicated container. It creates an outbound tunnel to Cloudflare’s edge, routing HTTPS traffic securely to my internal web server. My public IP stays hidden and the home router's firewall remains closed to inbound traffic.

### Caddy & GitHub Actions (CI/CD Pipeline)

I host the site on a container running Caddy. To reduce risk, pfSense blocks that container from general internet traffic. It only accepts traffic through the Cloudflare tunnel initiated to it. A GitHub Actions workflow pushes updates to a self-hosted runner in the lab, which deploys changes automatically to the website.

### The Result

By combining a hypervisor, a virtual firewall, egress filtering, container isolation, and automated deployments, I built a robust, production-like hosting environment at home. This setup taught me a great deal of networking principles and keeps my network secure.