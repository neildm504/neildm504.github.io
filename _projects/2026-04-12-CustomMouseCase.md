---
title: "Custom Shell for USB Bluetooth Adapter"
layout: single
excerpt: "Designing a model to encase a USB pcb using calipers and CAD"
toc: false
toc_sticky: true
toc_icon: "arrows-spin"
author_profile: true
classes: wide
header:
  teaser: /assets/images/april2026/thumbdrive_thumb.jpg
---


<figure class="align-center" style="width: 500px;">
  <img src="/assets/images/april2026/thumbdrive_thumb.jpg" 
       alt="Final product">
  <figcaption>New 3d printed shell vs previous, broken shell</figcaption>
</figure>

A friend of mine came to me with an issue. The usb bluetooth adapter for their wireless mouse had broken and was now just the exposed PCB.
It still worked, but the parts were likely to be damaged or destroyed by daily wear and tear unless it was protected via a container or new shell.

# Goal

My aim was to create a fully 3d printable shell for the adapter that:
- looked aesthetically pleasing for my friend
- is strong enough to be thrown in a backpack and protect the PCB
- could still display the onboard LED that showed bluetooth connection

I also thought that it would be a nice touch to add their initials to the design (simple to add with no added material).

# Design

I was able to measure the board with a pair of [Harbor Freight Calipers](https://www.harborfreight.com/6-in-digital-caliper-with-sae-and-metric-fractional-readings-63731.html) and get the layout created in Fusion360.
Now that I had the dimensions, I needed to choose a method of connecting the bottom and top part of the shell together. I wanted to avoid using nuts and bolts, and decided to use a tapered slot design to press fit the two pieces together. 

calipers and tolerancing
