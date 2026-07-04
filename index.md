---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
title: "Neil Muralles, Mechanical Engineering"
excerpt: "My personal engineering website. Here lies documentation for my industry experience and research/personal projects.<br><br><br><br><br><br><br><br>"
layout: splash
header:
  overlay_video: /assets/videos/websitesplash2.mp4
  
#  overlay_filter: linear-gradient(rgba(70, 29, 124, 0.5), rgba(253, 208, 35, 0.5))
#  overlay_image: /assets/images/cover_bars.jpeg
  

feature_row:
  - image_path: assets/images/symposium_headshot.jpg
    alt: "Photo of me"
    title: "Who am I?"
    excerpt: "I am a rising senior in Mechanical Engineering at LSU. As of now... I am very excited to begin my career after graduation, and am more than happy to..."
    url: "/featured/"
    btn_label: "See featured projects"
    btn_class: "btn--primary"
    
feature_row2:
  - image_path: assets/images/PB-thumbnail.jpeg
    alt: ""
    title: "..."
    excerpt: "..."
    url: "#test-link"
    btn_label: "See more"
    btn_class: "btn--primary"

feature_row3:
  - image_path: assets/images/april2026/diyosc_triangle.jpg
    alt: ""
    title: "..."
    excerpt: "..."
    url: "#test-link"
    btn_label: "See more"
    btn_class: "btn--primary"

feature_row4:
  - image_path: assets/images/PB-thumbnail.jpeg
    alt: "robotic arm"
    title: "Projects"
    excerpt: "Current and past projects *(will be updated)*"
    url: /projects/
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: /assets/images/diysolder_final.jpg
    alt: "rotary encoder"
    title: "Update Logs"
    excerpt: "These are different snippets of useful information that progressed my projects."
    url: /logs/
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: /assets/images/biopic_real.jpeg
    alt: "a photo of me"
    title: "About me"
    excerpt: "Read about me and my goals!"
    url: /about/
    btn_label: "Read More"
    btn_class: "btn--primary"
---

{% include feature_row id="feature_row"  type="left" %}

{% include feature_row id="feature_row4" %}

