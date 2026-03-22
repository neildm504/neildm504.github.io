---
title: Projects
layout: collection
classes: wide
collection: projects
permalink: /projects/
author_profile: true
entries_layout: grid
---

Check out my projects! (ONGOING, website newly created)


## Main Projects

<div class="grid__wrapper">
  {% for post in site.posts %}
    {% if post.tags contains "main_projects" %}
      {% include archive-single.html type="grid" %}
    {% endif %}
  {% endfor %}
</div>

## Theory Applied

<div class="grid__wrapper">
  {% for post in site.posts %}
    {% if post.tags contains "theory" or post.tags contains "rl" %}
      {% include archive-single.html type="grid" %}
    {% endif %}
  {% endfor %}
</div>

## Testing header
