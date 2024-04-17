Feature: Thermostat controller

    Scenario Outline: Thermostat will turn the heat on/off based on certain conditions
        Given The automatic switch is "<switchStatus>"
        When The temperature is "<Temperature>" degrees centrigrade
        Then The heat is turned "<heatStatus>"

        Examples:
            | switchStatus | Temperature | heatStatus |
            | On           | >=23        | Off        |
            | On           | <23         | On         |
            | Off          | >=5         | Off        |
            | Off          | <5          | On         |
