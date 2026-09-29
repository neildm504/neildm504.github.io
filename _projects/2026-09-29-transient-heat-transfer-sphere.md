---
title: "Transient Heat Transfer: Forced Convection Over a Sphere"
layout: single
excerpt: "Simulation of the transient thermal response of a sphere exposed to forced airflow."
toc: true
toc_sticky: true
toc_icon: "temperature-high"
author_profile: true
header:
  teaser: https://img.youtube.com/vi/T9m-SU4vnGA/hqdefault.jpg
---

## Project Overview

This project examines the transient heat transfer of a sphere exposed to forced convection from moving air. The simulation tracks how the sphere's temperature changes with time as energy is transferred between the solid and the surrounding airflow.

Unlike a steady-state analysis, the transient model accounts for energy stored within the sphere. The temperature therefore evolves continuously from its initial condition toward thermal equilibrium with the surrounding air.

## Physical Problem

A sphere begins at a prescribed initial temperature and is placed in a stream of air at a different temperature. Airflow across the surface produces convective heat transfer, while conduction redistributes thermal energy within the sphere.

The thermal response is influenced by:

- sphere diameter and material properties
- initial sphere temperature
- free-stream air temperature
- airflow velocity
- convective heat transfer coefficient
- elapsed time

## Governing Heat Transfer Model

Transient conduction within the sphere is described by the heat equation:

<p style="text-align: center;"><strong>ρc<sub>p</sub> ∂T/∂t = k∇²T</strong></p>

At the outer surface, conduction within the sphere is coupled to forced convection in the surrounding air:

<p style="text-align: center;"><strong>−k∇T · n = h(T<sub>s</sub> − T<sub>∞</sub>)</strong></p>

Here, ρ is density, c<sub>p</sub> is specific heat, k is thermal conductivity, h is the convective heat transfer coefficient, T<sub>s</sub> is the sphere's surface temperature, and T<sub>∞</sub> is the free-stream air temperature.

## Simulation Approach

The sphere is initialized at a uniform temperature and subjected to airflow with a prescribed free-stream condition. The transient solution is evaluated over time to visualize the changing temperature field and the sphere's approach toward equilibrium.

The simulation connects the solid's internal conduction response with the convective boundary condition at its surface. This makes it possible to observe both the overall temperature change and any temperature gradients that develop within the sphere.

## Dimensionless Parameters

Several dimensionless groups help describe the behavior of the system:

- **Reynolds number** characterizes the airflow regime around the sphere.
- **Prandtl number** compares momentum diffusion with thermal diffusion in the air.
- **Nusselt number** relates convection at the surface to conduction through the fluid.
- **Biot number** compares internal conductive resistance with external convective resistance.
- **Fourier number** represents the progression of transient heat diffusion within the sphere.

Together, these parameters provide a useful basis for interpreting the simulation and comparing it with analytical correlations.

## Transient Response

The largest temperature difference—and therefore the strongest heat-transfer driving force—occurs at the beginning of the simulation. As the sphere approaches the free-stream air temperature, that driving force decreases and the rate of temperature change slows.

Forced airflow increases convective transport at the surface, so changes in air velocity or the resulting heat transfer coefficient directly affect the time required for the sphere to approach equilibrium.

## Simulation Video

{% include video id="T9m-SU4vnGA" provider="youtube" %}

[Watch the simulation on YouTube](https://www.youtube.com/watch?v=T9m-SU4vnGA){: .btn .btn--primary}

## Key Takeaways

- Transient analysis captures the sphere's time-dependent thermal response rather than only its final equilibrium condition.
- The convective boundary condition links the airflow to conduction within the solid.
- Sphere geometry, material properties, airflow, and initial conditions all affect the thermal time scale.
- Temperature changes most rapidly when the difference between the sphere and free-stream air is greatest.
