---
title: "Supported sensors"
sidebar_position: 1
---

This page contains the links to all of the sensors that have been tested and implemented in WeatherStack.
If you'd like to **suggest a sensor**, please open a discussion on the GitHub Organisation.

Each of these sensors will have a component library that you will need to use to be able to use the sensor.
Most of the sensors that are marked as implemented will have a component library for both ESP-IDF **and** Arduino.
However, some many not. It is important to check.

Browse components: [ESP-IDF](/docs/components/ESP-IDF/) • [Arduino](/docs/components/Arduino/)

## Sensor implementation table meaning

The following are the possible sensor statuses:
|  ❔  |     Emoji 1     |  Emoji 2   |    Emoji 3     |
| :--: | :-------------: | :--------: | :------------: |
|  ✅  |   Implemented   |   Tested   |   Documented   |
| ⚠️ |  Implementing   |  Testing   |  Documenting   |
|  ❌  | Not implemented | Not tested | Not documented |
|  ➖  |     Unknown     |  Unknown   |    Unknown     |

## Sensor implementation table

|    Sensor name     |                      Sensor type                       | Current Status |                    Sensor Docs                    |
| :----------------: | :----------------------------------------------------: | :------------: | :-----------------------------------------------: |
|      `BH1750`      |                  Ambient Light Sensor                  |   ❌⚠️⚠️   |    [View docs](/docs/supported-sensors/BH1750)    |
|      `BMP180`      |                Digital Pressure Sensor                 |     ❌❌❌     |    [View docs](/docs/supported-sensors/BMP180)    |
|    `CJMCU-1100`    |               Formalin Detection Sensor                |     ❌❌❌     |  [View docs](/docs/supported-sensors/CJMCU-1100)  |
|    `BME/BMP280`    |    Digital Temperature and Humidity Pressure Sensor    |     ❌❌❌     |  [View docs](/docs/supported-sensors/BME-BMP280)  |
|      `AHT10`       | High Precision Digital Temperature and Humidity Sensor |     ❌❌❌     |    [View docs](/docs/supported-sensors/AHT10)     |
|     `VEML7700`     |                  Ambient Light Sensor                  |     ❌❌❌     |   [View docs](/docs/supported-sensors/VEML7700)   |
|     `GYML8511`     |                       UV Sensor                        |     ❌❌❌     |   [View docs](/docs/supported-sensors/GYML8511)   |
| `ENS160` + `AHT21` |                   Air Quality Sensor                   |     ❌❌❌     | [View docs](/docs/supported-sensors/ENS160-AHT21) |
|     `TCS3472`      |                       RGB Sensor                       |                |                                                   |

## Pinout diagrams
These diagrams will help you when connecting your ESP32 to your sensors.

|         ESP32-S3-DevKitM-1          |
| :---------------------------------: |
| ![](pinouts/ESP32-S3-DevKitM-1.jpg) |
|       **ESP32-S3-DevKitC-1**        |
| ![](pinouts/ESP32_S3-DevKitC-1.png) |