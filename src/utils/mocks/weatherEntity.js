const weatherDataOne = `{
  "entity_id": "weather.home",
  "state": "sunny",
  "attributes": {
      "temperature": 36.9,
      "humidity": 51,
      "pressure": 30.22,
      "wind_bearing": 352.9,
      "wind_speed": 8,
      "attribution": "Weather forecast from met.no, delivered by the Norwegian Meteorological Institute.",
      "forecast": [
          {
              "condition": "sunny",
              "precipitation": 0.0,
              "temperature": 37.8,
              "templow": 23.5,
              "datetime": "2021-12-20T17:00:00+00:00",
              "wind_bearing": 144.5,
              "wind_speed": 16.2
          },
          {
              "condition": "cloudy",
              "precipitation": 0.0,
              "temperature": 43.3,
              "templow": 25.9,
              "datetime": "2021-12-21T17:00:00+00:00",
              "wind_bearing": 54.6,
              "wind_speed": 9.4
          },
          {
              "condition": "sunny",
              "precipitation": 0.0,
              "temperature": 47.8,
              "templow": 31.5,
              "datetime": "2021-12-22T17:00:00+00:00",
              "wind_bearing": 304.2,
              "wind_speed": 20.9
          },
          {
              "condition": "partlycloudy",
              "precipitation": 0.0,
              "temperature": 39.6,
              "templow": 25.5,
              "datetime": "2021-12-23T17:00:00+00:00",
              "wind_bearing": 262.5,
              "wind_speed": 14.8
          },
          {
              "condition": "rainy",
              "precipitation": 0.02,
              "temperature": 46.8,
              "templow": 30.7,
              "datetime": "2021-12-24T17:00:00+00:00",
              "wind_bearing": 140.3,
              "wind_speed": 9.7
          }
      ],
      "friendly_name": "Home"
  },
  "last_changed": "2021-12-19T19:00:15.843321+00:00",
  "last_updated": "2021-12-19T23:45:15.839780+00:00",
  "context": {
      "id": "d21273288008e520e237504c55e59a75",
      "parent_id": null,
      "user_id": null
  }
}`;

const weatherDataTwo = `{
    "entity_id": "weather.home",
    "state": "pouring",
    "attributes": {
        "temperature": 59,
        "humidity": 51,
        "pressure": 30.22,
        "wind_bearing": 352.9,
        "wind_speed": 8,
        "attribution": "Weather forecast from met.no, delivered by the Norwegian Meteorological Institute.",
        "forecast": [
            {
                "condition": "sunny",
                "precipitation": 0.0,
                "temperature": 37.8,
                "templow": 23.5,
                "datetime": "2021-12-20T17:00:00+00:00",
                "wind_bearing": 144.5,
                "wind_speed": 16.2
            },
            {
                "condition": "cloudy",
                "precipitation": 0.0,
                "temperature": 43.3,
                "templow": 25.9,
                "datetime": "2021-12-21T17:00:00+00:00",
                "wind_bearing": 54.6,
                "wind_speed": 9.4
            },
            {
                "condition": "sunny",
                "precipitation": 0.0,
                "temperature": 47.8,
                "templow": 31.5,
                "datetime": "2021-12-22T17:00:00+00:00",
                "wind_bearing": 304.2,
                "wind_speed": 20.9
            },
            {
                "condition": "partlycloudy",
                "precipitation": 0.0,
                "temperature": 39.6,
                "templow": 25.5,
                "datetime": "2021-12-23T17:00:00+00:00",
                "wind_bearing": 262.5,
                "wind_speed": 14.8
            },
            {
                "condition": "rainy",
                "precipitation": 0.02,
                "temperature": 46.8,
                "templow": 30.7,
                "datetime": "2021-12-24T17:00:00+00:00",
                "wind_bearing": 140.3,
                "wind_speed": 9.7
            }
        ],
        "friendly_name": "Home"
    },
    "last_changed": "2021-12-19T19:00:15.843321+00:00",
    "last_updated": "2021-12-19T23:45:15.839780+00:00",
    "context": {
        "id": "d21273288008e520e237504c55e59a75",
        "parent_id": null,
        "user_id": null
    }
  }`;

export { weatherDataOne, weatherDataTwo };