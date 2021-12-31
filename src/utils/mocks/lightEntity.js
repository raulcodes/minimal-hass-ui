const lightOne = `{
  "entity_id": "light.side_table",
  "state": "off",
  "attributes": {
      "min_mireds": 111,
      "max_mireds": 666,
      "effect_list": [
          "effect_colorloop",
          "effect_pulse",
          "effect_stop"
      ],
      "supported_color_modes": [
          "color_temp",
          "hs"
      ],
      "friendly_name": "Side Table ",
      "supported_features": 55
  },
  "last_changed": "2021-12-18T03:18:46.244019+00:00",
  "last_updated": "2021-12-18T03:18:46.244019+00:00",
  "context": {
      "id": "fbdd032507d5cfef10835369a334e9b1",
      "parent_id": null,
      "user_id": null
  }
}`

const lightTwo = `{
    "entity_id": "light.floor_lamp",
    "state": "on",
    "attributes": {
        "min_mireds": 111,
        "max_mireds": 666,
        "effect_list": [
            "effect_colorloop",
            "effect_pulse",
            "effect_stop"
        ],
        "supported_color_modes": [
            "color_temp",
            "hs"
        ],
        "color_mode": "color_temp",
        "brightness": 200,
        "color_temp": 409,
        "hs_color": [
            29.026,
            74.589
        ],
        "rgb_color": [
            255,
            156,
            64
        ],
        "xy_color": [
            0.554,
            0.389
        ],
        "friendly_name": "Floor Lamp",
        "supported_features": 55
    },
    "last_changed": "2021-12-30T13:02:57.442841+00:00",
    "last_updated": "2021-12-30T13:02:57.442841+00:00",
    "context": {
        "id": "dd425d003e6d9ecd9cc35d423bd4fcd8",
        "parent_id": null,
        "user_id": null
    }
}`

const lightThree = `{
  "entity_id": "light.very_long_name_for_a_lamp",
  "state": "off",
  "attributes": {
      "min_mireds": 111,
      "max_mireds": 666,
      "effect_list": [
          "effect_colorloop",
          "effect_pulse",
          "effect_stop"
      ],
      "supported_color_modes": [
          "color_temp",
          "hs"
      ],
      "friendly_name": "Very long name for a Lamp",
      "supported_features": 55
  },
  "last_changed": "2021-12-18T03:18:47.806553+00:00",
  "last_updated": "2021-12-18T03:18:47.806553+00:00",
  "context": {
      "id": "b61e227ca589192a4bc6dd461de30b99",
      "parent_id": null,
      "user_id": null
  }
}`

export { lightOne, lightTwo, lightThree };