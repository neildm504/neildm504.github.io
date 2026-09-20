---
title: "Freshman Design Portfolio"
layout: single
excerpt: "Documentation for 2023-2024 Design Projects"
toc: true
toc_sticky: true
toc_icon: "swatchbook"
author_profile: true
header:
  teaser: /assets/images/freshmen-design/gardentoolRender.jpg

gallery:
  - url: /assets/images/freshmen-design/idleenergyDesign.jpg
    image_path: /assets/images/freshmen-design/idleenergyDesign.jpg
    alt: "Final Design"
    title: "Final design photo showcasing the flywheel and belt drive."
  - url: /assets/images/freshmen-design/idleenergyRatchet.jpg
    image_path: /assets/images/freshmen-design/idleenergyRatchet.jpg
    alt: "CAD screenshot of Ratchet"
    title: "Fusion design of ratcheting system. Printed in Resin for high detail."
---

{% include figure image_path="/assets/images/freshmen-design/gardentoolRender.jpg" alt="leafblower render" %}

## Flywheel/Impeller “Mechanical Battery”

{% include gallery id="gallery" layout="half" caption="Idle Energy Harvester Photos" %}

- In a team of six, created a low-friction flywheel connected to an impeller via a belt drive that stores and harnesses unused energy from a door opening in order to increase airflow in crowded spaces
- Optimized 3D printed components in terms of volume, dimensions, and structure in order to maximize cost efficiency, strength, and print quality
- Conducted controlled experiments with repeated trials to obtain experimental values for moments of inertia and torque

## Smartphone Impact Data Tester Prototype

{% include figure
   image_path="/assets/images/freshmen-design/impacttesterExcel.jpg"
   alt="screenshot of excel gui"
   caption="One of the final iterations of the excel spreadsheet used to display kinematic data"
%}

Created the structure of an experimentally sound and reusable impact data tester, using internal sensors within a smartphone as a common means of gathering accurate data.

Structure: Made out of 1" PVC piping, it uses joints and pvc glue to stay rigid. 
- Used a two-legged base to support the mass of the structure head & attached smartphone
- A nylon string and carrier held the smartphone facing directly to the ground

Data: Using the phyphox app, we created an easy-to-use method of gathering data for the acceleration, velocity, and position of the smartphone as it falls. 
- Utilized accelerometers and LiDAR sensors to collect kinematic data
- Formatted an excel document to process raw data into easy-to-read graphs

View the presentation here: 

<iframe
  src="{{ '/assets/pdfs/impacttesterpdf.pdf' | relative_url }}#view=FitH"
  title="Impact Tester Presentation"
  width="100%"
  height="400"
  loading="lazy"
  style="border: 0; max-width: 100%;"
>
  <a href="{{ '/assets/pdfs/impacttesterpdf.pdf' | relative_url }}">Impact Tester Presentation</a>
</iframe>


## Functional Decomposition and CAD Recreation of Electric Garden Tool

{% include figure
   image_path="/assets/images/freshmen-design/gardentoolRender.jpg"
   alt="Fusion360 render of completed assembly"
   caption="Render of the final assembly for our Fusion360 designed leaf blower"
%}

With gardening tools being such a common household item, the engineering behind these tools are often overlooked. As part of a freshmen mechanical engineering design course (ME1212), I along with three other group members were tasked with functionally decomposing a SunJoe SBJ601E All-Electric Leaf Blower in order to provide an absolute understanding of its functioning. Our project had 4 stages:
1) Top-to-bottom analysis of the device. Identifying all steps of the leaf blower's operation, having sub-steps to assist in the explanation of form, fit, and function for each of the device's components
2) Precision measuring and CAD design of each component.

{% include figure
   class="align-center diyosc-figure"
   image_path="/assets/images/freshmen-design/gardentoolImpeller.jpg"
   alt="Fusion360 render of completed assembly"
   caption="Render of the final assembly for our Fusion360 designed leaf blower"
%}

3) Finalization of CAD assembly and Design Report.
4) Proposition of design improvements.
