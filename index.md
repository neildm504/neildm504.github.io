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

---

<div align="center">
  <h1 style="font-size:70px;">Welcome!</h1>
</div>

<div class="who-am-i">
  {% include feature_row id="feature_row" type="left" %}
</div>

<div align="center">
  <h1 style="font-size:70px;">Experience</h1>
</div>

<div class="feature__wrapper experience-carousel sb-internship">
  <div class="feature__item--left">
    <div class="archive__item">
      <div class="archive__item-teaser">
        <img class="experience-carousel__image is-active" src="{{ '/assets/images/sbepc/he1.jpg' | relative_url }}" alt="Shell-and-tube heat exchanger internship graphic" />
        <img class="experience-carousel__image" src="{{ '/assets/images/sbepc/pv1.jpg' | relative_url }}" alt="Pressure vessel internship graphic" aria-hidden="true" />
        <img class="experience-carousel__image" src="{{ '/assets/images/sbepc/boltpin1.png' | relative_url }}" alt="Bolt and pin analysis diagram" aria-hidden="true" />
        <button type="button" class="experience-carousel__arrow experience-carousel__arrow--previous" aria-label="Previous S&amp;B image" hidden>&#10094;</button>
        <button type="button" class="experience-carousel__arrow experience-carousel__arrow--next" aria-label="Next S&amp;B image" hidden>&#10095;</button>
      </div>
      <div class="archive__item-body">
        <h2 class="archive__item-title">S&amp;B Summer 2026 Intern</h2>
        <p class="experience-date">June – August 2026</p>
        <div class="archive__item-excerpt">
          <p>During my summer internship at S&amp;B Engineers &amp; Constructors, I worked on heat exchanger and pressure vessel designs using HTRI and COMPRESS. I also developed an Excel tool for bolt and pin calculations and gained exposure to rotating equipment.</p>
        </div>
        <p><a href="{{ '/industry/' | relative_url }}" class="btn btn--primary">See more</a></p>
      </div>
    </div>
  </div>
</div>

<div class="feature__wrapper experience-carousel stein-lab">
  <div class="feature__item--left">
    <div class="archive__item">
      <div class="archive__item-teaser">
        <img class="experience-carousel__image experience-carousel__image--contain is-active" src="{{ '/assets/images/stein-lab/liquidmetalprinter_1.jpg' | relative_url }}" alt="Stepper-driven syringe assembly for liquid-metal distribution" />
        <img class="experience-carousel__image experience-carousel__image--contain" src="{{ '/assets/images/stein-lab/pirnn1.jpg' | relative_url }}" alt="Physics-informed neural network research diagram" aria-hidden="true" />
        <img class="experience-carousel__image" src="{{ '/assets/images/stein-lab/nasawindturbine.jpg' | relative_url }}" alt="Research group at a NASA wind tunnel" aria-hidden="true" />
        <img class="experience-carousel__image" src="{{ '/assets/images/stein-lab/nasalsms.jpg' | relative_url }}" alt="NASA Langley LSMS crane" aria-hidden="true" />
        <img class="experience-carousel__image" src="{{ '/assets/images/stein-lab/nasaoutside.jpg' | relative_url }}" alt="Research group outside NASA Langley Research Center" aria-hidden="true" />
        <button type="button" class="experience-carousel__arrow experience-carousel__arrow--previous" aria-label="Previous Stein Lab image" hidden>&#10094;</button>
        <button type="button" class="experience-carousel__arrow experience-carousel__arrow--next" aria-label="Next Stein Lab image" hidden>&#10095;</button>
      </div>
      <div class="archive__item-body">
        <h2 class="archive__item-title">Stein Lab @ iCORE</h2>
        <p class="experience-date">March 2025 – Present</p>
        <div class="archive__item-excerpt">
          <p>At LSU's Stein Lab, I helped design and experimentally test a liquid-metal distribution system, including its stepper-driven syringe subsystem. I modeled the helicopter's full dynamics across different initial conditions, including left and right yaw, and prepared figures for a physics-informed neural-network research project. During a week at NASA Langley, I supported input-shaping tests on the LSMS crane and visited research facilities.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div align="center">
  <h1 style="font-size:70px;">Projects</h1>
</div>

<div class="feature__wrapper experience-carousel projects-showcase">
  <div class="feature__item--left">
    <div class="archive__item">
      <div class="archive__item-teaser">
        {% assign project_carousel_items = site.projects | sort: 'date' | reverse %}
        {% assign project_slide_index = 0 %}
        {% for project in project_carousel_items %}
          {% if project.header.teaser and project.header.teaser != '' %}
            <img class="experience-carousel__image{% if project_slide_index == 0 %} is-active{% endif %}" src="{{ project.header.teaser | relative_url }}" alt="{{ project.title | escape }}"{% unless project_slide_index == 0 %} aria-hidden="true"{% endunless %} />
            {% assign project_slide_index = project_slide_index | plus: 1 %}
          {% endif %}
        {% endfor %}
        <button type="button" class="experience-carousel__arrow experience-carousel__arrow--previous" aria-label="Previous project image" hidden>&#10094;</button>
        <button type="button" class="experience-carousel__arrow experience-carousel__arrow--next" aria-label="Next project image" hidden>&#10095;</button>
      </div>
      <div class="archive__item-body">
        <h2 class="archive__item-title">Research &amp; Personal Projects</h2>
        <div class="archive__item-excerpt">
          <p>I enjoy contributing to research projects and working on personal builds that let me design, test, and improve real hardware.</p>
        </div>
        <p><a href="{{ '/projects/' | relative_url }}" class="btn btn--primary">Explore projects</a></p>
      </div>
    </div>
  </div>
</div>

{% include feature_row id="feature_row4" %}

<script src="{{ '/assets/js/experience-carousel.js' | relative_url }}" defer></script>
