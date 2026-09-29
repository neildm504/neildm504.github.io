---
title: "Transient Heating of a Sphere in Forced Airflow"
layout: single
excerpt: "Python model of radial transient conduction in a sphere using a multi-term analytical series and a forced-convection correlation."
toc: true
toc_sticky: true
toc_icon: "temperature-high"
author_profile: true
header:
  teaser: https://img.youtube.com/vi/T9m-SU4vnGA/hqdefault.jpg
---

## Project Overview

This Python model estimates the transient heating of a solid sphere exposed to forced airflow. The simulated sphere is initially at 75°F and is placed in 260°F air moving at 35 mph. Its radial temperature distribution is evaluated over ten hours and displayed as an animated two-dimensional cross-section.

The model is not a CFD simulation of the surrounding air. Instead, it combines:

1. an external-flow correlation to estimate the average convective heat transfer coefficient at the sphere's surface, and
2. the analytical multi-term solution for one-dimensional transient conduction within a sphere with a convective boundary condition.

Using ten terms rather than only the first term improves the representation of the early transient response, particularly when the Fourier number is below the range where the one-term approximation is normally used.

## Model Inputs

| Input | Value |
| --- | ---: |
| Sphere diameter | 12 in |
| Free-stream air velocity | 35 mph |
| Air temperature | 260°F |
| Initial sphere temperature | 75°F |
| Sphere thermal conductivity | 0.5 W/(m·K) |
| Sphere density | 1,290 kg/m³ |
| Sphere specific heat | 900 J/(kg·K) |
| Series terms | 10 |
| Time points | 300 |
| Radial points | 100 |
| Simulated duration | 10 hr |

All calculations are performed in SI units after converting the user-defined inputs.

## Air Properties

The program interpolates the required air properties from a tabulated air-property DataFrame. The film temperature is calculated as the average of the free-stream and initial sphere temperatures:

<p style="text-align: center;"><strong>T<sub>film</sub> = (T<sub>∞</sub> + T<sub>i</sub>)/2</strong></p>

In the current implementation, air density and Prandtl number are evaluated at the free-stream temperature, while dynamic viscosity and thermal conductivity are evaluated at the film temperature.

## External Convection Model

The diameter-based Reynolds number is calculated from:

<p style="text-align: center;"><strong>Re<sub>D</sub> = ρ<sub>air</sub>V<sub>∞</sub>D/μ</strong></p>

The program then uses the Will, Kruyt, and Venner correlation for forced convection over a sphere:

<p style="text-align: center;"><strong>Nu<sub>D</sub> = 2 + 0.493Re<sub>D</sub><sup>1/2</sup> + 0.0011Re<sub>D</sub></strong></p>

The code checks whether the calculated Reynolds number lies within the stated correlation range of 7.8 × 10³ to 2.9 × 10⁵ and prints a warning if it does not.

The average convective heat transfer coefficient is then obtained from:

<p style="text-align: center;"><strong>h = Nu<sub>D</sub>k<sub>air</sub>/D</strong></p>

This produces one uniform, time-independent value of <em>h</em> for the sphere's outer surface.

## Transient Conduction Model

The sphere's thermal diffusivity, Biot number, and Fourier number are calculated as:

<p style="text-align: center;"><strong>α = k/(ρc<sub>p</sub>)</strong></p>

<p style="text-align: center;"><strong>Bi = hR/k</strong></p>

<p style="text-align: center;"><strong>Fo = αt/R²</strong></p>

The dimensionless radial position and temperature are:

<p style="text-align: center;"><strong>r* = r/R</strong></p>

<p style="text-align: center;"><strong>θ* = (T − T<sub>∞</sub>)/(T<sub>i</sub> − T<sub>∞</sub>)</strong></p>

### Eigenvalues and Coefficients

For the convective boundary condition on a sphere, each eigenvalue ζ<sub>n</sub> satisfies:

<p style="text-align: center;"><strong>1 − ζ<sub>n</sub>cot(ζ<sub>n</sub>) = Bi</strong></p>

The first ten positive roots are calculated numerically with SciPy's Brent root-finding method. The corresponding series coefficients are:

<p style="text-align: center;"><strong>C<sub>n</sub> = 4[sin(ζ<sub>n</sub>) − ζ<sub>n</sub>cos(ζ<sub>n</sub>)] / [2ζ<sub>n</sub> − sin(2ζ<sub>n</sub>)]</strong></p>

### Multi-Term Temperature Solution

The dimensionless temperature at each radius and time is evaluated using:

<p style="text-align: center;"><strong>θ*(r*,Fo) = Σ C<sub>n</sub>e<sup>−ζ<sub>n</sub>²Fo</sup> · sin(ζ<sub>n</sub>r*)/(ζ<sub>n</sub>r*)</strong></p>

At the center of the sphere, where <em>r*</em> = 0, the spatial term is evaluated using its limiting value of one to avoid division by zero.

Because a finite series cannot reproduce the initial uniform temperature perfectly at exactly <em>t</em> = 0, the program explicitly sets the first temperature profile to θ* = 1 across the sphere.

## Heat Absorbed

The animation also reports the fraction of the sphere's maximum possible heat absorption. First, the program numerically integrates the dimensionless temperature over the sphere's volume:

<p style="text-align: center;"><strong>θ̄* = 3∫₀¹ θ*(r*)r*²dr*</strong></p>

The integral is evaluated with the trapezoidal rule. Assuming constant density and specific heat, the fraction of maximum heat transferred is:

<p style="text-align: center;"><strong>Q/Q<sub>max</sub> = 1 − θ̄*</strong></p>

The result is clipped between zero and one to remove tiny numerical overshoots caused by series truncation and numerical integration.

## Animation

The one-dimensional radial temperature profile is repeated through 360 degrees to create the circular cross-section shown in the animation. The color scale remains fixed from 75°F to 260°F, allowing the radial heating progression to be compared consistently across frames.

A second axis displays <em>Q/Q<sub>max</sub></em> as a percentage bar. The animation contains 300 calculated time steps and is exported as an MP4 at 20 frames per second.

{% include video id="T9m-SU4vnGA" provider="youtube" %}

[Watch the simulation on YouTube](https://www.youtube.com/watch?v=T9m-SU4vnGA){: .btn .btn--primary}

## Model Scope and Limitations

- The sphere is treated as homogeneous, isotropic, and radially symmetric.
- Thermal conductivity, density, and specific heat are held constant.
- The convection coefficient is uniform over the entire surface and constant with time.
- The surrounding airflow field is not solved directly.
- Local variations in convection around the sphere, the downstream wake, natural convection, and radiation are not modeled.
- The circular graphic represents a cross-section of the radial analytical solution; it is not a spatial CFD temperature contour.

## Key Takeaways

This project extends a standard one-term transient-conduction calculation into a reusable multi-term numerical workflow. It combines property interpolation, an empirical external-convection correlation, root finding, analytical heat-transfer theory, numerical integration, and animation to show both the internal temperature distribution and the fraction of total possible heat absorbed over time.
