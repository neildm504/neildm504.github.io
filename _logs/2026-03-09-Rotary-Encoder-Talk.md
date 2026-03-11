---
title: "Using an Incremental Rotary Encoder Robustly"
layout: single
excerpt: "Understanding and implementing rotary encoder logic in ArduinoIDE"
toc: true
toc_icon: "arrows-spin"
author_profile: true
---

## Why an Encoder?

For the testing stages of the **P.B.** (Prototype Bot), I wanted to use an encoder
alongside a joystick module to control the three motors. Keeping with the theme of the P.B. project, I researched
what was going on under the hood of this module, and wrote custom code.

I understood that an encoder tracked the rotation based on how much it spun. However, when I first plugged it in I realised that it
was a black box to me. With amazing diagrams from [HowToMechatronics](https://howtomechatronics.com/tutorials/arduino/rotary-encoder-works-use-arduino/#h-overview) I understood exactly how an encoder tracks rotation through HIGH and LOW signal inputs to the microcontroller.

## KY-040 Rotary Encoder
This encoder is pretty standard for beginner sets and came in my Elegoo Mega Project Kit. It has 20 increments per rotation and 5 pins.

- CLK
- DT
- SW
- VCC
- GND



