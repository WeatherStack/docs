---
slug: welcome
title: Welcome
authors: [mrbisquit]
tags: []
---

Welcome to WeatherStack's documentation website.

- [What is WeatherStack?](#what-is-weatherstack)
- [Parts of the project](#parts-of-the-project)
- [Aims](#aims)
- [Technology stack](#technology-stack)

<!-- truncate -->

## What is WeatherStack?
WeatherStack is an open-source project designed to make it easy for people to set up and maintain their very own personal weather station (PWS) as well as send their weather data to providers such as Wunderground.

## Parts of the project
This project will be structured into many different parts, including:
- The backend (Basically the brains of the project)
  - Controls everything
  - Stores all of the data
  - Analytics/Statistics
- Machine Learning (ML) model (For self-training based on collected weather patterns, for better predictions)
- Front-end/Apps
  - Front-end web interface for your WeatherCollector instance
  - Desktop applications (General, data viewing, timelapse creation, etc)
  - Mobile application
  - IoT (Internet Of Things) screen for displaying live data
- Edge-devices made of anything that can be programmed (Recommended: ESP32, Raspberry Pi Pico)
  - The sensors to attach to the edge-devices
- Possibly more in the future

## Aims
I aim this project to be compatible with pretty much any sensor that can connect to an embedded device (So pretty much anything), including supporting things like the old Pimoroni Weather Station Kit.
I also aim this project to be easy-to-use, beginner & developer friendly, and easy to expand.

- Clean code
- Comments (Unless it's obvious what something does)
- Helpful documentation (Explain everything, with nice diagrams when needed)
- Customizable

## Technology stack
What will the different parts of the project be made of?

| Part of the project | Tech stack                                                                                                    |
|:--------------------|:--------------------------------------------------------------------------------------------------------------|
| The backend         | TypeScript (Node/Deno), C#, **possibly** Python for ML                                                        |
| Front-end/Apps      | C# for desktop/mobile applications, TypeScript (React, TSX) for the web inteface, and C++ for the IoT screens |
| Edge-devices        | C++                                                                                                           |