---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
title: "Neil Muralles - Mechanical Engineering"
excerpt: "Mechanical engineering senior interested in thermal systems, instrumentation, controls, and engineering design. This site documents my professional experience, research, and engineering projects.<br><br><br><br><br><br>"
layout: splash 
header:
  overlay_image: /assets/images/pressuregif.gif
  overlay_filter: 0.23
  
#  overlay_filter: linear-gradient(rgba(70, 29, 124, 0.5), rgba(253, 208, 35, 0.5))
#  overlay_image: /assets/images/cover_bars.jpeg
  

feature_row:
  - image_path: assets/images/symposium_headshot.jpg
    alt: "Photo of me"
    title: "Who am I?"
    excerpt: "I'm a senior Mechanical Engineering student at LSU with experience in engineering design, research, and EPC work. My interests are centered around thermal systems, instrumentation, controls, and the intersection between mechanical hardware and data. I enjoy building and testing physical systems and documenting what I learn along the way. I am very excited to begin my career after graduation, and welcome opportunities in new regions and industries across the US."
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
  - image_path: /assets/images/diysolder_final.jpg
    alt: ""
    title: "Industry Experience"
    excerpt: "Read about my professional experience"
    url: /logs/
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: assets/images/PB-thumbnail.jpeg
    alt: "robotic arm"
    title: "Projects"
    excerpt: "Current and past projects"
    url: /projects/
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: /assets/images/biopic_real.jpeg
    alt: "a photo of me"
    title: "About me"
    excerpt: "Keep up to date with my engineering career"
    url: /about/
    btn_label: "Read More"
    btn_class: "btn--primary"

feature_row5:
  - image_path: assets/images/sbepc/he1.jpg
    alt: ""
    title: "Heat Exchanger Engineering"
    excerpt: "Worked with shell-and-tube and air-cooled heat exchangers using HTRI XIST and Xace to evaluate thermal performance, pressure drop, flow velocity, and design constraints. Applied API and TEMA guidelines while exploring how geometry and operating conditions influence exchanger performance."
    url: "/industry/"
    btn_label: "See more"
    btn_class: "btn--primary"
  - image_path: assets/images/sbepc/pv1.jpg
    alt: ""
    title: "Pressure Vessel Engineering"
    excerpt: "Worked with pressure vessel designs in COMPRESS, applying ASME Section VIII requirements to evaluate thickness, nozzles, supports, wind/seismic loading, and other mechanical design considerations."
    url: "/industry/"
    btn_label: "See more"
    btn_class: "btn--primary"  
  - image_path: assets/images/sbepc/boltpin1.png
    alt: ""
    title: "Bolt & Pin Analysis Tool"
    excerpt: "Developed a custom Excel calculation tool for bolt and pin sizing and analysis, organizing design inputs, load calculations, and engineering checks into a reusable workflow."
    url: "/industry/"
    btn_label: "See more"
    btn_class: "btn--primary"    

---

{% include feature_row id="feature_row"  type="left" %}

<div align="center">
  <h1 style="font-size:70px;">Professional Experience</h1>
</div>

{% include feature_row id="feature_row5" type="left" %}

{% include feature_row id="feature_row4" %}

