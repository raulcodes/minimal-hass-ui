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
      "friendly_name": "Floor Lamp",
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

export { lightOne, lightTwo };