---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
title: "Mechanical Engineering Portfolio"
excerpt: "My personal engineering website. I show my current projects as well as smaller updates toward my projects/career.<br><br><br><br><br><br><br><br>"
layout: splash
header:
  overlay_image: /assets/images/pressuregif.gif
#  overlay_filter: linear-gradient(rgba(70, 29, 124, 0.5), rgba(253, 208, 35, 0.5))
#  overlay_image: /assets/images/cover_bars.jpeg
  

feature_row:
  - image_path: assets/images/april2026/usbblowup1.png
    alt: ""
    title: "Custom Designed and 3D-printed Bluetooth Adapter Shell"
    excerpt: "..."
    url: "#test-link"
    btn_label: "See more"
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

Welcome to my personal website. I am a Junior at Louisiana State University in Mechanical Engineering. My current interests in M.E. include controls and mechatronics, but I am still gaining experience in all aspects of the field.

<div align="center">
  <h1 style="font-size:80px;">𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒅 𝑷𝒓𝒐𝒋𝒆𝒄𝒕𝒔</h1>
</div>

{% include feature_row id="feature_row"  type="left" %}
{% include feature_row id="feature_row2"  type="right" %}
{% include feature_row id="feature_row3"  type="left" %}

{% include feature_row id="feature_row4" %}

