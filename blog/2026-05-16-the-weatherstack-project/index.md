---
slug: the-weatherstack-project
title: The WeatherStack Project
authors: [mrbisquit]
tags: [weatherstack, update]
---

Welcome to the WeatherStack Project.

- [New domain name](#new-domain-name)
- [What is the project?](#what-is-the-project)
- [What has changed](#what-has-changed)

{/* truncate */}

## New domain name
Recently, WeatherStack got a brand new [domain](https://weatherstack.org/), this is where you'll find all the documentation for WeatherStack.

## What is the project?
The WeatherStack Project is an open-source project aimed toward making it easier for people to get started with creating their very own
Personal Weather Station. It's also aimed toward people who want to learn about computers, and how embedded systems work.

## What has changed
Quite a lot has changed since the last post, there has been some development on the WeatherStack Core, which was originally going to be written
in TypeScript, C#, and maybe even Python, but instead now is using C, and C++.

The aim switched from being firmware that worwks with everything, to being a framework-like project that allows you to build with WeatherStack,
rather than the project providing everything for you. This also makes WeatherStack significantly more flexible for you to build your own hardware,
and add sensors on later without having to wonder if we support it, since you support it.